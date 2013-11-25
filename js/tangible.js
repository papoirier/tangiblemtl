// FULL SCREEN STUFF --------------------------------

function fully() {
    var h = $(window).height();
    var w = $(window).width();
    $('.full').css("min-height", h);
    $('.full').css("width", w);
    // menu
    $("header > #nav-container").css("height", (h*0.95));
    // intro
    $("#cover").css("height", h);
    $("#cover > div.container > div.align-out").css("height", (h*0.95));
}

// for the Suites section
function suitesThirds() {
  var h = $(window).height();
  $(".one-third").css("min-height", h*(1/3));
  $(".two-thirds, .col").css("min-height", h*(2/3));
}

// ANIMATIONS ---------------------------------------

function introAnimation() {
  $( "#halo-logo" ).animate({ 
    "opacity": "+=1", 
  }, 
  1500, "swing" );

  $( "nav.navbar" ).delay(1000).animate({ 
    "opacity": "+=1", 
  }, 
  400, "swing" );
}

// --------------------------------------------------------------------------------

$(document).ready(function() {
  fully();
  introAnimation();
  

  // -----------------------------------
  $(window).resize(function(){
    fully();
    
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
