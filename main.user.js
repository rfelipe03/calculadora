// ==UserScript==
// @name        New script - doentedamental.github.io
// @namespace   Violentmonkey Scripts
// @match       https://web.archive.org/web/*/https://doentedamental.github.io/
// @grant       none
// @version     2.0
// @author      -
// @description 04/01/2023 21:04:45
// ==/UserScript==

function calculate() {
  var n1 = parseInt(document.getElementsByName("n1")[0].value);
  var n2 = parseInt(document.getElementsByName("n2")[0].value);
  var res = 0;
  switch (document.getElementsByName("op")[0].value) {
    case "soma":
      res = n1 + n2;
      break;
    case "sub":
      res = n1 - n2;
      break;
    case "mult":
      res = n1 * n2;
      break;
    case "div":
      res = n1 / n2;
      break;
  }
  document.getElementById("restext").innerHTML = res+"<br><br>";
}

function runThruInputs(type,func) {
  var inputs = document.getElementsByTagName(type);
  for (var i = 0; i < inputs.length; i++) {
    func(inputs[i]);
  }
}

function removeSubForRealNow(element) {
  if (element.type == "submit") {
    element.type = "button";
    element.addEventListener("click",calculate);
  }
}

function removeSubmit() {
  setTimeout(function(){
    runThruInputs("input",removeSubForRealNow);
    var resText = document.createElement("span");
    resText.id = "restext";
    document.getElementById("calc").appendChild(resText);
  },1000);
}

function funcRemoveSub(element) {
  element.addEventListener("click",removeSubmit);
}

runThruInputs("button",funcRemoveSub);
