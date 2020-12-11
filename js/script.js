const menu = document.querySelector(".toggle-button")
const sideNav = document.querySelector(".sidenav")
const sideNavTop = document.querySelector(".sidenav-top")
const contentOverlay = document.querySelector(".content-overlay")

menu.onclick = () => {
  sideNav.classList.toggle("active");
  contentOverlay.classList.toggle("active")
};

sideNavTop.onclick = () => {
  sideNav.classList.toggle("active");
  contentOverlay.classList.toggle("active")
};

contentOverlay.onclick = () =>{
  sideNav.classList.toggle("active");
  contentOverlay.classList.toggle("active")
}

window.addEventListener("resize", () => {
  var w = document.documentElement.clientWidth;
  if (w <= 992) {
    sideNav.classList.remove("active")
    contentOverlay.classList.remove("active")
  }
});
