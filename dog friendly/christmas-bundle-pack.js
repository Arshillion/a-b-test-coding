const style_html = `
<style>
	.top-usp {
		display: flex;
		background: #eef5f6;
		justify-content: center;
		align-items: flex-start;
        padding: 8px;
	}
    .top-usp > div {
        display: flex;
        padding: 4px 10px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
    }
	.top-usp span {
		color: #000;
		font-size: 11px;
		font-style: normal;
		font-weight: 700;
		line-height: 12px;
		text-transform: uppercase;
	}
	.order-warning {
        border-radius: 6px;
        background: #FFEEF4;
		display: flex;
		padding: 12px 16px;
		justify-content: center;
		align-items: center;
		gap: 10px;
        margin: 20px 0;
	}
	.order-warning span {
		color: #ff004d;
		font-size: 11px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
	}
    .price-save {
        background: #00C595;
        display: flex;
        height: 30px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }
    .product-block.product-block--price{
        padding: 0;
        background: none;
        border-radius: 0;
        justify-content: flex-start;
        gap:8px;

    }
    #product_price_in_cart,.product-block.product-block--price.vs_testing{
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    #product_price_in_cart .igPrice{
    	color: #000;
        font-family: Bebas Neue;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    #product_price_in_cart .igComparePrice{
        color: #A7A7A7!important;
        font-family: Bebas Neue;
        font-size: 24px!important;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: strikethrough;
    }
    .btn.add-to-cart{
        border-radius: 30px!important;
    }
</style>
`;

const order_warning_html = `
<div class="order-warning">
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M22.4532 20.9893L12.5827 2.65508C12.5506 2.59544 12.503 2.54559 12.4448 2.51085C12.3867 2.47611 12.3202 2.45776 12.2525 2.45776C12.1847 2.45776 12.1183 2.47611 12.0601 2.51085C12.002 2.54559 11.9543 2.59544 11.9222 2.65508L2.04988 20.9893C2.01914 21.0464 2.00375 21.1106 2.00522 21.1755C2.0067 21.2403 2.02498 21.3037 2.05828 21.3594C2.09158 21.4151 2.13876 21.4612 2.19522 21.4932C2.25167 21.5252 2.31546 21.542 2.38035 21.542H22.125C22.1897 21.5416 22.2532 21.5245 22.3094 21.4923C22.3655 21.4602 22.4123 21.414 22.4454 21.3584C22.4784 21.3028 22.4965 21.2396 22.4978 21.1749C22.4992 21.1102 22.4838 21.0463 22.4532 20.9893ZM13.1897 19.2882H11.3147V17.4132H13.1897V19.2882ZM13.0022 16.292H11.5022L11.221 8.79196H13.2835L13.0022 16.292Z"
			fill="#FF005C"
		/>
	</svg>
	<span>Hurry! Order by December 18th to receive before Christmas</span>
</div>
`;

const top_usp_html = `
<div class="top-usp">
	<div>
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.6072 3.96546C14.223 3.98303 14.8334 4.22677 15.3033 4.69667C15.7732 5.16657 16.0169 5.777 16.0345 6.39267C16.0519 7.00193 16.0606 7.30656 16.0785 7.37747C16.1168 7.52925 16.0722 7.42188 16.1525 7.55627C16.19 7.61905 16.3993 7.84063 16.8178 8.28371C17.2407 8.7315 17.5 9.3355 17.5 10C17.5 10.6645 17.2407 11.2685 16.8178 11.7162C16.3993 12.1593 16.19 12.3809 16.1525 12.4437C16.0722 12.5781 16.1168 12.4708 16.0785 12.6225C16.0606 12.6934 16.0519 12.9981 16.0345 13.6073C16.0169 14.223 15.7732 14.8334 15.3033 15.3033C14.8334 15.7732 14.223 16.017 13.6072 16.0345C12.998 16.0519 12.6934 16.0606 12.6225 16.0785C12.4708 16.1168 12.5781 16.0723 12.4437 16.1526C12.3809 16.1901 12.1593 16.3993 11.7162 16.8178C11.2685 17.2407 10.6645 17.5 10 17.5C9.3355 17.5 8.7315 17.2407 8.28372 16.8178C7.84062 16.3993 7.61906 16.1901 7.55627 16.1526C7.42188 16.0723 7.52925 16.1168 7.37747 16.0785C7.30657 16.0606 7.00187 16.0519 6.39267 16.0345C5.77698 16.017 5.16655 15.7732 4.69664 15.3033C4.22673 14.8334 3.98299 14.223 3.96543 13.6072C3.94805 12.998 3.93937 12.6934 3.92148 12.6225C3.88321 12.4708 3.92768 12.5781 3.84742 12.4437C3.80993 12.3809 3.60068 12.1593 3.18218 11.7162C2.75927 11.2685 2.5 10.6645 2.5 10C2.5 9.3355 2.75927 8.7315 3.18218 8.28373C3.60068 7.84063 3.80993 7.61907 3.84742 7.55629C3.92768 7.4219 3.88321 7.52927 3.92148 7.37749C3.93937 7.30658 3.94805 7.00196 3.96543 6.39272C3.98299 5.77702 4.22673 5.16658 4.69664 4.69667C5.16655 4.22676 5.77698 3.98303 6.39267 3.96546C7.00193 3.94808 7.30657 3.93939 7.37747 3.92151C7.52925 3.88323 7.42188 3.92771 7.55627 3.84745C7.61906 3.80996 7.84063 3.60068 8.28372 3.18219C8.7315 2.75927 9.3355 2.5 10 2.5C10.6645 2.5 11.2685 2.75928 11.7162 3.1822C12.1594 3.6007 12.3809 3.80995 12.4437 3.84744C12.5781 3.9277 12.4708 3.88323 12.6225 3.92151C12.6934 3.93938 12.998 3.94808 13.6072 3.96546Z"
				fill="black"
			/>
			<path
				d="M7.5 10.5L9.04413 12L12.5 8"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<span>60 Day Perfect Fit Guarantee</span>
	</div>
	<div>
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 4V14.5H4.15328C4.36634 15.3594 5.10645 16 5.99233 16C6.87822 16 7.61832 15.3594 7.83138 14.5H14.8118C15.0248 15.3594 15.7649 16 16.6508 16C17.5367 16 18.2768 15.3594 18.4899 14.5H20V9.29688L19.8654 9.14062L16.9947 6.14062L16.8452 6H14.2586V4H1ZM14.2586 7H16.4415L19.0431 9.71875V13.5H18.4899C18.2768 12.6406 17.5367 12 16.6508 12C15.7649 12 15.0248 12.6406 14.8118 13.5H14.2586V7ZM5.99233 13C6.52685 13 6.94924 13.4414 6.94924 14C6.94924 14.5586 6.52685 15 5.99233 15C5.45781 15 5.03543 14.5586 5.03543 14C5.03543 13.4414 5.45781 13 5.99233 13ZM16.6508 13C17.1854 13 17.6077 13.4414 17.6077 14C17.6077 14.5586 17.1854 15 16.6508 15C16.1163 15 15.6939 14.5586 15.6939 14C15.6939 13.4414 16.1163 13 16.6508 13Z"
				fill="black"
			/>
			<path
				d="M2.72289 7V12H2V7H2.72289ZM4.12048 9.13599V9.93956H2.5253V9.13599H4.12048ZM4.28916 7V7.80701H2.5253V7H4.28916Z"
				fill="white"
			/>
			<path
				d="M4.70843 7H6.01687C6.28514 7 6.51566 7.05723 6.70843 7.1717C6.90281 7.28617 7.05221 7.45559 7.15663 7.67995C7.26104 7.9043 7.31325 8.18017 7.31325 8.50756C7.31325 8.77541 7.28112 9.00549 7.21687 9.1978C7.15422 9.38782 7.06506 9.54693 6.9494 9.67514C6.83534 9.80105 6.7012 9.90179 6.54699 9.97734L6.31807 10.149H5.18072L5.1759 9.34547H6.02169C6.14859 9.34547 6.25382 9.31342 6.33735 9.24931C6.42088 9.18521 6.48353 9.09592 6.5253 8.98146C6.56867 8.86699 6.59036 8.7342 6.59036 8.5831C6.59036 8.42285 6.56948 8.28434 6.52771 8.16758C6.48594 8.05082 6.42249 7.96154 6.33735 7.89973C6.25221 7.83791 6.14538 7.80701 6.01687 7.80701H5.43133V12H4.70843V7ZM6.66988 12L5.86988 9.77129L6.63374 9.76442L7.44337 11.9519V12H6.66988Z"
				fill="white"
			/>
			<path
				d="M10.2241 11.1964V12H8.35663V11.1964H10.2241ZM8.59277 7V12H7.86988V7H8.59277ZM9.98072 9.0364V9.81937H8.35663V9.0364H9.98072ZM10.2217 7V7.80701H8.35663V7H10.2217Z"
				fill="white"
			/>
			<path
				d="M13 11.1964V12H11.1325V11.1964H13ZM11.3687 7V12H10.6458V7H11.3687ZM12.7566 9.0364V9.81937H11.1325V9.0364H12.7566ZM12.9976 7V7.80701H11.1325V7H12.9976Z"
				fill="white"
			/>
		</svg>
		<span>Free shipping</span>
	</div>
</div>
`;

const test_int = setInterval(() => {
	const header = document.querySelector('.product-block.product-block--header');
	const main_content = document.querySelector('#MainContent');
	const head = document.querySelector('head');
	if (
		header &&
		head &&
		main_content &&
		!document.querySelector('.order-warning')
	) {
		head.insertAdjacentHTML('beforeend', style_html);
		header.insertAdjacentHTML('afterend', order_warning_html);
		const price_elm = document.querySelector(
			'.product-block.product-block--price.vs_testing'
		);
		header.insertAdjacentElement('afterend', price_elm);
		main_content.insertAdjacentHTML('afterbegin', top_usp_html);
		clearInterval(test_int);
	}
}, 10);

const save_html = (price, currency) => `
<span class="price-save">
	SAVE ${currency} ${price}
</span>
`;

function numberOnly(string) {
	return parseFloat(string.replace(/[^0-9\-+\.]/g, ''));
}

function currencyOnly(string) {
	return string.replace(/[0-9,. ]/g, '');
}

let old_org_price = 0;

setInterval(() => {
	const price_elm = document.querySelector(
		'.product-block.product-block--price.vs_testing'
	);
	if (price_elm) {
		const dis_price = price_elm.querySelector('.igPrice').innerText;
		const org_price = price_elm.querySelector('.igComparePrice').innerText;
		const num_org_price = numberOnly(org_price);
		const num_dis_price = numberOnly(dis_price);
		const price = num_org_price - num_dis_price;
		if (old_org_price !== num_org_price && price) {
			old_org_price = num_org_price;
			if (document.querySelector('.price-save')) {
				document.querySelector('.price-save').innerHTML = `SAVE ${currencyOnly(
					dis_price
				)} ${price.toFixed(2)}`;
			} else {
				price_elm.insertAdjacentHTML(
					'beforeend',
					save_html(price.toFixed(2), currencyOnly(dis_price))
				);
			}
		}
	}
}, 1);
