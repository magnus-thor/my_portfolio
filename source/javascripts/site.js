// This is where it all goes :)
$(document).ready(function() {
  $('.hide_show').hide();

  // $('ul a').click(function() {
  //   $(this.id).show();
  //   console.log(this.id);
  // })


  $('ul a').click(function() {
    $('p').show();
    // $('.hide_show')

    // $('desc_' + this.id).show();
    console.log(this.id);
  })
});
