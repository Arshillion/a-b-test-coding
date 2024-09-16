setInterval(() => {
	const check_sibling = document.querySelector(
		'input[name=Size]:checked'
	).nextSibling;
	const cart_button = document.querySelector('.add-to-cart-wrapper button');
	if (check_sibling && cart_button) {
		const button_innerText = cart_button.innerText;
		if (
			check_sibling.classList.contains('disabled') &&
			button_innerText !== 'SOLD OUT'
		) {
			cart_button.setAttribute('disabled', true);
			cart_button.innerText = 'Sold Out';
		} else if (
			!check_sibling.classList.contains('disabled') &&
			button_innerText !== 'ADD TO CART'
		) {
			cart_button.innerText = 'Add to cart';
			cart_button.removeAttribute('disabled');
		}
	}
}, 10);
