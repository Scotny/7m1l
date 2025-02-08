var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      changeBackgroundColor(this.realIndex);
    },
  },
});

function changeBackgroundColor(index) {
  const colors = [
    "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)", // Watch 1
    "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)", // Watch 2
    "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)", // Watch 3
    "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)", // Watch 4
  ];
  document.body.style.background = colors[index];
}
