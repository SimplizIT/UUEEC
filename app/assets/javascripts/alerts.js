var alertShow = function(){

  if($('.alert-success').length > 0){
    alertify.success($('.alert-success').text());
    $('.alert-success').remove();
  }

  if($('.alert-info').length > 0){
    alertify.log($('.alert-info').text());
    $('.alert-info').remove();
  }

  if($('.alert-error').length > 0){
    alertify.error($('.alert-error').text());
    $('.alert-error').remove();
  }
}

$(document).ready(alertShow);
$(document).on('page:load', alertShow);
