$(document).ready(function() {
  
})

$(window).scroll(function() {
  if ($(document).scrollTop() == 0) {
    $('nav').removeClass('shrink');
  } else {
    $('nav').addClass('shrink');
  }
});
