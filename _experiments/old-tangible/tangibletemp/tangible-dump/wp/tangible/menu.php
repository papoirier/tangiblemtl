<div id="nav-menu-wrapper" class="grid_1 alpha">
	<div id="nav-menu">
		<ul class="nav">
		<?php 
			wp_list_categories('show_count=&title_li=0&exclude=1&depth=1&hide_empty=0'); ?>
			<li class="space-under"></li>
		<?php	
			wp_list_pages('title_li=&depth=1');
		?>
		<?php // icl_get_languages('skip_missing=N&orderby=KEY&order=DIR'); ?>
		</ul>
	</div> <!-- #nav-menu -->
	
	<div id="language">
		<?php // for languages
		do_action('icl_language_selector') ?>
	</div> <!-- #language -->
	
</div> <!-- #nav-menu-wrapper -->