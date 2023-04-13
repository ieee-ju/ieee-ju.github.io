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
