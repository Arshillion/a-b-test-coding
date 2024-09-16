const svgPercent = `
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="52" height="52" rx="26" fill="black"/>
<path d="M38.9269 22.8065L38.0599 21.9395C37.8497 21.7295 37.6831 21.48 37.5698 21.2053C37.4565 20.9306 37.3988 20.6361 37.3999 20.339V19.118C37.3987 17.9209 36.9227 16.7732 36.0762 15.9267C35.2297 15.0803 34.082 14.6042 32.8849 14.603H31.6624C31.3653 14.6035 31.071 14.5452 30.7966 14.4314C30.5222 14.3176 30.273 14.1506 30.0634 13.94L29.1934 13.073C28.3464 12.2278 27.1987 11.7532 26.0022 11.7532C24.8056 11.7532 23.6579 12.2278 22.8109 13.073L21.9409 13.94C21.7309 14.1502 21.4814 14.3168 21.2067 14.4301C20.932 14.5434 20.6376 14.6011 20.3404 14.6H19.1179C17.9198 14.6004 16.7708 15.0765 15.9236 15.9237C15.0764 16.7709 14.6003 17.9199 14.5999 19.118V20.339C14.601 20.6361 14.5433 20.9306 14.43 21.2053C14.3167 21.48 14.1502 21.7295 13.9399 21.9395L13.0729 22.8065C12.2272 23.6538 11.7522 24.8021 11.7522 25.9992C11.7522 27.1964 12.2272 28.3447 13.0729 29.192L13.9399 30.0605C14.15 30.2703 14.3164 30.5196 14.4297 30.794C14.543 31.0685 14.6008 31.3626 14.5999 31.6595V32.882C14.6015 34.079 15.0777 35.2264 15.9241 36.0728C16.7705 36.9192 17.9179 37.3954 19.1149 37.397H20.3374C20.6344 37.3963 20.9286 37.4543 21.203 37.5679C21.4775 37.6814 21.7267 37.8482 21.9364 38.0585L22.8049 38.927C23.6522 39.7723 24.8001 40.247 25.9969 40.247C27.1937 40.247 28.3417 39.7723 29.1889 38.927L30.0574 38.0585C30.2671 37.8482 30.5163 37.6814 30.7908 37.5679C31.0652 37.4543 31.3594 37.3963 31.6564 37.397H32.8789C34.0759 37.3954 35.2234 36.9192 36.0697 36.0728C36.9161 35.2264 37.3923 34.079 37.3939 32.882V31.6595C37.3935 31.3624 37.4519 31.0682 37.5657 30.7938C37.6795 30.5194 37.8464 30.2701 38.0569 30.0605L38.9239 29.192C39.77 28.3451 40.2456 27.197 40.2461 25.9999C40.2467 24.8027 39.7722 23.6542 38.9269 22.8065ZM37.8664 28.1315L36.9994 29C36.6487 29.3482 36.3706 29.7626 36.1814 30.2192C35.9921 30.6757 35.8954 31.1653 35.8969 31.6595V32.882C35.8961 33.6814 35.5782 34.4478 35.013 35.013C34.4477 35.5783 33.6813 35.8962 32.8819 35.897H31.6594C31.1655 35.8965 30.6763 35.9935 30.2199 36.1824C29.7635 36.3713 29.3489 36.6485 28.9999 36.998L28.1299 37.8665C27.564 38.4301 26.7978 38.7465 25.9992 38.7465C25.2005 38.7465 24.4343 38.4301 23.8684 37.8665L22.9984 36.998C22.6494 36.6491 22.235 36.3725 21.7789 36.1841C21.3227 35.9957 20.8339 35.8991 20.3404 35.9H19.1179C18.3187 35.8988 17.5525 35.5808 16.9873 35.0156C16.4221 34.4504 16.1041 33.6843 16.1029 32.885V31.6625C16.1048 31.1678 16.0083 30.6776 15.819 30.2205C15.6297 29.7635 15.3515 29.3486 15.0004 29L14.1334 28.1315C13.5685 27.5657 13.2513 26.7988 13.2513 25.9992C13.2513 25.1997 13.5685 24.4328 14.1334 23.867L15.0004 23C15.3505 22.6512 15.6279 22.2364 15.8166 21.7796C16.0054 21.3228 16.1017 20.8332 16.0999 20.339V19.118C16.0999 18.3176 16.4179 17.5499 16.9839 16.9839C17.5498 16.418 18.3175 16.1 19.1179 16.1H20.3404C20.8344 16.1015 21.3237 16.0052 21.7802 15.8164C22.2367 15.6277 22.6513 15.3504 22.9999 15.0005L23.8684 14.1335C24.434 13.5687 25.2006 13.2515 25.9999 13.2515C26.7992 13.2515 27.5658 13.5687 28.1314 14.1335L28.9999 15.0005C29.3484 15.3509 29.7628 15.6287 30.2193 15.8179C30.6758 16.0072 31.1653 16.1041 31.6594 16.103H32.8819C33.6814 16.1034 34.4481 16.4212 35.0134 16.9865C35.5787 17.5518 35.8965 18.3185 35.8969 19.118V20.339C35.8955 20.8334 35.9922 21.3232 36.1814 21.78C36.3707 22.2368 36.6487 22.6515 36.9994 23L37.8664 23.867C38.4313 24.4328 38.7486 25.1997 38.7486 25.9992C38.7486 26.7988 38.4313 27.5657 37.8664 28.1315ZM31.0309 20.969C31.1715 21.1096 31.2505 21.3004 31.2505 21.4992C31.2505 21.6981 31.1715 21.8888 31.0309 22.0295L22.0309 31.0295C21.8903 31.1703 21.6995 31.2495 21.5004 31.2497C21.3014 31.2498 21.1105 31.1709 20.9697 31.0302C20.8288 30.8896 20.7496 30.6988 20.7495 30.4998C20.7494 30.3008 20.8283 30.1098 20.9689 29.969L29.9689 20.969C30.1098 20.8283 30.3008 20.7493 30.4999 20.7493C30.699 20.7493 30.89 20.8283 31.0309 20.969ZM31.2499 29.75C31.2499 30.1478 31.0919 30.5294 30.8106 30.8107C30.5293 31.092 30.1477 31.25 29.7499 31.25C29.3521 31.25 28.9706 31.092 28.6893 30.8107C28.4079 30.5294 28.2499 30.1478 28.2499 29.75C28.2499 29.3522 28.4079 28.9706 28.6893 28.6893C28.9706 28.408 29.3521 28.25 29.7499 28.25C30.1477 28.25 30.5293 28.408 30.8106 28.6893C31.0919 28.9706 31.2499 29.3522 31.2499 29.75ZM20.7499 22.25C20.7499 21.8522 20.9079 21.4706 21.1893 21.1893C21.4706 20.908 21.8521 20.75 22.2499 20.75C22.6477 20.75 23.0293 20.908 23.3106 21.1893C23.5919 21.4706 23.7499 21.8522 23.7499 22.25C23.7499 22.6478 23.5919 23.0294 23.3106 23.3107C23.0293 23.592 22.6477 23.75 22.2499 23.75C21.8521 23.75 21.4706 23.592 21.1893 23.3107C20.9079 23.0294 20.7499 22.6478 20.7499 22.25Z" fill="white"/>
</svg>
`;

const style = `
<style>
    .dis-price{
        background: #FF437A;
		padding: 4px 12px 4px 12px;
		border-radius: 20px;
		font-size: 14px;
		font-weight: 700;
		line-height: 20px;
		text-align: center;
    }
    .badge.price__badge-sale{
        display: none!important;
    }
    .badge.price__badge-sale.dis-price{
        display: inline-block!important;
    }
	.save-more *{
		margin: 0;
		padding: 0;
	}
	.save-more{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4px;
		background: #F9F9F9;
		border: 1px solid #BCBCBC;
		padding: 12px 20px 12px 20px;
		border-radius: 8px;
	}
	.save-more-info{
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 2px 6px;
	}
	.save-more-info-details {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.save-more-info span{
		font-size: 14px;
		font-weight: 500;
		line-height: 14px;
		color: #000;
	}
	.save-more-info strong{
		font-size: 22px;
		font-weight: 800;
		line-height: 22px;
		color: #000;
	}
	.buy-items {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 10px;
	}
	.buy-item {
		border: 1px dashed #00B981;
		padding: 8px 16px 8px 16px;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 500;
		text-align: left;
		color: #000;
	}
	.buy-item span {
		color: #FF437A;
		font-weight: 700;
	}
	.price-per-item__container{
		display: flex;
    	align-items: center;
    	gap: 10px;
	}
	@media (max-width: 567px) {
		.save-more {
			flex-direction: column;
    		align-items: flex-start;
    		gap: 16px;
		}
		.buy-items {
			width: 100%;
		}
	}
	@media (min-width: 750px) and (max-width: 1320px) {
		.save-more {
			flex-direction: column;
    		align-items: flex-start;
    		gap: 16px;
		}
		.buy-items {
			width: 100%;
		}
	}
</style>
`;

const saveMoreElm = `
<div class="save-more">
	<div class="save-more-info">
		${svgPercent}
		<div class="save-more-info-details">
			<span>Buy more, Save more</span>
			<strong>SAVE UPTO 62%</strong>
		</div>
	</div>
	<div class="buy-items">
		<div class="buy-item">
			40% Savings<span> on 4 Packs</span>
		</div>
		<div class="buy-item">
			45% Savings<span> on 10 Packs</span>
		</div>
		<div class="buy-item">
			60% Savings<span> on 20 Packs</span>
		</div>
		<div class="buy-item">
			62% Savings<span> on 40 Packs</span>
		</div>
	</div>
</div>
`;

const addMoreToQtyElm = `
<div class="buy-item">
	Add more 4 to <span>SAVE 25%</span>
</div>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ''));
};

let storeDisPrice = 0;

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const disInterval = setInterval(() => {
	try {
		const saleElm = document.querySelector('.badge.price__badge-sale');
		const regularPrice = document.querySelector(
			'.price__container .price__sale .price-item.price-item--regular'
		);
		const discountedPrice = document.querySelector(
			'.price__container .price__sale .price-item.price-item--sale'
		);
		if (saleElm && discountedPrice && regularPrice) {
			const salePrice =
				numberOnly(regularPrice.innerText) -
				numberOnly(discountedPrice.innerText);

			if (saleElm && salePrice && salePrice !== storeDisPrice) {
				storeDisPrice = salePrice;
				saleElm.classList.add('dis-price');
				saleElm.innerText = `Save $${salePrice.toFixed(2)}`;
			}
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const saveMoreInterval = setInterval(() => {
	const productButtons = document.querySelector('.product-form__buttons');
	const pricePerItem = document.querySelector('.price-per-item__container');
	if (productButtons) {
		productButtons.insertAdjacentHTML('afterend', saveMoreElm);
		pricePerItem.insertAdjacentHTML('beforeend', addMoreToQtyElm);
		clearInterval(saveMoreInterval);
	}
}, 10);
