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
    @media (max-width: 575px) {
        .page-header .header.content .logo img {
            width: 160px !important;
        }
    }
    @media (max-width: 480px) {
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
    @media (max-width: 400px) {
        .page-header .header.content .logo img {
            width: 120px !important;
        }
    }
    html body.test-trigger-mini-cart-test .bm-t-mini-cart-wrapper {
        border: solid 1px #d5d5d5;
        margin: 10px;
        border-radius: 5px;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .bm-t-mini-cart-main {
        padding: 12px 20px;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .bm-t-mini-cart-price
        span.bm-birdie {
        font-weight: 700;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .bm-t-mini-cart-price
        span.bm-birdie-free-shipping {
        color: #006948;
        font-weight: 700;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .bm-t-mini-cart-price {
        font-size: 15px;
        margin: 10px 0;
        text-align: center;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .mini-cart-suggestions {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin: 10px 0;
    }
    html body.test-trigger-mini-cart-test .bm-t-mini-cart-wrapper .mini-cart-link {
        border: 1px solid #006948;
        padding: 12px 18px;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: #006948;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .mini-cart-link:hover {
        background-color: #006948;
        color: #fff;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .bm-t-mini-cart-progressBar {
        width: 100%;
        background-color: #f0f0f0;
        position: relative;
        margin: 10px 0;
    }
    html
        body.test-trigger-mini-cart-test
        .bm-t-mini-cart-wrapper
        .bm-t-mini-cart-progressBar
        .bm-t-mini-cart-progressBar-child {
        background-color: #006948;
        border-radius: 5px;
        height: 20px;
        width: 0;
        transition: width 0.5s ease-in-out;
    }
    body .bm-freeshipping-activated-two,
    body .bm-freeshipping-activated-one,
    body .bm-freeshipping-activated-one img {
        display: none;
    }
    html .freeshipping-activated .bm-freeshipping-activated-two {
        position: absolute;
        width: 40px;
        height: 20px;
        right: -5px;
        top: 0;
        background: #ffffff;
        border-radius: 20px;
        display: block;
    }
    html .freeshipping-activated .bm-freeshipping-activated-one {
        position: absolute;
        right: -5px;
        top: -21px;
        z-index: 22;
        border-radius: 20px;
        display: block;
    }
    html .freeshipping-activated .bm-freeshipping-activated-one img {
        width: 40px;
        height: 40px;
        display: block;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        html
            body.test-trigger-mini-cart-test
            .bm-t-mini-cart-wrapper
            .mini-cart-link {
            padding: 10px 16px;
        }
        html
            body.test-trigger-mini-cart-test
            .bm-t-mini-cart-wrapper
            .mini-cart-suggestions {
            gap: 8px;
        }
        html body.test-trigger-mini-cart-test .bm-t-mini-cart-price {
            font-size: 14px;
            margin: 10px 0;
        }
    }

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

(() => {
	var $ = Object.defineProperty;
	var s = (t, e) => $(t, 'name', { value: e, configurable: !0 });
	var d = s((t, ...e) => String.raw({ raw: t }, ...e), 'html'),
		f = s((t, e, r) => {
			if (t()) {
				e();
				return;
			}
			let n = setInterval(() => {
				try {
					t() && (e(), clearInterval(n), (n = null));
				} catch (o) {}
			}, r.interval);
			setTimeout(() => {
				n &&
					(clearInterval(n),
					(window.evolvRenderTimeout = {
						msg: 'evolv render listener timeout',
						poll: r,
					}));
			}, r.duration);
		}, 'waitFor'),
		u = s((t) => {
			if (!t) {
				console.error('Invalid selector!');
				return;
			}
			let e = document.querySelector(t);
			if (!e) {
				console.error(`Selector ${t} does not exist in DOM!`);
				return;
			}
			return e;
		}, '$ref'),
		m = s((t) => {
			if (!t) {
				console.error('Invalid selector!');
				return;
			}
			let e = document.querySelectorAll(t);
			if (!e || !e.length) {
				console.error(`Selector ${t} does not exist in DOM!`);
				return;
			}
			return e;
		}, '$refs'),
		l = s((t, e) => {
			if (!e) {
				i('not found');
				return;
			}
			let r = m(t);
			if (r) {
				if (Array.isArray(e)) {
					r.forEach((n) => {
						n.classList.add(...e);
					});
					return;
				}
				typeof e == 'string' &&
					r.forEach((n) => {
						n.classList.add(e);
					});
			}
		}, '$addClass');
	var g = s((t, e, r = 'beforeend') => {
		let n = m(t);
		n &&
			n.forEach((o) => {
				r === 'beforebegin'
					? o.insertAdjacentHTML('beforebegin', e)
					: r === 'afterbegin'
					? o.insertAdjacentHTML('afterbegin', e)
					: r === 'afterend'
					? o.insertAdjacentHTML('afterend', e)
					: o.insertAdjacentHTML('beforeend', e);
			});
	}, '$append');
	var h = s((t, e, r, n) => {
		let o = u(t);
		if (o) {
			if (!e) return getComputedStyle(o);
			if (typeof e == 'string' && r === void 0) return getComputedStyle(o)[e];
			if (typeof e == 'string') o.style[e] = r;
			else for (let c in e) o.style[c] = e[c];
			n != null && n.callback && n.callback();
		}
	}, '$css');
	var i = s((t) => {
			let r = new URLSearchParams(window.location.search).get('bm-debugger'),
				n = localStorage.getItem('bm-debugger'),
				o = r && r.includes('1'),
				c = n && n.includes('1');
			(o || c) && console.log(t);
		}, '$log'),
		y = s((t, e) => {
			let r = XMLHttpRequest.prototype.send;
			XMLHttpRequest.prototype.send = function () {
				return (
					this.addEventListener('load', () => {
						if (t.some((n) => this.responseURL.includes(n))) {
							let n = JSON.parse(this.responseText);
							e(n);
						}
					}),
					r.apply(this, arguments)
				);
			};
		}, '$ajaxDetection');
	var p = s((t, e) => {
		let r = u(t);
		if (r) return e ? ((r.innerHTML = e), e) : r.innerHTML || '';
	}, '$htmlContent');
	var x = s((t, e, r) => {
			let n = e <= 100 ? `${e}%` : '100%';
			return (
				t >= r
					? document.body.classList.add('freeshipping-activated')
					: document.body.classList.remove('freeshipping-activated'),
				d`
    <div class="bm-t-mini-cart-wrapper">
      <div class="bm-t-mini-cart-container">
        <div class="bm-t-mini-cart-main">
          <div class="bm-t-mini-cart-price">
            ${
							t >= r
								? "<span class='bm-birdie'>BIRDIE!! </span> You've scored <span class='bm-birdie-free-shipping'>FREE SHIPPING</span>."
								: `You are <span class ="bm-birdie-free-shipping">$<span>${Number(
										parseFloat((r - t).toFixed(2))
								  )}</span></span> away from <span class="bm-birdie">FREE SHIPPING</span>`
						}
          </div>
          <div class="bm-t-mini-cart-progressBar">
            <div class="bm-t-mini-cart-progressBar-child" style="width: ${n}"></div>
            <div class="bm-freeshipping-activated-one"><img src="https://d27c6j8064skg9.cloudfront.net/Test+Triggers/Mini+Cart+-+Add+Free+Shipping+Counter/noun-golf-club-3268181-006948.png" alt=""></div>
            <div class="bm-freeshipping-activated-two"></div>
          </div>
        </div>
      </div>
    </div>`
			);
		}, 'MiniCartFreeShipping'),
		b = x;
	var a = 70,
		v = s((t) => {
			i(t),
				(t = typeof t == 'string' ? Number(parseFloat(t).toFixed(2)) : t),
				i(t),
				t && t > 0 && A(t);
		}, 'checkSubTotalAndConvert');
	var w = s((t, e) => {
			let r = e <= 100 ? `${e}%` : '100%';
			h('.bm-t-mini-cart-progressBar-child', 'width', `${r}`),
				t >= a
					? l('body', 'freeshipping-activated')
					: document
							.querySelector('body')
							.classList.remove('freeshipping-activated'),
				t >= a
					? p(
							'.bm-t-mini-cart-price',
							"<span class='bm-birdie'>BIRDIE!! </span> You've scored <span class='bm-birdie-free-shipping'>FREE SHIPPING</span>."
					  )
					: p(
							'.bm-t-mini-cart-price',
							`You are <span class ="bm-birdie-free-shipping">$<span>${Number(
								parseFloat((a - t).toFixed(2))
							)}</span></span> away from <span class="bm-birdie">FREE SHIPPING</span>`
					  );
		}, 'updatePrice'),
		E = s((t) => {
			l('body', 'test-trigger-mini-cart-test'), i('found');
			let e = (t / a) * 100,
				r = b(t, e, a);
			i(r),
				i(e),
				document.querySelector('.bm-t-mini-cart-wrapper')
					? w(t, e)
					: g('.minicart-wrapper .minicart-items-wrapper', r, 'beforebegin');
		}, 'domManipulation'),
		A = s((t) => {
			f(
				() => !!document.querySelector('.minicart-wrapper .subtotal'),
				() => E(t),
				{ interval: 50, duration: 15e3 }
			);
		}, 'testTrigger'),
		S = s((t) => {
			let e =
				t && t.cartData && t.cartData.subtotalAmount
					? t.cartData.subtotalAmount
					: t && t.cart && t.cart.subtotalAmount
					? t.cart.subtotalAmount
					: null;
			e && v(e);
		}, 'checkIfSubTotalIsAvailable');
	y(['totals/', 'sections=cart', 'checkout/cart/add/'], S);
})();

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

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ''));
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
					new_elm_html(cartSubTotalValue >= 70, 70 - cartSubTotalValue)
				);
			} else {
				head.insertAdjacentHTML('beforeend', style);
				exist_elm.insertAdjacentHTML(
					'afterbegin',
					new_elm_html(cartSubTotalValue >= 70, 70 - cartSubTotalValue)
				);
			}
		}
	} catch (error) {
		console.log(error);
	}
}, 10);
