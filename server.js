const http = require('http');

const  server = http.createServer((req, res) => {
    res.writeHead(200, {'connect-Type' : 'text/html'});
    res.end('<h1>Hello Node!!!</h1>\n');
});


server.listen(10000, () =>{
    console.log('Server is running in http://localhost:10000');
});
