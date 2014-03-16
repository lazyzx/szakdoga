var fájlZüsztem = require("fs");
var eztNemIgyKellMegoldani = "";

// ezek meg itt a különböző URL véghez tartozó logikák
function start() {
    console.log("Request handler \"start\" was called.")
    return "You requested \"start\"."
}

function upload() {
    console.log("Request handler \"upload\" was called.");
    return "You requested \"upload\"."
}

function socket() {
    console.log("Request handler \"socket\" was called.");
    return fájlZüsztem.readFileSync("./html/socket.html");
}

exports.start = start;
exports.upload = upload;
exports.socket = socket;