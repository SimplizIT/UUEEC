var datePicker = function(){

  $('.datetimepickersss').datetimepicker({
    language: 'en',
    pick12HourFormat: true,
    pickSeconds: false,
  });

  $('.sentance')
    .mouseenter(function(){
      $(this).toggleClass('ToGray ToWhite');
    })
    .mouseleave(function(){
      $(this).toggleClass('ToWhite ToGray');
    });


  $('#datetimepicker1').datetimepicker({
    language: 'en',
    pick12HourFormat: true,
    pickSeconds: false,
  });


}


$(document).ready(datePicker);
$(document).on('page:load', datePicker);