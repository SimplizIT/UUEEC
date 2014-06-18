var addChild = function(){
  $('.add_person_fields').click(function(e){
    e.preventDefault();

      var variable = $(this).parent().parent().find('select').first();
      $(variable).selectpicker('deselectAll');
      var birthdate = $(this).parent().parent().find('.child_birthdate').first();
       $(birthdate).datetimepicker({
    format: "dd MM yyyy",
    startView: 4,
    minView: 2,
    autoclose: true,
    todayHighlight: false
    });
  });
}

$(document).ready(addChild);
$(document).on('page:load', addChild);

function remove_fields(link) {
  console.log('hellow')
  console.log(link)
  $(link).prev("input[type=hidden]").val("1");
  $(link).closest(".add_person").hide();
}

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).after(content.replace(regexp, new_id));
}