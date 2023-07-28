const menuIcon = document.getElementById("menu");
const menu = document.querySelector("#menuDesktop");
let menuOpen = false;

function checkOrientation() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  if (isPortrait) {
    menu.classList.add("scrollable");
  } else {
    menu.classList.remove("scrollable");
  }
}

menuIcon.addEventListener("click", function () {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  menu.style.opacity = "0";
  menu.style.display = "flex";
  setTimeout(function () {
    menu.style.opacity = "1";
  }, 10);
  if (!menuOpen) {
    document.body.style.overflow = "hidden";
    const menuIcon = document.getElementById("menu");
    menuIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>';
    const menuOptions = menu.querySelectorAll(".menuDesktop-item");
    menuOptions.forEach(function (option) {
      option.addEventListener("click", closeMenu);
    });
  }
  menuOpen = true;
}

function closeMenu() {
  const menuOptions = menu.querySelectorAll(".menuDesktop-item");
  menuOptions.forEach(function (option) {
    option.removeEventListener("click", closeMenu);
  });
  menu.style.opacity = "0";
  setTimeout(function () {
    menu.style.display = "none";
  }, 300);
  document.body.style.overflow = "auto";

  const menuIcon = document.getElementById("menu");
  menuIcon.innerHTML = "menu";
  menuOpen = false;
}

window.addEventListener("load", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
