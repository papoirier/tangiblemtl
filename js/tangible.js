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
  };

function verticalAlign() {
  $('img.logo').each(function() {
    $(this).attr('height', $(this).height());
    // to center the image
    $("img.logo").css("top", (h/2) - ($(this).height()/2));
    $("img.logo").css("left", (w/2) - ($(this).width()/2));
  });
};

$(document).ready(function() {
	fully();
  // when window gets resized
  $(window).resize(function(){
  	fully();
  });

		// ---------------------------------------------------------------------------
		// load the content from JSON
		var content = null;
		var langChoice  = "fr_lang"; 
		
		$.getJSON("data/content.json", function(data) {
				content = data;
				console.log("JSON Content Loaded:"+data);
				
				var cookieLang = $.cookie('langChoice');
				if(cookieLang) {
					console.log("Cookie Loaded: "+cookieLang);
					langChoice = cookieLang;
				}
				else {
					$.cookie('langChoice', langChoice);
				}
				
				$("#lang_selector").val(langChoice);
				
				// figure out if the cookie saved is french or english
				setContent(langChoice); 
				
		});
		
		// ---------------------------------------------------------------------------
		// Lang Select Event
		$("#lang_selector").change(function() {
			langChoice  = $("#lang_selector").val();
			$.cookie('langChoice', langChoice);
			console.log("the language has been changed to: " + langChoice);
			setContent(langChoice); 	
		});
		
		// ---------------------------------------------------------------------------
		function setContent(lang) {
			var data = content;
			
			var inContainer = "> .container";
			var inRow = "> .row";
			var inFooter = "footer > .container > .row >";

			var inCol = "> .container > .row > .col-md-6";
			
			
			// reset content
			//$("#cover > .container > #site_title > .row").html("<div class=\"container\"><div class=\"row\"><div class=\"site_title\">");
			//$("#undercover.container > .row > .tagline").html("<div class=\"container\"><div class=\"row\"><div class=\"span6 tagline\"></div></div></div></div>");

			$("#undercover > .row > .tagline").html();
			
			//$("section").html("<div class=\"container\"></div>");

			var createDivs = "<div class=\"container\"><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-6\"></div><div class=\"col-md-3\"></div></div>";
			
			//$("section#cover").html(createDivs);			

			$("section#products").html(createDivs);
			$("section#realisations").html(createDivs);
			$("section#events").html(createDivs);
			$("section#services").html(createDivs);
			$("section#mission").html(createDivs);
			$("section#faq").html(createDivs);

			$("section#faq").html("<div class=\"container\"><h1></h1><ul></ul></div>");
			$("footer > .container > .row > .col-md-3").empty();
			
			/*
			// cover
			$("#cover").empty();
			// main content
			$("#products").empty();
			$("#realisations").empty();
			$("#events").empty();
			$("#services").empty();
			$("#mission").empty();
			$("#faq").empty();
			// footer
			$("#liens").empty();
			 */
			
			// ENGLISH ----------------------------------------------------------------			
			if(lang == "en_lang") {
				// cover
				$("#undercover > .row > .tagline").append('<h4>' + data.cover.tagline.en);
				// main content
				$("#products" + inCol).append('<h1>' + data.products.title.en + '</h1>');
				$("#realisations" + inCol).append('<h1>' + data.realisations.title.en + '</h1>');
				$("#events" + inCol).append('<h1>' + data.events.title.en + '</h1>');
				$("#services" + inCol).append('<h1>' + data.services.title.en + '</h1>');
				$("#mission" + inCol).append('<h1>' + data.mission.title.en + '</h1>');
				$("#faq" + inCol).append(data.faq.title.en);
				// footer
				$(inFooter + ".links").append('<h4>' + data.footer.links.title.en + '</h4>');
				$(inFooter + ".news").append('<h4>' + data.footer.news.title.en + '</h4>');
				$(inFooter + ".medias").append('<h4>' + data.footer.medias.title.en + '</h4>');
				$(inFooter + ".contact").append('<h4>' + data.footer.contact.title.en + '</h4>');
				
				// paragraphs
				for (var i = 0; i < data.products.copy.en.length; i++) {
					$("#products" + inCol).append('<p>' + data.products.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.realisations.copy.en.length; i++) {
					$("#realisations" + inCol).append('<p>' + data.realisations.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.events.copy.en.length; i++) {
					$("#events" + inCol).append('<p>' + data.events.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.services.copy.en.length; i++) {
					$("#services" + inCol).append('<p>' + data.services.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.mission.copy.en.length; i++) {
					$("#mission" + inCol).append('<p>' + data.mission.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.faq.copy.en.length; i++) {
					$("#faq" + inCol).append('<p>' + data.faq.copy.en[i] + '</p>');
				}
				// footer
				var openUl = $(inFooter + ".span3").append('<ul>');
				var closeUl = $(inFooter + ".span3").append('</ul>');
				openUl;
				for (var i = 0; i < data.footer.links.hyperlinks.en.length; i++) {
					$(inFooter + ".links > ul").append('<li>' + data.footer.links.hyperlinks.en[i] + '</li>');
				}
				closeUl;
				openUl;
				for (var i = 0; i < data.footer.news.hyperlinks.en.length; i++) {
					$(inFooter + ".news > ul").append('<li>' + data.footer.news.hyperlinks.en[i] + '</li>');
				}
				closeUl;	
				openUl;
				for (var i = 0; i < data.footer.medias.hyperlinks.en.length; i++) {
					$(inFooter + ".medias > ul").append('<li>' + data.footer.medias.hyperlinks.en[i] + '</li>');
				}
				closeUl;
			}
			// FRENCH -----------------------------------------------------------------
			else {
				// cover
				$("#undercover .row > .tagline").append('<h4>' + data.cover.tagline.fr);
				// main content
				$("#products" + inCol).append('<h1>' + data.products.title.fr + '</h1>');
				$("#realisations" + inCol).append('<h1>' + data.realisations.title.fr + '</h1>');
				$("#events" + inCol).append('<h1>' + data.events.title.fr + '</h1>');
				$("#services" + inCol).append('<h1>' + data.services.title.fr + '</h1>');;
				$("#mission" + inCol).append('<h1>' + data.mission.title.fr + '</h1>');
				$("#faq" + inCol + "> h1").append(data.faq.title.fr);
				// footer
				$(inFooter + ".links").append('<h4>' + data.footer.links.title.fr + '</h4>');
				$(inFooter + ".news").append('<h4>' + data.footer.news.title.fr + '</h4>');
				$(inFooter + ".medias").append('<h4>' + data.footer.medias.title.fr + '</h4>');
				$(inFooter + ".contact").append('<h4>' + data.footer.contact.title.fr + '</h4>');
				
				// paragraphs
				for (var i = 0; i < data.products.copy.fr.length; i++) {
					$("#products" + inCol).append('<p>' + data.products.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.realisations.copy.fr.length; i++) {
					$("#realisations" + inCol).append('<p>' + data.realisations.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.events.copy.fr.length; i++) {
					$("#events" + inCol).append('<p>' + data.events.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.services.copy.fr.length; i++) {
					$("#services" + inCol).append('<p>' + data.services.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.mission.copy.fr.length; i++) {
					$("#mission" + inCol).append('<p>' + data.mission.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.faq.copy.fr.length; i++) {
					$("#faq" + inCol + " > ul").append('<li>' + data.faq.copy.fr[i] + '</li>');
				}

				// footer
				var openUl = $(inFooter + ".col-md-3").append('<ul>');
				openUl;
				for (var i = 0; i < data.footer.links.hyperlinks.fr.length; i++) {
					$(inFooter + ".links > ul").append('<li>' + data.footer.links.hyperlinks.fr[i] + '</li>');
				}
				openUl;
				for (var i = 0; i < data.footer.news.hyperlinks.fr.length; i++) {
					$(inFooter + ".news > ul").append('<li>' + data.footer.news.hyperlinks.fr[i] + '</li>');
				}
				openUl;
				for (var i = 0; i < data.footer.medias.hyperlinks.fr.length; i++) {
					$(inFooter + ".medias > ul").append('<li>' + data.footer.medias.hyperlinks.fr[i] + '</li>');
				}	
			}

			// CONSTANT ----------------------------------------------------------------
			// site title
			$("#cover > .container > #site_title > .row").append('<h1>' + data.cover.site_title + '</h1>');
			// images
			for (var i = 0; i < data.products.images.length; i++) {
				$("#products" + inContainer).append('<img src=\"' + data.products.images[i] + '\" alt=\"product image\" title=\"product image\" class=\"img-responsive\">');
			}
			for (var i = 0; i < data.realisations.images.length; i++) {
				$("#realisations" + inContainer).append('<img src=\"' + data.realisations.images[i] + '\" alt=\"realisations image\" title=\"realisations image\" class=\"img-responsive\">');
			}
			// footer > contact
			openUl;
			for (var i = 0; i < data.footer.contact.copy.length; i++) {
				$(inFooter + ".contact > ul").append('<li>' + data.footer.contact.copy[i] + '</li>');
			}
		};
	  	
});