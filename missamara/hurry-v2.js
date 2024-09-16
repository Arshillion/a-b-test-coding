const products_sku = [
	{
		sku: 'sophie-220x150',
		count: 320,
	},
	{
		sku: 'sophie-221x150',
		count: 420,
	},
];

const eye_svg = `
<svg
	width="32"
	height="32"
	viewBox="0 0 32 32"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M15.9788 7C11.1076 7 6.11069 9.81938 2.17693 15.4581C2.06465 15.6208 2.00312 15.8132 2.00012 16.0109C1.99711 16.2086 2.05277 16.4027 2.16006 16.5688C5.18256 21.3 10.1126 25 15.9788 25C21.7813 25 26.8126 21.2888 29.8407 16.5469C29.9455 16.3841 30.0012 16.1945 30.0012 16.0009C30.0012 15.8073 29.9455 15.6178 29.8407 15.455C26.8057 10.7675 21.7376 7 15.9788 7Z"
		stroke="black"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
		stroke="black"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
</svg>`;

const style = `
<style>
    .social-proof {
        position: absolute;
        bottom: 20px;
        left: 0px;
        display: grid;
        grid-template-columns: auto 1fr;
        padding: 6px 20px 6px 10px;
        gap: 0px 10px;
        justify-content: center;
        align-items: center;
        border-radius: 0px 40px 40px 0px;
        background: #FFFFFF;
        box-shadow: 1px 4px 5.6px 0px #695D5C61;
        z-index: 99;
        text-align: left;
    }
    .social-proof svg{
        grid-row: span 2;
        flex-shrink: 0;
        fill: white;
    }
    .social-proof strong{
        font-family: Lato;
        font-size: 10px;
        font-weight: 700;
    }
    .social-proof span{
        font-family: Lato;
        font-size: 10px;
        font-weight: 400;
    }
</style>
`;

const social_proof = (views) => `
<div class="social-proof">
    ${eye_svg}
    <strong>Hurry before I’m gone</strong>
    <span>${views} views in last 24 hours</span>
</div>
`;

const checkSku = (sku) => products_sku.find((product) => product.sku === sku);

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'.main-image.main-image-discount-wrapper'
	);
	const exist_elm_mob = document.querySelector('.mobile-slideshow .slick-list');
	const sku = document.querySelector('.detail .sku__value').innerText;
	const head = document.querySelector('head');
	if (
		exist_elm &&
		exist_elm_mob &&
		checkSku(sku) &&
		!document.querySelector('.social-proof')
	) {
		const { count } = checkSku(sku);
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforeend', social_proof(count));
		exist_elm_mob.insertAdjacentHTML('beforeend', social_proof(count));
		clearInterval(interval);
	}
}, 10);
