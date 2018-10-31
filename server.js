const http = require('http');

http.createServer((request, response) => { // Here is the one function Node Http will use to handle all request
  console.log("Request", request.url); // every request is wrapped in this request obj. You'll find all the information about the request here
  
  //Simple routes logic
  if(request.url === '/'){
    response.end('<h1>Home Page</h1>');
  }else if(request.url === '/contact'){
    response.end("<h1>Contact Page</h1>");
  }else{
    response.end("<h1>404</h1>");
  }
  
}).listen(8080); // Actives this server, listening on port 8080
