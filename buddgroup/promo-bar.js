const style = `
<style>
    .promo-bar{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
    .promo-bar a{
        font-weight: bold;
    }
</style>
`;

const new_elm_html = `
<a href="tel:18002218158">Call us</a>
<span>to find a job with the southeast's best company.</span>
<a href="tel:18002218158">(800) 221-8158</a>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.announce p');
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.new-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.classList.add('promo-bar');
			exist_elm.innerHTML = new_elm_html;
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
