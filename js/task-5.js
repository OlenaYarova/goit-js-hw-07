const body = document.querySelector("body");
const backgroundCol = document.querySelector("span.color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  backgroundCol.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
