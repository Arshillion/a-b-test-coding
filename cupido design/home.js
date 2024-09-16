const style = `
<style>
	.slider {
		position: relative;
		width: 100%;
		height: 640px;
		background-image: url('https://cupidodesign.com/cdn/shop/files/HomePage_CupidoDesign_c84818b1-a521-45b7-b798-affe21ae8dbc.jpg?v=1694506634&width=1200');
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
	}
	.slider:before {
		content: '';
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	.slider-content {
		position: relative;
		z-index: 1;
	}
	.slider-content h1 {
		font-size: 52px;
		font-weight: 900;
		line-height: 60px;
		font-family: Karla;
	}
	.slider-content p {
		font-size: 24px;
		line-height: 34px;
		font-family: var(--typeBasePrimary), var(--typeBaseFallback);
	}
	.slider-content button {
		padding: 1rem 2rem;
		font-size: 1.5rem;
		background-color: #fff;
		color: #000;
		border: none;
		cursor: pointer;
	}
	.slider-content button a {
		text-decoration: none;
		color: #000;
		font-family: var(--typeBasePrimary), var(--typeBaseFallback);
	}
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
`;

const new_elm_html = `
<div class="slider">
    <div class="slider-content">
        <h1>Opere d'arte originali per migliorare la tua casa!</h1>
        <p>L'arte spazza la nostra anima dalla polvere della quotidianità.</p>
        <button><a href="/collections/best-sellers">ACQUISTA ORA</a></button>
    </div>
</div>
`;

const cupido = `
<div class="my-container">
	<div class="separator">
		<div class="line"></div>
		<h2>Why CUPIDO?</h2>
		<div class="line"></div>
	</div>
	<div class="my-grid-container">
		<div class="my-card">
			<img
				src="https://ucarecdn.com/50cd388a-39c7-40f9-aa9b-2607792ec824/-/format/auto/-/preview/100x100/-/quality/lighter/1111.png"
				alt=""
			/>
			<h4>1,000+ Unique Designs</h4>
			<p>
				We offer a huge selection of decorative canvas, each with its own unique
				style, shape, materials and colors.
			</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/cf7e5d23-8bae-40ee-837a-e7341b91edbc/-/format/auto/-/preview/3000x3000/-/quality/lighter/342143.png"
				alt=""
			/>
			<h4>Made In Italy</h4>
			<p>Premium quality - Prints handmade with love in Italy.</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/027b44f4-73a2-49b8-96ee-f408ff885610/-/format/auto/-/preview/3000x3000/-/quality/lighter/342234.png"
				alt=""
			/>
			<h4>Easy & Secure Payment</h4>
			<p>We offer various payment methods, including Klarna and Scalapay.</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/70c7eb14-7c4d-4087-a9af-5a51e8e680c9/-/format/auto/-/preview/3000x3000/-/quality/lighter/14341.png"
				alt=""
			/>
			<h4>Easy & Fast Return</h4>
			<p>
				If you are not 100% satisfied with your purchase, you have 14 calendar
				days from RECEIPT of the order to return it.
			</p>
		</div>
		<div class="my-card">
			<img
				src="https://ucarecdn.com/0167c7b2-7615-47e2-8ccf-f2673fecf51d/-/format/auto/-/preview/100x100/-/quality/lighter/2432.png"
				alt=""
			/>
			<h4>4,000+ Reviews</h4>
			<p>90%+, 5-start reviews!</p>
		</div>
	</div>
</div>
  `;

const interval = setInterval(() => {
	const existing_html = document.querySelector('.index-section--hero');
	const img_elm = document.querySelector('.index-section--hero');
	const head = document.querySelector('head');
	if (img_elm && existing_html && head) {
		head.insertAdjacentHTML('beforeend', style);
		if (window.innerWidth > 768) {
			img_elm.innerHTML = new_elm_html + cupido;
		} else {
			img_elm.innerHTML = existing_html.innerHTML + cupido;
		}
		clearInterval(interval);
	}
}, 10);

const sec_interval = setInterval(() => {
	const priceElements = document.querySelectorAll(
		'span.grid-product__price--original > span.visually-hidden'
	);

	const supElements = document.querySelectorAll(
		'span.grid-product__price--current > span.grid-product__price--from > sup'
	);
	if (priceElements.length === supElements.length) {
		for (let i = 0; i < priceElements.length; i++) {
			const txt = priceElements[i].textContent
				.slice(0, -3)
				.trim()
				.replace(/[^\d]+/, '');

			const textBeforeSup = supElements[i].previousSibling.textContent
				.trim()
				.replace(/[^\d]+/, '');

			const originalPrice = parseInt(txt);
			const discountedPrice = parseInt(textBeforeSup);
			const savings = originalPrice - discountedPrice;
			const percentageSaved = Math.floor((savings / originalPrice) * 100);

			const percentageElement = document.createElement('span');
			percentageElement.textContent = percentageSaved + '% OFF';

			percentageElement.style.color = 'white';
			percentageElement.classList.add('badge-btn');

			const closestPriceElement = priceElements[i].closest(
				'.grid-product__price'
			);
			closestPriceElement.appendChild(percentageElement);
		}
		clearInterval(sec_interval);
	}
}, 10);
