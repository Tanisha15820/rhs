import sharp from 'sharp';
import fs from 'fs';

const inputImagePath = 'C:/Users/Rohit Arora/.gemini/antigravity-ide/brain/dbb4b12c-caad-4927-9602-e5a71bda4cb3/.user_uploaded/media_1788246846760.png';

async function getMetadata() {
  const metadata = await sharp(inputImagePath).metadata();
  console.log('Image Metadata:', metadata);
}

getMetadata().catch(console.error);
