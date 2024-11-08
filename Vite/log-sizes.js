import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let size = 1

const dirPath = path.resolve(__dirname, 'src'); // Adjust according to your source folder

function logFileSizes(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      logFileSizes(filePath); // Recursively log sizes in directories
    } else {
      size += stats.size / 1024
    //   console.log(`${filePath}: ${stats.size / 1024} KB`); // Convert to KB
    console.log('sizesizesizesize',size)
    }
  });
}

logFileSizes(dirPath);