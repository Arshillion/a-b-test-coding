const style = `
<style>
    // .free-gift-advert-containers + div .mt-5 *:not(:first-child) {
    //     display: none;
    // }
    .free-gift-advert-containers + div{
        display: none;
    }
</style>
`;


const styleInterval = setInterval(() => {
	const head = document.querySelector('head');
	if (head) {
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(styleInterval);
	}
}, 10);
