// windowが860px以上だとメニューを表示。
$(function(){
  $(".toggle").click(function(){
    $(".menu").slideToggle(500);
    return false;
  });

  $(window).resize(function(){
    var win = $(window).width();
    var size = 860;
    if(win > size){
      $(".menu").show();
    } else {
      $(".menu").hide();
    }
  });
});