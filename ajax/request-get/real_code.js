var clickTimes = 0;
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (clickTimes == 0) {
                var pNode = document.createElement("p");
                var text = document.createTextNode(xmlhttp.responseText);
                pNode.appendChild(text);
                var pShowTimes = document.createElement("p");
                pShowTimes.setAttribute("id", "times");
                text = document.createTextNode("click time: " + clickTimes.toString());
                pShowTimes.appendChild(text);
                document.getElementById("myDiv").appendChild(pNode);
                document.getElementById("myDiv").appendChild(pShowTimes);
                clickTimes++;
            } else {
                var pShowTimes = document.getElementById("times");
                pShowTimes.firstChild.nodeValue = ("click time: " + clickTimes.toString());
                clickTimes++;
            }
        }
    }
    xmlhttp.open("GET", "http://127.0.0.1:3000?name=zsj&age=18", true);
    xmlhttp.send();
}

var button = document.getElementById("button");
button.addEventListener("click", loadXMLDoc);