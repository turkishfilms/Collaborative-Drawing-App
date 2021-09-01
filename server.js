var express = require('express')
const serveStatic = require('serve-static')
var app = express()
const p = 3011

var socket = require('socket.io')
app.use(serveStatic('public'))

var server = app.listen(p, () => console.log(`Its Ya Boy... Skinny Penis :${p} yes?`)).
io = socket(server)

let clients = []

io.sockets.on('connection', (socket) => {
    console.log(`Ayo ${socket.id}`)
    clients.push(socket)

    socket.on('clientDrawing', (data) => {
        socket.broadcast.emit('broadcastDrawing', data)
        // console.log(`Forreal`)
    })
})