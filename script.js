$(document).ready(function() {

  $(".mobile-topbar__dropdown-btn").click(function() {
    $(".dropdown-nav").toggle("blind");
    $(".mobile-topbar__arrow").toggleClass("mobile-topbar__arrow--hidden");
  });

  $(".accordion").accordion({active: 100, collapsible:true, heightStyle:"content"});

  $(".accordion__title").click(function() {
    $(this).toggleClass("accordion__title--active-panel");
    $(this).siblings().removeClass("accordion__title--active-panel");
  });

});
