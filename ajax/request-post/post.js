var clickTimes = 0;

function specificProcessing() {
    var nameSpan = document.getElementById("showName");
    var ageSpan = document.getElementById("showAge");
    var clickSpan = document.getElementById("times");
    if (this.responseText.indexOf(":") !== -1) {
        var jsonObj = JSON.parse(this.responseText);
    } else {
        var errString = this.responseText;
    }
    if (this.status == 200) {
        nameSpan.innerHTML = jsonObj["name"];
        ageSpan.innerHTML = jsonObj["age"];
        clickSpan.innerHTML = clickTimes.toString();
        clickTimes++;
    } else if (this.status == 404) {
        clickSpan.firstChild.nodeValue = errString;
    }
    console.log(this.getAllResponseHeaders());
    console.log(this.getResponseHeader("Content-Type"));
}

function sendMessageByPostMethod(url, callback) {
    var btn = document.getElementById("button");
    var inputName = document.getElementById("name");
    var inputAge = document.getElementById("age");
    btn.addEventListener("click", function() {
        if (inputName.value === null || inputName.value === "") {
            alert("please input your name");
            return;
        }
        if (inputAge.value === null || inputAge.value === "") {
            alert("please input your age");
            return;
        }
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                callback.call(this);
            }
        }
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(`name=${inputName.value}&age=${inputAge.value}`);
    });
}

sendMessageByPostMethod("http://localhost:3000", specificProcessing);