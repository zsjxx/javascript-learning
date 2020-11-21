function show1(callback) {
    setTimeout(function() {
        console.log(1);
    }, 3000);
    callback(); 
}

function show2() {
    console.log(2);
}

show1(show2);
console.log(3);


// var color = "red";
// var ob = {
//     color: "blue"
// }

// function a(callback) {
//     callback.call(this);
// }

// function b() {
//     console.log(this.color);
// }

// a(b);
// a.call(ob, b);

