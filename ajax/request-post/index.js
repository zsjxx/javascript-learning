var http = require("http");
const querystring = require("querystring");

http.createServer(function(req, res) {
    if (req.method == "POST") {
        var postData = "";
        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("recevied post data chunk:" + postDataChunk + ".");
        });
        req.addListener("end", function() {
            var jsonObj = querystring.parse(postData);
            res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
            res.write(JSON.stringify(jsonObj));
            res.end();
        });
    } else {
        res.writeHead(404, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
        res.write("ONLY POST METHOD IS ALLOWED");
        res.end();
    }
}).listen(3000, function() {
    console.log("server is running...");
});