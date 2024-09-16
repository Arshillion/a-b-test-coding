const new_area = `
<style>
	.std > .spacer.spacer--small ~ div {
		display: none;
	}

	.action-btns {
		margin-top: 20px;
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.action-btns button {
		border-radius: 34px;
		background: white;
		border: 2px solid #252525;
		color: #252525;
		text-align: center;
		font-size: 25px;
		font-weight: 400;
		line-height: 25px;
		padding: 13px 18px;
		height: auto;
	}

	.action-btns button.active {
		background: #f3c317;
		border: 2px solid #f3c317;
	}

	.top-softwares {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
		width: calc(100% - 20px);
		max-width: 1200px;
		margin: 60px auto;
	}

	.top-softwares > a {
		border-radius: 9px;
		background: #f3f3f3;
		padding: 40px;
		display: grid;
		grid-template-columns: 2fr 3fr;
		align-items: center;
		gap: 30px;
	}

	.top-softwares > a:hover {
		text-decoration: none;
	}

	.ts-info * {
		margin: 0;
		padding: 0;
	}

	.ts-info {
		display: flex;
		flex-direction: column;
		gap: 28px;
		max-width: 300px;
	}
	.ts-info h4.bf-header {
		font-size: 16px;
		font-color: #902b14;
		font-weight: 700;
	}

	.ts-info strong {
		color: #000;
		font-size: 32px;
		font-weight: 700;
		line-height: 36px;
	}

	.ts-info span {
		color: #d82222;
		font-size: 22px;
		font-weight: 700;
		line-height: 22px;
	}

	.ts-info span s {
		color: #7a7a7a;
		font-size: 16px;
		font-style: 16px;
		font-weight: 400;
	}

	.ts-info button {
		background: #0997e7;
		border: none;
		border-radius: 4px;
		color: #fcfcfc;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		line-height: 0;
		height: 39px;
		width: 170px;
		max-width: 100%;
	}

	@media only screen and (max-width: 1200px) {
		.top-softwares img {
			width: auto;
			height: auto;
		}
		.ts-info {
			gap: 20px;
		}
	}

	@media only screen and (max-width: 1024px) {
		.top-softwares {
			gap: 20px;
		}

		.top-softwares > a {
			padding: 20px;
			gap: 20px;
		}

		.ts-info {
			gap: 20px;
		}

		.ts-info button {
			font-size: 16px;
		}

		.ts-info strong {
			font-size: 22px;
			line-height: 24px;
		}
	}

	@media only screen and (max-width: 667px) {
		.action-btns button {
			font-size: 16px;
			line-height: 16px;
		}

		.ts-info strong {
			font-size: 18px;
			line-height: 20px;
		}

		.top-softwares {
			grid-template-columns: 1fr;
			margin: 30px auto;
		}
	}
	@media only screen and (max-width: 450px) {
		.ts-info {
			gap: 16px;
		}

		.ts-info button {
			font-size: 14px;
		}

		.ts-info h4.bf-header {
			font-size: 14px;
		}
	}
</style>
<div class="action-btns">
	<button class="sft-deals-btn active">Software Deals</button>
	<button class="hrd-deals-btn">Hardware Deals</button>
</div>
<div class="sft-deals">
	<div class="top-softwares">
		<a
			href="https://www.uaudio.com/uad-plugins/plug-in-bundles/uad-guitar-fx-bundle.html"
		>
			<img
				src="https://jafpodcasts.s3.us-east-2.amazonaws.com/uad_guitar_fx_bundle_BF_promo_ad_graphic_1200x1200.jpg"
			/>
			<div class="ts-info">
				<h4 class="bf-header">CYBER MONDAY EXCLUSIVE</h4>
				<strong>New Guitar FX Bundle for $49</strong>
				<button>Build Your Bundle</button>
			</div>
		</a>
		<a
			href="https://www.uaudio.com/uad-plugins/plug-in-bundles/uad-essentials-edition.html"
		>
			<img
				src="https://jafpodcasts.s3.us-east-2.amazonaws.com/q4_2023_uad_essentials_promo_ad_graphic_1200x1200.jpg"
			/>
			<div class="ts-info">
				<h4 class="bf-header">BLACK FRIDAY EXCLUSIVE</h4>
				<strong>UAD Essentials for $49</strong>
				<button>Build Your Bundle</button>
			</div>
		</a>
		<a href="https://www.uaudio.com/uad-plugins/custom-bundles.html">
			<img
				src="https://media.uaudio.com/assetlibrary/q/4/q4_2023_custom2_promo_ad_card.jpg"
			/>
			<div class="ts-info">
				<h4 class="bf-header">BLACK FRIDAY EXCLUSIVE</h4>
				<strong>Custom 2 Bundle for $99</strong>
				<button>Build Your Bundle</button>
			</div>
		</a>
		<a href="https://www.uaudio.com/uad-plugins.html?price=49%2C51">
			<img
				src="https://jafpodcasts.s3.us-east-2.amazonaws.com/12-Days-49.jpg"
			/>
			<div class="ts-info">
				<strong>30+ Plug-Ins Under $50</strong>
				<button>Shop $49 Deals</button>
			</div>
		</a>
		<a href="https://www.uaudio.com/uad-plugins.html?price=49%2C100">
			<img
				src="https://jafpodcasts.s3.us-east-2.amazonaws.com/12-Days-99.jpg"
			/>
			<div class="ts-info">
				<strong>100+ Top-Sellers Under $100</strong>
				<button>Shop Now</button>
			</div>
		</a>
		<a href="https://www.uaudio.com/uad-plugins.html">
			<img
				src="https://jafpodcasts.s3.us-east-2.amazonaws.com/12-Days-Hero.jpg"
			/>
			<div class="ts-info">
				<strong>Save up to 70% storewide!</strong>
				<button>Shop Now</button>
			</div>
		</a>
		<a href="https://spark.uaudio.com/">
			<img
				src="https://jafpodcasts.s3.us-east-2.amazonaws.com/Spark-3-months-99.jpg"
			/>
			<div class="ts-info">
				<strong>Get 3 Months of UAD Spark for Only 99¢</strong>
				<button>Claim Deal</button>
			</div>
		</a>
		<a href="https://spark.uaudio.com/">
			<img
				src="https://jafpodcasts.s3.us-east-2.amazonaws.com/Sparkannual-99.jpg"
			/>
			<div class="ts-info">
				<strong>Get 1 Year of UAD Spark for Just $99</strong>
				<button>Claim Deal</button>
			</div>
		</a>
	</div>
</div>

`;

const html_int = setInterval(() => {
	const selector = document.querySelector('.std h1');
	if (selector && !document.querySelector('.action-btns')) {
		selector.innerHTML = 'Shop Our Hottest Deals';
		selector.insertAdjacentHTML('afterend', new_area);
		clearInterval(html_int);
	}
}, 10);

const toggle_int = setInterval(() => {
	const sft_btn = document.querySelector('.sft-deals-btn');
	const hrd_btn = document.querySelector('.hrd-deals-btn');
	const softs = document.querySelector('.sft-deals');
	const old_elms = document.querySelector('.std>.spacer.spacer--small~div');
	if (sft_btn && hrd_btn && softs && old_elms) {
		hrd_btn.addEventListener('click', () => {
			softs.style.display = 'none';
			old_elms.style.display = 'block';
			sft_btn.classList.remove('active');
			hrd_btn.classList.add('active');
		});
		sft_btn.addEventListener('click', () => {
			softs.style.display = 'grid';
			old_elms.style.display = 'block';
			sft_btn.classList.add('active');
			hrd_btn.classList.remove('active');
		});
		clearInterval(toggle_int);
	}
}, 10);
