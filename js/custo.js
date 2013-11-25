// FULL SCREEN STUFF --------------------------------

function fully() {
    var h = $(window).height();
    var w = $(window).width();
    $('.full').css("min-height", h);
    $('.full').css("width", w);
    // menu
    $("header > #nav-container").css("height", (h*0.95));
    // intro
    $("#intro").css("height", h);
    $("#intro > div.container > div.row").css("height", (h*0.95));
    //$("#vision > div.container > div.vision-text").css("height", (h*0.95));
}

// for the Suites section
function suitesThirds() {
  var h = $(window).height();
  $(".one-third").css("min-height", h*(1/3));
  $(".two-thirds, .col").css("min-height", h*(2/3));
}

// ALIGNING STUFF ----------------------------------

function verticalAlign() {
  $('img.logo').each(function() {
    $(this).attr('height', $(this).height());
    // to center the image
    $("img.logo").css("top", (h/2) - ($(this).height()/2));
    $("img.logo").css("left", (w/2) - ($(this).width()/2));
  });
}

// COLUMNS ------------------------------------------

var numCols = 4;
function columnMaker() {
  var w = $(window).width();
  for (var i=0; i < numCols; i++) {
    $("#the-columns").append("<div class=\"a-col c" + (i+1) + "\">");
  };
}

// ANIMATIONS ---------------------------------------

// logo animation
function introAnimation() {
  // logo
  $( "#halo-logo" ).animate({ 
    "opacity": "+=1", 
  }, 
  1500, "swing" );

  // menu animation
  $( "nav.navbar" ).delay(1000).animate({ 
    "opacity": "+=1", 
  }, 
  400, "swing" );
}

// #connected-safety
function connectedSafetyAnimation() {
  $( "#face" ).animate({ 
    "padding-left": "+=40%" },
    "slow" );
}

// --------------------------------------------------------------------------------
// when document first loads
$(document).ready(function() {
  fully();
  suitesThirds();
  introAnimation();
  
  var yIntroPos = "";
  var yAboutPos = "";
  var yPartnerPos = "";
  var yVisionPos = "";
  var yConnectedSafety = "";
  var yGoodDrivingPos = "";
  var ySuitesPos = "";
  var yGalleryPos = "";
  var yParticipatePos = "";

  var yPosDiv = "";
  var yPosScroll = "";
  var bAnimated = false;

  // when window gets resized
  $(window).resize(function(){
    
    // header.navbar
    var introPos = $("#intro").position();
    var aboutPos = $("#about").position();
    var partnerPos = $("#partner").position();
    var visionPos = $("#vision").position();
    var connectedSafety = $("#connected-safety").position();
    var goodDrivingPos = $("#good-driving").position();
    var suitesPos = $("#suites").position();
    var galleryPos = $("#gallery").position();
    var participatePos = $("#participate").position();

    // changing the background color of the navbar

    // animation
    yPosDiv = connectedSafety.top;

    yIntroPos = introPos.top;
    yAboutPos = aboutPos.top;
    yPartnerPos = partnerPos.top;
    yVisionPos = visionPos.top;
    yConnectedSafety = connectedSafety.top;
    yGoodDrivingPos = goodDrivingPos.top;
    ySuitesPos = suitesPos.top;
    yGalleryPos = galleryPos.top;
    yParticipatePos = participatePos.top;

  	fully();
    suitesThirds();
  });

  $(window).trigger('resize');

  $(window).scroll(function() {
    yPosScroll = $(document).scrollTop();

    // animation
    if( (yPosScroll > (yPosDiv + 10)) && (bAnimated == false) ){
      connectedSafetyAnimation();
      bAnimated = true;
    }

    // navbar background color
    var pathToTextColor = "nav.navbar > #navcolor > .container > .navbar-collapse > .row > .col-md-8 > ul.nav > li > a";
    var pathToCaretColor = "nav.navbar > #navcolor > .container > .navbar-collapse > .row > .col-md-8 > ul.nav > li.dropdown > a.dropdown-toggle > b.caret";
    var pathToDropdown = "nav.navbar > #navcolor > .container > .navbar-collapse > .row > .col-md-8 > ul.nav > li.dropdown > ul.dropdown-menu";
    var pathToDropdownText = "nav.navbar > #navcolor  > .container > .navbar-collapse > .row > .col-md-8 > ul.nav > li.dropdown > ul.dropdown-menu > li";

    var pathToButtonColor = "nav.navbar > #navcolor > .container > .navbar-header > button";

    if(yPosScroll > yIntroPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("intro");
    }
    if(yPosScroll > yAboutPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("about");
    }
    if(yPosScroll > yPartnerPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("partner");
    }
    if(yPosScroll > yVisionPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("vision");
    }
    if(yPosScroll > yConnectedSafety) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("connected-safety");
    }
    if(yPosScroll > yGoodDrivingPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("good-driving");
    }
    if(yPosScroll > ySuitesPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("suites");
    }
    if(yPosScroll > yGalleryPos) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("gallery");
    }
    if(yPosScroll > (yParticipatePos -1)) {
      $("nav.navbar > #navcolor").attr("class", "");
      $("nav.navbar > #navcolor").addClass("participate");
    }

    // contrasting text color
    if( (yPosScroll > yConnectedSafety) || (yPosScroll > yGoodDrivingPos) ){
      $(pathToTextColor).addClass("bright-text");
      $(pathToCaretColor).addClass("bright");
      $(pathToDropdownText).addClass("bright-text");
      $(pathToButtonColor).addClass("dark-button");
    } 
    if ( (yPosScroll < yConnectedSafety) || (yPosScroll > ySuitesPos) ) {
      $(pathToTextColor).removeClass("bright-text");
      $(pathToCaretColor).removeClass("bright");
      $(pathToDropdownText).removeClass("bright-text");
      $(pathToButtonColor).removeClass("dark-button");
    }
  });

  
  
  // smooth scrolling
  $(function() {
    $('a[href*=#]:not([href=#], a[href=#carousel])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });


});