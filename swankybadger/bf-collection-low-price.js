const low_price_html = `
<style>
	.low-price-html{
		color: #F00;
		font-family: Roboto;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		display: block;
		margin-bottom: 6px;
	}
</style>
<span class="low-price-html">🔥 Our Lowest Price ever!</span>
`;

const get_low_price = (item, current, was) => {
	try {
		const current_price_number = parseFloat(
			current.innerText.replace(/\$/g, '')
		);
		const was_price_number = parseFloat(was.innerText.replace(/\$/g, ''));
		const product_details = item.querySelector('.product-details');
		if (product_details && was_price_number - current_price_number >= 70) {
			product_details.insertAdjacentHTML('beforebegin', low_price_html);
		}
	} catch (error) {}
};

setInterval(() => {
	const items = [
		...document.querySelectorAll(
			'.product-list.product-list--collection .column'
		),
	];
	items.map((item) => {
		const current_price = item.querySelector('.current_price .money .money');
		const was_price = item.querySelector('.was_price .money .money');
		if (
			item &&
			current_price &&
			was_price &&
			!item.querySelector('.low-price-html')
		) {
			get_low_price(item, current_price, was_price);
		}
	});
}, 10);
