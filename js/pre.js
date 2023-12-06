var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish () {
  // console.log("vanish function called");
  setTimeout(() => {
    loader.classList.add("disappear");
  }, 800);
}