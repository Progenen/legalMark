document.addEventListener('DOMContentLoaded', function () {
    function mobMenuInit() {
        const menu = document.querySelector('.header__menu');
        const menuBtn = document.querySelector(".header__burger");
        const menuLinks = document.querySelectorAll('.header__menu__link');

        menuBtn.addEventListener('click', (e) => {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        })


        menuLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        })
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

    const modals = document.querySelectorAll('.modal');
    const modalForm = document.querySelector('.modal-form');
    const modalThanks = document.querySelector('.modal-thanks');
    const modalOpenBtn = document.querySelectorAll('.modal-open');
    const modalCloseBtn = document.querySelectorAll('.modal-close');

    modalOpenBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            modalForm.classList.add('active');
        });
    })

    modalCloseBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            modals.forEach(modal => {
                modal.classList.remove('active');
            })
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        })
    })

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modalForm.classList.remove('active');
        modalThanks.classList.add('active');
    })


    if (window.innerWidth < 992) {
        headerOffsetInit();
        mobMenuInit();
    }
});