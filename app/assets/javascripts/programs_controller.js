var addChild = function(){
  $('#add_child_button').click(function(e){
    e.preventDefault();
  var child_field = $('#add_child').children().clone();


 
  // $(child_field).insertAfter('.add_child').last().show();
    $('#children_container').prepend(child_field).show();

  var variable = $(this).parent().find('select').first()
  $('input[type="text"]', child_field).each(function() {     
      $(this).val('');
    });
  $(variable).selectpicker('deselectAll');
  

    


  });

}

$(document).ready(addChild);
$(document).on('page:load', addChild);

// $((Math.random() * 9999) + 1).toString()