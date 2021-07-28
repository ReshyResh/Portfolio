function menuToggle() {
  const div = document.querySelector('#main-nav-bar');
  const div2 = document.querySelector('#menu-js');
  const burger = document.querySelector('#burger-container');
  const cross = document.querySelector('#cross');
  const shape1 = document.querySelector('#shape-1');
  const shape2 = document.querySelector('#shape-2');
  div.classList.toggle('js-toggle');
  div2.classList.toggle('js-main-menu');
  div2.classList.toggle('main-menu');
  burger.classList.toggle('invisible');
  cross.classList.toggle('invisible');
  shape1.classList.toggle('color1');
  shape2.classList.toggle('color2');
}

menuToggle();

function checkemail() {
  const form = document.getElementById('contact-form');
  const email = form.elements['email'].value;
  let lower = email.toLowerCase();
  if (lower == email) {
    form.submit();
  }
  else {
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = document.createElement('aside');
    error.textContent = "Please make sure the email is all lower case";
    error.classList.add('error-popup');
    setTimeout(function(){
      error.classList.toggle('fade');
      }, 500);
    form.appendChild(error);
    });
  }
}
