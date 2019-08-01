const errorObject = {
    id: -1
};
/**
 * TodoCollection API
 * Currently a mock of a DB
 */
function TodoCollection() {
    this.todos = [];
};

TodoCollection.prototype.add = function(todo) {
    this.todos.push(todo);
};

TodoCollection.prototype.getAll = function() {
    return this.todos;
};

TodoCollection.prototype.get = function(id) {
    const todoIndex = this.getIndexFromId(id);

    if(todoIndex === -1) return errorObject;

    return this.todos[todoIndex];
};

TodoCollection.prototype.remove = function(id) {
    const todoIndex = this.getIndexFromId(id);

    if(todoIndex === -1) return errorObject;

    const removedTodo = this.todos[todoIndex];
    const newTodos = this.todos.slice(0,todoIndex).concat(this.todos.slice(todoIndex + 1));
    this.todos = newTodos;
    return removedTodo;
};

TodoCollection.prototype.getIndexFromId = function(id) {
    const todoIndex = this.todos.reduce((res, el, index) => {
        if(el.id === id) res = index;
        return res;
    }, -1);

    return todoIndex;
};

TodoCollection.prototype.update = function(id, updatedTodoProperties) {
    const todoIndex = this.getIndexFromId(id);

    if(todoIndex === -1) return errorObject;

    const oldTodo = this.todos[todoIndex];
    const newTodo = { ...oldTodo, ...updatedTodoProperties };

    this.todos[todoIndex] = newTodo;

    return newTodo;
};

module.exports = TodoCollection;