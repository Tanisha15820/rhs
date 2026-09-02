import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputImagePath = 'C:/Users/Rohit Arora/.gemini/antigravity-ide/brain/dbb4b12c-caad-4927-9602-e5a71bda4cb3/.user_uploaded/media_1788246846760.png';
const outputDir = 'e:/Company Projects/rhs/src/assets/images/clinical';

async function preciseAlign() {
  const image = sharp(inputImagePath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const initialGuesses = [
    // Laryngeal Pathologies
    { name: 'laryngeal_1', approxX: 153, approxY: 205 },
    { name: 'laryngeal_2', approxX: 259, approxY: 205 },
    { name: 'laryngeal_3', approxX: 365, approxY: 205 },
    { name: 'laryngeal_4', approxX: 471, approxY: 205 },

    // One Shot Stapedotomy
    { name: 'stapedotomy_1', approxX: 650, approxY: 205 },
    { name: 'stapedotomy_2', approxX: 818, approxY: 205 },

    // Respiratory Papillomatosis
    { name: 'papillomatosis_1', approxX: 153, approxY: 442 },
    { name: 'papillomatosis_2', approxX: 277, approxY: 442 },
    { name: 'papillomatosis_3', approxX: 401, approxY: 442 },

    // Vocal Cord & Thyroid Surgeries
    { name: 'thyroid_1', approxX: 558, approxY: 442 },
    { name: 'thyroid_2', approxX: 698, approxY: 442 },
    { name: 'thyroid_3', approxX: 838, approxY: 442 },
  ];

  for (const item of initialGuesses) {
    // We search in a 70x70 window around approxX, approxY
    let sumX = 0, sumY = 0, count = 0;
    let minX = width, maxX = 0, minY = height, maxY = 0;

    const win = 45;
    for (let y = item.approxY - win; y <= item.approxY + win; y++) {
      for (let x = item.approxX - win; x <= item.approxX + win; x++) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
          const idx = (y * width + x) * channels;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // Check if pixel is part of the clinical image (not white card background)
          // The background inside the card is white/light blue (> 230, > 230, > 230)
          const isBackground = (r > 225 && g > 225 && b > 225);
          if (!isBackground) {
            sumX += x;
            sumY += y;
            count++;
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
    }

    if (count > 0) {
      const centerX = Math.round(sumX / count);
      const centerY = Math.round(sumY / count);
      const diamX = maxX - minX + 1;
      const diamY = maxY - minY + 1;
      const diameter = Math.max(diamX, diamY);

      console.log(`${item.name}: center=(${centerX}, ${centerY}), diameter=${diameter} (X:${minX}..${maxX}, Y:${minY}..${maxY})`);

      // Extract perfect square centered at (centerX, centerY)
      const radius = Math.round(diameter / 2);
      const cropSize = diameter + 2; // small 1px border margin
      const left = Math.max(0, Math.round(centerX - cropSize / 2));
      const top = Math.max(0, Math.round(centerY - cropSize / 2));

      // Extract sub-image and create circular composite mask if desired, or crisp cropped image
      await sharp(inputImagePath)
        .extract({ left, top, width: cropSize, height: cropSize })
        .toFile(path.join(outputDir, `${item.name}.png`));
    } else {
      console.log(`Failed to find non-background pixels for ${item.name}`);
    }
  }
}

preciseAlign().catch(console.error);
