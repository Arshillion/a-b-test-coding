const goAnotherPage = () => {
	location.href = 'https://www.carlsgolfland.com/checkout/cart/';
};

const style = `
<style>
	#ui-id-1{
		display: none!important
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

const intervalMinCart = setInterval(() => {
	const miniCart = document.querySelector('.header-wrapper-right .minicart-wrapper');
	if (miniCart) {
		miniCart.addEventListener('click', () => goAnotherPage(), true);
		clearInterval(intervalMinCart);
	}
}, 10);

const addedCartInterval = setInterval(() => {
	const cartButton = document.querySelector('#product-addtocart-button');
	const cartTitle = cartButton?.title ?? '';
	if (cartButton && cartTitle === 'Added') {
		goAnotherPage();
		clearInterval(addedCartInterval);
	}
}, 10);
