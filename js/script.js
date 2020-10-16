const mobileMenuButton = document.querySelector("#menu-mobile");

mobileMenuButton.addEventListener("click", event => {
  event.preventDefault();

  const menuWrapper = document.querySelector(".menu-mobile");
  const iconMenu = document.querySelector("#icon-btn-menu");

  if (menuWrapper.classList.contains("hide")) {
    menuWrapper.classList.remove("hide");
    iconMenu.classList.remove("fa-bars");
    iconMenu.classList.add("fa-times");
    return;
  }

  menuWrapper.classList.add("hide");
  iconMenu.classList.remove("fa-times");
  iconMenu.classList.add("fa-bars");
});