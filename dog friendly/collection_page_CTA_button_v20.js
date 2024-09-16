const product_style = `
<style>
	.new-save{
		border-radius: 4px;
		padding: 2px 8px;
		display: flex;
		gap: 6px;
		align-items: center;
		background: #99D6EA;
		width: max-content;
		font-family: Poppins;
	}
	.new-save span{
		font-size: 12px;
		line-height: 12px;
		font-weight: 700;
		text-transform: uppercase;
	}
</style>
`;

const save_price_elm = (price, currency) => `
<div class="new-save">
	<span>Save</span>
	<span>${currency} ${price.toFixed(2)}</span>
</div>
`;

function numberOnly(string) {
	return parseFloat(string.replace(',', '.').replace(/[^0-9\-+\.]/g, ''));
}

function currencyOnly(string) {
	return string.replace(/[0-9,. ]/g, '');
}

const interval = setInterval(() => {
	const products = [...document.querySelectorAll('.grid-product__content')];
	const head = document.querySelector('head');
	if (products.length > 0 && head && !document.querySelector('.new-save')) {
		head.insertAdjacentHTML('beforeend', product_style);
		products.map((item) => {
			const price_parent = item.querySelector('.grid-product__price ');
			const regular_price = item.querySelector('.product-regular-price');
			const price_elm = item.querySelector('.price_on_sale');
			const sale_price =
				price_elm.querySelector('.money') ||
				price_elm.querySelector('.product-sales-price');
			const price =
				numberOnly(regular_price.innerText) - numberOnly(sale_price.innerText);
			const currency = currencyOnly(regular_price.innerText);
			price_parent.insertAdjacentHTML(
				'beforeend',
				save_price_elm(price, currency)
			);
		});
		clearInterval(interval);
	}
}, 10);
