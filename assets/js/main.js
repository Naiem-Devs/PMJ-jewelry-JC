$(document).ready(function () {


    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('#header__area').addClass('sticky')
        } else{
            $('#header__area').removeClass('sticky')
        }
    });
    
    
    $('.header__bar a, .overlay').click(function () {

        $('body').addClass('active');

    })

    



    $('.menu-close, .offcanvas-overlay').click(function (event) {
        event.preventDefault()

        $('body').removeClass('active');

    })
    $('.megaMobile_header a').click(function (event) {
        event.preventDefault()

        $('.megaMenu').removeClass('visible');

    })


    // view_all_text appendChild Img
    function createMenuItem() {
        let img = document.createElement('img');
        img.setAttribute("src", "assets/img/L_arrow_right.svg");
        return img;
    }
    
    const btns = document.querySelectorAll('.view_all_text a');
    
    btns.forEach(btn => {
      btn.appendChild(createMenuItem());
    })
        
    //PLP.html Mobile Mode bottom Fixed  filter_mobile 
    $('.Filter_btn').click(function (event) {
        event.preventDefault()
        $('.filter_content').addClass('active');
    })
    $('.close_x, .filter_btn .active').click(function () {
        $('.filter_content').removeClass('active');
    })

    $('.Category_btn').click(function (event) {
        event.preventDefault()
        $('.category_content').addClass('active');
    })
    $('.close_x, .filter_btn .active').click(function () {
        $('.category_content').removeClass('active');
    })

    $('.Sort_btn').click(function (event) {
        event.preventDefault()
        $('.sort_content').addClass('active');
    })
    $('.close_x, .filter_btn .active').click(function () {
        $('.sort_content').removeClass('active');
    })

    
$('.ring__slider').owlCarousel({
  loop: true,
  nav: false,
  navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
  dots: true,
  autoplay: false,
  smartSpeed: 1000,
  autoplayTimeout: 3500,
  items: 5,
  margin: 25,
  slideToScroll: 1,
  center: true,
  autoplayHoverPause: true,

  responsive: {
      0: {
          stagePadding: 0,
      },
      320: {
          items: 2,
          stagePadding: 0,
      },
      450: {
          items: 2,
          stagePadding: 0,
      },
      575: {
          items: 2,
          stagePadding: 0,
      },
      768: {
          items: 4,
          stagePadding: 0,
      },
      992: {
          items: 5,
          stagePadding: 0,
      },
      1200: {
          stagePadding: 0,
      },
      1360: {
          stagePadding: 0,
      },
      1449: {
          stagePadding: 0,
      },
      1500: {
          stagePadding: 0,
      },
      1600: {
          stagePadding: 0,
      },
      1700: {
          stagePadding: 150,
      }
  }

});


$('.Rings_btn').on('click', function(event){
    event.preventDefault()
    event.stopPropagation();
  
    $('.ringMenu').toggleClass('visible');
    $('.header__logo a img').attr("src", "assets/img/logo.svg");
    $(this).css('color', '#D8AE70');
  });
  
  $('body').on('click', function(){
    $('.ringMenu').removeClass('visible');
    $('.header__logo a img').attr("src", "assets/img/logo_white.svg");
    $('.Rings_btn').css('color', '#F3F1EE');
  });
  
  
  $('.ringMenu').on('click', function(event){
    event.stopPropagation();
  });
  


$('.Shop_btn').on('click', function(event){
    event.preventDefault()
    event.stopPropagation();
    $('.shopMenu').toggleClass('visible');
    $('.header__logo a img').attr("src", "assets/img/logo.svg");
    $(this).css('color', '#D8AE70');
  });
  
  $('body').on('click', function(){
    $('.shopMenu').removeClass('visible');
    $('.header__logo a img').attr("src", "assets/img/logo_white.svg");
    $('.Shop_btn').css('color', '#F3F1EE');
  });
  
  $('.shopMenu').on('click', function(event){
    event.stopPropagation();
  });


$('.Gifts_btn').on('click', function(event){
    event.preventDefault()
    event.stopPropagation();
    $('.GiftsMenu').toggleClass('visible');
    $('.header__logo a img').attr("src", "assets/img/logo.svg");
    $(this).css('color', '#D8AE70');
  });
  
  $('body').on('click', function(){
    $('.GiftsMenu').removeClass('visible');
    $('.header__logo a img').attr("src", "assets/img/logo_white.svg");
    $('.Gifts_btn').css('color', '#F3F1EE');
  });
  
  $('.GiftsMenu').on('click', function(event){
    event.stopPropagation();
  });
  

$('.pin_btn').on('click', function(event){
    event.preventDefault()
    event.stopPropagation();
    $('.pinCode').toggleClass('visible');
  });
  
  $('body').on('click', function(){
    $('.pinCode').removeClass('visible');
  });
  
  $('.pinCode').on('click', function(event){
    event.stopPropagation();
});
  

$('.search_btn').on('click', function(event){
    event.preventDefault()
    event.stopPropagation();
    $('.srcMenu').toggleClass('visible');
  });
  
  $('body').on('click', function(){
    $('.srcMenu').removeClass('visible');
  });
  
  $('.srcMenu').on('click', function(event){
    event.stopPropagation();
});


let srcInput =document.querySelector('.srcMenu_input input')

srcInput.addEventListener('click', () => {
  srcInput.parentElement.parentElement.classList.toggle('active')
})



$('.more__btn a').on('click', function(event){
    event.preventDefault()
    event.stopPropagation();
    $('.filter__left__blk').toggleClass('visible');
  });
  
  $('body').on('click', function(){
    $('.filter__left__blk').removeClass('visible');
  });
  
  $('.filter__left__blk').on('click', function(event){
    event.stopPropagation();
});

  


    $('.collection__carousel').owlCarousel({
        dots: true,
        loop: true,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 1,
        margin: 15,
        slideToScroll: 1,
        center: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 0,
            },
            575: {
                items: 1,
                stagePadding: 0,
            },
            768: {
                items: 1,
                stagePadding: 0,
            },
            992: {
                items: 1,
                stagePadding: 0,
            },
            1200: {
                stagePadding: 0,
            },
            1500: {
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }
    });


    var dots = document.querySelectorAll(".owl-dots .owl-dot");
    let i = 1;
    dots.forEach((elem) => {
        elem.innerHTML = i;
        i++;
    })



    // service__slide__blk
    $('.service__slide__blk').owlCarousel({
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 3,
        margin: 5,
        slideToScroll: 1,
        center: true,
        autoplayHoverPause: true,

        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 0,
            },
            450: {
                items: 2,
                stagePadding: 0,
            },
            575: {
                stagePadding: 0,
            },
            768: {
                items: 2,
                stagePadding: 0,
            },

            992: {
                items: 3,
                stagePadding: 0,
            },
            1100: {
                items: 2,
                stagePadding: 0,
            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }

    });



    // product__slide__blk
    $('.product__slide__blk').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 4,
        margin: 5,
        slideToScroll: 1,
        center: false,
        autoplayHoverPause: true,

        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 0,
            },
            450: {
                items: 2,
                stagePadding: 0,
            },
            575: {
                stagePadding: 0,
            },
            768: {
                items: 3,
                stagePadding: 0,
            },

            992: {
                items: 4,
                stagePadding: 0,
            },
            1100: {
                items: 4,
                stagePadding: 0,
            },
            1200: {
                items: 4,
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                items: 4,
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }

    });




    // teatimonial__blk
    $('.teatimonial__blk').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 3,
        margin: 25,
        slideToScroll: 1,
        center: true,
        autoplayHoverPause: true,

        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 0,
            },
            450: {
                items: 2,
                stagePadding: 0,
            },
            575: {
                stagePadding: 0,
            },
            768: {
                items: 2,
                stagePadding: 0,
            },
            992: {
                stagePadding: 0,
            },
            1200: {
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }

    });


    // teatimonial__blk
    $('.sngle__team__blk').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 3,
        margin: 25,
        slideToScroll: 1,
        center: true,
        autoplayHoverPause: true,

        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 0,
            },
            450: {
                items: 2,
                stagePadding: 0,
            },
            575: {
                stagePadding: 0,
            },
            768: {
                stagePadding: 0,
            },
            992: {
                stagePadding: 0,
            },
            1200: {
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }

    });


    // teatimonial__blk
    $('.brand__wrap').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 6,
        margin: 25,
        slideToScroll: 1,
        center: false,
        autoplayHoverPause: true,

        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 0,
            },
            450: {
                items: 1,
                stagePadding: 0,
            },
            575: {
                items: 2,
                stagePadding: 0,
            },
            768: {
                items: 4,
                stagePadding: 0,
            },
            992: {
                items: 6,
                stagePadding: 0,
            },
            1200: {
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }

    });


    // srcMenu_slider
    $('.srcMenu_slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class=""><img src="assets/img/L_arrow_left.svg" alt=""></i>',
          '<i class=""><img src="assets/img/L_arrow_right.svg" alt=""></i>'
        ],
        dots: false,
        autoplay: false,
        margin: 15,
        stagePadding: 0,
        slideToScroll: 1,
        center: true,
        autoplayHoverPause: true,
  
        responsive: {
          0: {
            stagePadding: 0,
            items: 2
          },
          500: {
            stagePadding: 0,
            items: 2
          },
          768: {
            stagePadding: 0,
            items: 3
          },
          992: {
            stagePadding: 0,
            items: 3
          },
          1200: {
            stagePadding: 0,
            items: 3
          },
          1500: {
            stagePadding: 0,
            items: 3
          }
        }
  
      });
  



    /*magnificPopup active*/
    $('.play__button').magnificPopup({
        type: 'iframe'

    });


    // COUNTER UP
    $('.counting').counterUp({
        delay: 10,
        time: 3000
    });


    // venobox 
    $(document).ready(function () {
        $('.venobox').venobox();
    });






    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            duration: 2000,
            topDistance: '5000', // Distance from top before showing element (px)
            topSpeed: 50, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 50, // Animation in speed (ms)
            animationOutSpeed: 50, // Animation out speed (ms)
            scrollText: ['<i class="fas fa-level-up-alt"></i>'], // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });



    function uploadFile(files) {
        console.log('Files:', files);
        console.log('Upload initial');
      }














});



