<?php

/**
 * Registers the `category` taxonomy,
 * for use with 'testimonial'.
 */
function category_init() {
	register_taxonomy( 'category', [ 'testimonial' ], [
		'hierarchical'          => false,
		'public'                => true,
		'show_in_nav_menus'     => true,
		'show_ui'               => true,
		'show_admin_column'     => false,
		'query_var'             => true,
		'rewrite'               => true,
		'capabilities'          => [
			'manage_terms' => 'edit_posts',
			'edit_terms'   => 'edit_posts',
			'delete_terms' => 'edit_posts',
			'assign_terms' => 'edit_posts',
		],
		'labels'                => [
			'name'                       => __( 'Categories', 'bscr-testimonial' ),
			'singular_name'              => _x( 'Category', 'taxonomy general name', 'bscr-testimonial' ),
			'search_items'               => __( 'Search Categories', 'bscr-testimonial' ),
			'popular_items'              => __( 'Popular Categories', 'bscr-testimonial' ),
			'all_items'                  => __( 'All Categories', 'bscr-testimonial' ),
			'parent_item'                => __( 'Parent Category', 'bscr-testimonial' ),
			'parent_item_colon'          => __( 'Parent Category:', 'bscr-testimonial' ),
			'edit_item'                  => __( 'Edit Category', 'bscr-testimonial' ),
			'update_item'                => __( 'Update Category', 'bscr-testimonial' ),
			'view_item'                  => __( 'View Category', 'bscr-testimonial' ),
			'add_new_item'               => __( 'Add New Category', 'bscr-testimonial' ),
			'new_item_name'              => __( 'New Category', 'bscr-testimonial' ),
			'separate_items_with_commas' => __( 'Separate categories with commas', 'bscr-testimonial' ),
			'add_or_remove_items'        => __( 'Add or remove categories', 'bscr-testimonial' ),
			'choose_from_most_used'      => __( 'Choose from the most used categories', 'bscr-testimonial' ),
			'not_found'                  => __( 'No categories found.', 'bscr-testimonial' ),
			'no_terms'                   => __( 'No categories', 'bscr-testimonial' ),
			'menu_name'                  => __( 'Categories', 'bscr-testimonial' ),
			'items_list_navigation'      => __( 'Categories list navigation', 'bscr-testimonial' ),
			'items_list'                 => __( 'Categories list', 'bscr-testimonial' ),
			'most_used'                  => _x( 'Most Used', 'category', 'bscr-testimonial' ),
			'back_to_items'              => __( '&larr; Back to Categories', 'bscr-testimonial' ),
		],
		'show_in_rest'          => true,
		'rest_base'             => 'category',
		'rest_controller_class' => 'WP_REST_Terms_Controller',
	] );

}

add_action( 'init', 'category_init' );

/**
 * Sets the post updated messages for the `category` taxonomy.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `category` taxonomy.
 */
function category_updated_messages( $messages ) {

	$messages['category'] = [
		0 => '', // Unused. Messages start at index 1.
		1 => __( 'Category added.', 'bscr-testimonial' ),
		2 => __( 'Category deleted.', 'bscr-testimonial' ),
		3 => __( 'Category updated.', 'bscr-testimonial' ),
		4 => __( 'Category not added.', 'bscr-testimonial' ),
		5 => __( 'Category not updated.', 'bscr-testimonial' ),
		6 => __( 'Categories deleted.', 'bscr-testimonial' ),
	];

	return $messages;
}

add_filter( 'term_updated_messages', 'category_updated_messages' );
