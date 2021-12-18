const fs = require('fs');

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=> {
    // console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url == '/'){
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else if(req.url == '/hello'){
        res.end('<h1> Thi s is Pratik </h1> <p> Hey this is me!!! </p>')
    } 
    else if(req.url == '/about'){
        res.end('<h1> This is About </h1> <p> Hey this is inside about!!! </p>')
    }
    else{
        // res.pratik();
        res.statusCode = 400;
        res.end('<h1>This page is not found</h1>')
    }
}) 

server.listen(port, ()=>{
    console.log('Server is listening on port' , port);
});