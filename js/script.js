const menu = document.querySelector(".toggle-button");
const sideNav = document.querySelector(".sidenav");
const sideNavTop = document.querySelector(".sidenav-top");

menu.onclick = () => {
  sideNav.classList.toggle("active");
};

sideNavTop.onclick = () => {
  sideNav.classList.toggle("active");
};

window.addEventListener("resize", () => {
  var w = document.documentElement.clientWidth;
  if (w <= 992) {
    sideNav.classList.remove("active");
  }
});
