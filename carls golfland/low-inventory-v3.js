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
	.amstockstatus-status-container.stock.available .amstockstatus {
		display:none;
	}
	.stock-log-img{
		width:20px;
	}
</style>
`;

const low_inv_html = (message) => `
<span class="low-inv-area">
  <span class="low-message-area">
	<img class="stock-log-img" src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-stock-low.png">
	Running Low
  </span>
  <span>${message}</span>
</span>
`;

const message_int = setInterval(() => {
	const head = document.querySelector('head');
	const stock_message = document.querySelector(
		'.amstockstatus-status-container.stock.available .amstockstatus'
	);

	if (stock_message && !document.querySelector('.stock-log-img')) {
		head.insertAdjacentHTML('beforeend', style);
		const old_message = stock_message.innerText.replace('In Stock.', '');
		stock_message.insertAdjacentHTML('afterend', low_inv_html(old_message));
	}
}, 10);
