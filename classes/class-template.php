<?php


	// Create Shortcode easy_testimonial
// Shortcode: [easy_testimonial image="" name="" designation="" rating="" feedback=""]

class BSTM_TEMPLATE{
	public function __construct(){
		add_shortcode( 'easy_testimonial', 'bstm_testimonial_shortcode' );
	}

public function bstm_testimonial_shortcode($atts) {

	$atts = shortcode_atts(
		array(
			'image' => '',
			'name' => '',
			'designation' => '',
			'rating' => '',
			'feedback' => '',
		),
		$atts,
		'easy_testimonial'
	);

	$image = $atts['image'];
	$name = $atts['name'];
	$designation = $atts['designation'];
	$rating = $atts['rating'];
	$feedback = $atts['feedback'];

}


	public function display()
	{

	}
}

new BSTM_TEMPLATE;
