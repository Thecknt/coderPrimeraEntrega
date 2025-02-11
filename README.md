Aquí está el README actualizado con las nuevas funcionalidades:

---

# 🚀 E-commerce en Tiempo Real con WebSockets

Proyecto de carrito de compras con **Node.js**, **Express**, **Handlebars** y **WebSockets** que permite gestión en tiempo real de productos y carritos.

![image](https://github.com/user-attachments/assets/1f290346-cd35-4bfe-9879-5f3db4a6b2ef)

![image](https://github.com/user-attachments/assets/4fad921e-3258-4132-a99c-bfd181f5cfc3)

---

## 🌟 Novedades en esta Versión

✅ **Vistas Dinámicas con Handlebars**  
✅ **Actualización en Tiempo Real via WebSockets**  
✅ **Barra de Navegación Interactiva**  
✅ **Gestión de Stock Automática**  
✅ **Imágenes Relacionadas por Producto**

---

## 📦 Instalación Mejorada

### 1. Clona el repositorio
```bash
git clone https://github.com/Thecknt/coderPrimeraEntrega.git
```

### 2. Instala las nuevas dependencias
```bash
npm install
```

### 3. Archivos base (se crean automáticamente)
```bash
npm start
```

---

## 🚀 Funcionalidades Principales

### Vistas Web
| Ruta | Descripción | Tecnología |
|------|-------------|------------|
| `/` | Listado de productos con stock | Handlebars + CSS Grid |
| `/realtimeproducts` | Panel de administración en tiempo real | WebSockets |
| `/carts/1` | Detalle del carrito principal | Handlebars |

### API Endpoints
| Método | Endpoint | Función |
|--------|----------|---------|
| `POST` | `/api/products` | Crear producto con imagen automática |
| `PUT` | `/api/products/:pid` | Actualizar producto |
| `DELETE` | `/api/products/:pid` | Eliminar producto |
| `POST` | `/api/carts/:cid/product/:pid` | Agregar al carrito |

---

## 🛠️ Estructura Mejorada

```
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
```

---

## 🔥 Características Destacadas

### 1. WebSockets en Acción
```javascript
// Conexión en tiempo real
io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.emit('update-products', productos);
});
```

### 2. Generación Inteligente de Imágenes
```javascript
`https://picsum.photos/seed/${productTitle}/300/200`
```

### 3. Barra de Navegación Intuitiva
```html
<nav class="navbar">
    <a href="/">🏠 Home</a>
    <a href="/realtimeproducts">⚡ Real-Time</a>
    <a href="/carts/1">🛒 Carrito <span class="cart-counter">0</span></a>
</nav>
```

---

## 🖥️ Levantar el Servidor

```bash
npm index.js
```

Accede a las rutas:
- **Home:** `http://localhost:8080`
- **Admin Real-Time:** `http://localhost:8080/realtimeproducts`
- **Carrito:** `http://localhost:8080/carts/1`

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:**  
  ![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=flat&logo=handlebars.js&logoColor=white)
  ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat&logo=font-awesome&logoColor=white)

- **Backend:**  
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
  ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white)

- **Persistencia:**  
  ![JSON](https://img.shields.io/badge/JSON-Data_Storage-000000?style=flat&logo=json&logoColor=white)

---

## 📌 Próximas Mejoras

- [ ] Sistema de usuarios con autenticación
- [ ] Sistema de categorías de productos
- [ ] Búsqueda y filtrado avanzado

---

**[⬆ Volver al inicio](#-e-commerce-en-tiempo-real-con-websockets)**  
*¡Explora el código y contribuye!* 🚀
