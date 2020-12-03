import net from 'net';
import { log } from 'console';

const sever = net.createServer((socket) => {
    // 新的连接
    socket.on('data', (data) => {
        socket.write('你好');
    });

    socket.on('end', () => {
        log('连接断开');
    });

    socket.write("欢迎光临灀洲的node服务测试示例: \n");
});

sever.listen(8001, () => {
    log('server bound');
});

