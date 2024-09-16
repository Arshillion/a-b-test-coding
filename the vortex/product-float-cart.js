const style = `
<style>
    .float-cart-btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: center;
		cursor: pointer;
		background: #ffffff;
		font-family: Poppins;
		font-weight: 700;
		font-size: 18px;
		padding: 10px;
		display: flex;
    	align-items: center;
    	flex-direction: column;
		gap: 4px;
		box-shadow: 0px -3px 2px #dcdcdc40;
		z-index: 1;
	}
	.float-cart-btn button{
		position: static!important;
		margin: 0!important;
	}
	.float-cart-btn .sc-fHeRUh.ihgygX{
		margin: 0!important;
	}
</style>
`;

const getCurrentPrice = () => {
	try {
		const radioPriceName = document.querySelector('.kaching-bundles__bars .kaching-bundles__bar input').name;
		const selectedPrice = document.querySelector(`input[name="${radioPriceName}"]:checked`);
		const currentPrice = selectedPrice.parentNode.querySelector('.kaching-bundles__bar-price').innerText;
		return currentPrice;
	} catch (error) {
		return false;
	}
};

const interval = setInterval(() => {
	try {
		const productFloatBtn = document.querySelector('.sc-bLdqUH.eCxunz.pf-3010_.pf-button-1');
		const productRev = document.querySelector('.sc-fHeRUh.ihgygX.pf-2619_');
		const currentPrice = getCurrentPrice();
		const head = document.querySelector('head');
		if (currentPrice && productFloatBtn && productRev && head && !document.querySelector('.float-cart-btn')) {
			const floatCartBtnParent = productFloatBtn.parentNode;
			if (floatCartBtnParent) {
				head.insertAdjacentHTML('beforeend', style);
				const newDiv = document.createElement('div');
				newDiv.classList.add('float-cart-btn');
				productFloatBtn.innerHTML = `${currentPrice} - Add To Cart`;
				newDiv.insertAdjacentElement('afterbegin', productFloatBtn);
				newDiv.insertAdjacentHTML('afterbegin', productRev.outerHTML);
				floatCartBtnParent.insertAdjacentElement('beforeend', newDiv);
				clearInterval(interval);
			}
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

let previousPrice = '';
const priceInterval = setInterval(() => {
	const floatArea = document.querySelector('.float-cart-btn');
	const currentPrice = getCurrentPrice();
	if (floatArea && previousPrice !== currentPrice) {
		previousPrice = currentPrice;
		const floatAreaBtn = floatArea.querySelector('button');
		floatAreaBtn.innerHTML = `${currentPrice} - Add To Cart`;
	}
}, 10);
