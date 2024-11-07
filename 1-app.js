const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Server has been created ");
  res.end();
});

server.listen(1000);
