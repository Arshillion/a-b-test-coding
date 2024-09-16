const style = `
<style>
.product-single__meta > div:nth-of-type(2) > div:nth-of-type(1) div{
    margin: 0;
}
.product-single__meta {
    padding: 20px;
}
.pdp-usps{
    display: flex;
    align-items: center;
    justify-content: center;
}
.pdp-usp{
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 4px;
}
.pdp-usp img{
    width: 18px;
}
.pdp-usp span{
    font-size: 12px;
    line-height: 12px;
}
.pdp-usp:not(:last-child){
    border-right: 1px solid #000;
}
.product-spec{
    background: #fafafd;
    border-radius: 6px;
    padding: 20px 20px 10px;
    margin-bottom: 10px;
}
.product-spec .collapsible-trigger{
    margin-bottom: 6px!important;
}
.product-spec .collapsible-trigger__icon, .product-block.product-block--sales-point{
    display: none!important;
}
.product-spec .rte, .product-spec button,.product-spec .our-product-features{
    margin: 0!important;
    padding: 0!important;
}
.product-spec .collapsible-content{
    border: 0!important;
}
.btn.btn--full.add-to-cart{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;   
    background-image: linear-gradient(to bottom, #202020, #411903);
    border: none;
}
.btn.btn--full.add-to-cart:hover{   
    background-image: linear-gradient(to bottom, #38ac54, #38ac54);
}
.trading-up{
    position: absolute;
    z-index: 1;
    top: 6px;
    right: 0;
    border-radius: 36px 0 0 36px;
    background: #C9FFE2;
    gap: 8px;
    display: flex;
    align-items: center;
    padding: 4px 10px;
}
.trading-up span{
    font-size: 12px;
    font-weight: bold;
}
@media only screen and (max-width:480px) {
    .pdp-usp{
        padding: 0 4px;
        gap: 2px;
    }
    .pdp-usp img{
        width: 16px;
    }
    .pdp-usp span{
        font-size: 10px;
        line-height: 10px;
    }
}
</style>
`;

const new_elm_html = `
<div class="product-block pdp-usps">
    <div class="pdp-usp">
        <img src="https://i.ibb.co/3dvttp8/usp1.png" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/klarna_logo.png?v=1697923808" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/postnl-3-logo-png-transparent-removebg-preview.png?v=1705871635" alt="" />
        <span>Gratis Verzending</span>
    </div>
</div>
`;

const cart_icon = `
<svg
	width="20"
	height="20"
	viewBox="0 0 20 20"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M17.5 4.16667L15.8333 10H6.14726M16.6667 13.3333H6.66667L5 2.5H2.5M13.3333 4.58333H11.25M11.25 4.58333H9.16667M11.25 4.58333V6.66667M11.25 4.58333V2.5M7.5 16.6667C7.5 17.1269 7.1269 17.5 6.66667 17.5C6.20643 17.5 5.83333 17.1269 5.83333 16.6667C5.83333 16.2064 6.20643 15.8333 6.66667 15.8333C7.1269 15.8333 7.5 16.2064 7.5 16.6667ZM16.6667 16.6667C16.6667 17.1269 16.2936 17.5 15.8333 17.5C15.3731 17.5 15 17.1269 15 16.6667C15 16.2064 15.3731 15.8333 15.8333 15.8333C16.2936 15.8333 16.6667 16.2064 16.6667 16.6667Z"
		stroke="white"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
`;

const generateRandomThreeDigitNumber = () => {
	const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
	return randomNumber.toString().padStart(3, '0');
};

const trading_html = `
<div class="trading-up">
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.5 6.75H21.75V12"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
        />
        <path
            d="M2.25 17.25L9 10.5L13.5 15L21 7.5"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
        />
    </svg>
    <span>${generateRandomThreeDigitNumber()} times sold in last 24 hours</span>
</div>
`;

const interval = setInterval(() => {
	const header = document.querySelector(
		'.product-block.product-block--header.product-single__header'
	);
	const rating = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(1)'
	);
	const form_cart = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(8)'
	);
	const spec_tab = document.querySelector('.product-block.product-block--tab');
	const product_price = document.querySelector(
		'.product-block.product-block--price'
	);
	const cart_btn = document.querySelector('#product-form__cart-submit');
	const slider = document.querySelector('.product-slideshow.flickity-enabled');
	const head = document.querySelector('head');
	if (
		header &&
		product_price &&
		slider &&
		spec_tab &&
		cart_btn &&
		rating &&
		head &&
		!document.querySelector('.pdp-usps')
	) {
		head.insertAdjacentHTML('beforeend', style);
		header.insertAdjacentElement('beforebegin', rating);
		spec_tab.querySelector('button').click();
		spec_tab.querySelector('button').removeAttribute('aria-controls');
		product_price.insertAdjacentElement('afterend', spec_tab);
		spec_tab.classList.add('product-spec');
		form_cart.insertAdjacentHTML('afterend', new_elm_html);
		cart_btn.insertAdjacentHTML('afterbegin', cart_icon);
		slider.insertAdjacentHTML('afterbegin', trading_html);
		clearInterval(interval);
	}
}, 10);
