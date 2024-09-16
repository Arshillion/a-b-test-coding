const style = `
<style>
    main section.difference {
        display: none!important;  
    }
</style>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('main section.difference');
		const head = document.querySelector('head');
		if (exist_elm && head) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.remove();
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
