function route(handle, pathname, response, request) {
    console.log("About to route a request for %s", pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("No request handler for %s", pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 not found");
        response.end();
    }
}

exports.route = route;