const cardImages = './img/laptop';

const card1 = {
  title: 'First Project Name',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
  link: 'https://linktofirstproject.com',
};

const card2 = {
  title: 'Second Project Name',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
  link: 'https://linktosecondproject.com',
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
  title: 'Fourth Project Name',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
  link: 'https://linktofourthproject.com',
};

const projects = [card1, card2, card3, card4, card5];

function modal(number) {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
  card.classList.toggle('visible');
  const title = document.querySelector('#card-title');
  const list = document.querySelector('#card-list');
  list.innerHTML = '';
  const img = document.querySelector('.card-image');
  const desc = document.querySelector('#card-description');
  const buttonsrc = document.querySelector('#card-button-source');
  const buttonlive = document.querySelector('#card-button-live');

  title.innerHTML = projects[number].title;

  for (let i = 0; i < projects[number].technologies.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = projects[number].technologies[i];
    list.appendChild(li);
  }

  img.setAttribute('src', `${cardImages + (number + 1)}-big.png`);
  buttonsrc.setAttribute('onclick', `window.open('${projects[number].link}', '_blank');`);
  buttonlive.setAttribute('onclick', `window.open('${projects[number].link}', '_blank');`);
  desc.innerHTML = projects[number].description;
}
function toggle() {
  const card = document.querySelector('#card');
  card.classList.replace('visible','invisible');
}

toggle();
modal();
