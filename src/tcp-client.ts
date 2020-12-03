import net from 'net';
import { log } from 'console';

const client = net.connect({port: 8124}, () => {
    log('client connected');
    client.write('world! \r\n');

    client.on('data', (data) => {
        log(data.toString());
        client.write('close');
        client.end();
    });

    client.on('end', () => {
        log('client disconnetced');
    });

});