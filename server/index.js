const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/routes');
const errorController = require('./controllers/error');
const Product = require('./models/product');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.use(errorController.get404);

app.listen(4200, () => {
    Product.getProductsFromFile();
    console.log('listening on port 4200...')
});