// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
import  {promises as fsPromises} from  'fs';
import clipboard from 'clipboardy';
// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    clipboard.writeSync(JSON.stringify(arr)); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile('./lista.txt');
