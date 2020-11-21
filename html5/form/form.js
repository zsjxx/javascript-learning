function getInnerHTMLByDict(dict) {
    let inner = "";
    for (const key in dict) {
        inner += `<p>${key}: ${dict[key]}</p>`;
    }
    return inner;
}

function show(xhr) {
    let dict = JSON.parse(xhr.responseText);
    let body = document.getElementsByTagName("body")[0];
    let newSection = document.createElement("div");
    newSection.innerHTML = getInnerHTMLByDict(dict);
    body.appendChild(newSection);
}

function sendRequest() {
    let dict = {};
    let name = document.getElementById("name").value;
    if (name == null || name == "") {
        alert("Please input your name!");
        return;
    }
    dict.name = name;
    const sex = ["male", "female"];
    for (let i = 0; i < sex.length; i++) {
        const radio = document.getElementById(sex[i]);
        if (radio.checked) {
            dict[radio.getAttribute("name")] = sex[i];
            break;
        }
    }
    subjectElement = document.getElementsByClassName("subject");
    let arr = [];
    for (let i = 0; i < subjectElement.length; i++) {
        if (subjectElement[i].checked) {
            arr.push(subjectElement[i].value);
        }
    }
    dict["subject"] = arr.length == 0 ? "NO ONE!" : arr.join(", ");
    let dictString = "";
    for (const key in dict) {
        dictString += `${key}=${dict[key]}&`;
    }
    dictString = dictString.slice(0, -1);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            show(xhr);
        }
    };
    xhr.open("POST", "http://localhost:3000", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(dictString);
    console.log(dictString);
    btn.disabled = true;
    btn.value = "done!"
}

const btn = document.getElementById("button");
btn.addEventListener("click", sendRequest);


