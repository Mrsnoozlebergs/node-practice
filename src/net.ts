import { Socket } from 'dgram';
import net from 'net';
import { log } from 'console';

const server = net.createServer((socket) => {
    socket.on('data',(data) => {
        if(data.toString() === 'close') {
            server.close();
        } else {
            socket.write('你好');
        }
    });

    socket.on('end',() => {
        log('连接断开');
    });

    socket.write("欢迎光临《深入浅出node.js》示例\n");
});

server.on('close', () => {
    log('server close');
});

server.listen(8124, () => {
    log('server has run at http://127.0.0.1:8124');
});




