const fs = require('fs');
const path = require('path');

const dataFile = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'Products.json'
);

const getProductsFromFile = callback => {
  fs.readFile(dataFile, (err, fileContent) => {
    if(err) callback([]);
    else {
      callback(JSON.parse(fileContent))
    }
  });
};

module.exports = class Product {

}