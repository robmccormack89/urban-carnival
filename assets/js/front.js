jQuery(function($) {
  
  // shop stuff
  function WooShop() {
    $("#ProductButtons .button").addClass("uk-button-small uk-button-primary");
    $(".onsale").addClass("uk-card-badge uk-label");
  };
  // on load
  $("#MainContent").load(WooShop());
  // on dom modified
  $("body").on('DOMSubtreeModified', "main", WooShop);
  
});

jQuery(function(){
  
  // banner swiper
  var slider_swiper = new Swiper('#slideshow_banner', {
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  var winners_recent = new Swiper('#slideshow_rrecent', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }
  });
  
  // featured products swiper
  var winners_swiper = new Swiper('#slideshow_winners', {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    }
  });
  
});