// const http = require('http');
 
// const server = http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end('Hello World\n');
// });
 
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
 
 
 
 
 
// const http = require('http');
// const url = require('url');
 
// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
 
//     // Parse the URL including query string
//     const parsedUrl = url.parse(req.url, true);
//     const query = parsedUrl.query;
 
//     // Handle "/about" route
//     if (parsedUrl.pathname === "/about") {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello Yash\n');
//         return;
//     }
 
//     // Handle query like ?name=John
//     if (query.name) {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end(`Hello, ${query.name}!\n`);
//         return;
//     }
 
//     // Default response
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// });
 
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
 
 
 
 
 
// const http = require('http');
// const url = require('url');
 
// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
 
//     // Parse the URL including query string
//     const parsedUrl = url.parse(req.url, true);
 
 
 
 
//     const query = parsedUrl.query;
 
//     // Get user-agent from headers
//     const userAgent = req.headers['user-agent'];
 
//     // Route: /about
//     if (parsedUrl.pathname === "/about") {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello Yash\n');
//         return;
//     }
 
//     // Route: query param ?name=John
//     if (query.name) {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end(`Hello, ${query.name}! Your User-Agent is: ${userAgent}\n`);
//         return;
//     }
 
//     // Default route
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(`Hello World\nYour User-Agent is: ${userAgent}\n`);
// });
 
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
 
 
 
 
// const http = require('http');
// const url = require('url');
 
// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
 
//     const parsedUrl = url.parse(req.url, true);
//     const query = parsedUrl.query;
//     const userAgent = req.headers['user-agent'];
 
//     // Set response type
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
 
//     // Check for /about path
//     if (parsedUrl.pathname === "/about") {
//         res.end('Hello Yash\n');
//     }
//     // Check for ?name query
//     else if ((req.url === "/userAgent")) {
//         res.end(`Hello, ${query.name}!\nYour User-Agent is: ${userAgent}\n`);
//     }
//     // Default response
//     else {
//         res.write("Welcome to the homepage.");
//     }
// });
 
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
 
// -----------------------------------------





//  dictionary and array

// ----------JSON START------------------------
const http = require("http");
const url = require("url");
 
const server = http.createServer((req, res) => {
  console.log(req.headers["user-agent"]);
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST, PUT,DELETE,OPTIONS"
  )
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
 
  const studentData = [
    {
      message: "Hello World",
      name: "Ayush",
      // age: 20,
    },
    {
      message: "Hello World",
      name: "Sanchit",
      // age: 20,
    },
    {
      message: "Hello World",
      name: "Sanchit",
      // age: 20,
    },
  ];
 
  const staffData = [
    {
      subject: "Programming",
      name: "Ayush Bhange",
      age: 24,
    },
    {
      subject: "DBMS",
      name: "Yash Jogekar",
      age: 24,
    },
  ];
 
  if (path === "/studentdata") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(studentData));
  } else if (path === "/staffdata") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(staffData));
  } else {
  
    res.end(JSON.stringify({ error: "Invalid Endpoint" }));
  }
});
 
server.listen(3001, () => {
  console.log(" Server running at http://localhost:3001/");
});
 
 
//  ---------------------------JSON END-----------------------




//-------------------- html start------------------------------------
// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   console.log(req.headers);

//   // Set CORS headers
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;

//   const studentData = [
//     { message: "Hello World", name: "Ritika", age: 20 },
//     { message: "Hello World", name: "Kritika", age: 20 },
//     { message: "Hello World", name: "Ritu", age: 20 },
//   ];

//   const staffData = [
//     { subject: "Programming", name: "Ayush Bhange", age: 24 },
//     { subject: "DBMS", name: "Yash Jogekar", age: 24 },
//   ];

//   if (path === "/studentdata") {
//     res.writeHead(200, { "Content-Type": "text/xml" });

//     res.write("<!DOCTYPE html>");
//     res.write("<html>");
//     res.write("<head><title>Student Data</title></head>");
//     res.write("<body>");
//     res.write("<h1>Student Data</h1>");
//     res.write("<ul>");

//     studentData.forEach((student) => {
//       res.write(`<li>${student.name}: ${student.message}</li>`);
//     });

//     res.write("</ul>");
//     res.write("</body>");
//     res.write("</html>");
//     res.end();

//   } else if (path === "/staffdata") {
//     res.writeHead(200, { "Content-Type": "application/xml" });
//     res.end(JSON.stringify(staffData));
    
//   } else {
//     res.writeHead(404, { "Content-Type": "application/xml" });
//     res.end(JSON.stringify({ error: "Invalid Endpoint" }));
//   }
// });

// // server.listen(3000, () => {
// //   console.log("Server running at http://localhost:3000/");
// // });


// server.listen(3001, () => {
//   console.log("Server running at http://localhost:3001/");
// });

//-----------html end-------------------- 


// -------XML start---------------------------

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   console.log(req.headers);

//   // Set CORS headers
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;

//   const studentData = [
//     { message: "Hello World", name: "Ritika", age: 20 },
//     { message: "Hello World", name: "Kritika", age: 20 },
//     { message: "Hello World", name: "Ritu", age: 20 },
//   ];

//   const staffData = [
//     { subject: "Programming", name: "Ayush Bhange", age: 24 },
//     { subject: "DBMS", name: "Yash Jogekar", age: 24 },
//   ];

  
// if (path === "/studentdata") {
//   res.writeHead(200, { "Content-Type": "application/xml" });
//   res.write(`<students>`);
//   studentData.forEach((student) => {
//     res.write(`
//       <student>
//         <name>${student.name}</name>
//         <age>${student.age}</age>
//         <message>${student.message}</message>
//       </student>
//     `);
//   });
//   res.write(`</students>`);
//   res.end();
// }
//    else if (path === "/staffdata") {
//     res.writeHead(200, { "Content-Type": "application/xml" });
//     res.end(JSON.stringify(staffData));
    
//   } else {
//     res.writeHead(404, { "Content-Type": "application/xml" });
//     res.end(JSON.stringify({ error: "Invalid Endpoint" }));
//   }
// });

// // server.listen(3000, () => {
// //   console.log("Server running at http://localhost:3000/");
// // });


// server.listen(3001, () => {
//   console.log("Server running at http://localhost:3001/");
// });

// ------------XML END-------------------------------






