const fire_svg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2590_240)">
    <path d="M10.625 15C12.1875 14.7367 13.4852 13.4375 13.75 11.875" stroke="#FF437A" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.2" d="M8.75 7.5L10.8023 1.875C12.4891 3.275 16.25 6.88672 16.25 11.25C16.25 12.9076 15.5915 14.4973 14.4194 15.6694C13.2473 16.8415 11.6576 17.5 10 17.5C8.3424 17.5 6.75269 16.8415 5.58058 15.6694C4.40848 14.4973 3.75 12.9076 3.75 11.25C3.75 8.86172 4.87656 6.69844 6.17188 5L8.75 7.5Z" fill="#FF437A"/>
    <path d="M8.75 7.5L10.8023 1.875C12.4891 3.275 16.25 6.88672 16.25 11.25C16.25 12.9076 15.5915 14.4973 14.4194 15.6694C13.2473 16.8415 11.6576 17.5 10 17.5C8.3424 17.5 6.75269 16.8415 5.58058 15.6694C4.40848 14.4973 3.75 12.9076 3.75 11.25C3.75 8.86172 4.87656 6.69844 6.17188 5L8.75 7.5Z" stroke="#FF437A" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2590_240">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
</svg>
`;

const style = `
<style>
.gift-elm{
    background: #FFF1EA;
    padding: 16px;
    border-radius: 8px;
    margin: 20px 0;
}
.gift-elm strong{
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: #0D0C22;
}
.sold-elm {
    position: absolute;
    bottom: 20px;
    left: 0px;
    padding: 10px;
    background: white;
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 2;
    border-radius: 0px 20px 20px 0px;
}
.sold-elm span{
    color: #FF437A;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    text-align: left;
}
.details-elm{
    margin: 3rem 0!important;
}
.product__accordion.accordion.quick-add-hidden{
    display: none!important;;
}
.price-item.price-item--regular{
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    color: #FF437A;
}
.swatch-option-name{
    font-weight: bold;
}
.quantity-cart{
    display: flex;
    align-items: center;
    gap: 10px;
}
.product-form__input.product-form__quantity{
    flex: 0;
    margin: 0;
}
.product-form__input.product-form__quantity .form__label{
    display: none;
}
.product-form__input.product-form__quantity .quantity{
    padding: 24px 0;
}
.form-elm{
    width: -webkit-fill-available;
}
.shippingInfo,.product__text:nth-of-type(2){
    display: none!important;
}
</style>
`;

const gift_elm = (html) => `
<div class="gift-elm">
    ${html}
</div>
`;

const sold_elm = (random_num) => `
<div class="sold-elm">
    ${fire_svg}
    <span>${random_num} items sold in last 24 hours</span>
</div>
`;

const interval = setInterval(() => {
	const title = document.querySelector('.product__title');
	const rating = document.querySelector('#shopify-block-loox-rating');
	const details = document.querySelector('.accordion__content.rte ul');
	const price = document.querySelector('.price.price--large').parentNode;
	const slider = document.querySelector('.slider-mobile-gutter');
	const quantity = document.querySelector(
		'.product-form__input.product-form__quantity'
	);
	const add_to_cart = document.querySelector('.product-form').parentNode;
	let shipping_info;
	if (
		document.querySelector('.product__text:nth-of-type(2)') &&
		document.querySelector('.product__text:nth-of-type(2)').innerHTML
	) {
		shipping_info = document.querySelector(
			'.product__text:nth-of-type(2)'
		).innerHTML;
	} else if (
		document.querySelector('.shippingInfo a') &&
		document.querySelector('.shippingInfo a').innerHTML
	) {
		shipping_info = document.querySelector('.shippingInfo a').innerHTML;
	}

	const except_pathname =
		window.location.pathname !== '/products/keycap-puller';

	const head = document.querySelector('head');
	const check =
		title && rating && price && details && slider && quantity && add_to_cart;
	if (check && head && !document.querySelector('.gift-elm')) {
		const random_num = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
		head.insertAdjacentHTML('beforeend', style);
		title.insertAdjacentElement('beforebegin', rating);
		details.classList.add('details-elm');
		price.insertAdjacentElement('afterend', details);
		if (shipping_info && except_pathname) {
			price.insertAdjacentHTML('afterend', gift_elm(shipping_info));
		}
		slider.insertAdjacentHTML('beforeend', sold_elm(random_num));
		const new_div = document.createElement('div');
		quantity.insertAdjacentElement('afterend', new_div);
		new_div.classList.add('quantity-cart');
		add_to_cart.classList.add('form-elm');
		new_div.insertAdjacentElement('afterbegin', add_to_cart);
		new_div.insertAdjacentElement('afterbegin', quantity);
		title.insertAdjacentElement('afterend', price);
		clearInterval(interval);
	}
}, 10);
