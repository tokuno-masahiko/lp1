$(function(){
  $(".js_menu_bar").click(function(){
    const navMenu = $('.sp_nav_menu')
    if(navMenu.css('display') === 'none'){
      navMenu.fadeIn();
    }else{
      navMenu.fadeOut();
    }
  });

  $(".section3_tag2").click(function(){
    $(".section3_wrapper1").css('display', 'none');
    $(".section3_wrapper2").css('display', 'block');
    $(".section3_tag2").css('background-color', '#f2f9ff');
    $(".section3_tag1").css('background-color', '#f0f0f0');
  });

  $(".section3_tag1").click(function(){
    $(".section3_wrapper2").css('display', 'none');
    $(".section3_wrapper1").css('display', 'block');
    $(".section3_tag1").css('background-color', '#f2f9ff');
    $(".section3_tag2").css('background-color', '#f0f0f0');
  });
});