const socket= io('http://localhost:4000')

// Make socket connection
socket.on('connect', () => {
    console.log('connected')
})

// Get connection message
socket.on('connectionMsgFromServer', data => {
    console.log(data.msg)
})

// Get NameSpaces from socket
socket.on('namespaceFromServer', data => {
    const namespacesContainer = document.querySelector('.namespaces')
    // Cleaning Namespaces DOM
    namespacesContainer.innerHTML= ""
    // Inserting Namespaces into DOM
    data.nameSpaces.forEach(item => {
        namespacesContainer.innerHTML += `<div class="namespace" ns=${item.endpoint}><img src=${item.image}></div>`
    })

    // Inserting Rooms into DOM
    Array.from(document.querySelectorAll('.namespace')).forEach(element => {
        element.addEventListener('click', event => {
            nsJoin(element, data)
        })
        nsJoin(document.querySelectorAll('.namespace')[0], data)
    })




})