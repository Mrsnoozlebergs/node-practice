import dgram from 'dgram';
import { log } from 'console';
import { Buffer } from 'buffer';

const msg = new Buffer("深入浅出node.js");
const client = dgram.createSocket("udp4");

client.send(msg, 0, msg.length, 41234, 'localhost', () => {
    client.close();
});