$().ready(function(){
  var clones = 0;
  $(".new-question").click(function(){
    ++clones;
  $(".parent").clone(true).removeClass('parent').attr('id',clones).appendTo(".surveyblock");
 });
  $('.remover').on('click', function(){
    if(!$(this).parent().hasClass('parent')){
      $(this).parent().remove();
    }
  })
})
       
