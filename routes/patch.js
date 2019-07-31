const patchRouter = require('express').Router();

patchRouter.patch('/', (req, resp) => {
    resp.send('Your patched todo');
});

module.exports = patchRouter;