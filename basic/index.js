// server fogadja a HTTP request-et és előállít egy üres response-t
var server = require("./server/server");
// router mondja meg, hogy a URL végétől függően mit csinálunk
var router = require("./server/router");
// URL végtől függően valamit beleír a server általá előállított üres response-ba
var requestHandler = require("./server/requesthandler");

// asszociatív tömb (nem számmal indexelt, hanem valami objektummal)
// elemei: ["URL vége" = függvény] URL vég kezelő logikák
var handlers = {
    "/" : requestHandler.start,
    "/start" : requestHandler.start,
    "/upload" : requestHandler.upload,
    "/socket" : requestHandler.socket
}

// elindítjuk a servert
// ez meg itt TIPIKUS Dependency Injection (egy túl hype-olt elmélet/poblamozás technika)
server.start(router.route, handlers);