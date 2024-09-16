const style = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>Document</title>
	</head>
	<body>
		Hello A/B
	</body>
</html>
<style>
	#MobileNav {
		border-top: 1px solid #f5f5f5;
		padding: 0px !important;
	}
	.slide-nav__wrapper {
		margin: 20px;
	}
	.slide-nav__wrapper:after {
		background-color: transparent !important;
	}
	#MobileNavFooter {
		margin: 20px;
	}
	#MobileNav .slide-nav__image {
		display: none;
	}
	.slide-nav__image + span {
		padding-left: 0 !important;
	}
	.slide-nav__item {
		padding: 0 !important;
		border-bottom: 1px solid #f5f5f5;
	}
	.slide-nav__link {
		padding: 8px 0px !important;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0.06em;
	}
	.cu-rev {
		background: #ecfcf8;
		display: grid;
		place-items: center;
		gap: 4px;
		padding: 10px;
		margin: 80px 0 10px;
	}
	.cu-rev .rev-star {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.cu-rev .rev-star strong {
		font-size: 20px;
		font-weight: 800;
		display: flex;
		align-items: center;
	}
	.cu-rev .rev-star strong span {
		font-size: 16px;
		font-weight: 500;
	}
	.cu-rev > span {
		font-size: 14px;
		font-weight: 600;
	}
	.best-sellers-area {
		margin: 20px;
	}
	.best-sellers-area h4 {
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-align: center;
		color: #e42022;
	}
	.best-seller-wrapper {
		width: 100%;
		overflow: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.best-seller-wrapper::-webkit-scrollbar {
		display: none;
	}
	.best-seller-items {
		display: flex;
		gap: 20px;
		width: max-content;
	}
	.best-seller-item {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.best-seller-item img {
		width: 124px;
		height: 140px;
	}
	.best-seller-item .price-area {
		display: flex;
		align-items: center;
		gap: 4px;
		padding-left: 10px;
	}
	.best-seller-item .price-area span {
		font-size: 8px;
		font-weight: 500;
	}
	.best-seller-item .price-area strong {
		font-size: 10px;
		font-weight: 500;
	}
	.best-seller-item .price-area s {
		font-size: 10px;
		font-weight: 500;
		color: #9a9a9a;
	}
	.best-seller-item .name {
		font-size: 12px;
		font-weight: 300;
		padding-left: 10px;
	}
</style>
`;

const star_svg = `
<svg
	width="124"
	height="18"
	viewBox="0 0 124 18"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M13 6L14.4577 8.99364L17.7553 9.45492L15.3586 11.7664L15.9389 15.0451L13 13.48L10.0611 15.0451L10.6414 11.7664L8.24472 9.45492L11.5423 8.99364L13 6Z"
		fill="#E22727"
	/>
	<path
		d="M23 6L24.4577 8.99364L27.7553 9.45492L25.3586 11.7664L25.9389 15.0451L23 13.48L20.0611 15.0451L20.6414 11.7664L18.2447 9.45492L21.5423 8.99364L23 6Z"
		fill="#E22727"
	/>
	<path
		d="M33 6L34.4577 8.99364L37.7553 9.45492L35.3586 11.7664L35.9389 15.0451L33 13.48L30.0611 15.0451L30.6414 11.7664L28.2447 9.45492L31.5423 8.99364L33 6Z"
		fill="#E22727"
	/>
	<path
		d="M43 6L44.4577 8.99364L47.7553 9.45492L45.3586 11.7664L45.9389 15.0451L43 13.48L40.0611 15.0451L40.6414 11.7664L38.2447 9.45492L41.5423 8.99364L43 6Z"
		fill="#E22727"
	/>
	<path
		d="M53 6L54.4577 8.99364L57.7553 9.45492L55.3586 11.7664L55.9389 15.0451L53 13.48L50.0611 15.0451L50.6414 11.7664L48.2447 9.45492L51.5423 8.99364L53 6Z"
		fill="#E22727"
	/>
</svg>
`;

const new_elm_html = `
<div class="new-elm">
	<div class="cu-rev">
		<div class="rev-star">
			<strong> 4.9/ <span>5</span> </strong>
			<svg
				width="89"
				height="17"
				viewBox="0 0 89 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="16"
					height="16"
					transform="translate(0.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M8.5 3.5L9.96065 6.48959L13.2553 6.95492L10.8634 9.26791L11.4389 12.5451L8.5 10.985L5.56107 12.5451L6.13662 9.26791L3.74472 6.95492L7.03935 6.48959L8.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(18.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M26.5 3.5L27.9606 6.48959L31.2553 6.95492L28.8634 9.26791L29.4389 12.5451L26.5 10.985L23.5611 12.5451L24.1366 9.26791L21.7447 6.95492L25.0394 6.48959L26.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(36.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M44.5 3.5L45.9606 6.48959L49.2553 6.95492L46.8634 9.26791L47.4389 12.5451L44.5 10.985L41.5611 12.5451L42.1366 9.26791L39.7447 6.95492L43.0394 6.48959L44.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(54.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M62.5 3.5L63.9606 6.48959L67.2553 6.95492L64.8634 9.26791L65.4389 12.5451L62.5 10.985L59.5611 12.5451L60.1366 9.26791L57.7447 6.95492L61.0394 6.48959L62.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(72.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M80.5 3.5L81.9606 6.48959L85.2553 6.95492L82.8634 9.26791L83.4389 12.5451L80.5 10.985L77.5611 12.5451L78.1366 9.26791L75.7447 6.95492L79.0394 6.48959L80.5 3.5Z"
					fill="white"
				/>
			</svg>
		</div>
		<span>Over 100,000 5-star reviews!</span>
	</div>
	<div class="best-sellers-area">
		<h4>BEST SELLERS</h4>
		<div class="best-seller-wrapper">
			<div class="best-seller-items">
				<a
					href=""
					class="best-seller-item"
				>
					<img
						src="https://cupidodesign.com/cdn/shop/collections/Post-modern-Simplicity-Floor-Lamps-LED-Lights-Vloerlamp-Nordic-Stand-Lamp-Living-Room-Bedroom-Restaurant-E27_800x_bc482f51-c59c-48bc-8afe-ea3e2a41c599.jpg"
						alt=""
					/>
					${star_svg}
					<div class="price-area">
						<span>from</span>
						<strong>€9490</strong>
						<s>$119.00</s>
					</div>
					<span class="name">Floral elegance</span>
				</a>
				<a
					href=""
					class="best-seller-item"
				>
					<img
						src="https://cupidodesign.com/cdn/shop/collections/Post-modern-Simplicity-Floor-Lamps-LED-Lights-Vloerlamp-Nordic-Stand-Lamp-Living-Room-Bedroom-Restaurant-E27_800x_bc482f51-c59c-48bc-8afe-ea3e2a41c599.jpg"
						alt=""
					/>
					${star_svg}
					<div class="price-area">
						<span>from</span>
						<strong>€9490</strong>
						<s>$119.00</s>
					</div>
					<span class="name">Floral elegance</span>
				</a>
				<a
					href=""
					class="best-seller-item"
				>
					<img
						src="https://cupidodesign.com/cdn/shop/collections/Post-modern-Simplicity-Floor-Lamps-LED-Lights-Vloerlamp-Nordic-Stand-Lamp-Living-Room-Bedroom-Restaurant-E27_800x_bc482f51-c59c-48bc-8afe-ea3e2a41c599.jpg"
						alt=""
					/>
					${star_svg}
					<div class="price-area">
						<span>from</span>
						<strong>€9490</strong>
						<s>$119.00</s>
					</div>
					<span class="name">Floral elegance</span>
				</a>
			</div>
		</div>
	</div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#MobileNavFooter');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);
