$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-menu,.wrapper,.header__buttons').toggleClass('active');
        $('body').toggleClass('lock');
    });

});

var btn = $('.go-top-button');

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

const animItems = document.querySelectorAll('.anim-scroll');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            // возможно поставить один
            const animStart = 10;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            // добавляем и убираем Active
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('anim-scroll-active');
            } else {
                if (!animItem.classList.contains('anim-scroll-no-hide')) {
                    animItem.classList.remove('anim-scroll-active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
