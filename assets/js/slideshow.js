let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function changeSlide() {
  currentSlide = (currentSlide + 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
