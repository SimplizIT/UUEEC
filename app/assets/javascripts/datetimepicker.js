var datePicker = function(){

  $('.datetimepickers').datetimepicker({
    language: 'en',
    pick12HourFormat: true,
    pickSeconds: false,
  });

    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    $(".datetimepickers.obligationStart").data('datetimepicker').setLocalDate(new Date(year, month, day, 08, 00));
    $(".datetimepickers.obligationEnd").data('datetimepicker').setLocalDate(new Date(year, month, day, 12, 00));

  $('.sentance')
    .mouseenter(function(){
      $(this).toggleClass('ToGray ToWhite');
    })
    .mouseleave(function(){
      $(this).toggleClass('ToWhite ToGray');
    });


}


$(document).ready(datePicker);
$(document).on('page:load', datePicker);