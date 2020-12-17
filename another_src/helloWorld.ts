import http from "http";
import { log } from "console";

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world");
})

server.listen(port, host, () => {
    log(`服务器运行在 http://${host}:${port}/`)
})