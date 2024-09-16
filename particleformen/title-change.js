const interval = setInterval(() => {
	try {
		const title = 'CONFIDENCE <span>Engineered</span>';
		const exist_elm = document.querySelector('.title-1.en');
		if (exist_elm && exist_elm.innerHTML !== title) {
			exist_elm.innerHTML = title;
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
