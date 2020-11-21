function red() {
    console.log("red");
}

function yellow() {
    console.log("yellow");
}

function green() {
    console.log("green");
}

var light = function(callback, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, time);
    });
};

var start = function() {
        light(red, 3000)
       .then(() => {
           return light(yellow, 2000);
       })
       .then(() => {
           return light(green, 1000);
       })
       .then(() => {
           start();
       });
}
start();