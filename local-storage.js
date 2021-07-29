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