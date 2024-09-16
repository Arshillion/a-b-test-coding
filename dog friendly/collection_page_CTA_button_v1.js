const product_style = `
<style>
    .grid-product__content .price_on_sale {
        display: none !important;
    }
    .new-cta-btn{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
		border-radius: 8px;
		padding:12px 20px;
		background: #0B0B21;
		margin-top: 10px;
    }
    .new-cta-btn span {
		font-size: 12px;
		font-weight: 500;
		color: white;
		text-align: center;
    	text-transform: uppercase;
		padding: 0 4px;
	}
    .new-cta-btn span:last-child {
		font-weight: 400;
		border-left: 1px solid white;
	}
</style>
`;

const new_elm_html = (link, price) => `
<a href=${link} class="new-cta-btn">
    <span>SHOP NOW</span>
    <span>${price}</span>
</a>
`;

const interval = setInterval(() => {
	const products = [...document.querySelectorAll('.grid-product__content')];
	const head = document.querySelector('head');
	if (products.length > 0 && head && !document.querySelector('.new-cta-btn')) {
		head.insertAdjacentHTML('beforeend', product_style);
		products.map((item) => {
			const link = item.querySelector('a').href;
			const price_elm = item.querySelector('.price_on_sale');
			const price =
				price_elm.querySelector('.money') ||
				price_elm.querySelector('.product-sales-price');
			item.insertAdjacentHTML('beforeend', new_elm_html(link, price.innerText));
		});
		clearInterval(interval);
	}
}, 10);
