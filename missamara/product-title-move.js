const interval = setInterval(() => {
	const price_wrap = document.querySelector('.product-price-wrapper');
	const title = document.querySelector('h1.title');
	if (price_wrap && title) {
		price_wrap.insertAdjacentElement('beforebegin', title);
		clearInterval(interval);
	}
}, 10);
