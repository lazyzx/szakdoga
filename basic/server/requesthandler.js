// ezek meg itt a k�l�nb�z� URL v�ghez tartoz� logik�k
function start() {
    console.log("Request handler \"start\" was called.")
    return "You requested \"start\"."
}

function upload() {
    console.log("Request handler \"upload\" was called.");
    return "You requested \"upload\"."
}

exports.start = start;
exports.upload = upload;