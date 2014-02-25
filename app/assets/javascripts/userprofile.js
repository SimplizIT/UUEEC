userProfile = function () {

  $('.button_closeObligation').on('click', function(){
        $('#swapobligationmodal').modal('hide')
      });

  $('.swapobligation').on('click', function(){
    $('#swapobligationmodal').modal('show')
  });
}





$(document).ready(userProfile);
$(document).on('page:load', userProfile);
