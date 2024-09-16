const style = `
<style>
    .rev-area .yotpo-bottom-line-scroll-panel{
        align-items: center!important;
    }
    .finance-area{
        margin: 10px 0;
        display: grid;
        gap: 4px;
    }
    .price-elm{
        color: #db614b;
        font-size: 24px;
        line-height: 24px;
    }
	@media (max-width:420px){
		.rev-area .yotpo-star-rating-reviews-summary-text {
			font-size: 12px;
		}
	}
	@media (max-width:380px){
		.rev-area .yotpo-star-rating-reviews-summary-text {
			font-size: 10px;
		}
	}
</style>
`;

const financeElm = (priceText) => `
<div class="finance-area">
    <strong class="price-elm">
        Starting at: ${priceText}
    </strong>
</div>
`;

const interval = setInterval(() => {
	try {
		const headerSection = document.querySelector(
			'#shopify-section-main-product > div > div > div.block.top > div'
		);
		const limitedQuantity = headerSection.querySelectorAll('p');
		const rating = headerSection.querySelector(
			'.yotpo-pdp-rating.yotpo-widget-instance'
		);
		const freeVibe = headerSection.querySelector('span:nth-of-type(1)');
		const title = headerSection.querySelector('.product_title');
		const oldPrice = document.querySelector(
			'#product-form-main-product  .price__savings'
		).parentNode;
		const priceText = oldPrice.querySelector('[data-product-price]').innerText;
		let paymentOptionParent;
		const paymentOption = document.querySelector(
			'#product-form-main-product shopify-payment-terms'
		);
		if (paymentOption) {
			paymentOptionParent = paymentOption.parentNode;
		}
		const head = document.querySelector('head');

		if (!document.querySelector('.finance-area')) {
			head.insertAdjacentHTML('beforeend', style);
			limitedQuantity.forEach((li) => li.classList.add('hidden'));
			rating.classList.add('rev-area');
			oldPrice.classList.add('hidden');
			title.insertAdjacentElement('beforebegin', rating);
			if (paymentOptionParent) {
				title.insertAdjacentElement('afterend', paymentOptionParent);
			}
			title.insertAdjacentHTML('afterend', financeElm(priceText));
			title.insertAdjacentElement('afterend', freeVibe);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
