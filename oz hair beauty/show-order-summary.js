const interval = setInterval(() => {
	const windowWidth = window.outerWidth;
	try {
		const showArea = document.querySelector(
			'button.b20QW[aria-controls="disclosure_details"]'
		);
		if (
			showArea &&
			windowWidth <= 999 &&
			!document.querySelector('.area-open-ab')
		) {
			showArea.classList.add('area-open-ab');
			showArea.click();
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
