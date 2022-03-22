
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;
const server =  http.createServer((req, res) => {

        console.log(req.url);
    // console.log(req.method); 
    // console.log(req.headers);
        const extname = path.extname(req.url);
        let contentType = 'text/html';
        let filePath = './index.html';
        if (req.url === '/') {
            filePath = '/index.html';
        } else if (extname === '.js') {
            contentType = 'text/javascript';
            filePath = '/script.js';
        } else if (extname === '.css') {
            contentType = 'text/css';

            filePath = '/style.css';
        } else if (extname === '.png') {

            filePath = '/image.png';

        } else if (extname === '.jpg') {


            filePath = '/image.jpg';

        } else if (extname === '.ico') {
            contentType = 'image/x-icon';

            filePath = '/favicon.ico';

        } else if (extname === '.gif') {


            filePath = '/image.gif';

        } else if (extname === '.svg') {

            filePath = '/image.svg';    
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>404 Not Found</h1>');
            return;
        }

        res.writeHead(200, {'Content-Type': contentType});
        const file = fs.createReadStream(__dirname + '/public'+ filePath, 'utf8');
        file.pipe(res);
});

server.listen(PORT , () => {
   
    console.log(`${new Date()}-Server is running on port ${PORT}`);
});