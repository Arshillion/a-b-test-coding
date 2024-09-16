const new_elm_html = `
<script
	src="//foursixty.com/media/scripts/fs.slider.v2.6.js"
	data-feed-id="miss-amara"
	data-theme="slider_v2_6"
	data-connector-filter="51132,51133"
	data-category-filter="TUMBLuxe"
	data-always-show-video-detail="true"
	data-video-gallery="reels"
	data-cell-size="20%"
></script>
<style>
	.fs-has-links::after {
		padding: 7px 10.5px;
		border: 1px solid #f7ebe5;
		color: #f7ebe5;
		content: 'VIEW RUG';
	}
	.fs-has-links:hover:after {
		background-color: #f7ebe5;
		color: rgba(0, 0, 0, 0.575);
	}
	.fs-video-gallery .fs-entry-container {
		padding-top: 36% !important;
		width: 20% !important;
		height: auto !important;
	}
	.fs-video-gallery.fs-narrow-timeline .fs-entry-container.fs-entry-container {
		padding-top: calc(50% * 1.7778) !important;
		width: 50% !important;
		height: auto !important;
	}
	.fs-video-gallery.fs-small-timeline .fs-entry-container.fs-entry-container {
		padding-top: calc(33.3334% * 1.7778) !important;
		width: 33.3334% !important;
		height: auto !important;
	}
	.fs-wrapper div.fs-text-container .fs-entry-title,
	div.fs-detail-title {
		font-family: Lato Light, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 10px;
	}
	div.fs-text-container .fs-entry-date,
	div.fs-detail-container .fs-post-info,
	div.fs-wrapper div.fs-has-links::after,
	.fs-text-product,
	.fs-overlink-text {
		font-family: Lato Light, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
	}
	.fs-wrapper div.fs-text-container * {
		color: #f7ebe5;
	}
	.fs-wrapper div.fs-text-container {
		background-color: rgba(0, 0, 0, 0.575);
		margin: 0px;
	}
	div.fs-entry-date {
		display: none;
	}
	.fs-slider_v2_6 .fs-wrapper div.fs-timeline-entry {
		margin: 6px;
	}
</style>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('body');
	if (exist_elm) {
		exist_elm.insertAdjacentHTML('beforeend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
