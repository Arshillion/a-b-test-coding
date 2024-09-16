const banner_img = `
<div class="new-usp-img">
	<style>
		.shopify-section.Banner{
			display:none!important;
		}
		.new-usp-img img{
			width: 100%;
		}
	</style>
	<picture>
		<source
			media="(min-width: 991px)"
			srcset="https://i.ibb.co/ssDn4ys/Banner-desktop.png"
		/>
		<img src="https://i.ibb.co/283S7rX/Banner-Mobile-2x.png" />
	</picture>
</div>
`;

const interval = setInterval(() => {
	const sectionBanner = document.querySelector('.shopify-section.Banner');
	if (sectionBanner) {
		sectionBanner.insertAdjacentHTML('afterend', banner_img);
		clearInterval(interval);
	}
}, 10);
