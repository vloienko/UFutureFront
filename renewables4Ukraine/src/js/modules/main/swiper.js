const swiperNews = new Swiper('.news__swiper', {
   spaceBetween: 50,
   breakpoints: {
      320: {
         slidesPerView: 1.125,
         spaceBetween: 20,
      },
      631: {
         slidesPerView: 2.15,
         spaceBetween: 30,
      },
      1025: {
         slidesPerView: 3,
         spaceBetween: 50,
      }
   },
});



const swiperForm = new Swiper('.contact-form__swiper', {

   navigation: {
      nextEl: '.doc-next',
      prevEl: '.doc-prev',
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      521: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      769: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      1025: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
      1151: {
         slidesPerView: 4,
         spaceBetween: 88,
      }
   },
});