function menuToggle() {
    alert('hello');
    let div = document.querySelector('#main-nav-bar');
    let div2 = document.querySelector('#menu-js');
    div.classList.toggle('js-toggle');
    div2.classList.toggle('js-main-menu');
    div2.classList.toggle('main-menu');
}
