<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
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

<div id="middle-col" class="grid_2">
			
			<div id="biz-card" class="grid_2">
				<h1>
					<a href="<?php echo home_url( '/' ) ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
				</h1>
				
				<?php $children = wp_list_pages('title_li=&child_of='.$post->ID.'&echo=0');
  						if ($children) { ?>
					<ul>
						<?php echo $children; ?>
					</ul>
 				<?php } ?>
				
			</div><!-- #biz-card -->
		

			<div class="entry-content">
				<div class="left-pad"></div>
				<h1 class="entry-title"><?php the_title(); ?></h1>
				<?php the_content(); ?>
				<p><?php edit_post_link( __( 'Modifier cette page', 'twentyten' ) ); ?></p>
			</div> <!-- .entry-content -->
					
		</div><!-- .middle-col -->
			
		<div id="entry-img" class="grid_2">	
			<!-- get all the images from the post-->
			
			<?php bd_parse_post_variables(); ?>
			
			<ul>
			<?php while(count($post_images) > 0): ?>
				<li class="image">
				<img src="<?php echo array_shift($post_images); ?>" title="Image"/>
				<?php echo array_shift($post_images_label); ?>
				</li>
			<?php endwhile; ?>
			</ul>
			
			<ul>
			<?php while(count($post_links) > 0): ?>
				<li>
				<a href="<?php echo array_shift($post_links); ?>" title="Link">
				<?php echo array_shift($post_links_label); ?></a>
				</li>
			<?php endwhile; ?>
			</ul>
			
		</div><!-- .entry-img -->
			
	</div><!-- #post-## -->

</div> <!-- #project-wrapper -->


<?php endwhile; ?>

			</div><!-- #content -->
		</div><!-- #container -->

<?php get_footer(); ?>
