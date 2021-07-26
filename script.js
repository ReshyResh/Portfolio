function menuToggle() {
    var mq = window.matchMedia( "(max-width: 1100px)");
    if (mq.matches) {
        let div = document.querySelector('#main-nav-bar');
        let div2 = document.querySelector('#menu-js');
        let burger = document.querySelector('#burger-container');
        let cross = document.querySelector('#cross');
        let shapes = document.querySelector('#shape-toggle');
        div.classList.toggle('js-toggle');
        div2.classList.toggle('js-main-menu');
        div2.classList.toggle('main-menu');
        burger.classList.toggle('invisible');
        cross.classList.toggle('invisible');
        shapes.classList.toggle('invisible');
    }
}
