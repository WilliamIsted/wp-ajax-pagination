<?php

/**
 * Plugin Name: WP Ajax Pagination
 * Plugin URI: https://william.isted.me
 * Description: Easy to use ajax pagination for WordPress
 * Version: 0.0.1
 * Author: William Isted
 * Author URI: https://william.isted.me
 * License: Apache License 2.0
 */

defined('ABSPATH') or die();

function enqueue_script() {
	wp_enqueue_script(
		'wp-ajax-pagination',
		plugins_url( 'wp-ajax-pagination.js' , __FILE__ ),
		array( 'jquery' )
	);
}

add_action( 'wp_enqueue_scripts', 'enqueue_script' );