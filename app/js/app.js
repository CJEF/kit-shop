// swiper

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  paginationClickable: true,
});

// AOS

AOS.init();

// video

$("#video-wrap").on("click", function (e) {
  e.preventDefault();
  $("#video-iframe:first")[0].src += "&autoplay=1";
  $("#video-iframe").show();
  $(".videoPoster").hide();
  $("#video-btn").hide();
  $(".total-video__label").hide();
  $(".total-video__cite").hide();
  $(".total-video__top").hide();
});
