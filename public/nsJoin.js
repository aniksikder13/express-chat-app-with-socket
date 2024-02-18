function nsJoin(element, data){
    const roomsListContainer = document.querySelector('.room-list')
    const nsEndpoint= element.getAttribute('ns')
    const selectedNameSpace= data.nameSpaces.find(item => item.endpoint === nsEndpoint)
    roomsListContainer.innerHTML= ""
    selectedNameSpace.rooms.forEach(room => {
        roomsListContainer.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.title}</li>`
    })
}