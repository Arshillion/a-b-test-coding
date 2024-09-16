const interval = setInterval(() => {
	try {
		const discounts = document.querySelectorAll('#shopify-section-product-template .swatch-discount');
		const banner = document.querySelector('#shopify-section-product-template #sale_popup');
		const bannerClose = document.querySelector('#shopify-section-product-template #sale_popup .close_btn');
		if (banner && bannerClose && discounts?.length > 0) {
			discounts.forEach((discount) => {
				discount.style.setProperty('display', 'none', 'important');
			});
			banner.style.setProperty('display', 'block', 'important');
			bannerClose.addEventListener('click', () => {
				banner.style.setProperty('display', 'none', 'important');
			});
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
