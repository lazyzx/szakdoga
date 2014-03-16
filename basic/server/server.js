// node.js modul a HTTP request-ek kezelésére
var http = require("http");
// node.js modul az URL baszogtatásra
var url = require("url");

function start(route, handlers) {
    var requestNumber = 0;
    
    function onRequest(request, response) {
        // levágjuk az URL végét
        var pathName = url.parse(request.url).pathname;
        // létrehozzukn az üres HTTP response-t
        response.writeHeader(200, {"Content-Type" : "text/plain"});
        // rábízzuk a router-re a döntést, hogy az URL végtől függően hívjon valami
        // requestHandler függvény, ami a handlers asszociatív tömbben van
        response.write(route(handlers, pathName));
        // kész, vége, cső, csá
        response.end();    
    }
    
    // megcsináljuk a HTTP servert és füleltetjük a 8888-as porton
    http.createServer(onRequest).listen(8888);
    // böfögünk valamit a konzolra
    console.log("Server has started.");
}

exports.start = start;
