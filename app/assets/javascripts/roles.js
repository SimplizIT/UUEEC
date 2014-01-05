var roleSearch = function(){
  var $roles = $('.role_table_body tr');
  $('#role_search').keyup(function() {
    var re = new RegExp($(this).val(), "i"); // "i" means it's case-insensitive
    $roles.show().filter(function() {
        return !re.test($(this).find('td').text());
    }).hide();
  });
}

$(document).ready(roleSearch);
$(document).on('page:load', roleSearch);
