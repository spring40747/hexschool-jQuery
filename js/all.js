
//scroll-top//
$(document).ready(function () {
  $('.content-top > a').click(function(event){
  event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: 0, 
      },2000);
  });
});
//scroll-top  end//

//menu-drop-down//
$(document).ready(function () {
    $('.menu-list > li > a').click(function(event){
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
});
});
//menu-drop-down end//

//swiper-background//
$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // effect:'cube', ---圖片陰影--
        autoplay: {
            delay: 3000,
          },
        disableOnInteraction: false,
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
});
//swiper-background  end//

//light-box option//
$(document).ready(function() {
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true,
      'positionFromTop':400,
    })
});
//light-box option end//
