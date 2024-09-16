const free_svg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1894 19.8336C15.5304 19.8336 19.8602 15.5038 19.8602 10.1627C19.8602 4.82171 15.5304 0.491943 10.1894 0.491943C4.84832 0.491943 0.518555 4.82171 0.518555 10.1627C0.518555 15.5038 4.84832 19.8336 10.1894 19.8336Z" fill="#00B669"/>
<path d="M10.189 18.4962C14.7915 18.4962 18.5226 14.7652 18.5226 10.1627C18.5226 5.56022 14.7915 1.82916 10.189 1.82916C5.58653 1.82916 1.85547 5.56022 1.85547 10.1627C1.85547 14.7652 5.58653 18.4962 10.189 18.4962Z" stroke="white"/>
<path d="M14.4868 8.047C14.4868 8.31043 14.3835 8.56469 14.1956 8.74618L9.8275 12.9775C9.63024 13.1592 9.36717 13.2681 9.09482 13.2681C8.82234 13.2681 8.5594 13.1592 8.37143 12.9775L6.18279 10.8619C5.99494 10.6803 5.8916 10.4261 5.8916 10.1627C5.8916 9.89944 6.00424 9.65424 6.19221 9.46358C6.38947 9.28196 6.643 9.18205 6.91548 9.173C7.18783 9.173 7.44148 9.27291 7.63874 9.45453L9.09482 10.8619L12.7395 7.3388C12.9368 7.15719 13.1904 7.05731 13.4629 7.05731C13.7353 7.0664 13.9889 7.16628 14.1862 7.35697C14.374 7.53857 14.4868 7.78373 14.4868 8.047Z" fill="white"/>
</svg>
`;

const style = `
<style>
	#sidebar-cart-link{
		position: relative;
	}
	.cart-slider {
		border: 1px solid #9747FF;
		background-color: #f9f2ff;
		padding: 6px;
		width: 130px;
		border-radius: 4px;
		position: absolute;
        top: calc(100% + 10px);
        right: 0;
		display: flex;
		align-items: center;
        z-index: 1;
	}
	.cart-slider::after {
		content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        border-top: 1px solid #9747FF;
        border-left: 1px solid #9747FF;
        left: calc(100% - 24px);
        bottom: calc(100% - 6px);
        background: #f9f2ff;
        transform: rotate(45deg);
        border-radius: 2px;
	}
	.cart-slider span {
		font-size: 12px;
		line-height: 14px;
		font-weight: 500;   
	}
	.cart-slider svg {
		flex-shrink: 0;  
	}
	.cart-slider.free-shipping {
		gap: 6px;
	}
    @media (max-width:768px){
        .cart-slider {
            padding: 3px 6px;
            top: calc(100% + 15px);
        }
        .LogoAndSearch_content__omI4r form{
            margin-right: 136px;
			margin-right: 140px;
			border-radius: 8px;
			height: 38px;
        }
        .cart-slider::after{
            width: 8px;
            height: 8px;
            left: calc(100% - 13px);
            bottom: calc(100% - 3px);
        }
    }
</style>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ''));
};

const new_elm_html = (free, amountRemaining) => `
<div ${free ? `class="free-shipping cart-slider"` : `class="cart-slider"`}>
        ${free ? free_svg : ''}
        ${
					free
						? `<span>Your order will ship FREE</span>`
						: `<span>You're $${amountRemaining.toFixed(
								2
						  )} from Free Shipping.</span>`
				}
 </div>
`;

let cartPrice;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelectorAll(
			'#sidebar-cart-link,.LogoAndSearch_cart-icon__jzm7b'
		);
		const cartSubTotalValueStr =
			document.querySelector('#sidebar-cart-link .text-xs')?.innerText ?? '0';
		const cartSubTotalValue = numberOnly(cartSubTotalValueStr);
		if (
			exist_elm.length > 0 &&
			cartSubTotalValue > 0 &&
			cartPrice !== cartSubTotalValue
		) {
			cartPrice = cartSubTotalValue;
			exist_elm.forEach((item) => {
				if (item.querySelector('.cart-slider')) {
					item.querySelector('.cart-slider').remove();
				}
				item.insertAdjacentHTML(
					'afterbegin',
					new_elm_html(cartSubTotalValue >= 49, 49 - cartSubTotalValue)
				);
			});
		}
	} catch (error) {
		console.log(error);
	}
}, 10);

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.log(error);
	}
}, 10);
