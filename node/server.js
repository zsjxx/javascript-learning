var http = require("http");
var url = require("url");

function start(route, handle) {
    http.createServer(function(request, response) {
        // var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for %s received", pathname);
        route(handle, pathname, response, request);
        
        // request.setEncoding("utf-8");
        // request.addListener("data", function(postDataChunk) {
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk: %s.", postDataChunk);
        // });
        // request.addListener("end", function() {
        //    route(handle, pathname, response, postData); 
        // });
    }).listen(8888);
    console.log("Server has started.");
}

exports.start = start;