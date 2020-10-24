var element = document.getElementById("purchases");
alert(typeof element);
var eleArr = document.getElementsByTagName("li");
alert(eleArr.length); // 3

// watch how many elements inside <ul>
var items = element.getElementsByTagName("*"); // "*" denotes all the elements inside element
alert(items.length); // 3

var sales = element.getElementsByClassName("sale");
alert(sales.length); // 2

// get / set attribute
var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
    var title = paras[i].getAttribute("title");
    if (title != null) {
        alert(title);
        paras[i].setAttribute("title", "new title");
        alert(paras[i].getAttribute("title"));
    }
}
