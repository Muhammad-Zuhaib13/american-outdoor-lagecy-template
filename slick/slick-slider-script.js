$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow:'<button class="slick-prev"> <i class="fa-solid fa-circle-arrow-left"></i> </button>',
    nextArrow:'<button class="slick-next"> <i class="fa-solid fa-circle-arrow-right"></i> </button>',
    
            responsive: [                        
                {
                  breakpoint: 576,
                  settings: {
                    centerMode: false,
                    variableWidth: false,
                  }
                },
            ]
  });
  
  
  var imgs = $('.slider img');
  imgs.each(function(){
    var item = $(this).closest('.item');
    item.css({
      'background-image': 'url(' + $(this).attr('src') + ')', 
      'background-position': 'center',            
      '-webkit-background-size': 'cover',
      'background-size': 'cover', 
    });
    $(this).hide();
  });