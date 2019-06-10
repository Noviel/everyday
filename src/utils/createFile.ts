import * as fs from 'fs';
import * as path from 'path';

export async function createFile(filename: string, dir: string, data: any) {
  return new Promise((resolve, reject) => {
    const fullpath = path.resolve(dir, filename);
    if (fs.existsSync(fullpath)) {
      reject(`File ${filename} already exists in directory ${dir}.`);
    }

    fs.writeFile(fullpath, data, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
