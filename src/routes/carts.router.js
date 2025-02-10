const express = require('express');
const fs = require('fs');
const path = require('path');

const cartsFile = path.join(__dirname, '../data/carrito.json');
const productsFile = path.join(__dirname, '../data/productos.json');

module.exports = (io) => {
    const router = express.Router();
    
    // Aca persisto los datos
    const readCarts = () => JSON.parse(fs.readFileSync(cartsFile, 'utf-8')) || [];
    const writeCarts = (carts) => fs.writeFileSync(cartsFile, JSON.stringify(carts, null, 2));
    const readProducts = () => JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

    // POST: Crear carrito
    router.post('/', (req, res) => {
        const carts = readCarts();
        const newCart = {
            id: carts.length > 0 ? carts[carts.length - 1].id + 1 : 1,
            products: []
        };
        carts.push(newCart);
        writeCarts(carts);
        res.status(201).json(newCart);
    });

    // GET: Obtener el carrito por id
    router.get('/:cid', (req, res) => {
        const carts = readCarts();
        const cart = carts.find(c => c.id === parseInt(req.params.cid));
        cart ? res.json(cart) : res.status(404).json({ error: 'Carrito no encontrado' });
    });

    // POST: Agrego un producto al carrito
    router.post('/:cid/product/:pid', (req, res) => {
        const cid = parseInt(req.params.cid);
        const pid = parseInt(req.params.pid);
        const carts = readCarts();
        const products = readProducts();

        const cartIndex = carts.findIndex(c => c.id === cid);
        if (cartIndex === -1) return res.status(404).json({ error: 'Carrito no encontrado' });

        const product = products.find(p => p.id === pid);
        if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

        if (product.stock < 1) return res.status(400).json({ error: 'Stock insuficiente' });

        // Actualizo el stock
        product.stock--;
        fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
        io.emit('update-products', products);

        // Actualizo el carrito
        const cartProduct = carts[cartIndex].products.find(p => p.product === pid);
        if (cartProduct) {
            cartProduct.quantity++;
        } else {
            carts[cartIndex].products.push({ product: pid, quantity: 1 });
        }
        writeCarts(carts);
        
        res.redirect('/');
    });

    return router;
};