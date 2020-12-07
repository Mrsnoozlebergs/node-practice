import http from 'http';
import { log } from 'console';

const options = {
    hostname: '127.0.0.1',
    port: 1337,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    log('STATUS: ' + res.statusCode);
    log('HEADERs: ' + JSON.stringify(res.headers));
    res.setEncoding('utf-8');
    res.on('data', (chunk) => {
        log(chunk);
    });
});

req.end();