$(document).ready(function() {
	
	// initialize the plugin, pass in the class selector for the sections of content (blocks)
	var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
	
	// assign function to add behavior for onBlockChange event
	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		$('#console')
			.css('display','block')
			.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
	});
	
	// animate some examples
	scrollorama
		.animate('#unpin',{ duration:500, property:'margin-top', start:500, pin:true })
		
		//.animate('#fade-in',{ delay: 400, duration: 300, property:'opacity', start:0 })
		//.animate('#fly-in',{ delay: 400, duration: 300, property:'left', start:-1400, end:0 })
		//.animate('#rotate-in',{ duration: 800, property:'rotate', start:720 })
		//.animate('#zoom-in',{ delay: 200, duration: 600, property:'zoom', start:8 })
		//.animate('#any',{ delay: 700, duration: 200, property:'opacity', start:0 })
		//.animate('#any',{ delay: 800, duration: 200, property:'letter-spacing', start:18 });
	
	// animate the parallaxing
	//scrollorama
		//.animate('#parallax2',{ delay: 400, duration: 600, property:'top', start:800, end:-800 })
		//.animate('#parallax3',{ delay: 200, duration: 1200, property:'top', start:500, end:-500 });
	
	// animate some easing examples
	/*
	var $easing = $('#easing'),
		$clone = $easing.clone().appendTo('#examples-easing')
						.css({position:'relative',top:'-2.95em'})
						.lettering();
	$easing.css({ color: '#131420', textShadow: '0 1px 0 #363959' });
	easing_array = [	'easeOutBounce',
						'easeOutQuad',
						'easeOutCubic',
						'easeOutQuart',
						'easeOutQuint', 
						'easeOutExpo' 		];
	$clone.find('span')
		.each( function( idx, el ){
			scrollorama.animate( $(this), {	delay:400, duration: 500, 
											property:'top', end: 300,
											easing: easing_array[idx] });
		})
		*/
	
});