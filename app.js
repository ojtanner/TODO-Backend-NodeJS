const app = require('express')();

app.use('/', require('./routes/routes'));

app.listen(3000, () => {
    console.log('Serving the tea');
});