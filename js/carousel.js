var swiper = new Swiper('.container-banner', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        grabCursor: true,
  });

var swiperHotel = new Swiper('.container-hoteis', {
    slidesPerView: 1,
    spaceBetween: 1,
    breakpoints:{
        640:{
            slidesPerView: 2
        },
        992:{
            slidesPerView: 3
        },
        1322:{
            slidesPerView: 4
        },
        1622:{
            slidesPerView: 5
        }
    },
    navigation:{
        nextEl: '.swiper-button-next-hotel',
        prevEl: '.swiper-button-prev-hotel' 
    }
});

var swiperDestions = new Swiper('.swiper-destinos', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints:{
        640:{
            slidesPerView: 1
        },
        992:{
            slidesPerView: 2
        }
    },
    grabCursor: true,
    navigation:{
        nextEl: '.swiper-button-next-destino',
        prevEl: '.swiper-button-prev-destino'
    },
});


var swiperHotel = new Swiper('.swiper-servicos', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints:{
        640:{
            slidesPerView: 3
        },
        992:{
            slidesPerView: 3
        },
        1322:{
            slidesPerView: 4
        },
        1622:{
            slidesPerView: 5
        }
    },
    navigation:{
        nextEl: '.swiper-button-next-hotel',
        prevEl: '.swiper-button-prev-hotel' 
    }
});