// for the product image gallery
jQuery('#lightSlider').lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  slideMargin: 0,
  thumbItem: 6,
  galleryMargin: 10,
  thumbMargin: 10,
});

jQuery(function($) {
  // $("#countdown").addClass("uk-box-shadow-medium uk-padding-small");
  // add-to-cart
  $(".variations_form table").addClass("uk-table-small uk-table-divider uk-table-middle uk-table-justify uk-position-relative");
  $(".variations_form .button").addClass("uk-button-primary");
  // reviews tab
  $("ol.commentlist").addClass("uk-list uk-list-divider");
  // additional info tab
  $(".woocommerce-product-attributes").addClass("uk-table-small uk-table-divider uk-table-middle uk-table-justify");
  // add-to-cart
  $(".product-right .button").addClass("uk-button-primary");
  $("#ProductButtons .button").addClass("uk-button-primary");
  // stock
  $(".in-stock").addClass("uk-text-success");
  $(".out-of-stock").addClass("uk-text-danger");
  // tab heading
  $(".tab-content h2").addClass("uk-card-title");
});

jQuery(function(){
  // related swiper
  var related_swiper = new Swiper('#slideshow_related', {
    slidesPerView: 2,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: true,
    // },
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      // 960: {
      //   slidesPerView: 3,
      //   spaceBetween: 15,
      // },
      1290: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });
  // upsells swiper
  var upsells_swiper = new Swiper('#slideshow_upsells', {
    slidesPerView: 2,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: true,
    // },
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      // 960: {
      //   slidesPerView: 3,
      //   spaceBetween: 15,
      // },
      1290: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });
});