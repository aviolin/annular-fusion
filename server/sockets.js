/**
 * Websocket logic to begin/end all client timers.
 */

const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const port = process.env.PORT || 4001
const index = require('./routes/index')

const app = express()
app.use(index)

const server = http.createServer(app)

const io = socketIo(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin: "*",
    methods: ["GET"]
  }
})

io.on('connection', (socket) => {
  console.log("New client connected")
  
  io.emit("Hello", socket.client.conn.server.clientsCount)

  socket.on("Start", (res) => {
    io.emit("Start", res)
    console.log("Client says start!")
  })

  socket.on("Stop", () => {
    io.emit("Stop", "now")
    console.log("Client says stop!")
  })

  socket.on('disconnect', () => {
    io.emit("Hello", socket.client.conn.server.clientsCount)

    console.log("Client disconnected")
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
