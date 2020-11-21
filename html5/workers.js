let a = 1;
let b = 1;
(function() {
    postMessage([a, b]);
    b += a;
    a = b - a;
})()