const express = require('express');
const { engine } = require('express-handlebars');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// Configurar Handlebars con helpers
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    helpers: {
        eq: (a, b) => a === b // Comparar
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para datos del formulario
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/products', require('./routes/products.router')(io));
app.use('/api/carts', require('./routes/carts.router')(io));
app.use('/', require('./routes/views.router'));

// WebSockets
io.on('connection', (socket) => {
    console.log('Cliente conectado');
});

module.exports = httpServer;