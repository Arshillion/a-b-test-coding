const interval = setInterval(() => {
	try {
		const continueToPayment = document.querySelector(
			'.btn.btn-sky.continue-to-payment'
		);
		if (continueToPayment && !document.querySelector('.text-changed')) {
			continueToPayment.classList.add('text-changed');
			continueToPayment.innerText = 'Next';
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
