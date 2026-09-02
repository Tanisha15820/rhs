import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const clinicalDir = 'e:/Company Projects/rhs/src/assets/images/clinical';
const files = fs.readdirSync(clinicalDir).filter(f => f.endsWith('.png'));

async function applyCircularMask() {
  for (const file of files) {
    const filePath = path.join(clinicalDir, file);
    const image = sharp(filePath);
    const { width, height } = await image.metadata();

    const radius = Math.min(width, height) / 2;
    const circleSvg = Buffer.from(
      `<svg width="${width}" height="${height}">
        <circle cx="${width / 2}" cy="${height / 2}" r="${radius - 1}" fill="#fff" />
      </svg>`
    );

    const maskedBuffer = await image
      .composite([{ input: circleSvg, blend: 'dest-in' }])
      .toBuffer();

    await sharp(maskedBuffer).toFile(filePath + '.tmp');
    fs.renameSync(filePath + '.tmp', filePath);
    console.log(`Applied circular mask to ${file}`);
  }
}

applyCircularMask().catch(console.error);
