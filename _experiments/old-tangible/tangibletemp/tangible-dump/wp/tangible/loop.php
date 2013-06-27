<?php
/**
 * The loop that displays posts.
 *
 * The loop displays the posts and the post content.  See
 * http://codex.wordpress.org/The_Loop to understand it and
 * http://codex.wordpress.org/Template_Tags to understand
 * the tags used in it.
 *
 * This can be overridden in child themes with loop.php or
 * loop-template.php, where 'template' is the loop context
 * requested by a template. For example, loop-index.php would
 * be used if it exists and we ask for the loop with:
 * <code>get_template_part( 'loop', 'index' );</code>
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?>

<?php
if ( is_home() ) {
    query_posts('posts_per_page=-1');
}

while ( have_posts() ) : the_post(); ?>

<div class="project grid_1">
	<div class="project-image-placeholder">
		<div class="project-image">
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
			<?php image_attachment('image1'); ?>
			</a>
		</div>
	</div> <!-- end .project-image-placeholder -->
	
		<div class="project-description">
		<h3><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
		<p><?php the_excerpt() ?></p>
		</div> <!-- end .project-description -->
</div> <!-- end .project -->

<?php endwhile; // End the loop. Whew. ?>