const style = `
<style>
    .product_info_image, .product__tax.caption.rte{
        display: none!important;
    }
    .pay_free{
        padding: 0 0 1rem!important;
        align-items: center;
    }
    .short_description{
        background: #F6F8FF;
        margin: 0 0 2rem!important;
        padding: 1rem 0;
        border-radius: 8px;
    }
    .product__title{
        margin-bottom: 0rem!important;
    }
    #MainProduct-template--17005356744862__main{
        background: #ececec;
    }
    .product__title ~ .no-js-hidden{
        margin-top: 0.5rem!important;
    }
</style>
`;

const new_elm_html = (liItems) => `
<ul class="new-point-elms">
    ${liItems.map((item) => `<li>${item}</li>`).join('')}
</ul>
`;

const getLiItems = (str) => str.split('|');

const interval = setInterval(() => {
	const title = document.querySelector('.product__title');
	const short_description = document.querySelector('.short_description');
	const price = document.querySelector('.short_description ~ .no-js-hidden');
	const short_description_items = document.querySelector(
		'.short_description strong'
	).innerText;
	const shipping_caption = document.querySelector('.product__tax.caption.rte');
	const pay_free = document.querySelector('.pay_free');
	const head = document.querySelector('head');
	if (
		title &&
		short_description &&
		shipping_caption &&
		short_description_items &&
		pay_free &&
		head &&
		!document.querySelector('.new-point-elms')
	) {
		head.insertAdjacentHTML('beforeend', style);
		shipping_caption.insertAdjacentElement('beforebegin', pay_free);
		short_description.innerHTML = new_elm_html(
			getLiItems(short_description_items)
		);
		price.insertAdjacentElement('beforebegin', title);
		price.insertAdjacentElement('afterend', short_description);
		clearInterval(interval);
	}
}, 10);
