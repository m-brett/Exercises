/* Smooth Scroll between anchor links */
$(window).on('load', function() {
    $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
});
