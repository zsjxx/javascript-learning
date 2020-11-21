const http = require("http");
const port = 3000;
const querystring = require("querystring");
const url = require("url");

const server = http.createServer((req, res) => {
    var querySection = url.parse(req.url).query;
    console.log(querySection);
    if (querySection) {
        var jsonObj = querystring.parse(querySection);
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    for (const k in jsonObj) {
        res.write(`${k} : ${jsonObj[k]} \n`);
    }
    res.end();
});
server.listen(port, () => {
    console.log(`The server has been running on localhost:${port}`);
});