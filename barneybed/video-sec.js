const interval = setInterval(() => {
	try {
		const grabArea = document.querySelector(
			'#shopify-section-template--15898134544463__beds_homepage_QFtKpm'
		);
		const videoHeader = document.querySelector(
			'#shopify-section-template--15898134544463__rich_text_K9DCJ7'
		);
		const videoSection = document.querySelector(
			'#shopify-section-template--15898134544463__171935655365e87a68'
		);

		if (grabArea && videoHeader && videoSection) {
			grabArea.insertAdjacentElement('afterend', videoSection);
			grabArea.insertAdjacentElement('afterend', videoHeader);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
