function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != "function") {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
function addPElement() {
    document.getElementsByTagName("body")[0].innerHTML = "<p>nihao</p>";
}
function addPElementByDOM() {
    para = document.createElement("p");
    text = document.createTextNode("nihao, DOM!");
    document.getElementsByTagName("body")[0].appendChild(para);
    para.appendChild(text);
}

addLoadEvent(addPElementByDOM);