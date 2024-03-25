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
    spaceBetween: 10,
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
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints:{
        469:{
            slidesPerView: 2
        },
        640:{
            slidesPerView: 2
        },
        912:{
            slidesPerView: 3
        },
        1270:{
            slidesPerView: 4
        },
    
    },
    navigation:{
        nextEl: '.swiper-button-next-servico',
        prevEl: '.swiper-button-prev-servico' 
    }
});

var swiperHotel = new Swiper('.swiper-qualidade', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints:{
        469:{
            slidesPerView: 1
        },
        640:{
            slidesPerView: 1
        },
        912:{
            slidesPerView: 2
        },
        1270:{
            slidesPerView: 2
        },
    
    },
    navigation:{
        nextEl: '.swiper-button-next-qualidade',
        prevEl: '.swiper-button-prev-qualidade' 
    }
});

var swiperHotel = new Swiper('.swiper-depoimentos', {
    slidesPerView: '1',
    spaceBetween: 10,
    autoHeight: true,
    breakpoints:{
        469:{
            slidesPerView: 1
        },
        640:{
            slidesPerView: 1
        },
        912:{
            slidesPerView: 1
        },
        1270:{
            slidesPerView: 3
        },
    },
    navigation:{
        nextEl: '.swiper-button-next-depoimentos',
        prevEl: '.swiper-button-prev-depoimentos' 
    }
    
});

var swiperPasseio = new Swiper('.container-passeios', {
    slidesPerView: '1',
    spaceBetween: 10,
    autoHeight: true,
    breakpoints:{
        469:{
            slidesPerView: 1
        },
        640:{
            slidesPerView: 1
        },
        912:{
            slidesPerView: 2
        },
        1270:{
            slidesPerView: 3
        },
    },
    navigation:{
        nextEl: '.swiper-button-next-passeios',
        prevEl: '.swiper-button-prev-passeios' 
    }
    
});