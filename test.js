var http = require('http');

var testString = "<font size=\"3\" color=\"red\">hatfat?</font>";

var server = http.createServer(function(req, res) {
	console.log("req: " + req);
	console.log("res: " + res);

	res.writeHead(200);
	res.end("<html>DiabloData\n" + testString + "</html>");
});

server.listen(8080);
