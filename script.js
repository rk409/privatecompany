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
const track = document.getElementById("slide-track");
const dots = document.querySelectorAll(".dot");
let idx = 0;
const totalSlides = dots.length;

function updateSlidePosition() {
  track.style.transition = "transform 0.7s ease";
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[idx].classList.add("active");
}

function moveSlide(step) {
  idx = (idx + step + totalSlides) % totalSlides;
  updateSlidePosition();
}

function gotoSlide(i) {
  idx = i;
  updateSlidePosition();
}

let autoSlide = setInterval(() => moveSlide(1), 5000);

// Pause on hover
const container = document.querySelector(".carousel-container");
container.addEventListener("mouseenter", () => clearInterval(autoSlide));
container.addEventListener(
  "mouseleave",
  () => (autoSlide = setInterval(() => moveSlide(1), 5000))
);

// chatbot start here
const faqs = {
  coursesz:
    "We offer Web Development, Graphic Design, Tally, MS Office, and more. Visit the Courses page for full details.",
  timings:
    "Our classes run from 7 AM to 8 PM in various batches. You can choose a convenient slot.",
  fees: "Fees vary by course. Contact us for details or visit the 'Courses' section.",
  admission:
    "You can enroll online or visit our office with 2 passport-sized photos and a valid ID.",
  location: "We are located at [Your Address Here].",
  name: "My name is Sachin. What can i help you?",
  doing: "I can help you to explore courses",
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
    "I'm not sure about that. Please contact our team for more info.";

  for (const keyword in faqs) {
    if (msg.toLowerCase().includes(keyword)) {
      response = faqs[keyword];
      break;
    }
  }

  setTimeout(() => {
    log.innerHTML += `<div><strong>Sachin:</strong> ${response}</div>`;
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
    window.addEventListener("click", function(e) {
      const popup = document.getElementById("popup");
      if (e.target === popup) {
        closePopup();
      }
    });

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault(); // prevent page reload

      // Hide the form and show success message
      this.style.display = "none";
      document.getElementById("successMsg").style.display = "block";

      // Auto-close popup after 3 seconds
      setTimeout(() => {
        closePopup();
      }, 3000);
    });
openPopup()