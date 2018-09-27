import app from "./app";
import * as WebSocket from 'ws';
import * as http from 'http';
import { EventService } from "./event-service";
import { ClientSettings } from "./client-settings";

//initialize a simple http server
const server = http.createServer(app);
const PORT = "3000";
const eventService = new EventService();

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
const settings = ClientSettings.getInstance(); 

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

eventService.getMessages().subscribe(message => {
    wss.clients.forEach(client => {
        client.send(JSON.stringify({ user: settings.userId, message: message }));
    })
});


//start our server
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT} :)`);
});