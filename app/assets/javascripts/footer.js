var footerflowers = function(){

  $('#footeractivate')
    .mouseenter(function(){
      $('#simplizitfootericon').toggleClass('simplizitfootericonblue simplizitfootericonwhite');
      $('#grassmain').toggleClass('grassmainblue grassmaincolor');
    })
    .mouseleave(function(){
      $('#simplizitfootericon').toggleClass('simplizitfootericonwhite simplizitfootericonblue');
      $('#grassmain').toggleClass('grassmaincolor grassmainblue');  
    });

}

$(document).ready(footerflowers);
$(document).on('page:load', footerflowers);