userProfile = function () {

  $('.button_closeObligation').on('click', function(){
        $('#swapobligationmodal').modal('hide')
      });

  $('.button_closeObligation').on('click', function(){
        $('#viewswapobligationsmodal').modal('hide')
      });

  $('.swapobligation').on('click', function(){
    $('#swapobligationmodal').modal('show')
  });

  $('.viewswapobligation').on('click', function(){
    $('#viewswapobligationsmodal').modal('show')
  });
}





$(document).ready(userProfile);
$(document).on('page:load', userProfile);
