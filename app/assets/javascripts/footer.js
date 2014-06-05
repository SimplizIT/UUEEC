var footerflowers = function(){

  $('#footeractivate')
  .mouseenter(function(){
    console.log('hello')
    $('#simplizitfootericonblue').fadeOut('slow');
    $('#simplizitfootericonwhite').fadeIn('slow');
    $('#grassmainblue').fadeOut('slow');
  })
  .mouseleave(function(){
    $('#simplizitfootericonwhite').fadeOut('slow');
    $('#simplizitfootericonblue').fadeIn('slow');
    $('#grassmainblue').fadeIn('slow');
  });
}

$(document).ready(footerflowers);
$(document).on('page:load', footerflowers);