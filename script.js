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
// function slide() {
//   index++;
//   if (index >= cards.length) {
//     index = 0;
//   }
//   slider.style.transform = `translateX(-${
//     index * (cards[0].offsetWidth + 20)
//   }px)`;
// }

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
// const track = document.getElementById("slide-track");
// const dots = document.querySelectorAll(".dot");
// let idx = 0;
// const totalSlides = dots.length;

// function updateSlidePosition() {
//   track.style.transition = "transform 0.7s ease";
//   track.style.transform = `translateX(-${idx * 100}%)`;
//   dots.forEach((dot) => dot.classList.remove("active"));
//   dots[idx].classList.add("active");
// }

// function moveSlide(step) {
//   idx = (idx + step + totalSlides) % totalSlides;
//   updateSlidePosition();
// }

// function gotoSlide(i) {
//   idx = i;
//   updateSlidePosition();
// }

// let autoSlide = setInterval(() => moveSlide(1), 5000);

class Carousel {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 5;
    this.isPaused = false;
    this.autoSlideInterval = null;

    this.slidesContainer = document.querySelector(".slides");
    this.slides = document.querySelectorAll(".slide");
    this.indicators = document.querySelectorAll(".indicator");
    this.prevButton = document.querySelector(".prev-arrow");
    this.nextButton = document.querySelector(".next-arrow");
    this.progressFill = document.querySelector(".progress-fill");
    this.carousel = document.querySelector(".carousel");

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.startAutoSlide();
    this.updateSlide();
  }

  setupEventListeners() {
    // Navigation arrows
    this.prevButton.addEventListener("click", () => this.prevSlide());
    this.nextButton.addEventListener("click", () => this.nextSlide());

    // Indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index));
    });

    // Pause on hover
    this.carousel.addEventListener("mouseenter", () => this.pauseAutoSlide());
    this.carousel.addEventListener("mouseleave", () => this.resumeAutoSlide());

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // Touch/swipe support
    let startX = 0;
    let endX = 0;

    this.carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    this.carousel.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      this.handleSwipe(startX, endX);
    });
  }

  handleSwipe(startX, endX) {
    const threshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlide();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlide();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlide();
  }

  updateSlide() {
    // Update slides position
    const translateX = -this.currentSlide * 20; // 20% per slide (100% / 5 slides)
    this.slidesContainer.style.transform = `translateX(${translateX}%)`;

    // Update slide backgrounds
    this.slides.forEach((slide, index) => {
      slide.classList.remove("active");
      const gradientClass = slide.dataset.gradient;
      slide.className = `slide ${gradientClass}`;

      if (index === this.currentSlide) {
        slide.classList.add("active");
      }
    });

    // Update indicators
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentSlide);
    });

    // Update progress bar
    const progressWidth = ((this.currentSlide + 1) / this.totalSlides) * 100;
    this.progressFill.style.width = `${progressWidth}%`;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, 3000);
  }

  pauseAutoSlide() {
    this.isPaused = true;
  }

  resumeAutoSlide() {
    this.isPaused = false;
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});

// Handle visibility change to pause/resume when tab is not active
document.addEventListener("visibilitychange", () => {
  const carousel = window.carousel;
  if (carousel) {
    if (document.hidden) {
      carousel.pauseAutoSlide();
    } else {
      carousel.resumeAutoSlide();
    }
  }
});

// Pause on hover
const container = document.querySelector(".carousel-container");
container.addEventListener("mouseenter", () => clearInterval(autoSlide));
container.addEventListener(
  "mouseleave",
  () => (autoSlide = setInterval(() => moveSlide(1), 5000))
);

// chatbot start here
const faqs = {
  services:
"Web Application- Logo Design- Fullstack Design- UI & UX Development- Admin Panel- Website Maintenance- Admin Dashboard- Chatbot Creation",
contact:
`support@ithubservice.in\n
9911468082`,
refund: "yes",
designs:
"modern, minimal , premium",
ssl: "yes.",
  name: "My name is IHS. What can i help you?",
};

function toggleChat() {
  const widget = document.getElementById("chat-widget");
  widget.style.display = widget.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const log = document.getElementById("chat-log");
  const msg = input.value.trim();
  if (!msg) return;

  log.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
  let response =
    "I'm not sure about that. Please contact our team for more info. Enter contact for contact info!";

  for (const keyword in faqs) {
    if (msg.toLowerCase().includes(keyword)) {
      response = faqs[keyword];
      break;
    }
  }

  setTimeout(() => {
    log.innerHTML += `<div><strong>IHS:</strong> ${response}</div>`;
    log.scrollTop = log.scrollHeight;
  }, 500);

  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("chat-input")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") sendMessage();
    });
});
// end here

function openPopup() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("successMsg").style.display = "none";
  document.getElementById("contactForm").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Close popup if clicked outside the box
window.addEventListener("click", function (e) {
  const popup = document.getElementById("popup");
  if (e.target === popup) {
    closePopup();
  }
});

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  // Hide the form and show success message
  this.style.display = "none";
  document.getElementById("successMsg").style.display = "block";

  // Auto-close popup after 3 seconds
  setTimeout(() => {
    closePopup();
  }, 3000);
});
openPopup();
