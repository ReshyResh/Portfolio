function menuToggle() {
  const mq = window.matchMedia('(max-width: 1100px)');
  if (mq.matches) {
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
}
menuToggle();
