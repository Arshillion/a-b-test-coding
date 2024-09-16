const interval = setInterval(() => {
	const header = document.querySelector('.elementor-element-d86d0af');
	const book_area = document.querySelector('.elementor-element-674e542');
	if (book_area && header) {
		header.insertAdjacentElement('beforebegin', book_area);
		header.remove();
		clearInterval(interval);
	}
}, 10);
