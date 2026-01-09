const fs = require('fs');
const sharp = require('sharp');

const svgBuffer = fs.readFileSync('./public/favicon/favicon.svg');

// Generate different sizes
const sizes = [
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 192, name: 'web-app-manifest-192x192.png' },
  { size: 512, name: 'web-app-manifest-512x512.png' }
];

async function generateFavicons() {
  for (const { size, name } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(`./public/favicon/${name}`);
    console.log(`Generated ${name}`);
  }
  
  // Generate ICO file (32x32 for favicon.ico)
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFile('./public/favicon/favicon-32.png');
  console.log('Generated favicon-32.png (for .ico conversion)');
  
  console.log('\nAll favicons generated successfully!');
}

generateFavicons().catch(console.error);
