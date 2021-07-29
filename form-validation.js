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
          form.removeChild(document.getElementById('error-popup'));
        }, 3500);
      });
    }
  }
}

checkemail();
