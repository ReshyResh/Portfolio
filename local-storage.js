window.onload = (event) => {
  if(!localStorage.getItem('storage')) {
    console.log("Storage empty");
  } else {
    let items = localStorage.getItem('storage');
    let parsed = JSON.parse(items);
    const form = document.getElementById('contact-form');
    form.elements.name.value = parsed.name;
    form.elements.email.value = parsed.email;
    form.elements.message.value = parsed.text;
    console.log("Storage has a name "+parsed.name);
    console.log("Storage has an email "+parsed.email);
    console.log("Storage has a comment "+parsed.text);
  }
};

function keypress() {
  const form = document.getElementById('contact-form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const text = form.elements.message.value;
  console.log(name,email,text);
  if(name === '' && email === '' && text === ''){
    localStorage.clear();
  }
  else {
    populateStorage();
  }

  function populateStorage() {
    console.log("Populating");
    let storage = {
      name: name,
      email: email,
      text: text
      }
    localStorage.setItem('storage', JSON.stringify(storage));
    console.log(storage);
  }
}
