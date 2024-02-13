const express= require('express')
const socketIo= require('socket.io')
const nameSpaces= require('./data/nameSpaces')

const app= express()

app.use(express.static(__dirname+'/public'))

const server= app.listen(4000)
const io= socketIo(server)

io.on('connection', socket => {
    socket.emit('connectionMsgFromServer', {msg: `${socket.id} is connected successfully`})

    // Sending NameSpaces to Client
    socket.emit('namespaceFromServer', {nameSpaces: nameSpaces})
})