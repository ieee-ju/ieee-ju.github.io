function checkInput() {
  var a = document.getElementById("stage4Input");
  if (a.value == "izgeqg nexpnzrk" || a.value == "IZGEQG NEXPNZRK") {
    document.getElementById("err").innerHTML =
      "Congratulations, Proceed to the next Stage";
    document.getElementById("proceedToStage5").innerHTML = "Stage 5";
    document.getElementById("proceedToStage5").classList.add = "btn-stage-2";
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
