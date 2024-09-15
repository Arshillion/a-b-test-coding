const interval = setInterval(() => {
	try {
		const quoteText = 'Request a Quote';
		const topBtn = document.querySelector(
			'.navbar .button.nav-button.trigger.w-button'
		);
		const heroBtn = document.querySelector(
			'.wrapper.ban .button1.trigger.w-button'
		);
		const modalButton = document.querySelector('.est .submit-button.w-button');
		if (topBtn && heroBtn && modalButton) {
			topBtn.innerText = quoteText;
			heroBtn.innerText = quoteText;
			modalButton.innerText = quoteText;
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
