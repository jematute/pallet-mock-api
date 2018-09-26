import app from "./app";
import * as WebSocket from 'ws';
import * as http from 'http';

//initialize a simple http server
const server = http.createServer(app);
const PORT = "3000";

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });
    
    //send immediatly a feedback to the incoming connection    
    ws.send(JSON.stringify({ message: "Hello", type: 0 }));
});



//start our server
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT} :)`);
});