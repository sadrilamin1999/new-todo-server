const jsonServer = require("json-server");
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const router = jsonServer.router("db.json");
const port = process.env.port || 5000;

server.use(middleware);
server.use(router);
server.listen(port);
