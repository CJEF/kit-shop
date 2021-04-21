const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  paginationClickable: true,
});

// $(document).on("click", "#video-btn", function (e) {
//   //отменяем стандартное действие button
//   e.preventDefault();
//   var poster = $(this);
//   // ищем родителя ближайшего по классу
//   var wrapper = poster.closest("#video-wrap");
//   videoPlay(wrapper);
// });

// //вопроизводим видео, при этом скрывая постер
// function videoPlay(wrapper) {
//   var iframe = wrapper.find("#video-btn");
//   // Берем ссылку видео из data
//   var src = iframe.data("src");
//   // скрываем постер
//   wrapper.addClass("videoWrapperActive");
//   // подставляем в src параметр из data
//   iframe.attr("src", src);
// }


// youtube play btn (start video)

/**
 * Get videos on load
 */
(function () {
    getVideos();
})();

/**
 * For each video player, create custom thumbnail or
 * use Youtube max resolution default thumbnail and create
 * iframe video.
 */
function getVideos() {
    var v = $("#video-wrap:first")[0];
    console.log(v);
        var p = document.createElement("div");
        var id = v.getAttribute("data-id");

        var placeholder = v.hasAttribute("data-thumbnail")
            ? v.getAttribute("data-thumbnail")
            : "";

        if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
        else p.innerHTML = createThumbail(id);

        // v.appendChild(p);
        v.addEventListener("click", function () {
          var parent = $(this);
          var wrapper = $('.total-video')
          wrapper.addClass("videoWrapperActive");

          console.log(p);
          createIframe(v, v.getAttribute("data-id"));
        });
}

/**
 * Create custom thumbnail from data-attribute provided url
 * @param {string} url
 * @return {string} The HTML containing the <img> tag
 */
function createCustomThumbail(url) {
    return (
        '<img class="youtube-thumbnail" src="' +
        url +
        '" alt="Youtube Preview" /><div class="youtube-play-btn"></div>'
    );
}

/**
 * Get Youtube default max resolution thumbnail
 * @param {string} id The Youtube video id
 * @return {string} The HTML containing the <img> tag
 */
function createThumbail(id) {
    return (
      '<img class="youtube-thumbnail" src="./images/src/video-preview.png' +
      id +
      '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></div>'
    );
}

/**
 * Create and load iframe in Youtube container
 **/
function createIframe(v, id) {
    var iframe = document.createElement("iframe");
    console.log(v);
    iframe.setAttribute(
      "src",
      "//www.youtube.com/embed/" +
        id +
        "?list=PLwmxig-4_P7iijSsMEUTewYYlfQGg2Bd1&autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("class", "video-iframe");
    v.firstChild.replaceWith(iframe);
}

/** Pause video on modal close **/
// $("#video-modal").on("hidden.bs.modal", function (e) {
//     $(this).find("iframe").remove();
// });

// /** Pause video on modal close **/
// $("#video-modal").on("show.bs.modal", function (e) {
//     getVideos();
// });

AOS.init();
