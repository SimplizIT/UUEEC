var datePicker = function(){

  $('.datetimepickerevent').datetimepicker({
    language: 'en',
    pick12HourFormat: true,
    pickSeconds: false,
  });

  $('.datetimepickerobligation').datetimepicker({
    language: 'en',
    pick12HourFormat: true,
    pickSeconds: false,
  });

  if($('.datetimepickerobligation').length > 0){
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    $(".datetimepickerobligation.obligationStart").data('datetimepicker').setLocalDate(new Date(year, month, day, 08, 00));
    $(".datetimepickerobligation.obligationEnd").data('datetimepicker').setLocalDate(new Date(year, month, day, 12, 00));
  }

  // $('.sentance')
  //   .mouseenter(function(){
  //     $(this).toggleClass('ToGray ToWhite');
  //   })
  //   .mouseleave(function(){
  //     $(this).toggleClass('ToWhite ToGray');
  //   });
}


$(document).ready(datePicker);
$(document).on('page:load', datePicker);