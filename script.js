  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    navLinks.classList.toggle("active");
  });

  // Close nav when a link is clicked (mobile)
  document.querySelectorAll(".nav-links a").forEach(link =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    })
  );

  // Close nav if clicked anywhere else on the document
  document.addEventListener("click", (e) => {
    if (
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove("active");
    }
  });


// Typewriter effect for the hero section

const text = ["Frontend Web Developer", "UI/UX Designer", "Creative Coder"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const current = text[i];
  const speed = isDeleting ? 60 : 140;

  if (isDeleting) {
    j--;
    currentText = current.slice(0, j);
  } else {
    j++;
    currentText = current.slice(0, j);
  }

  document.querySelector(".typewriter").textContent = currentText;

  if (!isDeleting && j === current.length) {
    setTimeout(() => {
      isDeleting = true;
      type();
    }, 1000); // Pause after full word
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, speed);
}

type();

// Define project images for each slideshow
const slideshows = [
  {
    selector: ".project-card:nth-child(1) .slide-img",
    images: [
      "assets/ps1.png",
      "assets/ps2.png",
      "assets/ps3.png",
    ],
  },
  {
    selector: ".project-card:nth-child(2) .slide-img",
    images: [
      "assets/ps1.png",
      "assets/ps2.png",
      "assets/ps3.png",
    ],
  },
  // Add more slideshows here
];

slideshows.forEach((slideshow) => {
  let index = 0;
  const imgElement = document.querySelector(slideshow.selector);
  if (!imgElement) return;

  setInterval(() => {
    index = (index + 1) % slideshow.images.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = slideshow.images[index];
      imgElement.style.opacity = 1;
    }, 300);
  }, 3000); // change every 3 seconds
});

// EmailJS integration

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = contactForm.querySelector("button");
    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm("service_i8ufnil", "template_zpol33g", this)
      .then(function () {
        alert("✅ Message sent successfully!");
        contactForm.reset();
        button.disabled = false;
        button.textContent = "Send Message";
      }, function (error) {
        console.error(error);
        alert("❌ Oops! Something went wrong. Please try again.");
        button.disabled = false;
        button.textContent = "Send Message";
      });
  });
}