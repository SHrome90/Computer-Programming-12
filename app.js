// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links"); //Within the click event listener, this line toggles the presence of the class "show-links" on the links element. If the class is already present, it is removed; if it's not present, it is added. This class is assumed to have associated CSS styles that control the visibility of the links.
});

function toggleDropdown(dropdownId) {
    
    var dropdown = document.getElementById(dropdownId);  //This code of line basically retrieves the dropdown element from the HTML document by identifying the correct id. The reference is stored in the variable  dropdown
   if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
}


function changeColors() {
  var elementsToChange = document.querySelectorAll('nav, body, .dropdown-content'); 
// Query selector working here as an array to change color scheme of different elements

// Use of random function
  elementsToChange.forEach(function(element) {
    // Generate a random color
    var newColor = getRandomColor();
    element.style.backgroundColor = newColor;
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/*This code of line basically toggles the visibility of a dropdown by explicitly checking the current value of the display CSS property and then setting its value accordingly.
If (dropdown.style.display === "block"): This condition checks if the current value of the display CSS property for the dropdown is equal to the string "block". In CSS, the value 'block' typically represents a visible element.
If the condition is true (meaning the dropdown is currently visible), the code inside the block is executed then it sets the display property to "none", effectively hiding the dropdown.
If the condition is false (meaning the dropdown is currently not visible), the code inside the else block is executed then it sets the display property to "block", making the dropdown visible.
*/



const reviews = [
  {
    id: 1,
    name: 'rick sanchez',
    job: 'scientist inventor',
    img: 'rick sanchez.jpeg',
    text: "Rick is a lanky, old man. He has long legs and arms, and is very skinny. A megagenius scientist whose alcoholism and reckless, nihilistic behavior are sources of concern for his daughter's family, as well as the safety of their son, Morty.",
  },
  {
    id: 2,
    name: 'morty smith',
    job: 'Rick\'s companion',
    img: 'Morty smith.jpg',
    text: 'Rick\'s good-hearted and impressionable grandson who falls victim to playing the role of his sidekick. Morty is a young high school student who has trouble fitting in, especially given the circumstances he faces at home. He likely has a disability of sorts, and has trouble keeping up with the other kids in class, but he is proven to be pretty badass outside of school as Rick\'s side.',
  },
  {
    id: 3,
    name: 'summer smith',
    job: 'make morty jealous',
    img: 'Summer smith.png',
    text: 'The daughter of Jerry and Beth, the granddaughter of Rick, and the sister of Morty. Summer behaves the way a typical teenage daughter living in a house with a psychotic grandfather would and is considerably more level-headed than the two combined, but that doesn\'t mean she lacks her fair share of sass.',
  },
  {
    id: 4,
    name: 'beth smith',
    job: 'The boss of the family',
    img: 'Beth_Smith.jpg',
    text: 'Beth is a veterinarian who specializes in horse surgery, who is struck with a deep sense of dissatisfaction with her life, stemming from her belief that she has "settled" in her marriage, family, and job, leading her to accept her father into her household after he abandoned her as a teenager. Known for her selfish and humorous personality, alcoholism, and abrasiveness when criticized, the character has been well received. ',
  },
  {
      id: 5,
      name: 'jerry smith',
      job: 'loser of the family',
      img: 'jerry-smith.jpg',
      text: 'Jerry is often noted as somewhat of a loser. He constantly attempts to find a career to no avail, leaving his wife Beth to be the breadwinner of the family. However, he is capable of heroism in times of crisis and has saved his family\'s lives on a few occasions.'
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
// query to call the first person on the review
const firstBtn = document.querySelector('.primero');
// show first person
firstBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});

// query to call the last person on the review 
const lastBtn = document.querySelector('.ultimo');

// show last person
lastBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});

// dark mode code added with help from Uday
const themeToggle = document.querySelector('.web-color');
const body = document.body;

themeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode'); // Allows for the dark mode transition to take place once button is clicked. This function takes help from CSS

  // display the text on the button depending on what mode is enabled by user
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});