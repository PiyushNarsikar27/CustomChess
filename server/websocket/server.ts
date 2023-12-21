import { randomUUID } from "crypto";
import WebSocket  from "ws";

const server = new WebSocket.Server({port:8080})
console.log("listening on http://localhost:8080/")
const clients = new Map<WebSocket, string>()
server.on("connection",(socket)=>{
    const clientId = randomUUID()
    console.log(`New client connected: client id: ${clientId}`)
    clients.set(socket, clientId)
    socket.on("message", (message)=>{
        [...clients.keys()].forEach(
            (client)=>{
                clients.get(client)!=clientId && client.send(message.toString())
            }
        )
    })
    socket.on("close", ()=>{
        clients.delete(socket)
    })
})
