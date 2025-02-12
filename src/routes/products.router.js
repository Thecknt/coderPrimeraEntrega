const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/productos.json');

module.exports = (io) => {
    // persisto los datos
    const readProducts = () => JSON.parse(fs.readFileSync(productsFile, 'utf-8'));
    const writeProducts = (products) => fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
    
    // Generar ID único
    const generateId = (products) => products.length > 0 ? products[products.length - 1].id + 1 : 1;

    // POST: Agregar producto
    router.post('/', (req, res) => {
        const { title, description, code, price, stock, category } = req.body;
        if (!title || !description || !code || !price || !stock || !category) {
            return res.status(400).json({ error: 'Campos obligatorios faltantes' });
        }

        const products = readProducts();
        const newProduct = {
            id: generateId(products),
            title,
            description,
            code,
            price: parseFloat(price),
            status: true,
            stock: parseInt(stock),
            category,
            thumbnails: []
        };

        products.push(newProduct);
        writeProducts(products);
        io.emit('update-products', products); // Emitir actualización
        res.redirect('/');
    });

    // PUT: Actualizar producto
    router.put('/:pid', (req, res) => {
        const products = readProducts();
        const index = products.findIndex(p => p.id === parseInt(req.params.pid));
        
        if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });
        
        const updatedProduct = { ...products[index], ...req.body };
        products[index] = updatedProduct;
        writeProducts(products);
        io.emit('update-products', products);
        res.json(updatedProduct);
    });

    // DELETE: Eliminar producto
    router.delete('/:pid', (req, res) => {
        let products = readProducts();
        products = products.filter(p => p.id !== parseInt(req.params.pid));
        writeProducts(products);
        io.emit('update-products', products);
        res.status(204).end();
    });

    return router;
};