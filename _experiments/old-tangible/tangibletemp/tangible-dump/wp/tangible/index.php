<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query. 
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>

		<div id="container" class="container_5">
			<div id="content" role="main">
			
			<div id="logo">
				<h1>
					<a href="<?php echo home_url( '/' ) ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?></a>
				</h1>
			</div> <!-- end #logo -->
	
			<div id="the-box" class="grid_2 alpha transparency">
				<?php do_action('icl_language_selector') ?>
			</div> <!-- end #the-box -->
			
			</div><!-- #content -->
		</div><!-- #container -->
		
<?php get_footer(); ?>
