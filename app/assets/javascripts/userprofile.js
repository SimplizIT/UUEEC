userProfile = function () {

  $('.button_closeObligation').on('click', function(){
      $('#swapobligationmodal' + $(this).data('partialid').toString()).modal('hide')
    });

  $('.button_closeObligation').on('click', function(){
      $('#viewswapobligationmodal' + $(this).data('partialid').toString()).modal('hide')
    });

  $('.button_closephoto').on('click', function(){
      $('#addphotomodal').modal('hide');
      destroyJcrop;
    });

  $('#addphotobutton').on('click', function(){
    $('#addphotomodal').modal('show');
    createJcrop();
  });

  $('.swapobligation').on('click', function(){
    $('#swapobligationmodal' + $(this).data('partialid').toString()).modal('show')
  });

  $('.viewswapobligation').on('click', function(){
    $('#viewswapobligationmodal' + $(this).data('partialid').toString()).modal('show')
  });
  
  if($('#uploadBtn').length){
    document.getElementById("uploadBtn").onchange = function () {
      document.getElementById("uploadFile").value = this.value;
    };
  };

  $('#new_application_wrapper form').on('ajax:success', function(e, data, status, xhr) {
    console.log(e)
  })

  createJcrop = function() {

    function createAvatar(){
      var avatar = new AvatarCropper();
    }

    function AvatarCropper() {
      $('#cropbox').Jcrop({
        aspectRatio: 1,
        setSelect: [0, 0, 300, 300],
        onSelect: this.update,
        onChange: this.update
      });
    };

    AvatarCropper.prototype.update = function(c) {
      $('#user_crop_x').val(c.x);
      $('#user_crop_y').val(c.y);
      $('#user_crop_w').val(c.w);
      $('#user_crop_h').val(c.h);
      callboth(c)
    };

    function callboth(c){
      return $('#previewphoto').css({
        width: Math.round(150 / c.w * $('#cropbox').width()) + 'px',
        height: Math.round(150 / c.h * $('#cropbox').height()) + 'px',
        marginLeft: '-' + Math.round(150 / c.w * c.x) + 'px',
        marginTop: '-' + Math.round(150 / c.h * c.y) + 'px'
      });
    }
    createAvatar();
  };

  destroyJcrop = function(){
    JcropAPI.destroy();
  }
};

$(document).ready(userProfile);
$(document).on('page:load', userProfile);
