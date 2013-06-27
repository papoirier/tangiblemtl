$(document).ready(function() {
	
	// when document first loads
  var h1 = $(window).height();
  var w1 = $(window).width();
  $('.full').css("height", h1);
  $('.full').css("width", w1);
  
  // when window gets resized
  $(window).resize(function(){
  	var h2 = $(window).height();
  	var w2 = $(window).width();
  	$('.full').css("height", h2);
  	$('.full').css("width", w2);
  	
  });
  
});