$(document).ready(function () {



  // video //////////////////////////////////////////////////////////////////
  jQuery('.videoItem-js').on('click', function () {
    if (jQuery('iframe').attr('src') != jQuery(this).data('video')) {
      var video = jQuery(this).data('video');
      jQuery('iframe').attr('src', video);
    }
  });

  // video end //////////////////////////////////////////////////////////////////


  // slider //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.sliderNews-js', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper('.sliderPartners-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('.sliderCostumers-js', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });

  var swiper = new Swiper('.sliderReviews-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
    }
  });




  var galleryThumbs = new Swiper('.sliderTraining-thumbs', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });
  var galleryTop = new Swiper('.sliderTraining-js', {
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2300,
      disableOnInteraction: false,
    },
  });

  var galleryThumbs = new Swiper('.sliderTraining-thumbs2', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });
  var galleryTop = new Swiper('.sliderTraining2-js', {
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
  });



  // slider end //////////////////////////////////////////////////////////////////




  // mmenu //////////////////////////////////////////////////////////////////
  $('.mmenu-js ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    'navbar': {
      'title': '<img src=\'images/logo/logoHeader.png\' alt=\'\' />'
    },
    'extensions': [
      'pagedim-black',
      'position-right',
      'theme-dark'
    ],
    'counters': true,
    'iconbar': {
      'add': true,
      'top': [
        '<a href=\'/\'><i class=\'far fa-sign-in\'></i></a>'
      ],
      'bottom': [
        '<a target=\'_blank\' href=\'#\'><i class=\'fab fa-twitter\'></i></a>',
        '<a target=\'_blank\' href=\'#\'><i class=\'fab fa-facebook-f\'></i></a>',
        '<a target=\'_blank\' href=\'#\'><i class=\'fab fa-instagram\'></i></a>',
        '<a target=\'_blank\' href=\'#\'><i class=\'fab fa-youtube\'></i></a>'
      ]
    },
    // 'navbars': [{
    //   'position': 'bottom',
    //   'content': [
    //     '<a target=\'_blank\' class=\'\' href=\'#\'></a>',
    //     '<a target=\'_blank\' class=\'\' href=\'#\'></a>',
    //     '<a target=\'_blank\' class=\'\' href=\'#\'></a>',
    //     '<a target=\'_blank\' class=\'\' href=\'#\'></a>'
    //   ]
    // }]
  });

  var $icon = $('.flabHamburger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  API.bind('open:start', function ($panel) {
    $('.flabHamburger').toggleClass('flabHamburger--open');
  });

  API.bind('close:start', function ($panel) {
    $('.flabHamburger').toggleClass('flabHamburger--open');
  });



  // mmenu //////////////////////////////////////////////////////////////////



  // anchor links
  $('.mmenu-js ul li a').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({
        scrollTop: scrollTo + 'px'
      }, 800);
    }
  });
  // anchor links end









});
