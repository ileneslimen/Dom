var title = document.querySelector("h1");
var para = document.getElementsByTagName("p");
var parax = document.querySelectorAll("p");

var newpar = document.createElement("p");
var div = document.querySelector("div");
div.appendChild(newpar);
newpar.innerHTML = "hi";
console.log(div);
console.log(para);
console.log(parax);
console.log(para[0].innerHTML);

console.log(parax[0].innerHTML);
parax[0].remove();
console.log(para[0].innerHTML);

console.log(parax[0].innerHTML);
var text = "";
function getName() {
  var input = document.getElementsByTagName("input");
  text = input[0].value;
  console.log(text);
}

function sayHello() {
  if (text) alert("hi " + text);
  else alert("please enter a name");
}

var plus = document.querySelector(".button-plus");
var quaantity = document.querySelector("span");
plus.addEventListener("click", function () {
  quaantity.innerHTML++;
});
