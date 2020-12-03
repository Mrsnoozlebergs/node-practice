import fs from 'fs';

const reader = fs.createReadStream('static/in.txt');
const writer = fs.createWriteStream('static/out.txt');
reader.on('data', (chunk) => {
    writer.write(chunk)
})
reader.on('end', () => writer.end());
