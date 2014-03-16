// node.js modul a HTTP request-ek kezel�s�re
var http = require("http");
// node.js modul az URL baszogtat�sra
var url = require("url");

function start(route, handlers) {
    var requestNumber = 0;
    
    function onRequest(request, response) {
        // lev�gjuk az URL v�g�t
        var pathName = url.parse(request.url).pathname;
        // l�trehozzukn az �res HTTP response-t
        response.writeHeader(200, {"Content-Type" : "text/plain"});
        // r�b�zzuk a router-re a d�nt�st, hogy az URL v�gt�l f�gg�en h�vjon valami
        // requestHandler f�ggv�ny, ami a handlers asszociat�v t�mbben van
        response.write(route(handlers, pathName));
        // k�sz, v�ge, cs�, cs�
        response.end();    
    }
    
    // megcsin�ljuk a HTTP servert �s f�leltetj�k a 8888-as porton
    http.createServer(onRequest).listen(8888);
    // b�f�g�nk valamit a konzolra
    console.log("Server has started.");
}

exports.start = start;
