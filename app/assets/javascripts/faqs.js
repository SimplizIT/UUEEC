var faqpage = function(){

  $('.question-row.main').click(function(event){
    // console.log('question')
    // event.preventDefault();
    $(this).nextAll('.answer-row:first').toggle(100);
  });

  $('.tab-pane.active').tab('show');

  $('.faq-left-nav li').click(function(){
    console.log('nav')
    $('.faq-left-nav li').removeClass('active');
    $(this).find('a').tab('show');
    $(this).addClass('active');
    return false;
  });
};

$(document).ready(faqpage);
$(document).on('page:load', faqpage);