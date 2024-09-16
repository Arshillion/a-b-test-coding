const style = `
<style>
	#shopify-section-0b438056-01c6-4e1d-b266-294fe61ed8bd {
		display: none;
	}
	.new-founder-section {
		background: #fbe6e3;
		padding: 40px 0;
	}
	.new-founder-section .container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	.new-founder-section span {
		color: #000;
		font-family: Julee;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.new-founder-section p {
		color: #333;
		font-family: Lato;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px;
		margin-bottom: 0;
		text-align: justify;
	}
	.new-founder-section p strong {
		color: #000;
		text-align: justify;
		font-family: Lato;
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: 26px;
	}
	.new-founder-section .founder-info {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.new-founder-section .founder-info .f-img-name {
		max-width: 250px;
		margin-bottom: 10px;
	}
	.new-founder-section .founder-info .f-img-title {
		max-width: 180px;
	}
	.header-img img {
		width: 100%;
	}
	h3.our-founders-heading-ab {
		text-align: center;
		text-transform: capitalize;
		font-size: 26px;
		line-height: 35px;
		font-family: Cardo;
	}
	@media (min-width: 768px) {
		h3.our-founders-heading-ab {
			display: block;
			font-weight: bold;
			text-align: left;
			text-transform: capitalize;
			font-size: 30px;
			line-height: 36px;
			font-family: Lato, Bold;
			width: 60%;
		}
	}
	@media only screen and (max-width: 991px) {
		.new-founder-section .container {
			grid-template-columns: 1fr;
		}
		.new-founder-section .founder-info img {
			margin: auto;
		}
		.new-founder-section p,
		.new-founder-section p strong {
			font-size: 16px;
			line-height: 22px;
		}
	}
</style>
`;
const founder_html = `
<div class="shopify-section new-founder-section">
	<div class="container">
        <picture class="header-img">
            <source media="(min-width: 991px)" srcset="https://cdn.shopify.com/s/files/1/2594/4244/files/Meet_Our_Founders_Desktop.png?v=1719806036">
            <img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Meet_Our_Founders_Mobile.png?v=1719806036">
        </picture>
		<div class="founder-info">
			<h3 class="our-founders-heading-ab">A Note From Our Founders</h3>
			<img class="f-img-name" src="https://cdn.shopify.com/s/files/1/2594/4244/files/Amara-Founders.png?v=1720149989">
			<p>
                We are co-founders plus husband and wife! Miss Amara truly is a <b>family owned business</b>.
			</p>
            <p>
                We believe shopping for rugs online should be fun and easy. We LOVE designing beautiful rugs, but we've since learnt there are other things that drive us. Today, that's about making a difference to your life, our team, our makers and the environment - we've developed a higher purpose if you will.
            </p>
		</div>
	</div>
</div>
`;

setInterval(() => {
	const rugs_elm = document.querySelector(
		'#shopify-section-ss_home_recommendations_BCJFWT'
	);
	const head = document.querySelector('head');
	if (rugs_elm && head && !document.querySelector('.new-founder-section')) {
		head.insertAdjacentHTML('beforeend', style);
		rugs_elm.insertAdjacentHTML('beforebegin', founder_html);
	}
}, 10);
