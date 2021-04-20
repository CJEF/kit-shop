const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

$(document).on("click", "#video-btn", function (e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest("#video-wrap");
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find("#video-btn");
  // Берем ссылку видео из data
  var src = iframe.data("src");
  // скрываем постер
  wrapper.addClass("videoWrapperActive");
  // подставляем в src параметр из data
  iframe.attr("src", src);
}
