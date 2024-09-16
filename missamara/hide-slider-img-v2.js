const style = `
<style>
    #roomvo-direct-desktop {
	    display: none !important;
    }
</style>
`;

setInterval(() => {
	try {
		const elm = document.querySelector('#roomvo-direct-desktop');
		const head = document.querySelector('head');
		if (elm && head) {
			head.insertAdjacentHTML('beforeend', style);
			elm.setAttribute('style', 'display: none !important;');
			elm.remove();
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
