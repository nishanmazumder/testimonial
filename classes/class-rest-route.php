<?php

/**
 * Custom Rest API End Points.
 */
class BSCR_TTM_REST_ROUTE {


	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'bscr_ttm_rest_routes' ) );
	}

	public function bscr_ttm_rest_routes() {
		register_rest_route(
			'bscr/v1',
			'/settings',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'bscr_ttm_get_settings' ),
				'permission_callback' => array( $this, 'bscr_get_settings_permission' ),
			)
		);
		register_rest_route(
			'bscr/v1',
			'/settings',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'bscr_save_settings' ),
				'permission_callback' => array( $this, 'bscr_save_settings_permission' ),
			)
		);
	}

	public function bscr_ttm_get_settings() {
		$firstname = get_option( 'wprk_settings_firstname' );
		$lastname  = get_option( 'wprk_settings_lastname' );
		$email     = get_option( 'wprk_settings_email' );
		$response  = array(
			'firstname' => $firstname,
			'lastname'  => $lastname,
			'email'     => $email,
		);

		return rest_ensure_response( $response );
	}

	public function bscr_get_settings_permission() {
		return true;
	}

	public function bscr_save_settings( $req ) {
		$firstname = sanitize_text_field( $req['firstname'] );
		$lastname  = sanitize_text_field( $req['lastname'] );
		$email     = sanitize_text_field( $req['email'] );
		update_option( 'wprk_settings_firstname', $firstname );
		update_option( 'wprk_settings_lastname', $lastname );
		update_option( 'wprk_settings_email', $email );
		return rest_ensure_response( 'success' );
	}

	public function bscr_save_settings_permission() {
		return current_user_can( 'publish_posts' );
	}
}
new BSCR_TTM_REST_ROUTE();
