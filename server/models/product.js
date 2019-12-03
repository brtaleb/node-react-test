const fs = require('fs');
const path = require('path');

const dataFile = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'Products.json'
);

let productsData = [];

module.exports = class Product {
    constructor(_id, name, type, price, rating, available){
        this._id = _id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.rating = rating;
        this.available = available
    }

    save(callback) {
        let exists = false;
        console.log('save1',productsData);

        productsData.forEach(product => {
            if(product._id === this._id){
                exists = true;
            }
        })

        if(!exists){
            productsData.push(this);
            callback(true)
        }
        else {
            callback(false)
        }
        console.log('save2',productsData);
    }

    static findById(id, callback){
        const tmp = productsData.filter(product => product._id === id);
        if(tmp.length > 0) callback(tmp[0])
        else callback(null)
    }

    static update(id, newProduct){
        productsData.forEach(product => {
            if(product._id === id){
                product = newProduct;
            }
        })
    }

    static delete(id, callback){
        this.findById(id, toDelete => {
            if(toDelete){
                productsData = productsData.filter(product => product._id !== id);
                callback(true);
            }
            else{
                callback(false);
            }
        })
    }

    static fetchProducts(callback){
        callback(productsData);
    }

    static getProductsFromFile(){
        productsData = [...JSON.parse(fs.readFileSync(dataFile))]
    }
}