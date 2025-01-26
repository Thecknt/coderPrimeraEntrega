const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const cartsFile = path.join(__dirname, '../data/carrito.json');
const productsFile = path.join(__dirname, '../data/productos.json');

// funcion para leer el contenido del carrito
const readCarts = () => {
    const data = fs.readFileSync(cartsFile, 'utf-8');
    return JSON.parse(data);
};

// Esta funcion escribe el contenido del carrito
const writeCarts = (carts) => {
    fs.writeFileSync(cartsFile, JSON.stringify(carts, null, 2));
};

// Esta funcion sirve para leer los productos que hay 
const readProducts = () => {
    const data = fs.readFileSync(productsFile, 'utf-8');
    return JSON.parse(data);
};

// Listo los productos del carrito con precio total
router.get('/:cid', (req, res) => {
    const carts = readCarts();
    const cart = carts.find(c => c.id === parseInt(req.params.cid)); // Convierto a número
    if (!cart) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    // Calculo el precio total
    const products = readProducts();
    let total = 0;
    const productsWithDetails = cart.products.map(item => {
        const product = products.find(p => p.id === item.product);
        if (product) {
            total += product.price * item.quantity;
            return {
                ...item,
                title: product.title,
                price: product.price,
                subtotal: product.price * item.quantity
            };
        }
        return item;
    });

    res.json({
        products: productsWithDetails,
        total
    });
});

// Agrego un producto al carrito (si no existe el carrito lo creo)
router.post('/:cid/product/:pid', (req, res) => {
    const carts = readCarts();
    const cartId = parseInt(req.params.cid); // de String lo Convierto en un número
    const productId = parseInt(req.params.pid); // de String lo Convierto en un número

    // Busco el carrito
    let cart = carts.find(c => c.id === cartId);

    // Si el carrito no existe, lo creo
    if (!cart) {
        cart = {
            id: cartId,
            products: []
        };
        carts.push(cart);
    }

    // Busco el producto en el carrito
    const productIndex = cart.products.findIndex(p => p.product === productId);

    // Si el producto ya está en el carrito, aumento/incremento la cantidad
    if (productIndex !== -1) {
        cart.products[productIndex].quantity += 1;
    } else {
        // Si el producto no está en el carrito, lo agrego
        cart.products.push({ product: productId, quantity: 1 });
    }

    // Guardo los cambios
    writeCarts(carts);
    res.status(201).json(cart);
});

module.exports = router;