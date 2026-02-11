import * as net from "node:net";

const PORT = 8080;

/*Run with: node test-connection.js host*/
if (process.argv[2] === 'host') {
    const server = net.createServer((socket) => {
        console.log('Client successfully connected!');
        socket.on('data', (data) => console.log(`Server listening on port ${PORT}`));
    });
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
/*Run with : node test-connection.js client <host-ip>*/
else {
    const hostIp = process.argv[3];
    const client = net.createConnection({port:PORT, host:hostIp}, () => {
        console.log('Connected to host successfully!');
        client.write('Hello, server!');
    })
}
