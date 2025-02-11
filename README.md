---

# 🛒 Proyecto: Carrito de Compras con Node.js y Express

Este proyecto es un servidor basado en **Node.js** y **Express** que gestiona productos y carritos de compras. Los datos se persisten en archivos JSON (`productos.json` y `carrito.json`), y se pueden probar todos los endpoints usando **Postman**.

---

## 📦 Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local.

### 1. Clona el repositorio
```bash
git clone https://github.com/Thecknt/coderPrimeraEntrega.git
```

### 2. Instala las dependencias
El proyecto usa **Express** como framework principal. Instala las dependencias con:
```bash
npm install
```

### 3. Crea los archivos JSON
Asegúrate de tener los siguientes archivos en la carpeta `src/data`:
- `productos.json`: Para almacenar los productos.
- `carrito.json`: Para almacenar los carritos.

Si no existen, créalos con un array vacío:
```bash
echo "[]" > src/data/productos.json
echo "[]" > src/data/carrito.json
```

---

## 🚀 Levantar el Servidor

Para iniciar el servidor, ejecuta el siguiente comando:
```bash
npm start o bien node index.js
```

El servidor estará disponible en:
```
http://localhost:8080
```

---

## 📚 Endpoints

### Productos (`/api/products`)

| Método | Endpoint                | Descripción                              |
|--------|-------------------------|------------------------------------------|
| GET    | `/api/products`         | Lista todos los productos.               |
| GET    | `/api/products/:pid`    | Obtiene un producto por su ID.           |
| POST   | `/api/products`         | Agrega un nuevo producto.                |
| PUT    | `/api/products/:pid`    | Actualiza un producto por su ID.         |
| DELETE | `/api/products/:pid`    | Elimina un producto por su ID.           |

### Carritos (`/api/carts`)

| Método | Endpoint                        | Descripción                              |
|--------|---------------------------------|------------------------------------------|
| GET    | `/api/carts/:cid`               | Lista los productos de un carrito.       |
| POST   | `/api/carts/:cid/product/:pid`  | Agrega un producto a un carrito.         |

---

## 🛠️ Probar los Endpoints con Postman

A continuación, te mostramos cómo probar los endpoints usando **Postman**.

### 1. **Listar todos los productos**
- **Método**: `GET`
- **URL**: `http://localhost:8080/api/products`
- **Respuesta**:
  ```json
  [
    {
      "id": 1,
      "title": "Producto 1",
      "description": "Descripción del producto 1",
      "code": "P001",
      "price": 100,
      "status": true,
      "stock": 10,
      "category": "Categoría 1",
      "thumbnails": []
    }
  ]
  ```

---

### 2. **Agregar un nuevo producto**
- **Método**: `POST`
- **URL**: `http://localhost:8080/api/products`
- **Body** (raw, JSON):
  ```json
  {
    "title": "Producto 2",
    "description": "Descripción del producto 2",
    "code": "P002",
    "price": 200,
    "stock": 5,
    "category": "Categoría 2"
  }
  ```
- **Respuesta**:
  ```json
  {
    "id": 2,
    "title": "Producto 2",
    "description": "Descripción del producto 2",
    "code": "P002",
    "price": 200,
    "status": true,
    "stock": 5,
    "category": "Categoría 2",
    "thumbnails": []
  }
  ```

---

### 3. **Agregar un producto al carrito**
- **Método**: `POST`
- **URL**: `http://localhost:8080/api/carts/1/product/2`
- **Respuesta**:
  ```json
  {
    "id": 1,
    "products": [
      {
        "product": 2,
        "quantity": 1
      }
    ]
  }
  ```

---

### 4. **Listar productos de un carrito**
- **Método**: `GET`
- **URL**: `http://localhost:8080/api/carts/1`
- **Respuesta**:
  ```json
  [
    {
      "product": 2,
      "quantity": 1
    }
  ]
  ```

---

## 📂 Estructura del Proyecto

```
/proyecto
│
├── /src
│   ├── /routes
│   │   ├── products.router.js
│   │   └── carts.router.js
│   ├── /data
│   │   ├── productos.json
│   │   └── carrito.json
│   └── app.js
│
├── index.js
├── package.json
└── README.md
```

---

## 🛑 Detener el Servidor

Para detener el servidor, presiona `Ctrl + C` en la terminal donde se está ejecutando.

---

## 📝 Notas Adicionales

- **Persistencia**: Los datos se guardan en los archivos `productos.json` y `carrito.json`.

---

## 🚧 Próximos Pasos

- [ ] Agregar validaciones adicionales.
- [ ] Implementar autenticación de usuarios.
- [ ] Migrar a una base de datos como MongoDB o MySQL.

---

¡Esperao que este proyecto sea útil!😊

---

**[⬆ Volver al inicio](#-proyecto-carrito-de-compras-con-nodejs-y-express)**

---

### 📷 Capturas de Postman


1. **Listar productos**:
   ![image](https://github.com/user-attachments/assets/21d07d7a-dfe6-4385-a431-9291f4251d8b)

2. **Agregar producto**:
   ![image](https://github.com/user-attachments/assets/a81c8dee-128e-4307-8a70-7db3bb5960e2)

3. **Traer un producto por Id**:
   ![image](https://github.com/user-attachments/assets/ac45eddc-52b6-4d09-a31a-e0042281e8ef)

4. **Actualizar un producto por ID**:
   ![image](https://github.com/user-attachments/assets/2d92db30-b3ba-4f7d-99a3-b9ce91cb5005)

5. **Eliminar un producto por ID**:
   ![image](https://github.com/user-attachments/assets/45975c13-4304-4037-9d11-47b9bb9d78c3)


 **Carrito de Compras**:
   
6. **Agregar producto al carrito**:
   ![image](https://github.com/user-attachments/assets/cd034ca6-cfbb-4559-a85d-518c963cdc22)

7. **Listar productos del carrito**:
   ![image](https://github.com/user-attachments/assets/544bf710-76dc-499d-970a-d089112206c9)
   
---

**[⬆ Volver al inicio](#-proyecto-carrito-de-compras-con-nodejs-y-express)**

---

¡Gracias por visitar este proyecto! 🚀

