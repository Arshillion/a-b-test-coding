const style = `
<style>
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
	html
		body.test-trigger-mini-cart-test
		.bm-t-mini-cart-wrapper
		.mini-cart-link {
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
	.free-item {
		cursor: default !important;
		display: flex;
		align-items: flex-start;
		gap: 20px;
	}
	.free-item-info * {
		margin: 0;
		padding: 0;
	}
	.free-item-info h6 {
		font-size: 14px;
		line-height: 14px;
		font-weight: bold;
		margin-bottom: 4px;
	}

	.free-item-info p {
		font-size: 12px;
		line-height: 12px;
	}

	.free-item-info h6 span {
		text-decoration: underline;
	}
	.free-item img {
		width: 50px;
	}
	.free-item strong {
		font-size: 16px;
		line-height: 16px;
		font-weight: bold;
		margin-left: auto;
	}
</style>
`;

const style_int = setInterval(() => {
	const head = document.querySelector('head');
	if (head) {
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(style_int);
	}
}, 10);

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
					: g('.minicart-wrapper .subtotal', r, 'beforebegin');
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

const new_free_item_html = `
<li class="free-item">
<img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/holiday-returns.png">
<div class="free-item-info">
  <h6><span>Extended</span> Holiday Returns</h6>
  <p>Order now, send it back later.</br>Free returns until 1/31/24</p>
</div>
<strong>Free</strong>
</li>
`;

setInterval(() => {
	const min_cart_ol = document.querySelector('#mini-cart');
	const min_cart_li = [...document.querySelectorAll('#mini-cart li')];
	if (min_cart_li.length > 0 && !document.querySelector('.free-item')) {
		min_cart_ol.insertAdjacentHTML('beforeend', new_free_item_html);
	}
}, 10);
