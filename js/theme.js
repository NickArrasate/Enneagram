$(document).ready(function () {

// team page functions
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) { // this refers to window
      $(".member1").addClass('member-1');
      $(".member2").addClass('member-2');
      $(".member3").addClass('member-3');
      $(".member4").addClass('member-4');
      $(".member5").addClass('member-5');
      $(".member6").addClass('member-6');
    }
});

  $('.member1 img').click(function() {
    $(".member1").toggleClass('expanded');
  });
  $(".member1 .content").hover(function() {
    $(".member1").toggleClass("expanded");
  });
  $('.member2 img').click(function() {
    $(".member2").toggleClass('expanded');
  });
  $(".member2 .content").hover(function() {
    $(".member2").toggleClass("expanded");
  });
  $('.member3 img').click(function() {
    $(".member3").toggleClass('expanded');
  });
  $(".member3 .content").hover(function() {
    $(".member3").toggleClass("expanded");
  });
  $('.member4 img').click(function() {
    $(".member4").toggleClass('expanded');
  });
  $(".member4 .content").hover(function() {
    $(".member4").toggleClass("expanded");
  });
  $('.member5 img').click(function() {
    $(".member5").toggleClass('expanded');
  });
  $(".member5 .content").hover(function() {
    $(".member5").toggleClass("expanded");
  });
  $('.member6 img').click(function() {
    $(".member6").toggleClass('expanded');
  });
  $(".member6 .content").hover(function() {
    $(".member6").toggleClass("expanded");
  });
  $('.member1 img').hover(function() {
    $(".member1").toggleClass('expanded');
  });
  $('.member2 img').hover(function() {
    $(".member2").toggleClass('expanded');
  });
  $('.member3 img').hover(function() {
    $(".member3").toggleClass('expanded');
  });
  $('.member4 img').hover(function() {
    $(".member4").toggleClass('expanded');
  });
  $('.member5 img').hover(function() {
    $(".member5").toggleClass('expanded');
  });
  $('.member6 img').hover(function() {
    $(".member6").toggleClass('expanded');
  });

// animate icon/img appearance on scroll
$(window).scroll(function() {
  $('.animateEntry').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).addClass("animated fadeInUp");
    }
  });
  $('.animateEntryLeft').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).addClass("animated fadeInLeft");
    }
  });
  $('.animateEntryRight').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $(this).addClass("animated fadeInRight");
    }
  });
});

});
