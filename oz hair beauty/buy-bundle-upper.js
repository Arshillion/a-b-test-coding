const interval = setInterval(() => {
	try {
		const buyBundle = document.querySelector(
			'.ProductPage_rightCol__QTeFw .Swiper_swiperCommon__TaNb5.Swiper_mobile-nav-hidden__C6VUk'
		).parentNode.parentNode;
		const freeStyle = document.querySelector(
			'.free-gift-advert-containers.mt-4.FreeGiftPromo_promo-item__DWIRN'
		);
		if (buyBundle && freeStyle) {
			freeStyle.insertAdjacentElement('afterend', buyBundle);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
