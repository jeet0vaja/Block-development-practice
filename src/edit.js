/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	ToggleControl,
	ColorPalette,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	console.log(attributes);
	const { showStartingYear, startingYear, displayName, textColor} = attributes;
	const currentYear = new Date().getFullYear().toString();
	let displayDate;
	if (showStartingYear && startingYear) {
		displayDate = startingYear + " - " + currentYear;
	} else {
		displayDate = currentYear;
	}
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "copyright-date-block")}>
					<ToggleControl
						checked={!!showStartingYear}
						lable={__("Show Starting Year", "copyright-date-block")}
						onChange={() =>
							setAttributes({
								showStartingYear: !showStartingYear,
							})
						}
					/>
					{showStartingYear && (
						<TextControl
							labal={__("Starting Year", "copyright-date-block")}
							value={startingYear || ""}
							onChange={(value) => setAttributes({ startingYear: value })}
						/>
					)}
				</PanelBody>
				<PanelBody>
					<TextControl
						label={__("Display Name", "copyright-date-block")}
						value={displayName || ""}
						onChange={(value) => setAttributes({ displayName: value })}
					/>
				</PanelBody>
				<PanelBody>
					<ColorPalette
						value={textColor || ""}
						onChange={(value) => setAttributes({ textColor: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>
				© {displayDate} {displayName}
			</p>
		</>
	);
}
