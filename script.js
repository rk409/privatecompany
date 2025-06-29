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
let cards = slider.querySelectorAll(".service-card");
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
  slideInterval = setInterval(slide, 1000);
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

function redirect(url) {
  window.location.href = `teampage.html`;
}

function technoWork() {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active");
      const activeContent = document.getElementById(tab.dataset.tab);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
}
technoWork();
