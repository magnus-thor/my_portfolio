// This is where it all goes :)
$(document).ready(function() {
  $('#logo').hide();
  $('#website_link').hide();

  $(".button-collapse").sideNav({
     menuWidth: 200,
     closeOnClick: true
   });

  $('ul a').click(function() {
    text = $(this).data('show');
    link = $(this).data('link');
    weblink = $(this).data('weblink');
    $('#logo').show();
    $('.description desc').text(text);
    $("#github_link").show().attr("href", link);
    $("#website_link").show().attr("href", weblink);
    if (weblink == "none") {
      $('#website_link').hide();
    }
    // $("#myimage").show().attr("src", picture)
  });
});
