const Product = require('../models/product');

const getProducts = (req, res) => {
    Product.fetchProducts(productsData => {
        res.status(200).json({
            message: 'Products fetched successfully.',
            data: productsData,
            totalItems: productsData.length
        })
    })
}

const postNewProduct = (req, res) => {
    const newProduct = new Product(
        req.body._id,
        req.body.name,
        req.body.type,
        req.body.price,
        req.body.rating,
        req.body.available
    );

    newProduct.save(validated => {
        if(validated){
            res.status(201).json({
                message: 'Product created successfully.',
                data: newProduct
            })
        }
        else{
            res.status(422).json({
                message: 'Error: Product already exists.'
            })
        }
    });
}

const putUpdateProduct = (req, res) => {
    const productId = parseInt(req.params.productId);

    Product.findById(productId, productToUpdate => {
        if(productToUpdate){
            productToUpdate.name = req.body.name;
            productToUpdate.type = req.body.type;
            productToUpdate.price = req.body.price;
            productToUpdate.rating = req.body.rating;
            productToUpdate.available = req.body.available;

            Product.update(productId, productToUpdate);

            res.status(200).json({
                message: 'Message updated successfully.',
                data: productToUpdate
            })
        }
        else {
            res.status(200).json({
                message: 'Product not found.'
            })
        }
    })
}

const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.productId);
    Product.delete(productId, deleted => {
        if(deleted){
            res.status(200).json({
                message: 'Product Deleted successfully.'
            })
        }
        else{
            res.status(200).json({
                message: 'Product not found.'
            })
        }
    });
}

module.exports = {
    getProducts,
    postNewProduct,
    putUpdateProduct,
    deleteProduct
}