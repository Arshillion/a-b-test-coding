const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'h3 ~ button[data-target="#consultationModal"]'
	);
	if (exist_elm) {
		exist_elm.innerHTML = `Book Your Consultation Now`;
		clearInterval(interval);
	}
}, 10);
