function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Close mobile menu on escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMobileMenu();
  }
});

let slider = document.getElementById("slider");
let cards = slider.querySelectorAll(".card");
let index = 0;
let slideInterval;

// Slide function
function slide() {
  index++;
  if (index >= cards.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${
    index * (cards[0].offsetWidth + 20)
  }px)`;
}

// Start auto sliding
function startSlider() {
  slideInterval = setInterval(slide, 2000);
}

// Stop auto sliding
function stopSlider() {
  clearInterval(slideInterval);
}

// Start slider initially
startSlider();

// Pause on hover
slider.addEventListener("mouseover", stopSlider);

// Resume on mouse leave
slider.addEventListener("mouseleave", startSlider);
