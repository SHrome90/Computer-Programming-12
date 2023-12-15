const chris = ["B", "A", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let chrisColor = "#";
  for (let i = 0; i < 6; i++) {
    chrisColor += chris[getRandomNumber()];
  }

  color.textContent = chrisColor;
  document.body.style.backgroundColor = chrisColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * chris.length);
}