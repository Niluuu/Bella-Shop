$( document ).ready(function() {
  // $('.dropdown').hover(function(){ 
  //   $('.dropdown-toggle', this).trigger('click'); 
  // });

  $('.footer a').hover(function(e){ 
    var e = $(event.target)
    e.find(".fa-arrow-circle-right").addClass("animated bounceIn");
    setTimeout(function() { 
      e.find(".fa-arrow-circle-right").removeClass("animated  bounceIn");
    }, 1000);
  });

  $('.thumbnail').hover(function(e){ 
    var e = $(event.target)
    e.find(".btn-theme-dark").addClass("animated bounceIn");
    setTimeout(function() { 
      $(".btn-theme-dark").removeClass("animated  bounceIn");
    }, 1000);
  });
  
  $('.thumbnail').mouseleave(function(e){ 
    var e = $(event.target)
    e.find(".btn-theme-dark").removeClass("animated  bounceIn");
  });

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  $('#to-top').click(function () {
    scrollToTop()
  });

  $('.product').hover(function(e){  
    $('.product').find(".icon-view").addClass("animated bounceIn");
  });

  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  $('.single-item').slick(); 
 
  $(".menu-toggle").click(function () {
    $(".navigation").toggle()
  });
  $(".menu-toggle-close").click(function () {
    $(".navigation").toggle()
  });
  
  $(".widget-content li").click(function () {
      $(this).find(".children").toggle( "slow" );
  });

});

$(document).ready(function() {
  var $navbar = $("header");

  
  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
      AdjustHeader();
  });
  
  function AdjustHeader(){
    if ($(window).scrollTop() > 60) {
      if (!$navbar.hasClass("navbar-fixed-top")) {
        $navbar.addClass("navbar-fixed-top");
        $(".to-top").css({"bottom": "15px"});
      }
    } else {
      $navbar.removeClass("navbar-fixed-top");
      $(".to-top").css({"bottom": "-100px"});
    }
  }
});

$(document).on("click", ".product", function () {
  var myImageId = $(this).data('id');
  $(".modal-body #myImage").attr("src", myImageId);
});



