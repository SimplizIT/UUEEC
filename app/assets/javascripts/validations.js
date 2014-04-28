var USphone = function(){
  var key_code = [8, 37, 39]
  $('.phone').keyup(function(e){
    for (var i=0; i<key_code.length; i++){
      if(e.keyCode == key_code[i]){
        return
      }else{
        var strokes = $(this).val().length;
        if(strokes === 3 || strokes === 7){
          var thisVal = $(this).val();
          thisVal += '-';
          $(this).val(thisVal);
        }
      }
    }
  });
};

var CellPhone = function(){
  $('.phone').keyup(function(e){
    // var cellphone = document.getElementById(e);
    if(this.validity.valid == true && $(this).val().length > 0){
      if($('#textswitch div').hasClass('deactivate')){
        $('#textswitch div').removeClass('deactivate');
        $('#textswitch input').removeAttr('disabled');
        $('#textswitch input').val('enabled');
      }else{
        return
      }
    }else{
      $('#textswitch div').removeClass('switch-on').addClass('switch-off');
      $('#textswitch div').addClass('deactivate');
      $('#textswitch input').attr('disabled', 'true');
      $('#textswitch input').val('disabled');
    }
  });
};

var Email = function(){
  $('#email').keyup(function(e){
    var email = document.getElementById('email');
    if(email.validity.valid == true && $(email).val().length > 0 ){
      if($('#emailswitch div').hasClass('deactivate')){
        $('#emailswitch div').removeClass('deactivate');
        $('#emailswitch input').removeAttr('disabled');
        $('#emailswitch input').val('enabled');
      }else{
        return
      }
    }else{
      $('#emailswitch div').removeClass('switch-on').addClass('switch-off');
      $('#emailswitch div').addClass('deactivate');
      $('#emailswitch input').attr('disabled', 'true');
      $('#emailswitch input').val('disabled');
    }
  });
};

var formInputValidity = function(){
  $('.patient_contact_form input').keyup(function(e){
    console.log(!$(this).val())
    if($(this).validity.valid == false && !$(this).val() == false){
      $(this).addClass('input-error')
    }else{
      $(this).removeClass('input-error')
    }
  })
}

var dob = function(){
  var key_code = [8, 37, 39]
  $('.DOB').keyup(function(e){
    for (var i=0; i<key_code.length; i++){
      if(e.keyCode == key_code[i]){
        return
      }else{
        var strokes = $(this).val().length;
        if(strokes === 2 || strokes === 5){
          var thisVal = $(this).val();
          thisVal += '/';
          $(this).val(thisVal);
        }
      }
    }
  });
};


$(document).ready(USphone);
$(document).on('page:load', USphone);