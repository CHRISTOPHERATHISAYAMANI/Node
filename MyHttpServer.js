var http = require('http');

var server =http.createServer( function (request,response)
{
    response.end("hello node server from my machine");
});

server.listen(6066,"192.168.20.186",function()
{
    console.log("user http://localhost:6066/example");
})