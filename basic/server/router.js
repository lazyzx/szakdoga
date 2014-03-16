function route(handlers, pathName) {
    // megn�zi, hogy az URL v�ggel van-e valami requestHandler f�ggv�ny t�rolva,
    // ha van, akkor megh�vja azt a m�r elk�sz�tett �res HTTP response-al
    if (typeof handlers[pathName] === 'function' ) {
        // itt h�vja meg
        return handlers[pathName]();
    } else {
        // ha meg nem, akkor �res marad a HTTP response csak a konzolra b�f�g�nk valamit
        console.log("No request handler found for \"" + pathName + "\"");
        return "404 Not found \"" + pathName +"\". Oooops!"
    }
}

exports.route = route;