let http = require("http");
const querystring = require("querystring");

http.createServer(function(req, res) {
    if (req.method == "POST") {
        let postData = "";
        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
        });
        req.addListener("end", function() {
            let jsonObj = querystring.parse(postData);
            res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
            res.write(JSON.stringify(jsonObj));
            res.end();
        });
    } else {
        res.writeHead(404, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
        res.write("ONLY POST METHOD IS ALLOWED");
        res.end();
    }
}).listen(3000, function () {
    console.log("The server is running...");
});
