function changeOb(obj) {
    obj.name = "nihao";
    obj = new Object();
    obj.name = "wobuhao";
}

var obj = new Object();
changeOb(obj);
console.log(obj.name); // nihao

var a = 15;
var b = new Object();
console.log(typeof a); // number
console.log(b instanceof Object); // true

var color = "blue";

function changeColor() {
    var anotherColor = "red";

    function swapColor() {
        // can visit color, anotherColor, tempColor
        var tempColor = "grey";
        tempColor = color;
        color = anotherColor; // this color refers to the global color
        anotherColor = tempColor; // this anotherColor refers to the variable within changeColor scope
    }
    // can visit color, anotherColor
    swapColor(); 
    console.log(anotherColor); // blue
}
// can visit color
changeColor();
console.log(color); // red

function add(x, y) {
    sum = x + y;
    return sum;
}
add(10, 20);
console.log(sum); // 30

for (var i = 0; i < 10; i++) {}
console.log(i); // 10