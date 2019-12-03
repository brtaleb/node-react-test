const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/routes');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.use(errorController.get404);

app.listen(4200, () => console.log("listening on port 4200..."));