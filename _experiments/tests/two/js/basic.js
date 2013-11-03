$(document).ready(function() {
		
		var controller = $.superscrollorama();
		
		// ---------
		
		// set duration, in pixels scrolled, for pinned element
				var pinDur = 3000;
				// create animation timeline for pinned element
				var pinAnimations = new TimelineLite();
				pinAnimations
					.append(TweenMax.from($('#pin-frame-pin h2'), .5, {css:{marginTop:120}, ease: Quad.easeInOut}))
					.append([
						TweenMax.to($('#pin-frame-wipe'), .5, {css:{top:0}}),
						TweenMax.from($('#pin-frame-wipe h2'), .5, {css:{marginTop:'-600px'}})
					], .5)
				  
					.append([
						TweenMax.to($('#pin-frame-wipe-two'), .5, {css:{top:0}}),
						TweenMax.from($('#pin-frame-wipe-two h2'), .5, {css:{marginTop:'-600px'}})
					], .5)
					.append(TweenMax.to($('#pin-frame-unpin'), .5, {css:{top:'100px'}}));
					
				
				// --------
				
				// pin element, use onPin and onUnpin to adjust the height of the element
				controller.pin($('#examples-pin'), pinDur, {
					anim:pinAnimations, 
					onPin: function() {
						$('#examples-pin').css('height','100%');
					}, 
					onUnpin: function() {
						$('#examples-pin').css('height','600px');
					}
				});

});