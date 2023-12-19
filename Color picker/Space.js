

const imageSpace = [
    "earth.jpg",
    "nebula.jpg",
    "blackhole.jpeg",
    "supernova.jpeg",
    "sun.jpg",
    "Starfactory.jpg",
    "Multiverse.jpg"
  ];
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${imageSpace[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * imageSpace.length);
  }

  