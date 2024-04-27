<?php
/**
 * Plugin Name: Easy Testimonial
 * Plugin URI:  https://nishanmazumder.com
 * Description: This is a testimonial plugin.
 * Author:      Nishan M.
 * Author URI:  https://nishanmazumder.com
 * Text Domain: bstm
 * Domain Path: /languages
 * Version:     0.1.0
 *
 * @package         BSTM_Testimonial
 */

if ( ! defined( 'ABSPATH' ) ) :
	exit();
endif;

/**
 * Define Plugins Constants
 */
define( 'BSTM_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'BSTM_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

// post type.
if ( file_exists( BSTM_PATH . 'post-types/testimonial.php' ) ) {
	require_once BSTM_PATH . 'post-types/testimonial.php';
}
// taxonomy.
if ( file_exists( BSTM_PATH . 'post-types/taxonomy.php' ) ) {
	require_once BSTM_PATH . 'post-types/taxonomy.php';
}

// post type.
if ( file_exists( BSTM_PATH . 'classes/class-bstm-init.php' ) ) {
	require_once BSTM_PATH . 'classes/class-bstm-init.php';
}

// dashboard.
if ( file_exists( BSTM_PATH . 'classes/class-bscr-dashboard.php' ) ) {
	require_once BSTM_PATH . 'classes/class-bscr-dashboard.php';
}

// metabox.
if ( file_exists( BSTM_PATH . 'classes/class-metabox.php' ) ) {
	require_once BSTM_PATH . 'classes/class-metabox.php';
}


if ( file_exists( BSTM_PATH . 'dist/index.js' ) ) {
	/**
	 * Loading Necessary Scripts
	 */
	function bstm_ttm_scripts() {
		wp_enqueue_script( 'bscr-ttm-main', BSTM_URL . 'dist/index.js', array( 'jquery', 'wp-element' ), wp_rand(), true );
		wp_localize_script(
			'bscr-ttm-main',
			'bsLocalizer',
			array(
				'apiUrl' => home_url( '/wp-json' ),
				'nonce'  => wp_create_nonce( 'wp_rest' ),
			)
		);
	}

	add_action( 'admin_enqueue_scripts', 'bstm_ttm_scripts' );
}
