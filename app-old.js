const http = require("http");

http
  .createServer((req, res) => {
    //res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    //res.writeHead(200, { "Content-Type": "application/csv" });
    //res.writeHead(200, { "Content-Type": "application/json" });
    res.write("hola mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080", 8080);
