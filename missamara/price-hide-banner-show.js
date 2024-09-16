const style = `
<style>
#shopify-section-product-template .swatch-discount{
	display: none!important;
}

#shopify-section-product-template #sale_popup{
	display: block!important;
}
</style>
`;

const interval = setInterval(() => {
	try {
		const discounts = document.querySelectorAll(
			'#shopify-section-product-template .swatch-discount'
		);
		const banner = document.querySelector(
			'#shopify-section-product-template #sale_popup'
		);
		const head = document.querySelector('head');
		if (banner && head && discounts.length > 0) {
			head.insertAdjacentHTML('beforeend', style);
			discounts.foreach((discount) => {
				discount.style.setProperty('display', 'none', 'important');
			});
			banner.style.setProperty('display', 'none', 'important');
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
