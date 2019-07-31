const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', require('./routes/routes'));

app.listen(3000, () => {
    console.log('Serving the tea');
});