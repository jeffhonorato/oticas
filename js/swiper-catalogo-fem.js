var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    coverflowEffect: {
      rotate: 10,
      stretch: 2,
      depth: 90,
      modifier: 8,
      slideShadows: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });