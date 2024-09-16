const style = `
<style>
	.low-inv-area {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: max-content;
	}
	.low-inv-area span:nth-child(1) {
		color: red;
		font-weight: bold;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.low-inv-area span:nth-child(2) {
		color: #555;
	}
	.low-message-area{
		margin-right: 6px;
	}
	.amstockstatus-status-container.stock.available .amstockstatus:before {
		display:none;
	}
</style>
`;

const low_inv_html = (message) => `
<span class="low-message-area">
	<svg
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
	Running Low
</span>
<span>${message}</span>
`;

const message_int = setInterval(() => {
	const head = document.querySelector('head');
	const stock_message = document.querySelector(
		'.amstockstatus-status-container.stock.available .amstockstatus'
	);
	const low_text = document.querySelector('.amlabel-text');
	const check_low_item = low_text
		? low_text.innerText.trim() === 'low inventory'
		: false;

	if (
		stock_message &&
		!document.querySelector('.low-message-area') &&
		check_low_item
	) {
		head.insertAdjacentHTML('beforeend', style);
		const old_message = stock_message.innerText.replace('In Stock.', '');
		stock_message.classList.add('low-inv-area');
		stock_message.innerHTML = low_inv_html(old_message);
		clearInterval(message_int);
	}
}, 10);
