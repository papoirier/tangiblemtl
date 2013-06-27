<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>

		<div id="container" class="container_5">
			<div id="content" role="main">
			
			<?php include (TEMPLATEPATH . '/menu.php'); ?>
			
<div id="project-wrapper" class="prefix_1 omega">

		
		<div id="middle-col" class="grid_2">
			
			<div id="biz-card" class="grid_2">
				<h1><a href="<?php echo home_url( '/' ) ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
				</a></h1>
			</div><!-- #biz-card -->
		

			<div class="entry-content" class="grid_2">
				<div class="left-pad"></div>
				<h1 class="entry-title"><?php _e( 'Oooops!', 'twentyten' ); ?></h1>
					<p class="page"><?php _e( 'I&rsquo;m sorry, but what you might be looking for is definitely not here. You can always try searching...', 'twentyten' ); ?></p>
					
				<?php include (TEMPLATEPATH . '/searchform.php'); ?>
				
			</div> <!-- .entry-content -->
					
		</div><!-- .middle-col -->
			

</div> <!-- #project-wrapper -->

			</div><!-- #content -->
		</div><!-- #container -->
		
<?php get_footer(); ?>