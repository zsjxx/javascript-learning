// function red() {
//     console.log("red");
// }

// function yellow() {
//     console.log("yellow");
// }

// function green() {
//     console.log("green");
// }

// const promise = function(callback, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             callback();
//             resolve();
//         }, delay);
//     });
// };

// function start() {
//     promise(red, 1000)
//     .then(() => {
//         return promise(yellow, 2000);
//     })
//     .then(() => {
//         return promise(green, 3000);
//     })
//     .then(() => {
//         start();
//     });
// };
// start();

// mimic ajax
const getJSON = function(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.status === 200 && this.readyState === 4) {
                resolve(this.response);
            } else {
                reject(new Error("error!"));
            }
        };
        xhr.open("GET", url, true);
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
    });
};