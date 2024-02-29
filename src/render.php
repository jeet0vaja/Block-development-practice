<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$current_year = date("Y");
if (!empty($attributes['startingYear']) && !empty($attributes['showStartingYear'])) {
	$display_date = $attributes['startingYear'] . '–' . $current_year;
} else {
	$display_date = $current_year;
}
// echo "<pre>";
// print_r($attributes);
// echo "</pre>";
?>
<p <?php echo get_block_wrapper_attributes(); ?>> © <?php echo esc_html($display_date); ?></p>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<h1 style="color:<?php echo esc_attr($attributes['textColor']); ?>;">
		<?php
		echo esc_html($attributes['displayName']);
		?>
	</h1>
</div>
