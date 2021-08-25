const cardImages = './img/laptop';

const card1 = {
  title: 'To Do List',
  technologies: [
    'HTML/CSS',
    'Webpack',
    'JavaScript',
    'Jest'
  ],
  description: 'Simple to do list, many functions included like drag & drop, double click to edit and more! ',
  link1: 'https://github.com/ReshyResh/To-Do-List-JS',
  link2: 'https://reshyresh.github.io/To-Do-List-JS/index.html'
};

const card2 = {
  title: 'Awesome Books',
  technologies: [
    'HTML/CSS',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
  link1: 'https://github.com/ReshyResh/Awesome-Books-JS-Project',
  link2: 'https://reshyresh.github.io/Awesome-Books-JS-Project/',
};

const card3 = {
  title: 'Third Project Name',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
  link: 'https://linktothirdproject.com',
};

const card4 = {
  title: 'Fifth Project Name',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
  link: 'https://linktofifthproject.com',
};

const card5 = {
  title: 'HTML/CSS Capstone Project',
  technologies: [
    'HTML/CSS',
    'JavaScript',
  ],
  description: 'Conference-like website used as capstone project for the HTML/CSS module. Includes dynamically loaded content and responsive layouts.',
  link1: 'https://github.com/ReshyResh/Capstone-Project-HTML-CSS-JS',
  link2: 'https://reshyresh.github.io/Capstone-Project-HTML-CSS-JS/index.html',
};

const projects = [card1, card2, card3, card4, card5]; // Array for cards contents

function modal(number) { // The argument is given by the button onclick
  const card = document.querySelector('#card');
  setTimeout(() => { // Delay to avoid toggle to be triggered, which means it will not appear at all
    card.classList.replace('invisible', 'visible');
  }, 1);
  const title = document.querySelector('#card-title');
  const list = document.querySelector('#card-list');
  list.innerHTML = ''; // Reset the list because otherwise it would be appending every time it is opened
  const img = document.querySelector('.card-image');
  const desc = document.querySelector('#card-description');
  const buttonsrc = document.querySelector('#card-button-source');
  const buttonlive = document.querySelector('#card-button-live');

  title.innerHTML = projects[number].title; // Change title

  for (let i = 0; i < projects[number].technologies.length; i += 1) { // For each item in technology
    const li = document.createElement('li'); // Create a list item
    li.textContent = projects[number].technologies[i]; // With the content of technology array
    list.appendChild(li); // Append the list item
  }

  img.setAttribute('src', `${cardImages + (number + 1)}-big.png`); // Set image src dynamically
  buttonsrc.setAttribute('onclick', `window.open('${projects[number].link1}', '_blank');`); // Set links dynamically
  buttonlive.setAttribute('onclick', `window.open('${projects[number].link2}', '_blank');`);
  desc.innerHTML = projects[number].description; // Set description
}

function toggle() {
  const card = document.querySelector('#card'); // Toggle function just for the cross item
  card.classList.replace('visible', 'invisible');
}

document.addEventListener('click', (e) => { // Close modal menu with click outside modal
  if (!(document.getElementById('card').classList.contains('invisible'))) {
    if (!(document.getElementById('card').contains(e.target))) {
      toggle();
    }
  }
});
function keyPress(e) {
  if (e.key === 'Escape') {
    toggle();
  }
}
document.addEventListener('keydown', keyPress); // Close modal menu with escape key

toggle();
modal();
