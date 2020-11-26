function nexDiv() {
  // index += -divsWidth;
  // document.getElementById("divFlexContainer").style.left = `${index % (numbeOfDivs * -divsWidth)}vw`;
  // document.getElementsByClassName("navHeadLine")[colorIndex % numbeOfDivs].style.color = "unset";
  // colorIndex++;
  // document.getElementsByClassName("navHeadLine")[colorIndex % numbeOfDivs].style.color = navSwitchColor;
  // document.querySelector(".fa-chevron-left").style.zIndex = 1;
  // document.querySelector(".fa-chevron-left").style.opacity = 1;
  getToTheDiv((colorIndex + 1) * divsWidth, colorIndex + 1)
}
function prevDiv() {
  // index += divsWidth;
  // if (index > 0)
  //   index = ((numbeOfDivs - 1) * -divsWidth);
  // document.getElementById("divFlexContainer").style.left = `${index % (numbeOfDivs * -divsWidth)}vw`;
  // document.getElementsByClassName("navHeadLine")[colorIndex % numbeOfDivs].style.color = "unset";
  // colorIndex--;
  // if (colorIndex == -1) { colorIndex = 2 }
  // document.getElementsByClassName("navHeadLine")[colorIndex % numbeOfDivs].style.color = navSwitchColor;
  getToTheDiv((colorIndex - 1) * divsWidth, colorIndex - 1)
}
function footerNavCreate() {
  let nav = document.getElementById("divSliderNav");
  let divs = document.getElementsByClassName("box");
  for (i = 0; i < divs.length; i++) {
    let idIn = divs[i].id;
    nav.innerHTML += `<div onclick=getToTheDiv(${i * divsWidth},${i}) class="navGetToMyDiv"><p class=navHeadLine>${idIn.substr(3, idIn.length).toLocaleUpperCase()}</p></div>`
  }
}
function getToTheDiv(leftValue, colorIndexValue) {//${1 * divsWidth},${1})
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
function mainNavigationApear() {
  document.getElementById("divSliderNav").style.zIndex = 1;
  document.getElementById("divSliderNav").style.opacity = 1;
  document.querySelector(".fa-chevron-right").style.zIndex = 1;
  document.querySelector(".fa-chevron-right").style.opacity = 1;
}
function insertText(textId, insertThisText) {
  let timeInsert = 100;
  for (let i = 0; i < insertThisText.length; i++) {
    setTimeout(() => { document.getElementById(textId).innerHTML += insertThisText[i] }, i * timeInsert)
  }
}

window.onload = () => {
  footerNavCreate();
  document.getElementsByClassName("navHeadLine")[0].style.color = navSwitchColor;
  setTimeout(mainNavigationApear, 9000)
  document.querySelector(".storyText").style.fontSize = "450%";
  document.querySelector(".storyText").style.opacity = "1";
  setTimeout(() => insertText("topH1", "Yizhak Gete"), 2500);
  setTimeout(() => document.querySelector(".bottomMainText").querySelector("h2").style.opacity = "1", 4000);
  setTimeout(() => insertText("bottomH1", "Story"), 6500);
  setTimeout(() => { document.onkeydown = checkKey; }, 10000)
}
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '39') {
    nexDiv();
  }
  else if (e.keyCode == '37') {
    prevDiv();
  }

}

let index = 0;
let colorIndex = 0;
let navSwitchColor = "#ffffff"
let numbeOfDivs = document.getElementsByClassName("box").length;
let divsWidth = 100;
document.getElementById("divFlexContainer").style.width = `${numbeOfDivs * divsWidth}vw`;