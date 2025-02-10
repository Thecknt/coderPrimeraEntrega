🚀 E-commerce en Tiempo Real con WebSockets
Proyecto de carrito de compras con Node.js, Express, Handlebars y WebSockets que permite gestión en tiempo real de productos y carritos.

🌟 Novedades en esta Versión
✅ Vistas Dinámicas con Handlebars
✅ Actualización en Tiempo Real via WebSockets
✅ Barra de Navegación Interactiva
✅ Gestión de Stock Automática
✅ Imágenes Relacionadas por Producto

📦 Instalación Mejorada
1. Clona el repositorio
bash
Copy
git clone https://github.com/Thecknt/coderPrimeraEntrega.git

2. Instala las nuevas dependencias
bash
Copy
npm install

3. Archivos base (se crean automáticamente)
bash
Copy
node index.js

🚀 Funcionalidades Principales
Vistas Web
Ruta	Descripción	Tecnología
/	Listado de productos con stock	Handlebars + CSS Grid
/realtimeproducts	Panel de administración en tiempo real	WebSockets
/carts/1	Detalle del carrito principal	Handlebars
API Endpoints
Método	Endpoint	Función
POST	/api/products	Crear producto con imagen automática
PUT	/api/products/:pid	Actualizar producto
DELETE	/api/products/:pid	Eliminar producto
POST	/api/carts/:cid/product/:pid	Agregar al carrito

🛠️ Estructura Mejorada

/proyecto
├── src/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.handlebars
│   │   ├── home.handlebars
│   │   ├── realTimeProducts.handlebars
│   │   └── cart.handlebars
│   ├── routes/
│   │   ├── products.router.js
│   │   ├── carts.router.js
│   │   └── views.router.js
│   ├── data/
│   │   ├── productos.json
│   │   └── carrito.json
│   └── app.js
└── package.json

🔥 Características Destacadas
1. WebSockets en Acción
javascript
Copy
// Conexión en tiempo real
io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.emit('update-products', productos);

2. Generación Inteligente de Imágenes
javascript
Copy
`https://picsum.photos/seed/${productTitle}/300/200`
3. Barra de Navegación Intuitiva
html
Copy
<nav class="navbar">
    <a href="/">🏠 Home</a>
    <a href="/realtimeproducts">⚡ Real-Time</a>
    <a href="/carts/1">🛒 Carrito <span class="cart-counter">0</span></a>
</nav>
Run HTML
🖥️ Levantar el Servidor
bash
Copy
npm start
Accede a las rutas:

Home: http://localhost:8080

Admin Real-Time: http://localhost:8080/realtimeproducts

Carrito: http://localhost:8080/carts/1

🛠️ Tecnologías Utilizadas
Frontend:
Handlebars
Font Awesome

Backend:
Node.js
Socket.io

Persistencia:
JSON

📌 Próximas Mejoras
Sistema de usuarios con autenticación

Integración con pasarela de pagos

Sistema de categorías de productos

Búsqueda y filtrado avanzado

⬆ Volver al inicio
¡Explora el código y contribuye! 🚀
