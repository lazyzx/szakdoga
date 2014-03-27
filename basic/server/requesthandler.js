var fájlZüsztem = require("fs");
var eztNemIgyKellMegoldani = "";
var exec = require("child_process").exec;

// ezek meg itt a különböző URL véghez tartozó logikák
//function start() {
//    console.log("Request handler \"start\" was called.")
//    return "You requested \"start\"."
//}

function start(response) {
    console.log("Request handler 'start' was called.");
    exec("dir",
        { timeout: 10000, maxBuffer: 20000*1024 },
        function (error, stdout, stderr) {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(stdout);
            response.end();
        });
}

//function upload() {
//    console.log("Request handler \"upload\" was called.");
//    return "You requested \"upload\"."
//}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

//function socket() {
//    console.log("Request handler \"socket\" was called.");
//    return fájlZüsztem.readFileSync("./html/socket.html");
//}

function socket(response) {
    console.log("Request handler \"socket\" was called.");
    response.write(fájlZüsztem.readFileSync("./html/socket.html"));
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.socket = socket;