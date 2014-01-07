var datePicker = function(){

$('.datetimepickersss').datetimepicker({
      language: 'en',
      pick12HourFormat: true,
      pickSeconds: false,
    });

$('#datetimepicker1').datetimepicker({
      language: 'en',
      pick12HourFormat: true,
      pickSeconds: false,
    });
}


$(document).ready(datePicker);
$(document).on('page:load', datePicker);