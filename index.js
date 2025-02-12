const server = require('./src/app');

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT} 🚀`);
});