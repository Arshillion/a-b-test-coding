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
	.my-card img {
		width: 42px;
		margin: auto;
	}
	.my-card h4 {
		font-size: 14px;
		font-weight: 700;
		line-height: 1.3em;
		text-align: center;
		margin: 5px;
	}
	.my-card p {
		font-size: 10px;
		font-weight: 500;
		text-align: center;
		margin: 5px;
		line-height: 1.3em;
	}
	@media (max-width: 768px) {
		.my-grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 480px) {
		.my-grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
<style>
	#MainContent > section {
		display: none;
	}
	.top-message{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: red;
        position: relative;
        padding: 10px 16px 10px 16px;
    }
    .top-message strong {
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        color: #fff;
    }
    .top-message strong span {
        font-weight: 600;
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
        .top-message strong {
            font-size: 12px;
            line-height: 16px;
        }
	}
</style>
`;

const usp = `
<div class="my-container">
	<div class="separator">
		<div class="line"></div>
		<h2>Perchè CUPIDO?</h2>
		<div class="line"></div>
	</div>
	<div class="my-grid-container">
		<div class="my-card">
			<img
				src="https://ucarecdn.com/50cd388a-39c7-40f9-aa9b-2607792ec824/-/format/auto/-/preview/100x100/-/quality/lighter/1111.png"
				alt=""
			/>
			<h4>Più di 1.000 design unici</h4>
			<p>
				Ti offriamo un'ampia scelta di panni decorativi, ognuno con la sua
				particolarità. stile, forma, materiali e colori.
			</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/cf7e5d23-8bae-40ee-837a-e7341b91edbc/-/format/auto/-/preview/3000x3000/-/quality/lighter/342143.png"
				alt=""
			/>
			<h4>Fatto in Italia</h4>
			<p>Qualità premium: stampe realizzate a mano con amore in Italia.</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/027b44f4-73a2-49b8-96ee-f408ff885610/-/format/auto/-/preview/3000x3000/-/quality/lighter/342234.png"
				alt=""
			/>
			<h4>Paga in modo facile e sicuro</h4>
			<p>Offriamo vari metodi di pagamento, tra cui Klarna e Scalapay.</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/70c7eb14-7c4d-4087-a9af-5a51e8e680c9/-/format/auto/-/preview/3000x3000/-/quality/lighter/14341.png"
				alt=""
			/>
			<h4>Resi facili e veloci</h4>
			<p>
				Se non sei soddisfatto al 100% del tuo acquisto, hai 14 calendari giorni
				dalla RICEZIONE dell'ordine per restituirlo.
			</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/0167c7b2-7615-47e2-8ccf-f2673fecf51d/-/format/auto/-/preview/100x100/-/quality/lighter/2432.png"
				alt=""
			/>
			<h4>Più di 4.000 recensioni</h4>
			<p>90%+, valutazioni a 5 stelle!</p>
		</div>
	</div>
</div>
`;

const top_message = `
<div class="top-message">
    <strong>
        <span>15% di sconto</span> flash su tutto con il codice: [FLASH15] l'offerta può terminare in qualsiasi momento senza preavviso
    </strong>
    <button>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0.5H1.5C0.95 0.5 0.5 0.95 0.5 1.5V8.5H1.5V1.5H7.5V0.5ZM9 2.5H3.5C2.95 2.5 2.5 2.95 2.5 3.5V10.5C2.5 11.05 2.95 11.5 3.5 11.5H9C9.55 11.5 10 11.05 10 10.5V3.5C10 2.95 9.55 2.5 9 2.5ZM9 10.5H3.5V3.5H9V10.5Z" fill="black"/>
        </svg>
        <span>Copia codice</span>
    </button>
</div>
`;

const interval = setInterval(() => {
	const existing_html = document.querySelector('.page-width--cart');
	const lang = document.querySelector('input[name="locale_code"]').value;
	const main = document.querySelector('#MainContent');
	const sub_total = document.querySelector(
		'form .cart__page .cart__item-sub.cart__item-row.cart__item--subtotal'
	);
	const head = document.querySelector('head');
	if (
		existing_html &&
		sub_total &&
		main &&
		lang === 'it' &&
		head &&
		!document.querySelector('.top-message')
	) {
		head.insertAdjacentHTML('beforeend', style);
		existing_html.insertAdjacentHTML('beforeend', usp);
		main.insertAdjacentHTML('beforebegin', top_message);
		clearInterval(interval);
	}
}, 10);

const copy_interval = setInterval(() => {
	const copy_text = 'FLASH15';
	const copy_code = document.querySelector('.top-message button');
	const copy_code_span = document.querySelector('.top-message button span');
	const copy_code_svg = document.querySelector('.top-message button svg');
	if (copy_code_span && copy_code) {
		copy_code.addEventListener('click', () => {
			navigator.clipboard.writeText(copy_text);
			copy_code_span.innerHTML = 'Copiato!';
			copy_code_svg.style.display = 'none';
			setTimeout(() => {
				copy_code_span.innerHTML = 'Copy Code';
				copy_code_svg.style.display = 'block';
			}, 2500);
		});
		clearInterval(copy_interval);
	}
}, 10);
