<?php

class BSTM_INIT
{

	// screen
	public $post_type = "bstm_testimonial";

	public function __construct()
	{
		// if (!function_exists('get_current_screen')) {
		// 	require_once ABSPATH . '/wp-admin/includes/screen.php';
		// }

		//disable options
		add_filter('use_block_editor_for_post_type', array($this, 'bstm_disable_block_editor'), 10, 2);
		add_action('admin_init', [$this, 'bstm_disable_options']);

		// container
		// add_action('admin_footer', [$this, 'bstm_post_type_area']);
		add_action('add_meta_boxes', [$this, 'bstm_post_meta_box']);

		// add_action('add_meta_boxes', 'add_custom_meta_box', $this->post_type);
	}

	/**
	 * Render container for dashboard
	 *
	 * @return void
	 */
	// public function bstm_post_type_area()
	// {
	// 	$screen = get_current_screen();
	// 	if ($screen->id === 'bstm_testimonial') {
	// 		echo '<div id="bstm_post_type" style="background: red; height: 200px; width: 300px;">Test</div>';
	// 	}

	// 	return;
	// }

	public function bstm_post_meta_box()
	{
		$isTestimonial = $this->bstm_is_testimonial();
		if ($isTestimonial) {
			add_meta_box(
				'bstm_post_metabox_id',
				'Client\'s Information',
				[$this, 'bstm_render_post_meta_box'],
				$this->post_type,
				'normal',
				'high'
			);
		}
	}

	public function bstm_render_post_meta_box($post)
	{
		// $custom_value = get_post_meta($post->ID, 'custom_field_name', true);
		echo '<div id="bstm_post_type" style="background: red; height: 200px; width: 300px;">Test</div>';
	}

	// check testimonial
	public function bstm_is_testimonial()
	{
		$screen = get_current_screen();
		return $screen->id === 'bstm_testimonial';
	}

	// disable block
	public function bstm_disable_block_editor($use_block, $post_type)
	{
		if ($this->post_type === $post_type) {
			return false;
		}
		return $use_block;
	}

	// disbale options
	public function bstm_disable_options()
	{
		// remove editor
		remove_post_type_support($this->post_type, 'editor');
	}
}

new BSTM_INIT;
