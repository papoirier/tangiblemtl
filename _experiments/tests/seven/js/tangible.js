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
			
			//$("section").empty();
			
			// ENGLISH ----------------------------------------------------------------
			if(lang == "en_lang") {
				// cover
				$("#cover").append('<h1>' + data.cover.site_title + '</h1>');
				$("#cover").append('<h2>' + data.cover.tagline.en + '</h2>');
				// main content
				$("#products").append('<h1>' + data.products.title.en + '</h1>');
				$("#realisations").append('<h1>' + data.realisations.title.en + '</h1>');
				$("#events").append('<h1>' + data.events.title.en + '</h1>');
				$("#services").append('<h1>' + data.services.title.en + '</h1>');
				$("#mission").append('<h1>' + data.mission.title.en + '</h1>');
				$("#faq").append('<h1>' + data.faq.title.en + '</h1>');
				// footer
				//$("#liens").append('<h1>' + data.liens.title.en + '</h1>');
				
				// paragraphs
				for (var i = 0; i < data.products.copy.en.length; i++) {
					$("#products").append('<p>' + data.products.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.realisations.copy.en.length; i++) {
					$("#realisations").append('<p>' + data.realisations.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.events.copy.en.length; i++) {
					$("#events").append('<p>' + data.events.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.services.copy.en.length; i++) {
					$("#services").append('<p>' + data.services.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.mission.copy.en.length; i++) {
					$("#mission").append('<p>' + data.mission.copy.en[i] + '</p>');
				}
				for (var i = 0; i < data.faq.copy.en.length; i++) {
					$("#faq").append('<p>' + data.faq.copy.en[i] + '</p>');
				}
			}
			// FRENCH -----------------------------------------------------------------
			else {
				// cover
				$("#cover").append('<h1>' + data.cover.site_title + '</h1>');
				$("#cover").append('<h2>' + data.cover.tagline.fr + '</h2>');
				// main content
				$("#products").append('<h1>' + data.products.title.fr + '</h1>');
				$("#realisations").append('<h1>' + data.realisations.title.fr + '</h1>');
				$("#events").append('<h1>' + data.events.title.fr + '</h1>');
				$("#services").append('<h1>' + data.services.title.fr + '</h1>');;
				$("#mission").append('<h1>' + data.mission.title.fr + '</h1>');
				$("#faq").append('<h1>' + data.faq.title.fr + '</h1>');
				// footer
				//$("#liens").append('<h1>' + data.liens.title.fr + '</h1>');
				
				// paragraphs
				for (var i = 0; i < data.products.copy.fr.length; i++) {
					$("#products").append('<p>' + data.products.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.realisations.copy.fr.length; i++) {
					$("#realisations").append('<p>' + data.realisations.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.events.copy.fr.length; i++) {
					$("#events").append('<p>' + data.events.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.services.copy.fr.length; i++) {
					$("#services").append('<p>' + data.services.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.mission.copy.fr.length; i++) {
					$("#mission").append('<p>' + data.mission.copy.fr[i] + '</p>');
				}
				for (var i = 0; i < data.faq.copy.fr.length; i++) {
					$("#faq").append('<p>' + data.faq.copy.fr[i] + '</p>');
				}
					
			}
			
			// images
			for (var i = 0; i < data.products.images.length; i++) {
				$("#products").append('<img src=\"' + data.products.images[i] + '\" alt=\"product image\" title=\"product image\">');
			}
			for (var i = 0; i < data.realisations.images.length; i++) {
				$("#realisations").append('<img src=\"' + data.realisations.images[i] + '\" alt=\"realisations image\" title=\"realisations image\">');
			}
		};
	  	
});