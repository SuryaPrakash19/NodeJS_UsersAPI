import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt"; // will be \ for windows in reality.

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, __filename);
//basename()
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));

//extname()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));
// {
//     root: '',
//     dir: './dir1/dir2',
//     base: 'test.txt',
//     ext: '.txt',
//     name: 'test'
//   }

const filePath2 = path.join(__dirname, "dir1", "dir2", "text.txt"); // join uses the correct file seperator for each OS. for MAC and linux, it is / while for windows it is \
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "text.txt");

console.log(filePath2);
console.log(filePath3);
