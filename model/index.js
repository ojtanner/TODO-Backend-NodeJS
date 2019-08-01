const TodoCollection = require('./database/TodoCollection');
const todos = new TodoCollection();
todos.todos = [
    {
      title: 'My Title',
      description: 'My Description',
      deadline: '12-31-1999',
      id: 3,
      creationDate: '2019-08-01T15:38:15.161Z'
    },
    {
      title: 'My Title',
      description: 'My Description',
      deadline: '12-31-1999',
      id: 6,
      creationDate: '2019-08-01T15:38:15.821Z'
    },
    {
      title: 'My Title',
      description: 'My Description',
      deadline: '12-31-1999',
      id: 6,
      creationDate: '2019-08-01T15:38:21.070Z'
    }
  ];

module.exports = todos;