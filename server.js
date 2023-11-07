const http = require('http');
const fs = require('fs');

const path = require('path');

const port = 8080; // Puerto que deseas abrir

const server = http.createServer((req, res) => {
  // Ruta al archivo HTML que deseas servir
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('No se pudo encontrar el archivo solicitado.');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}/`);
});
