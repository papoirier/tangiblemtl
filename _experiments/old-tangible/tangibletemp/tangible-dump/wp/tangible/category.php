<?php
/**
 * The template for displaying Category Archive pages.
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
				<div id="biz-card-home" class="grid_2">
					<h1><a href="<?php echo home_url( '/' ) ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
				</a></h1>
				<h4 class="cat"><?php
					printf( __( 'Projects in %s', 'twentyten' ), '&lsquo;' . single_cat_title( '', false ) . '&rsquo;');
				?></h4>
				<?php
					$category_description = category_description();
					if ( ! empty( $category_description ) )
						echo '<p>' . $category_description . '</p>'; ?>
				
				</div>

			<?php
			/* Run the loop to output the posts.
			 * If you want to overload this in a child theme then include a file
			 * called loop-index.php and that will be used instead.
			 */
			 get_template_part( 'loop', 'index' );
			?>
			</div> <!-- end #project-wrapper -->
			
			</div><!-- #content -->
		</div><!-- #container -->

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
