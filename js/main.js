




// testimonial slider starts
$(document).ready(function() {

var i = 1;

var go = setInterval(function(){
    
$('#slider_'+i).show('slide', { direction: 'left' }, 4000).delay(0).hide('slide', { direction: 'left' }, 500);
    
            i++;
            if (i == 4) { i = 1}

         }, 6000)
});
// testimonial slider ends







$(window).scroll(function(){
  var sticky = $('.normal-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky-header');
  else sticky.removeClass('sticky-header');
});



$(".mobile-menu").click(function(){
    $(".mobile-menu-block").toggle(2000);
});