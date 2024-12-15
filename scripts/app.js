const navIcon = document.getElementById("nav-icon");

const togglingClasses = (element, classes) => {
  element.classList.toggle(classes);
};

navIcon.addEventListener("click", () => {
  togglingClasses(navIcon, "open");
});
