<?php
/**
 * This file will create admin menu page.
 */

class BSCR_TTM_ADMIN_MENU_DASHBOARD {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'bscr_create_dashboard' ] );
    }

    public function bscr_create_dashboard() {
        $capability = 'manage_options';
        $slug = 'bscr-settings';

        add_menu_page(
            __( 'Testimonial Options', 'bscr-testimonial' ),
            __( 'Testimonial Options', 'bscr-testimonial' ),
            $capability,
            $slug,
            [ $this, 'menu_page_template' ],
            'dashicons-buddicons-replies'
        );
    }

    public function menu_page_template() {
        echo '<div class="bscr_ttm_wrapper"><div id="bscr_ttm_app">TEST</div></div>';
    }

}
new BSCR_TTM_ADMIN_MENU_DASHBOARD();
