import dgram from 'dgram';
import { log } from 'console';

const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
    log("server got:" + msg + "   from   " + rinfo.address + ":" + rinfo.port);
});

server.on("listening", () => {
    const address = server.address();
    log("server listening at" + address.address + ":" + address.port);
})

server.bind(41234);