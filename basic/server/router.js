//function route(handlers, pathName) {
//    // megnézi, hogy az URL véggel van-e valami requestHandler függvény tárolva,
//    // ha van, akkor meghívja azt a már elkészített üres HTTP response-al
//    if (typeof handlers[pathName] === 'function' ) {
//        // itt hívja meg
//        return handlers[pathName]();
//    } else {
//        // ha meg nem, akkor üres marad a HTTP response csak a konzolra böfögünk valamit
//        console.log("No request handler found for \"" + pathName + "\"");
//        return "404 Not found \"" + pathName +"\". Oooops!";
//    }
//}

function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;