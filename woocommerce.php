<?php
/**
 * The template for making woocommerce work with timber/twig. sets the templates & context for woo's archive & singular views
 *
 * @package Urban_Carnival_Theme
 */

// make sure timber is activated first
if ( ! class_exists( 'Timber' ) ) {
  echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';
  return;
}

// get the main context
$context = Timber::context();

if ( is_singular( 'product' ) ) {
  
  $context['post'] = Timber::get_post();
  $product = wc_get_product( $context['post']->ID );
  $context['product'] = $product;
  
  $context['attachment_ids'] = $product->get_gallery_image_ids();
  
  // Get related products
  $related_limit = wc_get_loop_prop( 'columns' );
  $related_ids = wc_get_related_products( $context['post']->id, $related_limit );
  $context['related_products_title'] = apply_filters( 'woocommerce_product_related_products_heading', __( 'Related products', 'woocommerce' ) );
  $context['related_products'] = Timber::get_posts( $related_ids );
  
  // Get upsells
  $upsell_ids = $product->get_upsells();
  $context['up_sells_title'] = apply_filters( 'woocommerce_product_upsells_products_heading', __( 'You may also like&hellip;', 'woocommerce' ) );
  $context['up_sells'] =  Timber::get_posts( $upsell_ids );
  
  wp_reset_postdata();
  
  Timber::render( 'single-product.twig', $context );
  
} else { // is not singular, then it must be an archive!
  
  // get the main posts object via the standard wp archive query & assign as variable 'products'
  $posts = new Timber\PostQuery();
  $context['products'] = $posts;
  
  // define our archive & tease templates as arrays, which can be unshifted later depending on context
  $templates = array('shop.twig');
  $tease_template = array('tease-product.twig');
  
  // gets the woocommerce columns per row setting
  $context['products_grid_columns'] = wc_get_loop_prop('columns');
  
  // if is list-view
  if (get_query_var('grid_list') == 'list-view') {
    // reset the woo archive columns setting
    $context['products_grid_columns'] = '1';
    // unshit the tease template variable with the new list tease template
  	array_unshift( $tease_template, 'tease-product-list.twig' );
    // then Restore the context and loop back to the main query loop.
    wp_reset_postdata();
  };
  
  // if is any new taxonomy, see is_tax wp dev handbook for details
  if (is_tax('')) {
    // get queried object stuff
    $queried_object = get_queried_object();
    $term_id = $queried_object->term_id;
    $context['term_slug'] = $queried_object->slug;
    $context['term_id'] = $term_id;
    // set the archive title
    $context['title'] = single_term_title( '', false );
    // then Restore the context and loop back to the main query loop.
    wp_reset_postdata();
  };

  // if is product category
  if (is_product_category()) {
    // get the category & set variable with get_term using the term id
    $context['category'] = get_term( $term_id, 'product_cat' );
    // then Restore the context and loop back to the main query loop.
    wp_reset_postdata();
  };
  
  // if is main shop archive page
  if (is_shop()) {
    // set shop page archive title
    $context['title'] = __( 'Our Competitions', 'woocommerce' );
    // then Restore the context and loop back to the main query loop.
    wp_reset_postdata();
  };
  
  $context['tease_template'] = $tease_template; 
  Timber::render( $templates, $context );
}