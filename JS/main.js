// Main Variabls
let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountains3 = document.querySelector("#mountains3");
let mountains4 = document.querySelector("#mountains4");
let river = document.querySelector("#river");
let boat = document.querySelector("#boat");
let novile = document.querySelector(".novile");

//Functions

window.onscroll = function () {
  let val = scrollY;
  stars.style.left = val + "px";
  moon.style.top = val * 5 + "px";
  mountains3.style.top = val * 1.5 + "px";
  mountains4.style.top = val * 1.3 + "px";
  river.style.top = val + "px";
  boat.style.top = val / 2 + "px";
  boat.style.left = val * 4 + "px";
  novile.style.fontSize = val + "px";
  if (scrollY >= 67) {
    novile.style.fontSize = 67 + "px";
    novile.style.position = "fixed";
    if (scrollY >= 347) {
      novile.style.display = "none";
    } else {
      novile.style.display = "block";
    }
  }
  if (scrollY >= 53) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
};
