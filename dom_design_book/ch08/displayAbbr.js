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

function displayAbbr() {
    var abbr = document.getElementsByTagName("abbr");
    if (abbr.length == 0) return false;
    var arrrObj = new Object();
    for (var i = 0; i < abbr.length; i++) {
        var key = abbr[i].getAttribute("title");
        var value = abbr[i].lastChild.nodeValue;
        arrrObj[key] = value;
    }
    var abbrTitle = document.createElement("h2");
    abbrTitle.appendChild(document.createTextNode("Abbr!"));
    dList = document.createElement("dl");

    for (var key in arrrObj) {
        dt = document.createElement("dt");
        dt.appendChild(document.createTextNode(key));
        dd = document.createElement("dd");
        dd.appendChild(document.createTextNode(arrrObj[key]));
        dList.appendChild(dt);
        dList.appendChild(dd);
    }

    var blockQuote = document.getElementsByTagName("blockquote");
    for (var i = 0; i < blockQuote.length; i++) {
        aElement = document.createElement("a");
        aElement.appendChild(document.createTextNode("scouce"));
        aElement.setAttribute("href", blockQuote[i].getAttribute("cite"));
        sup = document.createElement("sup");
        sup.appendChild(aElement);
        pListOfBlockQuote = blockQuote[i].getElementsByTagName("p");
        pListOfBlockQuote[pListOfBlockQuote.length - 1].appendChild(sup);
    }

    document.getElementsByTagName("body")[0].appendChild(abbrTitle);
    document.getElementsByTagName("body")[0].appendChild(dList);
    return true;
}

addLoadEvent(displayAbbr);