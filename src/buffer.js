// import { Buffer } from "buffer";

// let str = '深入浅出node.js';
// let buf = new Buffer(str, 'utf-8');
// console.log(buf);

// let lengthBuf = new Buffer(100);
// console.log(lengthBuf.length);
// console.log(lengthBuf[30])

// import fs from 'fs'

// const rs = fs.createReadStream('src/static/in.txt', {highWaterMark: 11});
// rs.setEncoding('utf-8');
// let data = '';
// rs.on("data", (chunk) => {
//     data += chunk;
// });
// rs.on("end", () => {
//     console.log(data);
// });

const fs = require('fs');
const iconv = require('iconv-lite')

const res = fs.createReadStream('src/static/in.txt', {highWaterMark: 11});

let chunks = [];
let size = 0;

res.on('data', (chunk) => {
    chunks.push(chunk);
    size += chunk.length;
})

res.on('end', () => {
    let buf = Buffer.concat(chunks, size);
    let str = iconv.decode(buf, 'utf8');
    console.log(str);
});
