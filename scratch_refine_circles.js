import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputImagePath = 'C:/Users/Rohit Arora/.gemini/antigravity-ide/brain/dbb4b12c-caad-4927-9602-e5a71bda4cb3/.user_uploaded/media_1788246846760.png';
const outputDir = 'e:/Company Projects/rhs/src/assets/images/clinical';

async function autoRefine() {
  const image = sharp(inputImagePath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Function to check if a pixel is non-white (part of the circular endoscopic photo)
  // Background card is white (255, 255, 255) or light gray/blue (> 240)
  function isPhotoPixel(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return false;
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // If pixel is NOT white/light-gray background
    return !(r > 235 && g > 235 && b > 235);
  }

  // 12 Search regions near expected centers
  const searchRegions = [
    { name: 'laryngeal_1', approxX: 147, approxY: 196 },
    { name: 'laryngeal_2', approxX: 254, approxY: 196 },
    { name: 'laryngeal_3', approxX: 361, approxY: 196 },
    { name: 'laryngeal_4', approxX: 468, approxY: 196 },

    { name: 'stapedotomy_1', approxX: 660, approxY: 196 },
    { name: 'stapedotomy_2', approxX: 825, approxY: 196 },

    { name: 'papillomatosis_1', approxX: 152, approxY: 432 },
    { name: 'papillomatosis_2', approxX: 275, approxY: 432 },
    { name: 'papillomatosis_3', approxX: 398, approxY: 432 },

    { name: 'thyroid_1', approxX: 558, approxY: 432 },
    { name: 'thyroid_2', approxX: 698, approxY: 432 },
    { name: 'thyroid_3', approxX: 838, approxY: 432 },
  ];

  for (const r of searchRegions) {
    let minX = width, maxX = 0, minY = height, maxY = 0;
    const searchRadius = 60;

    for (let y = r.approxY - searchRadius; y <= r.approxY + searchRadius; y++) {
      for (let x = r.approxX - searchRadius; x <= r.approxX + searchRadius; x++) {
        if (isPhotoPixel(x, y)) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    // Make square crop
    const cropW = maxX - minX;
    const cropH = maxY - minY;
    const size = Math.max(cropW, cropH);
    const centerX = Math.round((minX + maxX) / 2);
    const centerY = Math.round((minY + maxY) / 2);
    
    // Add 1px padding
    const finalSize = size + 2;
    const left = Math.max(0, Math.round(centerX - finalSize / 2));
    const top = Math.max(0, Math.round(centerY - finalSize / 2));

    console.log(`Region ${r.name}: bounds [x: ${minX}..${maxX}, y: ${minY}..${maxY}] -> crop square left:${left}, top:${top}, size:${finalSize}`);

    await sharp(inputImagePath)
      .extract({ left, top, width: finalSize, height: finalSize })
      .toFile(path.join(outputDir, `${r.name}.png`));
  }
}

autoRefine().catch(console.error);
