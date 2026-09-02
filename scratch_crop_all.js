import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputImagePath = 'C:/Users/Rohit Arora/.gemini/antigravity-ide/brain/dbb4b12c-caad-4927-9602-e5a71bda4cb3/.user_uploaded/media_1788246846760.png';
const outputDir = 'e:/Company Projects/rhs/src/assets/images/clinical';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function findCirclesAndCrop() {
  const { data, info } = await sharp(inputImagePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Let's define the estimated centers of the 12 circles in (x, y, radius)
  // Top-Left (Laryngeal Pathologies - 4 circles):
  // Circle 1: Left vocal cord polyp
  // Circle 2: 3 months Follow-up
  // Circle 3: Squamous cell carcinoma (T1a)
  // Circle 4: 6 months Follow-up

  // Top-Right (One Shot Stapedotomy - 2 circles):
  // Circle 1: CO2 laser
  // Circle 2: Diode laser

  // Bottom-Left (Respiratory Papillomatosis - 3 circles):
  // Circle 1: Recurrent respiratory papillomatosis
  // Circle 2: After removal
  // Circle 3: 11 months Follow-up

  // Bottom-Right (Vocal Cord & Thyroid Surgeries - 3 circles):
  // Circle 1: Bilateral paralysis
  // Circle 2: Posterior cordotomy
  // Circle 3: 6 months Follow-up

  // Let's measure exact bounds by testing crops or scanning pixel color variance
  // Let's print out pixel values or extract regions around expected coordinates.
  
  // Top row Y centers ~ y=200, radius ~ 40
  // Bottom row Y centers ~ y=430, radius ~ 40
  
  const crops = [
    // Top-Left: Laryngeal Pathologies (4 images)
    { name: 'laryngeal_1', x: 104, y: 195, size: 78 },
    { name: 'laryngeal_2', x: 200, y: 195, size: 78 },
    { name: 'laryngeal_3', x: 297, y: 195, size: 78 },
    { name: 'laryngeal_4', x: 393, y: 195, size: 78 },

    // Top-Right: One Shot Stapedotomy (2 images)
    { name: 'stapedotomy_1', x: 630, y: 195, size: 78 },
    { name: 'stapedotomy_2', x: 792, y: 195, size: 78 },

    // Bottom-Left: Respiratory Papillomatosis (3 images)
    { name: 'papillomatosis_1', x: 152, y: 432, size: 78 },
    { name: 'papillomatosis_2', x: 272, y: 432, size: 78 },
    { name: 'papillomatosis_3', x: 392, y: 432, size: 78 },

    // Bottom-Right: Vocal Cord & Thyroid Surgeries (3 images)
    { name: 'thyroid_1', x: 558, y: 432, size: 78 },
    { name: 'thyroid_2', x: 698, y: 432, size: 78 },
    { name: 'thyroid_3', x: 838, y: 432, size: 78 },
  ];

  for (const c of crops) {
    const left = Math.round(c.x - c.size / 2);
    const top = Math.round(c.y - c.size / 2);
    const width = Math.round(c.size);
    const height = Math.round(c.size);

    await sharp(inputImagePath)
      .extract({ left, top, width, height })
      .toFile(path.join(outputDir, `${c.name}.png`));
    console.log(`Saved ${c.name}.png at left:${left}, top:${top}`);
  }
}

findCirclesAndCrop().catch(console.error);
