// slike-slider
$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        }
    ]
});
// ham-menu
$('[data-mobile]').click(function() {
  $(this).toggleClass('active');
  let selector = $(this).attr('data-mobile');

  if (selector == 'close') {
      menuController('close');
      $('.icon-mobile').removeClass('active');
  } else {
      if ($(this).hasClass('active')) {
          menuController('open');
      } else {
          menuController('close');
      }
  }
});

function menuController(action) {
  if (action == 'open') {
      $('.overlay').addClass('active');
      $('.mobile-nav').addClass('active');
  } else {
      $('.overlay').removeClass('active');
      $('.mobile-nav').removeClass('active');
  }
}

// AOS
AOS.init();