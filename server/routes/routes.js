const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);

router.post('/new-product', productController.postNewProduct);

router.put('/update-product/:productId', productController.putUpdateProduct);

router.delete('/delete-product/:productId', productController.deleteProduct);

module.exports = router;