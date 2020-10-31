// return the next element node
function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    else if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    else return null;
}

function addClass(elem,  value) {
    if (elem.getAttribute("class")) {
        var cur_class = elem.getAttribute("class");
        elem.setAttribute("class", cur_class + " " + value);
    }
    else elem.setAttribute("class", value);
}

function styleElementSibings(tag, theClass) {
    var elems = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < elems.length; i++) {
        elem = getNextElement(elems[i].nextSibling);
        if (elem) addClass(elem, theClass);
    }
}

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

addLoadEvent(styleElementSibings("h1", "intro"));