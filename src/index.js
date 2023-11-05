// This is acting as server

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer)
import loadMap from './mapLoader.js';

async function main() {
    
    const map2D = await loadMap();


    io.on("connect", (socket) => {
        console.log("socket", socket)

        socket.emit('map', map2D)
    })

    app.use(express.static('public'));

    httpServer.listen(5000);
}

main();



// how to listen for events, gives us socket object



