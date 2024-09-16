const gift_svg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4336 0.292969C13.6175 0.292969 12.8796 0.626953 12.3483 1.16539L10 3.54484V7.32422L14.4336 6.15234C16.0516 6.15234 17.3633 4.84066 17.3633 3.22266C17.3633 1.60465 16.0516 0.292969 14.4336 0.292969ZM14.4336 4.58984H11.164L13.4605 2.26281C13.7197 2.00012 14.0653 1.85547 14.4336 1.85547C15.1875 1.85547 15.8008 2.46879 15.8008 3.22266C15.8008 3.97652 15.1875 4.58984 14.4336 4.58984Z" fill="#FF0F47"/>
    <path d="M7.65168 1.16539C7.12043 0.626953 6.38254 0.292969 5.56641 0.292969C3.9484 0.292969 2.63672 1.60465 2.63672 3.22266C2.63672 4.84066 3.9484 6.15234 5.56641 6.15234L10 7.32422V3.54484L7.65168 1.16539ZM5.56641 4.58984C4.81254 4.58984 4.19922 3.97652 4.19922 3.22266C4.19922 2.46879 4.81254 1.85547 5.56641 1.85547C5.93469 1.85547 6.28023 2.00012 6.53945 2.26281L8.83602 4.58984H5.56641Z" fill="#FF415D"/>
    <path d="M10 3.02734L8.69793 7.12891H11.9531V4.98047C11.9531 3.9018 11.0787 3.02734 10 3.02734Z" fill="#FF415D"/>
    <path d="M8.04688 4.98047V7.12891H10V3.02734C8.92133 3.02734 8.04688 3.9018 8.04688 4.98047Z" fill="#FF7472"/>
    <path d="M2.63672 8.49609V10.8398L16.1914 19.707H17.3633V8.49609H2.63672Z" fill="#FFA688"/>
    <path d="M2.63672 10.8398H16.1914V19.707H2.63672V10.8398ZM16.7773 6.15234L15.6055 7.91016L16.7773 9.66797H17.9492V6.15234H16.7773Z" fill="#FFD89D"/>
    <path d="M11.7578 6.15234L10 7.26562L8.24219 6.15234H2.05078V9.66797H16.7773V6.15234H11.7578Z" fill="#FFEBCE"/>
    <path d="M10 6.15234L9.13196 9.24805L10 14.1016L11.9531 15.2734V6.15234H10Z" fill="#FF0F47"/>
    <path d="M8.04688 6.15234V15.2734L10 14.1016V6.15234H8.04688Z" fill="#FF415D"/>
    <path d="M17.9492 5.85938H16.283C17.1126 5.27574 17.6562 4.31176 17.6562 3.22266C17.6562 1.4457 16.2105 0 14.4336 0C13.565 0 12.7504 0.34082 12.1398 0.95957L10.3595 2.76348C10.2424 2.74457 10.1224 2.73438 10 2.73438C9.87762 2.73438 9.75762 2.74457 9.64051 2.76352L7.86023 0.959648C7.24965 0.34082 6.435 0 5.56641 0C3.78941 0 2.34375 1.4457 2.34375 3.22266C2.34375 4.31176 2.88734 5.27574 3.71691 5.85938H2.05078C1.97308 5.85938 1.89856 5.89024 1.84362 5.94518C1.78868 6.00013 1.75781 6.07464 1.75781 6.15234V9.66797C1.75781 9.74567 1.78868 9.82019 1.84362 9.87513C1.89856 9.93007 1.97308 9.96094 2.05078 9.96094H2.34375V19.707C2.34375 19.7847 2.37462 19.8592 2.42956 19.9142C2.4845 19.9691 2.55902 20 2.63672 20H17.3633C17.5251 20 17.6562 19.8689 17.6562 19.707V10.8398C17.6562 10.678 17.5251 10.5469 17.3633 10.5469C17.2014 10.5469 17.0703 10.678 17.0703 10.8398V19.4141H2.92969V9.96094H7.75391V15.2734C7.75391 15.3253 7.76766 15.3762 7.79378 15.421C7.81989 15.4658 7.85742 15.5028 7.90254 15.5284C7.94765 15.5539 7.99874 15.567 8.05058 15.5664C8.10242 15.5657 8.15316 15.5513 8.19762 15.5246L10 14.4432L11.8024 15.5247C11.8469 15.5514 11.8976 15.5658 11.9494 15.5664C12.0013 15.5671 12.0524 15.5539 12.0975 15.5284C12.1426 15.5028 12.1801 15.4658 12.2062 15.421C12.2323 15.3762 12.2461 15.3253 12.2461 15.2734V9.96094H17.9492C18.1111 9.96094 18.2422 9.8298 18.2422 9.66797V6.15234C18.2422 5.99051 18.1111 5.85938 17.9492 5.85938ZM7.75391 9.375H2.34375V6.44531H7.75391V9.375ZM7.86062 4.29688H5.56641C4.97406 4.29688 4.49219 3.81496 4.49219 3.22266C4.49219 2.63035 4.97406 2.14844 5.56641 2.14844C5.8557 2.14844 6.12719 2.26211 6.33094 2.46859L7.93613 4.09504C7.90773 4.16106 7.88253 4.22842 7.86062 4.29688ZM6.74801 2.05703C6.43332 1.73812 6.01371 1.5625 5.56641 1.5625C4.65098 1.5625 3.90625 2.30723 3.90625 3.22266C3.90625 4.13809 4.65098 4.88281 5.56641 4.88281H7.75637C7.75484 4.91534 7.75402 4.9479 7.75391 4.98047V5.85938H5.56641C4.1125 5.85938 2.92969 4.67656 2.92969 3.22266C2.92969 1.76875 4.1125 0.585938 5.56641 0.585938C6.27699 0.585938 6.94352 0.864805 7.44316 1.37121L9.01406 2.96293C8.71683 3.10906 8.45536 3.31875 8.24816 3.57715L6.74801 2.05703ZM11.6602 14.756L10.1507 13.8503C10.1052 13.823 10.0531 13.8085 9.99998 13.8085C9.94688 13.8085 9.89478 13.823 9.84926 13.8503L8.33984 14.756V6.44531H11.6602V14.756ZM11.6602 5.85938H8.33984V4.98047C8.33984 4.06504 9.08457 3.32031 10 3.32031C10.9154 3.32031 11.6602 4.06504 11.6602 4.98047V5.85938ZM12.1394 4.29688C12.1175 4.22844 12.0923 4.16109 12.0639 4.09508L13.6691 2.46859C13.8728 2.26211 14.1443 2.14844 14.4336 2.14844C15.0259 2.14844 15.5078 2.63035 15.5078 3.22266C15.5078 3.81496 15.0259 4.29688 14.4336 4.29688H12.1394ZM12.2436 4.88281H14.4336C15.349 4.88281 16.0938 4.13809 16.0938 3.22266C16.0938 2.30723 15.349 1.5625 14.4336 1.5625C13.9863 1.5625 13.5667 1.73812 13.252 2.05699L11.7518 3.57707C11.5446 3.31868 11.2832 3.109 10.9859 2.96285L12.5568 1.37113C13.0565 0.864805 13.723 0.585938 14.4336 0.585938C15.8875 0.585938 17.0703 1.76875 17.0703 3.22266C17.0703 4.67656 15.8875 5.85938 14.4336 5.85938H12.2461V4.98047C12.2461 4.94773 12.245 4.91523 12.2436 4.88281ZM17.6562 9.375H12.2461V6.44531H17.6562V9.375Z" fill="black"/>
</svg>
`;

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
    display: flex;
    align-items: center;
    gap: 8px;
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
</style>
`;

const gift_elm = `
<div class="gift-elm">
    ${gift_svg}
    <strong>Free key remover with any purchase</strong>
</div>
`;

const sold_elm = `
<div class="sold-elm">
    ${fire_svg}
    <span>200 items sold in last 24 hours</span>
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

	const head = document.querySelector('head');
	const check =
		title && rating && price && details && slider && quantity && add_to_cart;
	if (check && head && !document.querySelector('.gift-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		title.insertAdjacentElement('beforebegin', rating);
		details.classList.add('details-elm');
		price.insertAdjacentElement('afterend', details);
		price.insertAdjacentHTML('afterend', gift_elm);
		slider.insertAdjacentHTML('beforeend', sold_elm);
		const new_div = document.createElement('div');
		quantity.insertAdjacentElement('afterend', new_div);
		new_div.classList.add('quantity-cart');
		add_to_cart.classList.add('form-elm');
		new_div.insertAdjacentElement('afterbegin', add_to_cart);
		new_div.insertAdjacentElement('afterbegin', quantity);
		clearInterval(interval);
	}
}, 10);
