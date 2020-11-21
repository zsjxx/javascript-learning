function showClassName(useCapture) {
    var outside = document.getElementsByClassName("outside")[0];
    var middle = document.getElementsByClassName("middle")[0];
    var inside = document.getElementsByClassName("inside")[0];
    outside.addEventListener("click", outputClassName, useCapture);
    middle.addEventListener("click", outputClassName, useCapture);
    inside.addEventListener("click", function(event) {
        outputClassName.call(this); // 必须指定this，此时的this为addEventListener的this，即inside
        event.stopPropagation(); // 阻止inside div的冒泡
    }, useCapture);
}

function outputClassName(event) {
    console.log(this.getAttribute("class"));
}


showClassName(false);
