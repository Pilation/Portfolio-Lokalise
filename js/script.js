$(document).ready(function () {
    $('.team-member').slick({
        // accessibility: true;
        arrows: false,
        dots: true,
        draggable: true,
        respondTo: 'window',
        // адаптивная высота
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear',
        infinite: true,
        // or false
        initialSlide: 0,
        // autoplay, при infinite - true
        autoplay: false,
        autoplaySpeed: 300,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        // перетягивание мышкой и телефон
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        // дождаться окончания анимации при переключении
        waitForAnimate: true,
        centerMode: true,
        // centerPadding: '-30px',
        // при true ширина не определяется автоматически, слайды слипаются вместе а те что не влезают, обрезаются сбоку
        variableWidth: true,
        // ряды
        // rows: 1,
        // slidesPerRow: 1,
        // 1 слайд как на презентации, листаются по 1 слайду онли
        fade: false,
        // переместить стрелки в див
        // appendArrows: $(".arws"),
        // переместить стрелки в див
        // appendDots: $(".arws"),
        // swipe: true,
        touchMove: true,
        // переключение слайдов с клика
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    slidePerRow: 1,

                }
            }

        ],
    });
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.category-quote__list').slick({
        arrows: true,
        dots: false,
        // адаптивная высота
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear',
        infinite: true,
        // or false
        initialSlide: 0,
        // autoplay, при infinite - true
        autoplay: false,
        autoplaySpeed: 300,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        // перетягивание мышкой и телефон
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        // дождаться окончания анимации при переключении
        waitForAnimate: true,
        centerMode: true,
        // centerPadding: '-30px',
        // при true ширина не определяется автоматически, слайды слипаются вместе а те что не влезают, обрезаются сбоку
        variableWidth: true,
        // ряды
        // rows: 1,
        // slidesPerRow: 1,
        // 1 слайд как на презентации, листаются по 1 слайду онли
        fade: false,
        // переместить стрелки в див
        appendArrows: $(".category-quote__arrows"),
        // переместить стрелки в див
        // appendDots: $(".arws"),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    slidePerRow: 1,
                }
            }

        ],
    });
    $('a[href^="#link"]').each(function () {
        var oldUrl = $(this).attr("href"); // Get current url
        var newUrl = oldUrl.replace("#link"); // Create new url
        $(this).attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Set herf value
    });
    // $(".redline__link").hover(function () {
    //     $(this).toggleClass("active");
    // });
});

var btn = $('.go-top-button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


