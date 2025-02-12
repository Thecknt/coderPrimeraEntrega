const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/productos.json');

router.get('/', (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
    res.render('home', { products });
});

// Aseguro que se envíen los productos iniciales
router.get('/realtimeproducts', (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
    res.render('realTimeProducts', { products });
});

module.exports = router;