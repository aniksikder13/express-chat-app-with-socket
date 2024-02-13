const socket= io('http://localhost:4000')

// Make connection
socket.on('connect', () => {
    console.log('connected')
})

// Get connection message
socket.on('connectionMsgFromServer', data => {
    console.log(data.msg)
})

// Get NameSpaces from socket
socket.on('namespaceFromServer', data => {
    console.log(data.nameSpaces)

    // Inserting Name Spaces into DOM
    const namespacesContainer = document.querySelector('.namespaces');
    data.nameSpaces.forEach(item => {
        const nameSpaceList = document.createElement('div');
        const nameSpaceImage = document.createElement('img');

        nameSpaceImage.src = item.image;
        nameSpaceList.classList.add('namespace');
        nameSpaceList.setAttribute('ns', item.name);

        nameSpaceList.appendChild(nameSpaceImage);
        namespacesContainer.appendChild(nameSpaceList);
    })
})