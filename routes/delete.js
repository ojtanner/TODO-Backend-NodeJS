const deleteRouter = require('express').Router();

deleteRouter.delete('/', (req, resp) => {
    resp.send('Your deleted todo');
});

module.exports = deleteRouter;