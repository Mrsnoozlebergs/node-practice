import http from 'http';
import { log } from 'console';

http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Hello world!\n');
}).listen(1337,'127.0.0.1');

log('the server is running at the http://127.0.0.1:1337/');

