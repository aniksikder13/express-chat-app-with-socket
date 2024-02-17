class Room {
    constructor(id, namespaceId, title, privateRoom= false){
        this.id= id
        this.namespaceId= namespaceId
        this.title= title
        this.privateRoom= privateRoom
        this.history= []
    }

    addHistory(msg){
        this.history.push(msg)
    }

    clearHistory(){
        this.history=[]
    }
}

module.exports= Room