function check() {
  if (localStorage.getItem('storage')) {
    const items = localStorage.getItem('storage');
    const parsed = JSON.parse(items);
    const form = document.getElementById('contact-form');
    form.elements.name.value = parsed.name;
    form.elements.email.value = parsed.email;
    form.elements.message.value = parsed.text;
  }
}
window.onload = check;

function keypress() {
  const form = document.getElementById('contact-form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const text = form.elements.message.value;
  function populateStorage() {
    const storage = {
      name,
      email,
      text,
    };
    localStorage.setItem('storage', JSON.stringify(storage));
  }
  if (name === '' && email === '' && text === '') {
    localStorage.clear();
  } else {
    populateStorage();
  }
}
keypress();
