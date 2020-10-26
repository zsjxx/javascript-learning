function showPic(whichPic) { // whichPic refers to the element node of <a> tag
    if (!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) { // if false the picture still exists
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true; // important!
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false; // check if getElementById can be recognized
    if (!document.getElementById("imageGallery")) return false;
    var imageGallery = document.getElementById("imageGallery");
    var links = imageGallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return !showPic(this); // this refers to the element node of <a> tag
        }
    }
}

// execute this function after the windows ends loading
function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldOnload();
            func();
        }
    }
}

// insert element node after targetElement
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastNode == targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibing);
    }
}

function preparePlaceholder() {
    if (!document.getElementById("imageGallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("src", "image/blank.jpg");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("alt", "My Image Gallery");
    placeholder.setAttribute("width", "300px");
    placeholder.setAttribute("height", "300px");
    var para = document.createElement("p");
    para.setAttribute("id", "description");
    var text = document.createTextNode("Choose a pic");
    para.appendChild(text);
    var gallery = document.getElementById("imageGallery");
    insertAfter(placeholder, gallery);
    insertAfter(para, placeholder);
}

addLoadEvent(preparePlaceholder)
addLoadEvent(prepareGallery);
