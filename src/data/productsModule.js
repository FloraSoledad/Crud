const fs = require('fs');
const path = require('path');

const loadProducts = () => {
    const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products
}

const storeProducts = (products) => { /* recibe esa red de producto */
    fs.writeFileSync(path.join(__dirname, 'productsDataBase.json'),JSON.stringify(products, null, 3), 'utf-8');
} /* writeFileSync sirve para guardar */ /*  recibe el archivo que quiere guardar */ /* luego me dice que quiero usar  y usando el metodo stringify me lo pasa a strim  */


module.exports = {
    loadProducts,
    storeProducts
}

