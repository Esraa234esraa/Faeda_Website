document.querySelectorAll('.btn-view-cv').forEach(button => {
    button.addEventListener('click', () => {
        alert('سيتم عرض السيرة الذاتية هنا');
    });
});
let swiper = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    grabCursor: true,
    breakpoints: {
        100: {
            slidesPerView: 1,

        },
        570: {
            slidesPerView: 2,

        },
        970: {
            slidesPerView: 3,

        }

    }
});
