const style = `
<style>
</style>
`;

const new_elm_html = `
<div class="new-elm">
</div>
`;

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const interval = setInterval(() => {
	try {
		const featured = document.querySelector(
			'#shopify-section-1657787313d9fe5254'
		);
		const founderSection = document.querySelector(
			'.shopify-section.new-founder-section'
		);
		const recommendations = document.querySelector(
			'#shopify-section-ss_home_recommendations_BCJFWT'
		);
		if (featured && founderSection && recommendations) {
			founderSection.insertAdjacentElement('beforebegin', recommendations);
			founderSection.insertAdjacentElement('afterend', featured);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
