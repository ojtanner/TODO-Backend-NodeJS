function TodoCollection() {
    this.todos = [];
}

TodoCollection.prototype.add = function(todo) {
    this.todos.push(todo);
}

TodoCollection.prototype.getAll = function() {
    return this.todos;
}

module.exports = TodoCollection;