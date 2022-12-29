let tog = document.getElementById("dark");
let body = document.querySelector("body");
let h = document.querySelector("h1");

let s = "Кутман таң!";
let m = "Кутман кеч!";
tog.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness")) {
    body.style.backgroundColor = "rgb(85, 82, 82)";
    body.style.color = "white";
    body.style.transition = "3s";
    h.innerHTML = m;
  } else {
    body.style.backgroundColor = "rgb(254, 254, 170)";
    body.style.color = "black";
    body.style.transition = "3s";
    h.innerHTML = s;
  }
});
