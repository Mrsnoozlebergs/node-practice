import http from 'http';
import { log } from 'console';

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('<h1>Hello World\n</h1>');
}).listen(1337,'127.0.0.1');

log('Sever running at http://127.0.0.1:1337');