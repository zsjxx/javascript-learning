let timer;

function show(content) {
    console.log(content);
}

// 只要触发keyup，就重置定时器，并重新计时
function debounce(callback, delay) {
    return function(content) {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback.call(this, content);
        }, delay);
    }
}

let seq = 1;
let last;
function show_seq() {
    console.log(seq);
    seq++;
}

// 只有第一次点击以及当前时间超过限定值时才能调用
function throttle(callback, maxInterval) {
    return function() {
        if (last === undefined || last + maxInterval * 1000 < +new Date()) {
            last = +new Date();
            callback.call(this);
        }
    }
}

document.getElementById("no_debounce").addEventListener("keyup", (event) => {
    show(event.target.value);
});


document.getElementById("debounce").addEventListener("keyup", (event) => {
    debounce(show, 500)(event.target.value);
});

document.getElementById("no_throttle").addEventListener("click", (event) => {
    show_seq();
});

document.getElementById("throttle").addEventListener("click", (event) => {
    throttle(show_seq, 1)();
});