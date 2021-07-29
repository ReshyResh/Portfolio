function menuToggle() {
  document.getElementById('main-nav-bar').classList.toggle('js-toggle');
  document.getElementById('menu-js').classList.toggle('js-main-menu');
  document.getElementById('menu-js').classList.toggle('main-menu');
  document.getElementById('burger-container').classList.toggle('invisible');
  document.getElementById('cross').classList.toggle('invisible');
  document.getElementById('shape-1').classList.toggle('color1');
  document.getElementById('shape-2').classList.toggle('color2');
}

menuToggle();
