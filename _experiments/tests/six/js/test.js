/*
$(document).ready(function(){
    
  // checking if the window is being resized
  $(window).resize(function() {
   
	var h = $(window).height();
	$("div.yeah").css("height", h+"px");

	
	//passing the height attribute to the image
	$("div.yeah").attr("right-height");
  });
      
});
*/

$(document).ready(function() {
	
	// when document first loads
  var h1 = $(window).height();
  var w1 = $(window).width();
  $('.full').css("height", h1);
  //$('img.prop').css("height", h1);
  $('.full').css("width", w1);
  //$('body').css("height", h1);
  
  
  // checking if the image is tall or wide
  /*
  $('.yeah').find('img').each(function() {
  	var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
  	$(this).addClass(imgClass);
  });
  */
  
  
  // when window gets resized
  $(window).resize(function(){
  	var h2 = $(window).height();
  	var w2 = $(window).width();
  	$('.full').css("height", h2);
  	//$('img.prop').css("height", h2);
  	$('.full').css("width", w2);
  	//$('body').css("height", h2);
  	
  /*	
  	// checking if the image is tall or wide
  $('.yeah').find('img').each(function() {
  	var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
  	$(this).addClass(imgClass);
  });
  */
  	
  });
  
});