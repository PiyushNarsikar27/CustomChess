export function connectToWSServer():WebSocket {
    return new WebSocket('ws://localhost:8080/ws')
  }