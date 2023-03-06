const http = require("http");
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

const index = fs.readFileSync('./index.html');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end(index)
});


server.listen(port, hostname, ()=>{
    console.log(`server listern on http://${hostname}:${port}/`);
});