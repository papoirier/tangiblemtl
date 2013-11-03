$(document).ready(function() 
{
		$.getJSON('data/fr.json', function(data) {
				$("#services").html('');
				// title
				$("#services").append('<h1>' + data.id + '<h1>');
				// paragraphs
				for (var i = 0; i < data.copy.length; i++) {
					$("#services").append('<p>' + data.copy[i] + '</p>');
				}
		});
});

/*

		$.getJSON('data/fr.json', function(data) {

				// vars
				var siteSections = ["produits", "services"];
				
				var _produits = "produits";
				var _services = "services";
				
				// titles
				$("#produits").append('<h1>' + data.produits.title + '<h1>');
				$("#services").append('<h1>' + data.services.title + '<h1>');
				// paragraphs
				for (var i = 0; i < data.produits.copy.length; i++) {
					$("#produits").append('<p>' + data.produits.copy[i] + '</p>');
				}
				for (var i = 0; i < data.services.copy.length; i++) {
					$("#services").append('<p>' + data.services.copy[i] + '</p>');
				}

		});

 */