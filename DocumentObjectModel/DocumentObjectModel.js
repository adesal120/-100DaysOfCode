/* DOM Selectors */


document.getElementsbyTagName("h1");
document.getElementsByClassName("second");
document.getElementById("first");

document.querySelector("Li");
document.querySelectorAll("Li");

document.querySelector("Li").getAttribute("random");
document.querySelector("Li").setAttribute("random","1000");

var ThisSelect = document.querySelector("Li");
ThisSelect.setAttribute("random", "2500");
ThisSelect.getAttribute("Li");

h1.classname = "CoolTitle"
document.querySelector("Li").classList.add("");
document.querySelector("Li").classList.remove("");
document.querySelector("Li").classList.toggle(""); 

var button = document.getElementsByTagName("Button")[0];
button.addEventListener("click", function () {
    console.log("Clickkkkkkkkkkk");
} ) 


/* DOM Events */

var button = document.getElementById("enter");
var input = document.getElementById("UserInput");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.nodeValue.length > 0) {
    var li = document.createElement("li");
    Li.appendChild(document.createTextNode("testing"));
    URL.appendChild(li)
    input.value = "";
    }
})

button.addEventListener("keypress", function () {
    if (input.Value.length > 0 && event.keycode === 13) {
    var li = document.createElement("li");
    Li.appendChild(document.createTextNode("testing"));
    URL.appendChild(li)
    input.value = "";
    }
})


function InPutLength () {
    return input.Value.length
}

function CreateListElement () {
    var li = document.createElement("li");
    Li.appendChild(document.createTextNode("testing"));
    URL.appendChild(li)
    input.value = "";
}
