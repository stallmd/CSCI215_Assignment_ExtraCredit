
var buttonNode = document.getElementById('buttonNode');

buttonNode.onclick= (function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World!');
    }).listen(3000);

