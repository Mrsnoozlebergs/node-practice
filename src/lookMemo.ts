// import heapdump from 'heapdump';
import http from 'http';
import { log } from 'console';

const leakArray:string[] = [];
const leak = () => {
    leakArray.push('leak'+Math.random());
};

http.createServer((req: any, res: { writeHead: (arg0: number, arg1: { 'content-Type': string; }) => void; end: (arg0: string) => void; }) => {
    leak();
    res.writeHead(200,{ 'content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337);

log('Server running at http://127.0.0.1:1337/');