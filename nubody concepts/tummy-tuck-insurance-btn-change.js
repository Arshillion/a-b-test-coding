const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'h3 ~ button[data-target="#consultationModal"]'
	);
	if (exist_elm) {
		exist_elm.innerHTML = `Start Your Transformation`;
		clearInterval(interval);
	}
}, 10);
