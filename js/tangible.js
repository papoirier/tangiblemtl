$(document).ready(function() {

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
			
			
			// reset content
			$("#cover").html("<div class=\"container\"><div class=\"site_title\"></div></div>");
			$("#undercover.container > .row > .tagline").html("<div class=\"container\"><div class=\"row\"><div class=\"span6 tagline\"></div></div></div></div>");
			$("section").html("<div class=\"container\"></div>");
			$("footer > .container > .row > .span3").empty();
			
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
				$("#undercover.container > .row > .tagline").append('<h4>' + data.cover.tagline.en + '</h4>');
				// main content
				$("#products" + inContainer).append('<h1>' + data.products.title.en + '</h1>');
				$("#realisations" + inContainer).append('<h1>' + data.realisations.title.en + '</h1>');
				$("#events" + inContainer).append('<h1>' + data.events.title.en + '</h1>');
				$("#services" + inContainer).append('<h1>' + data.services.title.en + '</h1>');
				$("#mission" + inContainer).append('<h1>' + data.mission.title.en + '</h1>');
				$("#faq" + inContainer).append('<h1>' + data.faq.title.en + '</h1>');
				// footer
				$(inFooter + ".links").append('<h4>' + data.footer.links.title.en + '</h4>');
				$(inFooter + ".news").append('<h4>' + data.footer.news.title.en + '</h4>');
				$(inFooter + ".medias").append('<h4>' + data.footer.medias.title.en + '</h4>');
				$(inFooter + ".contact").append('<h4>' + data.footer.contact.title.en + '</h4>');
				
				// paragraphs
				for (var i = 0; i < data.products.copy.en.length; i++) {
					$("#products" + inContainer).append('<p>' + data.products.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.realisations.copy.en.length; i++) {
					$("#realisations" + inContainer).append('<p>' + data.realisations.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.events.copy.en.length; i++) {
					$("#events" + inContainer).append('<p>' + data.events.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.services.copy.en.length; i++) {
					$("#services" + inContainer).append('<p>' + data.services.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.mission.copy.en.length; i++) {
					$("#mission" + inContainer).append('<p>' + data.mission.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.faq.copy.en.length; i++) {
					$("#faq" + inContainer).append('<p>' + data.faq.copy.en[i] + '</p>');
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
				$("#undercover.container > .row > .tagline").append('<h4>' + data.cover.tagline.fr + '</h4>');
				// main content
				$("#products" + inContainer).append('<h1>' + data.products.title.fr + '</h1>');
				$("#realisations" + inContainer).append('<h1>' + data.realisations.title.fr + '</h1>');
				$("#events" + inContainer).append('<h1>' + data.events.title.fr + '</h1>');
				$("#services" + inContainer).append('<h1>' + data.services.title.fr + '</h1>');;
				$("#mission" + inContainer).append('<h1>' + data.mission.title.fr + '</h1>');
				$("#faq" + inContainer).append('<h1>' + data.faq.title.fr + '</h1>');
				// footer
				$(inFooter + ".links").append('<h4>' + data.footer.links.title.fr + '</h4>');
				$(inFooter + ".news").append('<h4>' + data.footer.news.title.fr + '</h4>');
				$(inFooter + ".medias").append('<h4>' + data.footer.medias.title.fr + '</h4>');
				$(inFooter + ".contact").append('<h4>' + data.footer.contact.title.fr + '</h4>');
				
				// paragraphs
				for (var i = 0; i < data.products.copy.fr.length; i++) {
					$("#products" + inContainer).append('<p>' + data.products.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.realisations.copy.fr.length; i++) {
					$("#realisations" + inContainer).append('<p>' + data.realisations.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.events.copy.fr.length; i++) {
					$("#events" + inContainer).append('<p>' + data.events.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.services.copy.fr.length; i++) {
					$("#services" + inContainer).append('<p>' + data.services.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.mission.copy.fr.length; i++) {
					$("#mission" + inContainer).append('<p>' + data.mission.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.faq.copy.fr.length; i++) {
					$("#faq" + inContainer).append('<p>' + data.faq.copy.fr[i] + '</p>');
				}
				// footer
				var openUl = $(inFooter + ".span3").append('<ul>');
				var closeUl = $(inFooter + ".span3").append('</ul>');
				openUl;
				for (var i = 0; i < data.footer.links.hyperlinks.fr.length; i++) {
					$(inFooter + ".links > ul").append('<li>' + data.footer.links.hyperlinks.fr[i] + '</li>');
				}
				closeUl;
				openUl;
				for (var i = 0; i < data.footer.news.hyperlinks.fr.length; i++) {
					$(inFooter + ".news > ul").append('<li>' + data.footer.news.hyperlinks.fr[i] + '</li>');
				}
				closeUl;	
				openUl;
				for (var i = 0; i < data.footer.medias.hyperlinks.fr.length; i++) {
					$(inFooter + ".medias > ul").append('<li>' + data.footer.medias.hyperlinks.fr[i] + '</li>');
				}
				closeUl;			
			}
			// CONSTANT ----------------------------------------------------------------
			// site title
			$("#cover" + inContainer + " > .site_title").append('<h1>' + data.cover.site_title + '</h1>');
			// images
			for (var i = 0; i < data.products.images.length; i++) {
				$("#products" + inContainer).append('<img src=\"' + data.products.images[i] + '\" alt=\"product image\" title=\"product image\">');
			}
			for (var i = 0; i < data.realisations.images.length; i++) {
				$("#realisations" + inContainer).append('<img src=\"' + data.realisations.images[i] + '\" alt=\"realisations image\" title=\"realisations image\">');
			}
			// footer > contact
			openUl;
			for (var i = 0; i < data.footer.contact.copy.length; i++) {
				$(inFooter + ".contact > ul").append('<li>' + data.footer.contact.copy[i] + '</li>');
			}
			closeUl;
		};
	  	
});