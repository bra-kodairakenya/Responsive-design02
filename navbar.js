$(function(){
  $(".toggle").click(function(){
    $(".menu").slideToggle(10);
    return false;
  });

  $(window).resize(function(){
    var win = $(window).width();
    var size = 767;
    if(win > size){
      $(".menu").show();
    } else {
      $(".menu").hide();
    }
  });
});