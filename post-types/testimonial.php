
<?php

/**
 * Registers the bstm_testimonial post type.
 * This file will generate the main post type of Easy Testimonial
 */
function bstm_testimonial_init() {
	register_post_type(
		'bstm_testimonial',
		array(
			'labels'                => array(
				'name'                  => __( 'Testimonials', 'bstm' ),
				'singular_name'         => __( 'Testimonial', 'bstm' ),
				'all_items'             => __( 'All Testimonials', 'bstm' ),
				'archives'              => __( 'Testimonial Archives', 'bstm' ),
				'attributes'            => __( 'Testimonial Attributes', 'bstm' ),
				'insert_into_item'      => __( 'Insert into testimonial', 'bstm' ),
				'uploaded_to_this_item' => __( 'Uploaded to this testimonial', 'bstm' ),
				'featured_image'        => _x( 'Featured Image', 'testimonial', 'bstm' ),
				'set_featured_image'    => _x( 'Set featured image', 'testimonial', 'bstm' ),
				'remove_featured_image' => _x( 'Remove featured image', 'testimonial', 'bstm' ),
				'use_featured_image'    => _x( 'Use as featured image', 'testimonial', 'bstm' ),
				'filter_items_list'     => __( 'Filter testimonials list', 'bstm' ),
				'items_list_navigation' => __( 'Testimonials list navigation', 'bstm' ),
				'items_list'            => __( 'Testimonials list', 'bstm' ),
				'new_item'              => __( 'New Testimonial', 'bstm' ),
				'add_new'               => __( 'Add New', 'bstm' ),
				'add_new_item'          => __( 'Add New Testimonial', 'bstm' ),
				'edit_item'             => __( 'Edit Testimonial', 'bstm' ),
				'view_item'             => __( 'View Testimonial', 'bstm' ),
				'view_items'            => __( 'View Testimonials', 'bstm' ),
				'search_items'          => __( 'Search testimonials', 'bstm' ),
				'not_found'             => __( 'No testimonials found', 'bstm' ),
				'not_found_in_trash'    => __( 'No testimonials found in trash', 'bstm' ),
				'parent_item_colon'     => __( 'Parent Testimonial:', 'bstm' ),
				'menu_name'             => __( 'Testimonials', 'bstm' ),
			),
			'public'                => true,
			'hierarchical'          => false,
			'show_ui'               => true,
			'show_in_nav_menus'     => true,
			'supports'              => array( 'title', 'editor' ),
			'has_archive'           => true,
			'rewrite'               => true,
			'query_var'             => true,
			'menu_position'         => null,
			'menu_icon'             => 'dashicons-admin-post',
			'show_in_rest'          => true,
			'rest_base'             => 'testimonial',
			'rest_controller_class' => 'WP_REST_Posts_Controller',
		)
	);
}

add_action( 'init', 'bstm_testimonial_init' );

/**
 * Sets the post updated messages for the `testimonial` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `testimonial` post type.
 */
function bstm_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['bstm_testimonial'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Testimonial updated. <a target="_blank" href="%s">View testimonial</a>', 'bstm' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'bstm' ),
		3  => __( 'Custom field deleted.', 'bstm' ),
		4  => __( 'Testimonial updated.', 'bstm' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Testimonial restored to revision from %s', 'bstm' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false, // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Testimonial published. <a href="%s">View testimonial</a>', 'bstm' ), esc_url( $permalink ) ),
		7  => __( 'Testimonial saved.', 'bstm' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Testimonial submitted. <a target="_blank" href="%s">Preview testimonial</a>', 'bstm' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Testimonial scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview testimonial</a>', 'bstm' ), date_i18n( __( 'M j, Y @ G:i', 'bstm' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Testimonial draft updated. <a target="_blank" href="%s">Preview testimonial</a>', 'bstm' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}

add_filter( 'post_updated_messages', 'bstm_updated_messages' );

/**
 * Sets the bulk post updated messages for the `testimonial` post type.
 *
 * @param  array $bulk_messages Arrays of messages, each keyed by the corresponding post type. Messages are
 *                              keyed with 'updated', 'locked', 'deleted', 'trashed', and 'untrashed'.
 * @param  int[] $bulk_counts   Array of item counts for each message, used to build internationalized strings.
 * @return array Bulk messages for the `testimonial` post type.
 */
function bstm_bulk_updated_messages( $bulk_messages, $bulk_counts ) {
	global $post;

	$bulk_messages['bstm_testimonial'] = array(
		/* translators: %s: Number of testimonials. */
		'updated'   => _n( '%s testimonial updated.', '%s testimonials updated.', $bulk_counts['updated'], 'bstm' ),
		'locked'    => ( 1 === $bulk_counts['locked'] ) ? __( '1 testimonial not updated, somebody is editing it.', 'bstm' ) :
						/* translators: %s: Number of testimonials. */
						_n( '%s testimonial not updated, somebody is editing it.', '%s testimonials not updated, somebody is editing them.', $bulk_counts['locked'], 'bstm' ),
		/* translators: %s: Number of testimonials. */
		'deleted'   => _n( '%s testimonial permanently deleted.', '%s testimonials permanently deleted.', $bulk_counts['deleted'], 'bstm' ),
		/* translators: %s: Number of testimonials. */
		'trashed'   => _n( '%s testimonial moved to the Trash.', '%s testimonials moved to the Trash.', $bulk_counts['trashed'], 'bstm' ),
		/* translators: %s: Number of testimonials. */
		'untrashed' => _n( '%s testimonial restored from the Trash.', '%s testimonials restored from the Trash.', $bulk_counts['untrashed'], 'bstm' ),
	);

	return $bulk_messages;
}

add_filter( 'bulk_post_updated_messages', 'bstm_bulk_updated_messages', 10, 2 );
