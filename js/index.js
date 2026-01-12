const image = [
  "https://www.bing.com/th/id/OIP.V86cXcyzY-QJ3tFLLeP68gHaEq?w=248&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.dBLg-ZHLzj4xgP82i_eh5gHaEo?w=247&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.a8PrD7wrIwc89sJLenH3pwHaEo?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  "https://www.bing.com/th/id/OIP.r8IqnZvajmcmfws6fDgfvwHaEo?w=247&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
];

let currentIndex = 0;

const prev = document.getElementById("prev");
const img = document.getElementById("img");
const next = document.getElementById("next");
const dotsContainer = document.getElementById("dots");

img.src = image[currentIndex];

image.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  img.src = image[currentIndex];
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % image.length;
  updateSlider();
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + image.length) % image.length;
  updateSlider();
});
