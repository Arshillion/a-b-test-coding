const style = `
<style>
	.low-inv-area {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 10px;
		width: 100%;
		border: 1px solid #dfdfdf;
		padding: 8px 6px;
		text-transform: capitalize;
		box-sizing: border-box;
	}
	.low-inv-area span:nth-child(1) {
		color: red;
		font-weight: bold;
		display: flex;
		align-items: center;
		gap: 2px;
	}
	.low-inv-area span:nth-child(2) {
		color: #555;
	}
	.product-info-main .stock.available {
		margin: 0;
		width: 300px;
	}
	@media only screen and (max-width: 859px) {
		.product-info-main .stock.available {
			width: 100%;
		}
		.low-inv-area {
			width: 100%;
		}
	}
</style>
`;

const low_inv_html = (message) => `
<span>
	<svg
		class="new-low-chk"
		stroke="currentColor"
		fill="currentColor"
		stroke-width="0"
		viewBox="0 0 512 512"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
		></path>
	</svg>
	Low Inventory.
</span>
<span>${message}</span>
`;

const message_int = setInterval(() => {
	const head = document.querySelector('head');
	const low_text = document.querySelector('.amlabel-text');
	const cart = document.querySelector('.box-tocart .actions button');
	const sku_area = document.querySelector(
		'.amstockstatus-status-container.stock.available'
	);

	if (
		cart &&
		sku_area &&
		!document.querySelector('.new-low-chk') &&
		low_text &&
		low_text.innerText.trim() === 'low inventory'
	) {
		head.insertAdjacentHTML('beforeend', style);
		const message = document.querySelector('.amstockstatus.amsts_5564');
		const old_message = message.innerText.replace('In Stock.', '');
		message.classList.add('low-inv-area');
		message.innerHTML = low_inv_html(old_message);
		cart.insertAdjacentElement('afterend', sku_area);
		clearInterval(message_int);
	}
}, 10);
