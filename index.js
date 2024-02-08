const express= require('express')
const socketIo= require('socket.io')

const app= express()

app.use(express.static(__dirname+'/public'))

const server= app.listen(4000)
const io= socketIo(server)

io.on('connection', socket => {
    console.log(`${socket.id} is connected`)

    socket.on('chatMessageFromClient', chatMessageFromClient => {
        io.emit('newChatMessageFromServer', {text: chatMessageFromClient.text})
    })
})