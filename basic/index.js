// server fogadja a HTTP request-et �s el��ll�t egy �res response-t
var server = require("./server/server");
// router mondja meg, hogy a URL v�g�t�l f�gg�en mit csin�lunk
var router = require("./server/router");
// URL v�gt�l f�gg�en valamit bele�r a server �ltal� el��ll�tott �res response-ba
var requestHandler = require("./server/requesthandler");

// asszociat�v t�mb (nem sz�mmal indexelt, hanem valami objektummal)
// elemei: ["URL v�ge" = f�ggv�ny] URL v�g kezel� logik�k
var handlers = {
    "/" : requestHandler.start,
    "/start" : requestHandler.start,
    "/upload" : requestHandler.upload
}

// elind�tjuk a servert
// ez meg itt TIPIKUS Dependency Injection (egy t�l hype-olt elm�let/poblamoz�s technika)
server.start(router.route, handlers);