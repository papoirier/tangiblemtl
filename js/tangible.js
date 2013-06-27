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
			
			// reset content
			$("section").empty();
			$("section").html("<div class=\"container\"></div>");
			$("#cover").html("<div class=\"container\"><div class=\"site_title\"></div></div>");
			$("#undercover.container > .row > .tagline").html("<div class=\"container\"><div class=\"row\"><div class=\"span6 tagline\"></div></div></div></div>");

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
				//$("#cover" + inContainer + " > .site_title").append('<h1>' + data.cover.site_title + '</h1>');
				$("#undercover.container > .row > .tagline").append('<h4>' + data.cover.tagline.en + '</h4>');
				// main content
				$("#products" + inContainer).append('<h1>' + data.products.title.en + '</h1>');
				$("#realisations" + inContainer).append('<h1>' + data.realisations.title.en + '</h1>');
				$("#events" + inContainer).append('<h1>' + data.events.title.en + '</h1>');
				$("#services" + inContainer).append('<h1>' + data.services.title.en + '</h1>');
				$("#mission" + inContainer).append('<h1>' + data.mission.title.en + '</h1>');
				$("#faq" + inContainer).append('<h1>' + data.faq.title.en + '</h1>');
				// footer
				//$("#liens").append('<h1>' + data.liens.title.en + '</h1>');
				
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
				//$("#liens").append('<h1>' + data.liens.title.fr + '</h1>');
				
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
			}
			
			// site title
			$("#cover" + inContainer + " > .site_title").append('<h1>' + data.cover.site_title + '</h1>');
			
			// language selector
			//$("#cover" + inContainer + " > .row > .language").append("<select id=\"lang_selector\"><option value=\"fr_lang\">Français</option><option value=\"en_lang\">English</option></select>");
			/*
			
			 */
			
			// images
			for (var i = 0; i < data.products.images.length; i++) {
				$("#products" + inContainer).append('<img src=\"' + data.products.images[i] + '\" alt=\"product image\" title=\"product image\">');
			}
			for (var i = 0; i < data.realisations.images.length; i++) {
				$("#realisations" + inContainer).append('<img src=\"' + data.realisations.images[i] + '\" alt=\"realisations image\" title=\"realisations image\">');
			}
		};
	  	
});