<?php

/**
 * Plugin Name:     Easy Testimonial
 * Plugin URI:      https://bdsoftcr.com/testimonial
 * Description:     This is a testimonial plugin.
 * Author:          bdsoftcr
 * Author URI:      https://bdsoftcr.com
 * Text Domain:     bscr-testimonial
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Bscr_Testimonial
 */

if (!defined('ABSPATH')) : exit();
endif;

/**
 * Define Plugins Constants
 */
define('BSCR_PATH', trailingslashit(plugin_dir_path(__FILE__)));
define('BSCR_URL', trailingslashit(plugins_url('/', __FILE__)));

// post type
if (file_exists(BSCR_PATH . "post-types/testimonial.php")) {
	require_once BSCR_PATH . "post-types/testimonial.php";
}
// taxonomy
if (file_exists(BSCR_PATH . "post-types/taxonomy.php")) {
	require_once BSCR_PATH . "post-types/taxonomy.php";
}

// dashboard
if (file_exists(BSCR_PATH . "classes/class-bscr-dashboard.php")) {
	require_once BSCR_PATH . "classes/class-bscr-dashboard.php";
}
