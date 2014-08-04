var faqpage = function(){

  $('.question-row').click(function(){
     $(this).next('.answer-row').toggle(300);
  })

  $('.tab-pane.active').tab('show')


  $('.faq-left-nav li').click(function(){
    $(this).find('a').tab('show');
    return false;
  })
}

$(document).ready(faqpage);
$(document).on('page:load', faqpage);