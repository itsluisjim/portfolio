const titleText = "Frontend Developer";
const titleElement = document.getElementById("header");
const cursorElement = document.getElementById("blinking-cursor");
const elementToFade = document.getElementById("elementToFade");

// Variables to store original opacity and a timer
let isScrolling = false;
let index = 0;

function typeTitle() {
  titleElement.textContent = titleText.slice(0, index);
  index++;

  if (index <= titleText.length) {
    setTimeout(typeTitle, 100);
  }
}

setTimeout(() => {
  elementToFade.classList.remove(["animate__fadeIn"]);
}, 2000);

window.onload = typeTitle();

// Function to fade the element
function fadeOutElement() {
  elementToFade.style.opacity = 0.5; // You can adjust the target opacity here
}

// Function to revert the element to its original state
function fadeInElement() {
  elementToFade.style.opacity = 1;
}

// Event listener for scrolling
window.addEventListener("scroll", () => {
  // Set scrolling state
  isScrolling = true;

  // Fade out the element when scrolling occurs
  fadeOutElement();

  // Clear timeout and set a new timeout
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(() => {
    isScrolling = false;
    fadeInElement();
  }, 500); // Adjust the delay as needed
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function copyEmailToClipboard() {
  const email = "jimenezluis.lj85@gmail.com";
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
