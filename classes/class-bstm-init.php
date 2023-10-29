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

		add_action('admin_enqueue_scripts', array($this, 'load_styles_scripts'));

		//disable options
		add_filter('use_block_editor_for_post_type', array($this, 'bstm_disable_block_editor'), 10, 2);
		add_action('admin_init', [$this, 'bstm_disable_options']);

		// container
		// add_action('admin_footer', [$this, 'bstm_post_type_area']);
		add_action('add_meta_boxes', [$this, 'bstm_post_meta_box']);

		// add_action('add_meta_boxes', 'add_custom_meta_box', $this->post_type);

		add_action('rest_api_init', array($this, 'bstm_route_user'));
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
		$isTestimonial = $this->_is_bstm_testimonial();
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

	// testimonial dependencies script

	public function load_styles_scripts()
	{
		if (!$this->_is_bstm_testimonial()) return;
		$dependency_path = __DIR__ . "/../dist/index.asset.php";

		$script_asset = require($dependency_path);
		wp_enqueue_script(
			'bstm-admin-editor',
			plugins_url("dist/index.js", __FILE__),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
		wp_set_script_translations('bstm-admin-editor', 'bscr-testimonial');

		// popup css
		// $df_popup_css = 'df-popup-panel/index.css';
		// wp_enqueue_style(
		//     'diviflash-popup-admin',
		//     plugins_url($df_popup_css, __FILE__),
		//     ['wp-components'],
		//     filemtime("$dir/$df_popup_css")
		// );
	}


	public function bstm_render_post_meta_box($post)
	{
		// $custom_value = get_post_meta($post->ID, 'custom_field_name', true);
		echo '<div id="bstm_post_type" style="background: #fff; height: 200px; width: 100%;">Test</div>';
	}

	// check testimonial
	public function _is_bstm_testimonial()
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

	public function bstm_route_user()
	{
		register_rest_route('bscr-ttm-settings/v2', '/get-ttm-data', array(
			'methods'  => WP_REST_Server::READABLE,
			'callback' => array($this, 'get_ttm_data'),
			'permission_callback' => function () {
				return true;
				//return current_user_can('edit_others_posts');
			}
		));

		register_rest_route('bscr-ttm-settings/v2', '/save-ttm-data', array(
			'methods'  => WP_REST_Server::CREATABLE,
			'callback' => array($this, 'save_ttm_item_data_callback'),
			'permission_callback' => function () {
				return current_user_can('edit_others_posts');
			}
		));

		register_rest_route('myplugin/v1', '/author/(?P<id>\d+)', array(
			'methods' => 'GET',
			'callback' => [$this, 'my_awesome_func'],
			'args' => array(
			  'id' => array(
				 'validate_callback' => function($param, $request, $key) {
					return is_numeric( $param );
				 }
			  ),
			),
		 ));
	}

	public function my_awesome_func(WP_REST_Request $request)
	{
		// You can access parameters via direct array access on the object:
		$param = $request['some_param'];

		// Or via the helper method:
		$param = $request->get_param('some_param');

		// You can get the combined, merged set of parameters:
		$parameters = $request->get_params();

		// The individual sets of parameters are also available, if needed:
		$parameters = $request->get_url_params();
		$parameters = $request->get_query_params();
		$parameters = $request->get_body_params();
		$parameters = $request->get_json_params();
		$parameters = $request->get_default_params();

		// Uploads aren't merged in, but can be accessed separately:
		$parameters = $request->get_file_params();

		echo "test";
	}

	public function get_ttm_data(WP_REST_Request $request)
	{


		$ttm_id = sanitize_key($request['id']);


		// return rest_ensure_response($ttm_id);

		if ($ttm_id) {
			$ttm_settings = get_post_meta($ttm_id, '_df_popup_item_settings', true);
			if ($ttm_settings) {
				$settings   = is_object($ttm_settings) ? $ttm_settings : json_decode($ttm_settings);
				return $settings;
			} else {
				return "default";
			}
		}
		return "No Testimonial found";
	}

	public function save_ttm_item_data_callback(WP_REST_Request $request)
	{

		echo $request;

		// if (isset($request['id'])) {
		//     $popup_id = sanitize_key($request['id']);

		//     if (isset($request['settings'])) {
		//         $settings = $request['settings'];

		//         update_post_meta($popup_id, BSTM_INIT::$popup_settings_key, wp_json_encode($settings));
		//         update_post_meta($popup_id, '_df_popup_item_trigger_type', $settings['df_popup_trigger_type']);
		//         $popup_status = isset($settings['df_popup_enable']) && $settings['df_popup_enable'] === true ? 1 : 0;
		//         update_post_meta($popup_id, '_df_popup_item_status', $popup_status);

		//         $postData = ['ID' => $popup_id, 'post_status' => 'publish'];
		//         wp_update_post($postData);

		//         return 'Successfully Saved';
		//     } else {
		//         return 'Missing settings data';
		//     }
		// } else {
		//     return 'Missing ID parameter';
		// }
	}
}

new BSTM_INIT;
