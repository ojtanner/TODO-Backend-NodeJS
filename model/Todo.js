function Todo(title, description, deadline) {
    title
    description,
    deadline,
    this.id = Math.random() * 10 + 1,
    this.creationDate = new Date()
}

function isValidTitle(title) {
    if(!title) return false;

    if(typeof title !== 'string') return false;

    if(title.length === 0) return false;

    return true;
}

function isValidDescription(description) {
    if(!description) return false;

    if(typeof description !== 'string') return false;

    return true;
}

function isValidDeadline(deadline) {
    if(!deadline) return false;

    if(isNaN(Date.parse(deadline))) return false;

    return true;
}

Todo.prototype.verifyCreationArgs = function(title, description, deadline) {
    if(!isValidTitle(title)) return false;

    if(!isValidDescription(description)) return false;

    if(!isValidDeadline(deadline)) return false;

    this.title = title;
    this.description = description;
    this.deadline = deadline;
}

module.exports = Todo;