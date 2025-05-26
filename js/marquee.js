document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.marquee-gallery', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    }
  });
});