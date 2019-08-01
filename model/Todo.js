function Todo(title, description, deadline) {
    this.verifyCreationArgs(title, description, deadline);

    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.id = Math.floor(Math.random() * 10 + 1);
    this.creationDate = new Date();
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
    if(!isValidTitle(title)) throw new Error('Invalid Title');

    if(!isValidDescription(description)) throw new Error('Invalid Description');

    if(!isValidDeadline(deadline)) throw new Error('Invalid Deadline');
}

module.exports = Todo;