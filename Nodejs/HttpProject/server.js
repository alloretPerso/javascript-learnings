import getData from "./services/service1.js";
const http = require("http");
const url = require("url");

const server = http.createServer();

server.on("request", (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  console.log(parsedUrl);
  console.log(getData);
});

server.listen(8080);
