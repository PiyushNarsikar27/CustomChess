import { randomUUID } from "crypto";
import WebSocket  from "ws";
import DBConnection from "../db/dbconnection";

const startWebSocketServer = async ()=>{
    const server = new WebSocket.Server({port:8080})
console.log("listening on http://localhost:8080/")
const dbConnection = new DBConnection();
const db = await dbConnection.getDB();
const clients = new Map<WebSocket, string>()
server.on("connection", async (socket)=>{
    const clientId = randomUUID()
    console.log(`New client connected: client id: ${clientId}`)
    clients.set(socket, clientId)
    socket.on("message", async (message)=>{
        const moveInfo = JSON.parse(message.toString())
            const gamesCollection = db.collection<GameSchema>("games");
            const gameId = moveInfo.gameId;
            const filter = {gameId: gameId};
            const insertMove = {
            $push:{
                moves:{initialPosition:moveInfo.initialPosition, finalPosition:moveInfo.finalPosition}
            }
        };
        await gamesCollection.updateOne(filter, insertMove);
        [...clients.keys()].forEach(
            (client)=>{
                clients.get(client)!=clientId && client.send(JSON.stringify(moveInfo))
            }
        )
    })
    socket.on("close", ()=>{
        clients.delete(socket)
    })
})
}

startWebSocketServer();