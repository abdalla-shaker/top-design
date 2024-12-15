const images = document.querySelectorAll(".carousel-image");
const dots = document.querySelectorAll(".carousel-dot");
let currentIndex = 0;
const intervalTime = 4000;

const updateCarousel = () => {
  images.forEach((img, index) => {
    img.classList.remove("active");
    dots[index].classList.remove("active");
  });

  if (currentIndex >= 0 && currentIndex < images.length) {
    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }
};

const showNextImage = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
};

updateCarousel();

setInterval(showNextImage, intervalTime);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

const navIcon = document.getElementById("nav-icon");

const togglingClasses = (element, classes) => {
  element.classList.toggle(classes);
};

navIcon.addEventListener("click", () => {
  togglingClasses(navIcon, "open");
});
