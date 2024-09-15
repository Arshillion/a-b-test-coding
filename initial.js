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
		const exist_elm = document.querySelector('.exist-elm');
		if (exist_elm && !document.querySelector('.new-elm')) {
			exist_elm.insertAdjacentHTML('beforeend', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
