$(document).ready(function() {
    var $body = $(document.body),
        $dropDownList = $('.dropdown-menu'),
        $navLink = $('.nav-link'),
        $mobileNav = $('#mob-nav'),
        $mobileDropDown = $('#navbarNavDropdown'),
        $slider = $('.slider__box');

// Active NavLink
    $navLink.on('click', function (e) {
        e.preventDefault(),
        $navLink.removeClass('navIsActive');
        if (($(this).data('bsToggle') == 'dropdown') && ($dropDownList.css('display') == 'none')){
            $dropDownList.show('slow'),
            $(this).addClass('navIsActive');
            return;
        }
        $dropDownList.hide('slow');
        $(this).addClass('navIsActive')
                .siblings()
                .removeClass('navIsActive');
        return;   
    });

   

// Mibile Menu
    $mobileNav.on('click', function () {
        $mobileDropDown.show('slow');
    })


    $slider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        dots: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,                
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  arrows: true,
                  dots: false,
                  
                }
              }
          ]
      });
});


