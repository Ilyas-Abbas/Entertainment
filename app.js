let toggler = document.querySelector('img[src="img/bars-solid.svg"]');
let side = document.querySelector(".side-bar");
let close = document.querySelector(".close");

toggler.onclick = function () {
  /*side.idList.add("open"); */
  side.id = "open";
};

close.onclick = function () {
  side.id = "";
};

document.onkeyup = function (e) {
  // console.log(e);
  if (e.key === "Escape") {
    side.id = "";
  }
};



