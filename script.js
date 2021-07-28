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
  const email = form.elements.email.value;
  const re = /@/g;
  const lower = email.toLowerCase();
  // Check if email matches regex for email input
  if (re.test(String(email).toLowerCase()) === true) {
    if (lower === email) { // Check if email is lowercase
      form.submit(); // Submit if it's correct
    } else {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        const error = document.createElement('aside'); // Create container for error message
        error.textContent = 'Please make sure the email is all lower case'; // Error message
        error.id = 'error-popup'; // Add id to style the message
        setTimeout(() => {
          error.classList.add('fade'); // Add delay of 0.5s to not override class
        }, 500);
        form.appendChild(error);
        setTimeout(() => { // Delay for function to remove appended children
          const del = document.getElementById('error-popup');
          form.removeChild(del);
          del.parentNode.removeChild(del);
        }, 3500);
      });
    }
  }
}

checkemail();
