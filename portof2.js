// ---------------------get to next div---------------------
function nexDiv() {
  getToTheDiv((colorIndex + 1) * divsWidth, colorIndex + 1)
}
// ---------------------get to prev div---------------------
function prevDiv() {
  getToTheDiv((colorIndex - 1) * divsWidth, colorIndex - 1)
}
// -----------the function that get you to the div-----------
function getToTheDiv(leftValue, colorIndexValue) {
  index = -leftValue;
  index2 =
    document.getElementById("divFlexContainer").style.left = `${index % (numbeOfDivs * -divsWidth)}vw`;
  document.getElementsByClassName("navHeadLine")[colorIndex % numbeOfDivs].style.color = "unset";
  colorIndex = colorIndexValue;
  document.getElementsByClassName("navHeadLine")[colorIndex % numbeOfDivs].style.color = navSwitchColor;
  if (colorIndex % numbeOfDivs != 0) {
    document.querySelector(".fa-chevron-left").style.zIndex = 1;
    document.querySelector(".fa-chevron-left").style.opacity = 1;
  }
  else {
    document.querySelector(".fa-chevron-left").style.zIndex = 0;
    document.querySelector(".fa-chevron-left").style.opacity = 0;
  }
  if (colorIndex % numbeOfDivs != numbeOfDivs - 1) {
    document.querySelector(".fa-chevron-right").style.zIndex = 1;
    document.querySelector(".fa-chevron-right").style.opacity = 1;
  }
  else {
    document.querySelector(".fa-chevron-right").style.zIndex = 0;
    document.querySelector(".fa-chevron-right").style.opacity = 0;
  }
}
// -------the footer navBar creator(using the divs id)-------
function footerNavCreate() {
  let nav = document.getElementById("divSliderNav");
  let divs = document.getElementsByClassName("box");
  for (i = 0; i < divs.length; i++) {
    let idIn = divs[i].id;
    nav.innerHTML += `<div onclick=getToTheDiv(${i * divsWidth},${i}) class="navGetToMyDiv"><p class=navHeadLine>${idIn.substr(3, idIn.length).toLocaleUpperCase()}</p></div>`
  }
}
// ------------change the opacity of the elements------------
function elementOpacityChanger() {
  document.getElementById("divSliderNav").style.opacity = 1;
  document.querySelector(".fa-chevron-right").style.opacity = 1;
}
// --------------keyboard arrows skip div enable-------------
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '39') {
    nexDiv();
  }
  else if (e.keyCode == '37') {
    prevDiv();
  }

}
// ------------------browser onload functions-----------------
window.onload = () => {
  footerNavCreate();
  document.getElementsByClassName("navHeadLine")[0].style.color = navSwitchColor;
  // setTimeout(elementOpacityChanger, 10)
  setTimeout(() => { document.onkeydown = checkKey }, 10)
}

// ----------------------global variables---------------------
let index = 0;
let colorIndex = 0;
let navSwitchColor = "black";
let numbeOfDivs = document.getElementsByClassName("box").length;
let divsWidth = 100;
document.getElementById("divFlexContainer").style.width = `${numbeOfDivs * divsWidth}vw`;