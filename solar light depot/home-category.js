const arrowSvg = `
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.16666 8.00001C3.16666 7.8674 3.21933 7.74022 3.3131 7.64646C3.40687 7.55269 3.53405 7.50001 3.66666 7.50001H12.46L8.81332 3.85334C8.725 3.75856 8.67692 3.6332 8.67921 3.50366C8.68149 3.37413 8.73397 3.25054 8.82558 3.15893C8.91718 3.06732 9.04077 3.01485 9.17031 3.01256C9.29984 3.01027 9.42521 3.05836 9.51999 3.14668L14.02 7.64668C14.1136 7.74043 14.1662 7.86751 14.1662 8.00001C14.1662 8.13251 14.1136 8.25959 14.02 8.35334L9.51999 12.8533C9.47422 12.9025 9.41901 12.9419 9.35768 12.9692C9.29635 12.9965 9.23014 13.0112 9.163 13.0124C9.09587 13.0136 9.02918 13.0012 8.96692 12.9761C8.90467 12.9509 8.84811 12.9135 8.80063 12.866C8.75315 12.8186 8.71572 12.762 8.69057 12.6997C8.66543 12.6375 8.65308 12.5708 8.65426 12.5037C8.65545 12.4365 8.67014 12.3703 8.69747 12.309C8.7248 12.2477 8.7642 12.1924 8.81332 12.1467L12.46 8.50001H3.66666C3.53405 8.50001 3.40687 8.44733 3.3131 8.35356C3.21933 8.25979 3.16666 8.13262 3.16666 8.00001Z" fill="#FF9900"/>
</svg>
`;

const categories = [
	{
		image:
			'https://solarlightdepot.com/cdn/shop/files/1544921062387-313851.webp?v=1712121559&width=360',
		title: 'New',
		link: '/collections/new',
	},
	{
		image:
			'https://solarlightdepot.com/cdn/shop/products/s-l1600.png?v=1708979257&width=360',
		title: 'Indoor Lights',
		link: '/collections/indoor-lighting',
	},
	{
		image:
			'https://solarlightdepot.com/cdn/shop/files/custom_resized_18d5d31c-8ac9-45db-b4e2-b8e7b9d0d59e-732011.webp?v=1712122785&width=360',
		title: 'Street Lights',
		link: '/collections/solar-street-lights',
	},
	{
		image:
			'https://solarlightdepot.com/cdn/shop/products/Suspended-Solar-Firework-Light-360-480-Led-Star-Burst-Light-Outdoor-Waterproof-8Mode-Eave-Garden-Tree_ac3af915-dc2c-4751-98ba-e01e057ce7ed.webp?v=1708738113&width=360',
		title: 'Deck Lights',
		link: '/collections/solar-deck-lights',
	},
	{
		image:
			'https://solarlightdepot.com/cdn/shop/products/c99312f8-04d3-46f7-a72e-5d060e2f6b7b-Edited-922212.jpg?v=1709145859&width=360',
		title: 'Garden Lights',
		link: '/collections/solar-garden-lights',
	},
	{
		image:
			'https://solarlightdepot.com/cdn/shop/files/2pcs-Lot-Led-Solar-Lawn-Lights-Outdoor-Waterproof-Warm-Light-Garden-Decoration-Lamp-For-Walkway-Path_44c5b7e1-7083-40cc-bd98-22fb0c152c13.webp?v=1712123103&width=360',
		title: 'Pathway Lights',
		link: '/collections/solar-path-lights',
	},
	{
		image:
			'https://solarlightdepot.com/cdn/shop/files/Screenshot-2021-10-03T013446.151-765749.webp?v=1712122437&width=493',
		title: 'All Lights',
		link: '/collections/all-products',
	},
];

const style = `
<style>
.home-category *{
	margin: 0;
	padding: 0;
	overflow: hidden;
}
.home-category{
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.home-category h2{
	font-size: 36px;
	font-weight: 600;
	line-height: 48px;
	text-align: center;
}
.home-category .category-content{
	display: grid;
	grid-template-columns: var(--grid-columns, repeat(12, 1fr));
	gap: 20px;
}
.home-category .category-content .category{
	border: 1px solid #E9E9E9;
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding-bottom: 12px;
	border-radius: 16px;	
}
.home-category .category-content .category:nth-child(-n+4){
	grid-column: span 3;
}
.home-category .category-content .category:nth-last-child(-n+3){
	grid-column: span 4;
}
.home-category .category-content .category img{
	width: 100%;
	height: 200px;
	object-fit: cover;
}
.home-category .category-content .category h3{
	padding: 0 20px 0 20px;
	font-size: 20px;
	font-weight: 600;
	line-height: 26px;
}
.home-category .category-content .category a{
	padding: 0 20px 0 20px;	
	color: #FF9900;
	font-size: 14px;
	font-weight: 400;
	line-height: 16px;
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 8px;
}
@media (max-width: 991px) {
	.home-category .category-content .category:nth-child(-n+3){
		grid-column: span 4;
	}
	.home-category .category-content .category:nth-last-child(-n+4){
		grid-column: span 6;
	}
}
@media (max-width: 767px) {
	.home-category h2{
		font-size: 24px;
		font-weight: 400;
		line-height: 32px;
	}
	.home-category .category-content .category:nth-child(-n+6){
		grid-column: span 6;
	}
	.home-category .category-content .category:nth-last-child(-n+1){
		grid-column: span 12;
	}
}
@media (max-width: 450px) {
	.home-category .category-content .category:nth-child(-n+7){
		grid-column: span 12;
	}
}
</style>
`;

const category = (item) => {
	return `
		<div class="category">
			<img src="${item.image}" alt="${item.title}">
			<h3>${item.title}</h3>
			<a href="${item.link}">view all ${arrowSvg}</a>
		</div>
	`;
};

const new_elm_html = `
<div class="home-category page-width section">
	<h2>Shop By Category</h2>
	<div class="category-content">
		${categories.map((item) => category(item)).join('')}
	</div>
</div>
`;

const interval = setInterval(() => {
	try {
		const featuredCollection = document.querySelector(
			'#MainContent section:nth-of-type(3)'
		);
		const head = document.querySelector('head');
		if (featuredCollection && head && !document.querySelector('.new-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			featuredCollection.insertAdjacentHTML('beforebegin', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
