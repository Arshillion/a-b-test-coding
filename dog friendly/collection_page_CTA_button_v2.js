const product_style = `
<style>
	.grid-product__price.price_on_sale{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0 10px;
	}
	.new-save{
		border-radius: 4px;
		padding: 4px 8px;
		width: max-content;
		position: unset;
	}
	.new-save span{
		font-size: 12px;
		line-height: 12px;
		font-family: Poppins;
		font-weight: 700;
		text-transform: uppercase;
	}
</style>
`;

const interval = setInterval(() => {
	const products = [...document.querySelectorAll('.grid-product__content')];
	const head = document.querySelector('head');
	if (products.length > 0 && head && !document.querySelector('.new-save')) {
		head.insertAdjacentHTML('beforeend', product_style);
		products.map((item) => {
			const price_parent = item.querySelector('.grid-product__price');
			const save_child = item.querySelector(
				'.grid-product__price_saving_wrapper'
			);
			if (save_child && price_parent) {
				save_child.classList.add('new-save');
				price_parent.insertAdjacentElement('beforeend', save_child);
			}
		});
		clearInterval(interval);
	}
}, 10);
