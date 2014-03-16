// ezek meg itt a különbözõ URL véghez tartozó logikák
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