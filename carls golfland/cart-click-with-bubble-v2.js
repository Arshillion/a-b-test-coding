const style = `
<style>
	.minicart-wrapper .action.showcart .counter.qty {
		left: -4px;
		top: -4px;
		background: green;
		color: white;
		border-radius: 100%;
		font-size: 12px;
		height: 20px;
		width: 20px;
		display: grid;
		place-content: center;
		animation: moveUpDown 0.25s linear infinite;
		animation-play-state: paused;
	}
	.block.block-minicart.ui-dialog-content.ui-widget-content {
		position: fixed;
		top: 0;
		right: 0;
		left: calc(100% - 400px);
		width: 400px !important;
		min-width: 400px;
		bottom: 0;
		border: 0;
		background: #fafafa;
		overflow: scroll;
	}
	.block.block-minicart.ui-dialog-content.ui-widget-content .actions .primary {
		margin-bottom: 20px;
	}
	.block.block-minicart.ui-dialog-content.ui-widget-content
		.minicart-items-wrapper {
		background: #ffffff;
	}
	.minicart-wrapper .block-minicart .block-content .subtotal {
		background: none;
		font-weight: 700;
		margin-bottom: 10px !important;
	}
	.action.primary.viewcart {
		background: none !important;
		color: #333 !important;
		text-decoration: underline;
		text-transform: capitalize !important;
		font-size: 16px !important;
		font-weight: 500 !important;
		margin-bottom: 0 !important;
	}
	.new-cart-promo {
		background: #d8fad1;
		color: #78a46b !important;
		font-size: 12px;
		margin: 10px;
		border: 1px dashed !important;
		border-radius: 4px;
		text-transform: none !important;
	}
	#top-cart-btn-checkout {
		border-radius: 6px;
		width: 75%;
		margin: auto;
		font-size: 18px;
	}
	.min-cart-usps {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		border-top: 1px solid #dfdfdf;
		border-bottom: 1px solid #dfdfdf;
		margin: 10px 0;
	}
	.min-cart-usp {
		display: flex;
		gap: 4px;
		align-items: center;
		justify-content: center;
		padding: 6px;
	}
	.min-cart-usp img {
		width: 30px;
	}
	.min-cart-usp span {
		font-size: 10px;
		font-weight: bold;
	}
	.min-cart-usps .min-cart-usp:first-child {
		border-right: 1px solid #dfdfdf;
	}
	.paypal.paypal-cart.checkout.paypal-logo.braintree-paypal-logo.braintree-paypal-mini-cart-container {
		margin-bottom: 10px;
	}
	.block-minicart-head {
		background: #ffffff !important;
		border-bottom: 1px solid #dfdfdf !important;
		padding: 5px 0;
	}
	.block-minicart-head-title,
	#btn-minicart-close {
		color: #000 !important;
	}
	.action.delete.delete-custom {
		text-transform: none !important;
	}
	.action.delete.delete-custom i {
		background: #6f6f6f;
		width: 16px;
		height: 16px;
		display: inline-grid;
		place-content: center;
		border-radius: 50%;
		color: #fff;
		font-size: 12px !important;
	}
	.action.delete.delete-custom span {
		margin-right: 2px !important;
	}
	a.minicart-item-img {
		border: 1px solid #dfdfdf;
		padding: 6px;
		border-radius: 4px;
	}
	.minicart-back {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #99999999;
		z-index: 10;
	}
	#minicart-content-wrapper {
		background: #fafafa !important;
		position: relative;
		height: 100%;
		z-index: 11;
		overflow-x: hidden;
	}
	#ui-id-1 {
		overflow-y: auto;
		overflow-x: hidden;
	}
	.minicart-wrapper
		.block-minicart
		.block-content
		.minicart-items-wrapper
		.minicart-items
		> .product-item
		.minicart-item
		.minicart-item-details
		.minicart-item-details-left {
		padding-right: 10px;
	}
	.minicart-wrapper
		.block-minicart
		.block-content
		.minicart-items-wrapper
		.minicart-items
		> .product-item
		.minicart-item
		.minicart-item-details {
		padding-left: 10px;
	}
	.minicart-wrapper .block-minicart .block-content .minicart-items-wrapper {
		padding: 10px;
		max-height: calc(100vh - 455px);
		border-bottom: solid 1px #d5d5d5;
	}
	@keyframes moveUpDown {
		0% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-5px);
		}
		50% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(8px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@media only screen and (max-width: 480px) {
		.block.block-minicart.ui-dialog-content.ui-widget-content {
			left: calc(100% - 340px);
			width: 340px !important;
			min-width: 340px;
		}
	}
</style>
`;

const styleInterval = setInterval(() => {
	const head = document.querySelector('head');
	if (head) {
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(styleInterval);
	}
}, 10);

const cart_usp_html = `
  <div class="min-cart-usps">
    <div class="min-cart-usp">
      <img src="https://res.cloudinary.com/dti1vttec/image/upload/v1709824339/cgl-price-lock_wq82ka.png">
      <span>30-Day Price Protection</span>
    </div>
    <div class="min-cart-usp">
      <img src="https://res.cloudinary.com/dti1vttec/image/upload/v1709824338/cgl-shipping_neue81.png">
      <span>Most Orders Ship Same-Day</span>
    </div>
  </div>
`;

const fixed_div = `<div class="minicart-back" onclick="document.querySelector('body').click()"></div>`;

setInterval(() => {
	const cart_promo = document.querySelector('.minicart-promo');
	if (cart_promo && !document.querySelector('.new-cart-promo')) {
		cart_promo.classList.add('new-cart-promo');
		cart_promo.innerText = 'See Promotions +  Discounted Price in Checkout >';
	}
}, 10);

const view_cart_change = setInterval(() => {
	const mini_cart = document.querySelector('#ui-id-1');
	const cart_checkout = document.querySelector('#top-cart-btn-checkout');
	const cart_view = document.querySelector('.action.primary.viewcart');
	if (
		cart_checkout &&
		cart_view &&
		mini_cart &&
		!document.querySelector('.min-cart-usps')
	) {
		mini_cart.insertAdjacentHTML('afterbegin', fixed_div);
		cart_checkout.insertAdjacentHTML('afterend', cart_usp_html);
		cart_checkout.insertAdjacentElement('afterend', cart_view);
		clearInterval(view_cart_change);
	}
}, 10);

setInterval(() => {
	const span_elm = document.querySelector(
		'.minicart-wrapper .action.showcart .counter.qty'
	);
	if (span_elm) {
		span_elm.style.animationPlayState = 'running';
		const timeout_animation = setTimeout(() => {
			span_elm.style.animationPlayState = 'paused';
			clearTimeout(timeout_animation);
		}, 1000);
	}
}, 5000);

const goAnotherPage = (e) => {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
	location.href = 'https://www.carlsgolfland.com/checkout/cart/';
};

const intervalMinCart = setInterval(() => {
	const miniCart = document.querySelector(
		'.header-wrapper-right .minicart-wrapper a'
	);
	if (miniCart) {
		miniCart.addEventListener('click', (e) => goAnotherPage(e), true);
		clearInterval(intervalMinCart);
	}
}, 10);
