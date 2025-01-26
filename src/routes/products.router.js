const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/productos.json');

// Funcion para leer los productos
const readProducts = () => {
    const data = fs.readFileSync(productsFile, 'utf-8');
    return JSON.parse(data);
};

// Funcion para escribir los products
const writeProducts = (products) => {
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
};

// Generar un ID secuencial
const generateId = (products) => {
    if (products.length === 0) return 1; // Si no hay productos, arranco con 1
    const lastProduct = products[products.length - 1];
    return lastProduct.id + 1; // Incremento el ultimo ID en 1
};

// Traigo todos los productos
router.get('/', (req, res) => {
    const products = readProducts();
    const limit = req.query.limit;
    if (limit) {
        return res.json(products.slice(0, limit));
    }
    res.json(products);
});

// Traigo el producto por id
router.get('/:pid', (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.pid)); // Convierto a número
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
});

// Agrego un nuevo producto
router.post('/', (req, res) => {
    const { title, description, code, price, stock, category, thumbnails } = req.body;
    if (!title || !description || !code || !price || !stock || !category) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios, excepto thumbnails' });
    }

    const products = readProducts();
    const newProduct = {
        id: generateId(products), // con esto genero un ID secuencial
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category,
        thumbnails: thumbnails || []
    };

    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
});

// Actualizo el producto por id
router.put('/:pid', (req, res) => {
    const products = readProducts();
    const index = products.findIndex(p => p.id === parseInt(req.params.pid)); // Convierto a número
    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const updatedProduct = { ...products[index], ...req.body, id: products[index].id };
    products[index] = updatedProduct;
    writeProducts(products);
    res.json(updatedProduct);
});

// Eliminar un producto por el id
router.delete('/:pid', (req, res) => {
    const products = readProducts();
    const filteredProducts = products.filter(p => p.id !== parseInt(req.params.pid)); // Convierto a número
    if (filteredProducts.length === products.length) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    writeProducts(filteredProducts);
    res.status(204).end();
});

module.exports = router;