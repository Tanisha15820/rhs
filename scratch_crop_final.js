import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputImagePath = 'C:/Users/Rohit Arora/.gemini/antigravity-ide/brain/dbb4b12c-caad-4927-9602-e5a71bda4cb3/.user_uploaded/media_1788246846760.png';
const outputDir = 'e:/Company Projects/rhs/src/assets/images/clinical';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function cropFinal() {
  const circles = [
    // Top-Left Card: Laryngeal Pathologies (Y = 205, Diameter = 84)
    { name: 'laryngeal_1', cx: 153, cy: 205, size: 84 },
    { name: 'laryngeal_2', cx: 259, cy: 205, size: 84 },
    { name: 'laryngeal_3', cx: 365, cy: 205, size: 84 },
    { name: 'laryngeal_4', cx: 471, cy: 205, size: 84 },

    // Top-Right Card: One Shot Stapedotomy (Y = 205, Diameter = 84)
    { name: 'stapedotomy_1', cx: 650, cy: 205, size: 84 },
    { name: 'stapedotomy_2', cx: 818, cy: 205, size: 84 },

    // Bottom-Left Card: Respiratory Papillomatosis (Y = 442, Diameter = 84)
    { name: 'papillomatosis_1', cx: 153, cy: 442, size: 84 },
    { name: 'papillomatosis_2', cx: 277, cy: 442, size: 84 },
    { name: 'papillomatosis_3', cx: 401, cy: 442, size: 84 },

    // Bottom-Right Card: Vocal Cord & Thyroid Surgeries (Y = 442, Diameter = 84)
    { name: 'thyroid_1', cx: 558, cy: 442, size: 84 },
    { name: 'thyroid_2', cx: 698, cy: 442, size: 84 },
    { name: 'thyroid_3', cx: 838, cy: 442, size: 84 },
  ];

  for (const c of circles) {
    const left = Math.round(c.cx - c.size / 2);
    const top = Math.round(c.cy - c.size / 2);

    await sharp(inputImagePath)
      .extract({ left, top, width: c.size, height: c.size })
      .toFile(path.join(outputDir, `${c.name}.png`));
    
    console.log(`Exported ${c.name}.png (left:${left}, top:${top}, size:${c.size})`);
  }
}

cropFinal().catch(console.error);
