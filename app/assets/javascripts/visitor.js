var visitorselect = function(){
  $('.selectpicker').selectpicker()
}

$(document).ready(visitorselect);
$(document).on('page:load', visitorselect);