const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // Set response content type

  try {
    if (req.method === "GET") {
      res.statusCode = 200; // OK
      res.end("<h1>GET Method: Welcome!</h1>");
    } else if (req.method === "POST") {
      res.statusCode = 201; // Created
      res.end("<h1>POST Method: Data received!</h1>");
    } else if (req.method === "PUT") {
      res.statusCode = 200; // OK
      res.end("<h1>PUT Method: Data updated!</h1>");
    } else if (req.method === "PATCH") {
      res.statusCode = 200; // OK
      res.end("<h1>PATCH Method: Partial data updated!</h1>");
    } else if (req.method === "DELETE") {
      res.statusCode = 501; // Not Implemented
      res.end("<h1>501 Not Implemented: DELETE method is not supported!</h1>");
    } else {
      res.statusCode = 405; // Method Not Allowed
      res.end("<h1>405 Method Not Allowed: Unsupported method!</h1>");
    }
  } catch (error) {
    // Handle server errors
    res.statusCode = 500; // Internal Server Error
    res.end(`<h1>500 Internal Server Error: ${error.message}</h1>`);
  }
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
