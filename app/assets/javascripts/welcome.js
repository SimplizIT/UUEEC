var datePicker = function(){
  $('.datepicker').datepicker({autoclose: true});

}


$(document).ready(datePicker);
$(document).on('page:load', datePicker);