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

const style = `
<style>
    .minicart-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
    }
	.cart-slider {
		border: 2px solid #257d0d;
		background-color: #e5fae0;
		padding: 6px;
		max-width: 110px;
		border-radius: 4px;
		position: relative;
		display: flex;
		align-items: center;
	}
	.cart-slider::after {
		content: '';
		position: absolute;
		width: 14px;
		height: 14px;
		border-right: 2px solid #257d0d;
		border-top: 2px solid #257d0d;
		left: calc(100% - 7px);
		top: 20%;
		background: #e5fae0;
		transform: rotate(45deg);
		border-radius: 2px;
	}
	.cart-slider span {
		font-size: 12px;
		line-height: 14px;
		font-weight: 600;
	}

	.cart-slider.free-shipping {
		gap: 4px;
		padding-left: 2px;
		max-width: 95px;
	}
	.cart-slider.free-shipping strong {
		font-size: 16px;
	}
    @media (max-width:575px){
		.page-header .header.content .logo img{
			width: 160px!important;
		}
	}
    @media (max-width:480px){
        .cart-slider {
            padding: 4px;
		    max-width: 75px;
        }
        .cart-slider span {
            font-size: 8px;
            line-height: 10px;
            font-weight: 500;
        }
        .cart-slider::after {
            width: 10px;
            height: 10px;
            left: calc(100% - 5px);
        }
        .cart-slider.free-shipping {
            gap: 2px;
        }
        .cart-slider.free-shipping strong {
            font-size: 14px;
        }
    }
	@media (max-width:400px){
		.page-header .header.content .logo img{
			width: 120px!important;
		}
	}
</style>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ""));
};

const new_elm_html = (free, amountRemaining) => `
<div ${free ? `class="free-shipping cart-slider"` : `class="cart-slider"`}>
        ${free ? `<strong>&#x2714;</strong>` : ''}
        ${
					free
						? `<span>Your order will ship free!</span>`
						: `<span>You're $${amountRemaining.toFixed(
								2
						  )} from Free Shipping.</span>`
				}
 </div>
`;

let cartPrice = 0;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.minicart-wrapper');
		const head = document.querySelector('head');
		const cartSubTotalValueStr =
			document.querySelector('#minicart-content-wrapper .subtotal .price')
				?.innerText ?? '0';
		const cartSubTotalValue = numberOnly(cartSubTotalValueStr);
		if (
			exist_elm &&
			head &&
			cartSubTotalValue > 0 &&
			cartPrice !== cartSubTotalValue
		) {
			cartPrice = cartSubTotalValue;
			if (document.querySelector('.cart-slider')) {
				document.querySelector('.cart-slider').remove();
				exist_elm.insertAdjacentHTML(
					'afterbegin',
					new_elm_html(cartSubTotalValue >= 80, 80 - cartSubTotalValue)
				);
			} else {
				head.insertAdjacentHTML('beforeend', style);
				exist_elm.insertAdjacentHTML(
					'afterbegin',
					new_elm_html(cartSubTotalValue >= 80, 80 - cartSubTotalValue)
				);
			}
		}
	} catch (error) {
		console.log(error);
	}
}, 10);
