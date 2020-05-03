const http = require("http");
let fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

let handleRequest = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.readFile("./index.html", null, function (error, data) {
    if (error) {
      response.writeHead(404);
      respone.write("Whoops! File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
};

http.createServer(handleRequest).listen(8000);
