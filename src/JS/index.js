document.addEventListener('DOMContentLoaded', function () {
    function mobMenuInit() {
        const menu = document.querySelector('.header__menu');
        const menuBtn = document.querySelector(".header__burger");

        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        mobMenuOffsetInit();
    }

    function mobMenuOffsetInit () {
        const menu = document.querySelector('.header__menu');
        const header = document.querySelector('.header');

        menu.style.marginTop = header.clientHeight + 1 + 'px';
    }

    function headerOffsetInit() {
        const header = document.querySelector('.header');
        const firstSection = document.querySelector('main > section:first-child');

        firstSection.style.paddingTop = header.clientHeight + 'px';

    }

    headerOffsetInit();

    const modal = document.querySelector('.modal');
    const modalOpenBtn = document.querySelectorAll('.modal-open');
    const modalCloseBtn = document.querySelector('.modal-close');

    modalOpenBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            modal.classList.add('active');
        });
    })

    modalCloseBtn.addEventListener('click', function () {
        modal.classList.remove('active');
    });


    if (window.innerWidth < 992) {
        headerOffsetInit();
        mobMenuInit();
    }
});