const product_messages = [
	'lorem Lorem ipsum dolor sit Lorem ipsum dolor sit',
	'lorem Lorem ipsum dolor sit Lorem ipsum dolor sit',
	'lorem Lorem ipsum dolor sit Lorem ipsum dolor sit',
	'lorem Lorem ipsum dolor sit Lorem ipsum dolor sit',
	'lorem Lorem ipsum dolor sit Lorem ipsum dolor sit',
	'lorem Lorem ipsum dolor sit Lorem ipsum dolor sit',
];

const style = `
<style>
    .new-link-elm{
        padding: 12px 36px;
        gap: 10px;
        border-radius: 40px;
        background: #FF437B;
        font-size: 12px;
        font-weight: 600;
        text-align: left;
        color: white;
    }
    .stamped-fa-star{
        color: #FF437B;
    }
    .grid-product__sub-title{
        font-size: 12px;
        font-weight: 400;
        text-align: center;
        color: #7A7A7A;
    }
    .long-dash{
        display: none;
    }
    .grid-product__wrapper .grid-product__meta{
        text-align: center;
    }
    .grid-product__wrapper .grid-product__meta .grid-product__price{
        color: #0D0C22;
        font-size: 16px;
        font-weight: 600;
    }
    div#CollectionSection .grid-product__wrapper{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .col_feedba{
        margin-bottom: 0px;
    }
    .grid-product__price-wrap{
        margin-bottom: 10px;
    }
    .grid-product__wrapper .grid-product__meta{
        padding: 10px 0 0;
    }
    .stamped-badge-caption{
        font-size: 12px;
    }
</style>
`;

const new_elm_html = (link) =>
	`<a href=${link} class="new-link-elm">Shop Now</a>`;

const interval = setInterval(() => {
	const products = [...document.querySelectorAll('.grid-product')];
	const head = document.querySelector('head');
	if (products.length > 0 && head && !document.querySelector('.new-link-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		products.forEach((item, index) => {
			const wrapper = item.querySelector('.grid-product__wrapper');
			const price = item.querySelector('.grid-product__price-wrap');
			const feedback = item.querySelector('.col_feedba');
			const title = item.querySelector('.grid-product__title');
			const link = item.querySelector('.grid-product__wrapper > a').href;
			title.insertAdjacentHTML(
				'afterend',
				`<span class="grid-product__sub-title">${product_messages[index]}</span>`
			);
			feedback.insertAdjacentElement('afterend', price);
			wrapper.insertAdjacentHTML('beforeend', new_elm_html(link));
		});
		clearInterval(interval);
	}
}, 10);
