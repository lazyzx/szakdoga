// server fogadja a HTTP request-et és elõállít egy üres response-t
var server = require("./server/server");
// router mondja meg, hogy a URL végétõl függõen mit csinálunk
var router = require("./server/router");
// URL végtõl függõen valamit beleír a server általá elõállított üres response-ba
var requestHandler = require("./server/requesthandler");

// asszociatív tömb (nem számmal indexelt, hanem valami objektummal)
// elemei: ["URL vége" = függvény] URL vég kezelõ logikák
var handlers = {
    "/" : requestHandler.start,
    "/start" : requestHandler.start,
    "/upload" : requestHandler.upload
}

// elindítjuk a servert
// ez meg itt TIPIKUS Dependency Injection (egy túl hype-olt elmélet/poblamozás technika)
server.start(router.route, handlers);