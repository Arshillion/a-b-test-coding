const style = `
<style>
	.discounted-price-area{
		padding: 6px 12px 6px 12px;
		border-radius: 30px;
		background: #00CB5D;
		color: #fff;
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
	}
</style>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ''));
};

const calculatePercentageDifference = (regularPrice, salePrice) => {
	const difference = regularPrice - salePrice;
	const percentageDifference = (difference / regularPrice) * 100;
	return percentageDifference;
};

const interval = setInterval(() => {
	try {
		const productCollections = document.querySelectorAll(
			'#Slider-template--22212329767201__featured-collection li , #product-grid li'
		);
		if (productCollections) {
			productCollections.forEach((item) => {
				if (!item.querySelector('.discounted-price-added')) {
					item.classList.add('discounted-price-added');
					const regularPrice = item.querySelector(
						'.price__sale .price-item.price-item--regular'
					);
					const salePrice = item.querySelector(
						'.price__sale .price-item.price-item--sale'
					);
					const saleArea = item.querySelector(
						'.card__inner .card__badge.top.left span'
					);
					if (regularPrice && salePrice && saleArea) {
						saleArea.classList.add('discounted-price-area');
						const percentage = calculatePercentageDifference(
							numberOnly(regularPrice.innerText),
							numberOnly(salePrice.innerText)
						);
						console.log('discountedPrice', discountedPrice);
						saleArea.innerHTML = `Save $${discountedPrice.toFixed(2)}`;
					}
				}
			});
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
