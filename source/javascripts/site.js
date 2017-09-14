// This is where it all goes :)
$(document).ready(function() {
  $('#myimage').hide();

   $(".button-collapse").sideNav({
     menuWidth: 200,
     closeOnClick: true
   });

  $('ul a').click(function() {
    text = $(this).data('show');
    picture = $(this).data('picture');
    $('.description desc').text(text);
    // $("#myimage").show().attr("src", picture)
  });
});
