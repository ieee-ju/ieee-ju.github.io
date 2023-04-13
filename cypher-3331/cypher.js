function checkInput() {
  var a = document.getElementById("stage4Input");
  if (a.value == "izgeqg nexpnzrk" || a.value == "IZGEQG NEXPNZRK") {
    location.href = "/cypher-3331/fnKFsd095XyZ.html";
  } else {
    document.getElementById("err").innerHTML = "Wrong";
  }
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.onkeydown = (e) => {
  if (e.key == 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "I") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "C") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "J") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "U") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "F") {
    e.preventDefault();
  }
};
