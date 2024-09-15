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
