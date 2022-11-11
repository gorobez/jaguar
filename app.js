


// Meню бургер
const burgerIcon = document.querySelector('.burger__icon');
const menu = document.querySelector('.menu');
if (burgerIcon) {
    burgerIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerIcon.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}


// Прокрутка при кліку
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const buttons = document.querySelectorAll('.button[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClick);
    });



    function onMenuClick(e) {
        const menuLink = e.target;
        // Перевіряємо, чи обєкт на який ми клікнули має атрибут data goto і чи існує обєкт. який вказаний у значенні цього атрибуту
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            // Визначаємо скільки рх потрібно проскролиити до цього обєкта + кількість вже проскролених рх користувачем - висота шапки
            gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;


            // Якщо меню відкрите, то ми забираємо всі класи які додаються при відкритті меню
            if (burgerIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burgerIcon.classList.remove('_active');
                menu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

if (buttons.length > 0) {
    buttons.forEach(button => {
        button.addEventListener("click", onMenuClick);
    });
}



// =======================================
// Slider

new Swiper('.slider-page__slider', {
    navigation: {
        nextEl: '.slider-page__arrow--right',
        prevEl: '.slider-page__arrow--left',
    },

    autoHeight: true,
    spaceBetween: 30,

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 600,
    slidesPerView: 1,

    breakpoints: {

        320: {
            slidesPerView: 1.2,
            spaceBetween: 5,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    }

});


// Tel


let input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "ua",

});