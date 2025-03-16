const express = require("express");
const path = require("path");
const http = require("http");
const app = express()
const port = 3000
const server = http.createServer(app)
const socketio = require("socket.io");
const io = socketio(server)

// set static folder here
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Run when client connect here...
io.on('connection', socket => {
   

    socket.emit('message', "welcome to ChatCord!")
    
    // Broadcast when a user connects 
   socket.broadcast.emit('message', "A user has joined the chat");

   //Run when cliend disconnects
   socket.on('disconnect',() => {
    io.emit("message", "A user has left the chat");
   })

})


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})