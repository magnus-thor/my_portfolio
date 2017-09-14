// This is where it all goes :)
$(document).ready(function() {
  $('.hide_show').hide();

  $('ul a').click(function() {
    description = $(this).data('show');
    $('.description desc').text(description);
  })

  //
  // $('ul a').click(function() {
  //   $('p').hide();
  //   $('.hide_show')
  //   $(this.id).show();
  //   console.log(this.id);
  // })
});
