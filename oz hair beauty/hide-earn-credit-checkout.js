const style = `
<style>
    .style_loyaltyBanner__IfKJg{
        display: none!important;
    }
</style>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.style_loyaltyBanner__IfKJg');
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
