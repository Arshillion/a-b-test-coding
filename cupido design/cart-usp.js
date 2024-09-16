const style = `
<style>
	
	.my-container {
		max-width: 1500px;
		margin: auto;
	}
	.separator {
		max-width: 900px;
		margin: auto;
		margin-top: 30px;
		display: flex;
		align-items: center;
	}
	.separator .line {
		height: 1px;
		flex: 1;
		background-color: #dbdbdb;
	}
	.separator h2 {
		padding: 0 2rem;
		margin: 0;
		text-transform: uppercase;
		    font-weight: 900;
	}
	.my-grid-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 20px;
		padding: 20px;
		box-sizing: border-box;
	}
	.my-card {
		padding: 20px;
		text-align: center;
	}
	.my-card__img{
		width: 32px;
		margin: auto;
	}
	.my-card h4 {
		font-size: 20px;
		font-weight: 700;
		line-height: 1.3em;
		text-align: center;
		margin: 5px;
	}
	.my-card p {
		font-size: 14px;
		font-weight: 500;
		text-align: center;
		margin: 5px;
		line-height: 1.3em;
	}
	.top-message{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: #EBC8B1;
        position: relative;
        padding: 10px 16px 10px 16px;
    }
    .top-message strong {
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        color: #353535;
    }
    .top-message strong span {
        font-weight: 600;
        color: #EB1E1A;
    }
    .top-message button {
        flex-shrink: 0;
        background: #FFFFFF;
        padding: 6px 8px 6px 8px;
        gap: 4px;
        border-radius: 20px;
        border: none;
    }
    .top-message button {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .top-message button svg{
        flex-shrink: 0;
    }
	@media (max-width: 768px) {
		.my-grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
        .top-message strong {
            font-size: 12px;
            line-height: 16px;
        }
	}
	@media (max-width: 480px) {
		.my-grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
`;

const cupido = `
<div class="my-container">
	<div class="separator">
		<div class="line"></div>
		<h2>Only at cupido</h2>
		<div class="line"></div>
	</div>
	<div class="my-grid-container">
		<div class="my-card">
			<img class="my-card__img"
				src="https://i.ibb.co/w4MMFNZ/truck-moving-solid-1.png"
				alt=""
			/>
			<h4>Free & Fast Delivery</h4>
			<p>
                Get It As Soon As Tomorrow. Need It Today?
                Same-day Local pick up available.
			</p>
		</div>
		<div class="my-card">
			<img class="my-card__img"
				src="https://i.ibb.co/wR6fmDM/star-rating-banner-1.png"
				alt=""
			/>
			<h4>Need Help?</h4>
			<p>Call us on xXXXXXXXXX or simply use email or chat 24/7.</p>
		</div>
		<div class="my-card">
			<img class="my-card__img"
				src="https://i.ibb.co/Y3XF4BH/arrow-return-1.png"
				alt=""
			/>
			<h4>Sustainably Crafted</h4>
			<p>We don't just create beautiful art and frames, we ensure we make them sustainably.</p>
		</div>
		<div class="my-card">
			<img class="my-card__img"
				src="https://i.ibb.co/JtLVxMV/Payment-Card-1.png"
				alt=""
			/>
			<h4>Secure Payment</h4>
			<p>
                SSL certified checkout experience and encrypt data protection.
			</p>
		</div>
		<div class="my-card">
			<img class="my-card__img"
				src="https://i.ibb.co/2Z86N1h/Payment-Card-1-1.png"
				alt=""
			/>
			<h4>Easy refund policy</h4>
			<p>Interest-free Financeex perience and encrypt data protection.</p>
		</div>
	</div>
</div>
  `;

const top_message = `
<div class="top-message">
    <strong>
        <span>15% discount</span> flash on everything with code: [FLASH15] offer may end at any time
    </strong>
    <button>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0.5H1.5C0.95 0.5 0.5 0.95 0.5 1.5V8.5H1.5V1.5H7.5V0.5ZM9 2.5H3.5C2.95 2.5 2.5 2.95 2.5 3.5V10.5C2.5 11.05 2.95 11.5 3.5 11.5H9C9.55 11.5 10 11.05 10 10.5V3.5C10 2.95 9.55 2.5 9 2.5ZM9 10.5H3.5V3.5H9V10.5Z" fill="black"/>
        </svg>
        <span>Copy Code</span>
    </button>
</div>
`;

const interval = setInterval(() => {
	const existing_html = document.querySelector('.page-width--cart');
	const main = document.querySelector('#MainContent');
	const sub_total = document.querySelector(
		'form .cart__page .cart__item-sub.cart__item-row.cart__item--subtotal'
	);
	const head = document.querySelector('head');
	if (
		existing_html &&
		sub_total &&
		main &&
		head &&
		!document.querySelector('.top-message')
	) {
		head.insertAdjacentHTML('beforeend', style);
		existing_html.insertAdjacentHTML('beforeend', cupido);
		main.insertAdjacentHTML('beforebegin', top_message);
		clearInterval(interval);
	}
}, 10);

const copy_interval = setInterval(() => {
	const copy_text = 'FLASH15';
	const copy_code = document.querySelector('.top-message button');
	const copy_code_span = document.querySelector('.top-message button span');
	if (copy_code_span && copy_code) {
		copy_code.addEventListener('click', () => {
			navigator.clipboard.writeText(copy_text);
			copy_code_span.innerHTML = 'Copied!';
			setTimeout(() => {
				copy_code_span.innerHTML = 'Copy Code';
			}, 2500);
		});
		clearInterval(copy_interval);
	}
}, 10);
