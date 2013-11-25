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
			$("section#cover > .container > #site_title > .row").html("<div class=\"col-md-12\">");
			$("section#cover > .container > #undercover > .row > #tagline").html("<h4>");

			var createDivs = "<div class=\"container\"><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-6\"></div><div class=\"col-md-3\"></div></div>";
			
			//$("section#cover").html(createDivs);

			$("#about").html(createDivs);
			$("#services").html(createDivs);
			$("#felt").html(createDivs);
			$("#products").html(createDivs);
			$("#realisations").html(createDivs);
			$("#team").html(createDivs);
			$("#faq").html(createDivs);

			$("#faq").html("<div class=\"container\"><h1></h1><ul></ul></div>");
			$("footer > .container > .row > .col-md-3").empty();
			
			// ENGLISH ----------------------------------------------------------------			
			if(lang == "en_lang") {
				// cover
				$("#cover > .container > #undercover > .row > #tagline").append("<h4>" + data.cover.tagline.en);
				
				// main content
				//$("#about" + inCol).append('<h1>' + data.about.title.en + '</h1>');
				for (var i = 0; i < data.about.copy.en.length; i++) {
					$("#about" + inCol).append('<p>' + data.about.copy.en[i] + '</p>');
				}
				$("#services" + inCol).append('<h1>' + data.services.title.en + '</h1>');
				for (var i = 0; i < data.services.copy.en.length; i++) {
					$("#services" + inCol).append('<p>' + data.services.copy.en[i] + '</p>');
				}
				$("#felt" + inCol).append('<h1>' + data.felt.title.en + '</h1>');
				for (var i = 0; i < data.felt.copy.en.length; i++) {
					$("#felt" + inCol).append('<p>' + data.felt.copy.en[i] + '</p>');
				}
				$("#products" + inCol).append('<h1>' + data.products.title.en + '</h1>');
				for (var i = 0; i < data.products.copy.en.length; i++) {
					$("#products" + inCol).append('<p>' + data.products.copy.en[i] + '</p>');
				}
				$("#realisations" + inCol).append('<h1>' + data.realisations.title.en + '</h1>');
				for (var i = 0; i < data.realisations.copy.en.length; i++) {
					$("#realisations" + inCol).append('<p>' + data.realisations.copy.en[i] + '</p>');
				}
				$("#team" + inCol).append('<h1>' + data.team.title.en + '</h1>');
				for (var i = 0; i < data.team.copy.en.length; i++) {
					$("#team" + inCol).append('<p>' + data.team.copy.en[i] + '</p>');
				}
				$("#faq" + inCol).append('<h1>' + data.faq.title.en + '</h1>');
				for (var i = 0; i < data.faq.copy.en.length; i++) {
					$("#faq" + inCol).append('<p>' + data.faq.copy.en[i] + '</p>');
				}

				// footer
				$(inFooter + ".links").append('<h4>' + data.footer.links.title.en + '</h4>');
				$(inFooter + ".news").append('<h4>' + data.footer.news.title.en + '</h4>');
				$(inFooter + ".medias").append('<h4>' + data.footer.medias.title.en + '</h4>');
				$(inFooter + ".contact").append('<h4>' + data.footer.contact.title.en + '</h4>');

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
				$("#cover > .container > #undercover > .row > #tagline").append("<h4>" + data.cover.tagline.fr);
				
				// main content
				//$("#about" + inCol).append('<h1>' + data.about.title.fr + '</h1>');
				for (var i = 0; i < data.about.copy.fr.length; i++) {
					$("#about" + inCol).append('<p>' + data.about.copy.fr[i] + '</p>');
				}
				$("#services" + inCol).append('<h1>' + data.services.title.fr + '</h1>');
				for (var i = 0; i < data.services.copy.fr.length; i++) {
					$("#services" + inCol).append('<p>' + data.services.copy.fr[i] + '</p>');
				}
				$("#felt" + inCol).append('<h1>' + data.felt.title.fr + '</h1>');
				for (var i = 0; i < data.felt.copy.fr.length; i++) {
					$("#felt" + inCol).append('<p>' + data.felt.copy.fr[i] + '</p>');
				}
				$("#products" + inCol).append('<h1>' + data.products.title.fr + '</h1>');
				for (var i = 0; i < data.products.copy.fr.length; i++) {
					$("#products" + inCol).append('<p>' + data.products.copy.fr[i] + '</p>');
				}
				$("#realisations" + inCol).append('<h1>' + data.realisations.title.fr + '</h1>');
				for (var i = 0; i < data.realisations.copy.fr.length; i++) {
					$("#realisations" + inCol).append('<p>' + data.realisations.copy.fr[i] + '</p>');
				}
				$("#team" + inCol).append('<h1>' + data.team.title.fr + '</h1>');
				for (var i = 0; i < data.team.copy.fr.length; i++) {
					$("#team" + inCol).append('<p>' + data.team.copy.fr[i] + '</p>');
				}
				$("#faq" + inCol).append('<h1>' + data.faq.title.fr + '</h1>');
				for (var i = 0; i < data.faq.copy.fr.length; i++) {
					$("#faq" + inCol).append('<p>' + data.faq.copy.fr[i] + '</p>');
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
			$("#cover > .container > #site_title > .row > .col-md-12").append('<h1>' + data.cover.site_title);
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