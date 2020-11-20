var todoItems = require("./todo-items");

function update(io, socket) {
    io.emit('update', todoItems);
}

function getAll(io, socket) {
    socket.emit('update', todoItems);
}

function createItem(itemTitle, io, socket) {
    let payload = {
        id: todoItems.length + 1,
        title: itemTitle,
        complete: false
    }
    todoItems.push(payload);
    update(io, socket);
}

function deleteItem(itemId, io, socket) {
    let tempTodoItems = [...todoItems]
    let elementsIndex = tempTodoItems.findIndex(el => el.id === itemId);
    tempTodoItems.splice(elementsIndex, 1);
    todoItems = tempTodoItems;
    update(io, socket)
}

function toggleComplete(itemId, io, socket) {
    let tempTodoItems = [...todoItems]
    let elementsIndex = tempTodoItems.findIndex(el => el.id === itemId);
    tempTodoItems[elementsIndex].complete = !tempTodoItems[elementsIndex].complete;
    
    todoItems = tempTodoItems;

    update(io, socket)
}



module.exports = {
    update,
    getAll,
    createItem,
    deleteItem,
    toggleComplete
}