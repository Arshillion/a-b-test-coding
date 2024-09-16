const eyeSvg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5.78125C5.3125 5.78125 3.4375 10 3.4375 10C3.4375 10 5.3125 14.2188 10 14.2188C14.6875 14.2188 16.5625 10 16.5625 10C16.5625 10 14.6875 5.78125 10 5.78125Z" stroke="#9440EC" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12.3438C10.6216 12.3438 11.2177 12.0968 11.6573 11.6573C12.0968 11.2177 12.3438 10.6216 12.3438 10C12.3438 9.3784 12.0968 8.78226 11.6573 8.34272C11.2177 7.90318 10.6216 7.65625 10 7.65625C9.3784 7.65625 8.78226 7.90318 8.34272 8.34272C7.90318 8.78226 7.65625 9.3784 7.65625 10C7.65625 10.6216 7.90318 11.2177 8.34272 11.6573C8.78226 12.0968 9.3784 12.3438 10 12.3438Z" stroke="#9440EC" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const style = `
<style>
.quick-view{
    display: flex;
    align-items: center;
    gap: 4px;
}
.free-gift{
    position: absolute;
    z-index: 1;
    right: 0px;
    top: 0px;
    background: #9440EC;
    color: #fff;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 10px;
}
.Product_product-price-container__DbBLQ{
    display: flex;
    align-items: center;
    gap: 6px;
}
.Product_product-price-container__DbBLQ *{
    margin: 0;
    padding: 0;
}
.product-discount{
    background: #9440EC;
    color: #fff;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 10px;
}
</style>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ''));
};

const interval = setInterval(() => {
	try {
		const products = document.querySelectorAll('.ProductGrid_product__W72U2');
		const head = document.querySelector('head');
		if (
			products &&
			head &&
			document.querySelector('.Product_product-badges__soVaP div')
		) {
			head.insertAdjacentHTML('beforeend', style);
			products?.forEach((product) => {
				if (!product.classList.contains('modified-elm')) {
					product.classList.add('modified-elm');
					const quickView = product.querySelector(
						'.Product_product-badges__soVaP ~ div .mb-3 button'
					);
					if (quickView) {
						quickView.classList.add('quick-view');
						quickView.innerHTML = `${eyeSvg} <span>Quick View</span>`;
					}
					const freeGift = product.querySelector(
						'.Product_product-badges__soVaP div'
					);
					const productArea = product.querySelector(
						'.Product_product-thumbnail__najOP'
					);
					if (freeGift && productArea) {
						freeGift.classList.add('free-gift');
						productArea.insertAdjacentElement('afterbegin', freeGift);
					}
					const priceContainer = product.querySelector(
						'.Product_product-price-container__DbBLQ'
					);
					const currentPrice =
						product.querySelector('.Product_product-price__RQNb_')?.innerText ??
						null;
					const prevPrice =
						product.querySelector('.Product_product-previous-price__KJGV7')
							?.innerText ?? null;
					if (currentPrice && priceContainer && prevPrice) {
						const currentPriceNumber = numberOnly(currentPrice);
						const prevPriceNumber = numberOnly(prevPrice);
						const discount = prevPriceNumber - currentPriceNumber;
						priceContainer.insertAdjacentHTML(
							'beforeend',
							`<span class="product-discount">Save $${discount.toFixed(
								2
							)}</span>`
						);
					}
				}
			});
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
