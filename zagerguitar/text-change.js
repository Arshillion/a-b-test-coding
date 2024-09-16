const interval = setInterval(() => {
	try {
		const text = document.querySelector('.remark .remark__text p');
		if (text && !document.querySelector('.new-elm')) {
			text.innerText = text.innerText.replace(
				'Mr. Zager is backed up 3 days',
				'We are backed up 3 days'
			);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
