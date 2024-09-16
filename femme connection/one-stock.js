setInterval(() => {
	const selectors = [...document.querySelectorAll('.inventory-quantity')];
	if (selectors) {
		selectors.map((selector) => {
			if (selector && !selector.querySelector('.one-stock')) {
				selector.innerHTML = '<span class="one-stock">1 in stock</span>';
			}
		});
	}
}, 10);
