// This is acting as server

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer)

// how to listen for events, gives us socket object

io.on("connect", (socket) => {
    console.log("socket", socket)
})

app.use(express.static('public'));

httpServer.listen(5000);

