const gallerySection = ($) => {
  $(document).ready(function () {
    $('[data-fancybox="gallery_section"]').fancybox({
      loop: true,
      arrows: true,
      slideShow: true,
      keyboard: true,
      infobar: true,
      buttons: [
        "zoom",
        "share",
        "fullScreen",
        "download",
        "thumbs",
        "close"
      ],
      animationEffect: "fade",
      transitionEffect: "fade",
      transitionDuration: 500,
      idleTime: 3,
      protect: true,
    });
  });
};
gallerySection(jQuery);