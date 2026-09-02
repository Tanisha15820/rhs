import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputImagePath = 'C:/Users/Rohit Arora/.gemini/antigravity-ide/brain/dbb4b12c-caad-4927-9602-e5a71bda4cb3/.user_uploaded/media_1788246846760.png';
const outputDir = 'e:/Company Projects/rhs/src/assets/images/clinical';

async function testCenters() {
  const circles = [
    // Top-Left (Laryngeal Pathologies)
    { name: 'laryngeal_1', x: 153, y: 205, size: 84 },
    { name: 'laryngeal_2', x: 259, y: 205, size: 84 },
    { name: 'laryngeal_3', x: 365, y: 205, size: 84 },
    { name: 'laryngeal_4', x: 471, y: 205, size: 84 },

    // Top-Right (One Shot Stapedotomy)
    { name: 'stapedotomy_1', x: 650, y: 205, size: 84 },
    { name: 'stapedotomy_2', x: 818, y: 205, size: 84 },

    // Bottom-Left (Respiratory Papillomatosis)
    { name: 'papillomatosis_1', x: 153, y: 442, size: 84 },
    { name: 'papillomatosis_2', x: 277, y: 442, size: 84 },
    { name: 'papillomatosis_3', x: 401, y: 442, size: 84 },

    // Bottom-Right (Vocal Cord & Thyroid Surgeries)
    { name: 'thyroid_1', x: 558, y: 442, size: 84 },
    { name: 'thyroid_2', x: 698, y: 442, size: 84 },
    { name: 'thyroid_3', x: 838, y: 442, size: 84 },
  ];

  for (const c of circles) {
    const left = Math.round(c.x - c.size / 2);
    const top = Math.round(c.y - c.size / 2);

    await sharp(inputImagePath)
      .extract({ left, top, width: c.size, height: c.size })
      .toFile(path.join(outputDir, `${c.name}.png`));
    console.log(`Saved ${c.name}.png center (${c.x}, ${c.y})`);
  }
}

testCenters().catch(console.error);
