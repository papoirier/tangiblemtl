<?php
/*
Template Name: Homepage
*/

 get_header(); ?>

		<div id="container" class="container_5">
			<div id="content" role="main">
			
			<div id="logo">
				<h1>
					<a href="<?php echo home_url( '/' ) ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?></a>
				</h1>
				
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
								
			</div> <!-- end #logo -->
	
			<div id="the-box" class="grid_2 alpha transparency">
				
				
				<div class="entry-content">
					<?php the_content(); ?>
					<p><?php edit_post_link( __( 'Modifier cette page', 'twentyten' ) ); ?></p>
					<?php do_action('icl_language_selector') ?>
				</div> <!-- .entry-content -->
			
			</div> <!-- end #the-box -->
			
			<?php endwhile; ?>

			</div><!-- #content -->
		</div><!-- #container -->
		
<?php get_footer(); ?>