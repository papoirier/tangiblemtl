<form method="get" id="searchform" action="<?php bloginfo('url'); ?>/"> 

<script type="text/javascript">
jQuery(document).ready(function($) {
    // $() will work as an alias for jQuery() inside of this function
	function SearchFor()
	{
		var s = prompt('Search');
		if (s!==null) window.location = 'http://marianne-coquelicot.ca' + (s? '?s='+s : '');
	}
	
	$(function(){
		$('#searchInput').focus(function(hideAtext){
			this.value = (this.value=="Search and type enter"? "" : this.value);
		});
		
		$('#searchInput').blur(function(hideAtext){
			this.value = (this.value==""? "Search and type enter" : this.value);
		});
	});
	});
	
</script>

<input type="text" id="searchInput" class="Search" value="Search and type enter" name="s" id="s" /> 
</form>