<?php
/**
 * The Template for displaying all single posts.
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
			
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		
		<div id="middle-col" class="grid_2">
			
			<div id="biz-card" class="grid_2">
				<h1><a href="<?php echo home_url( '/' ) ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
				</a></h1>
			</div><!-- #biz-card -->
		

			<div class="entry-content" class="grid_2">
				<div class="left-pad"></div>
				<h1 class="entry-title"><?php the_title(); ?></h1>
				<?php the_content(); ?>
				
				<p><?php edit_post_link( __( 'Modifier ce projet', 'twentyten' ) ); ?></p>
				
			</div> <!-- .entry-content -->
			
			<div id="pre-next" class="grid_2">
				<div class="nav-previous">
					<?php previous_post_link( '%link',  _x( 'Previous project', 'twentyten' ) ); ?>
				</div>
				<div class="nav-next">
					<?php next_post_link( '%link',  _x( 'Next project', 'twentyten' ) ); ?>
				</div>
			</div><!-- #pre-next -->
					
		</div><!-- .middle-col -->
			
		<div id="entry-img" class="grid_2">	
			<!-- get all the images from the post-->
			<?php //img_getter($post->ID); ?>
			
			<?php bd_parse_post_variables(); ?>
			
			<ul>
			<?php while(count($post_videos) > 0): ?>
				<li class="image">
				<?php echo array_shift($post_videos); ?></li>
				<li class="text"><?php echo array_shift($post_videos_label); ?></li>
			<?php endwhile; ?>
			</ul>
			
			<ul>
			<?php while(count($post_images) > 0): ?>
				<li class="image">
					<img src="<?php echo array_shift($post_images); ?>" title="Image"/>
				</li>
				<li class="text"><?php echo array_shift($post_images_label); ?></li>
			<?php endwhile; ?>
			</ul>
			
		</div><!-- .entry-img -->
			
	</div><!-- #post-## -->

</div> <!-- #project-wrapper -->


<?php endwhile; // end of the loop. ?>

			</div><!-- #content -->
		</div><!-- #container -->

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
