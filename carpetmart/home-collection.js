const left_cats = [
	{
		link: 'https://shop.carpetmart.com/carpet/',
		img: 'https://i.shgcdn.com/1852b472-894f-4286-877b-a627ae848f8e/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
		title: 'Shop Carpet',
	},
	{
		link: 'https://shop.carpetmart.com/luxury-vinyl-flooring',
		img: 'https://i.shgcdn.com/2353f9ed-3ed9-45ed-9a88-aa7f27bbee8d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
		title: 'Shop Vinyl',
	},
];
const right_cats = [
	{
		link: 'https://shop.carpetmart.com/rugs',
		img: 'https://i.shgcdn.com/14e7702a-07db-49b1-9e85-7f66da5bc05f/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
		title: 'Shop Area Rugs',
	},
	{
		link: 'https://shop.carpetmart.com/tile',
		img: 'https://i.shgcdn.com/c74bff7c-7f3e-4859-bc5a-b047a8194ea9/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
		title: 'Shop Tile',
	},
];
const middle_cats = [
	{
		link: 'https://shop.carpetmart.com/hardwood',
		img: 'https://i.shgcdn.com/3d590063-b2d2-4be6-adfc-966c2fbcc617/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
		title: 'Shop Hardwood',
	},
	{
		link: 'https://shop.carpetmart.com/laminate',
		img: 'https://i.shgcdn.com/1c803b28-c54f-439b-88fd-0edcf53fc844/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
		title: 'Shop Laminate',
	},
];

const saving_svg = `
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.3333 45.3333C55.7222 45.3333 56.9583 44.7917 58.0417 43.7083C59.125 42.625 59.6667 41.375 59.6667 39.9583C59.6667 38.5417 59.125 37.3056 58.0417 36.25C56.9583 35.1944 55.7222 34.6667 54.3333 34.6667C52.9445 34.6667 51.7083 35.1944 50.625 36.25C49.5417 37.3056 49 38.5417 49 39.9583C49 41.375 49.5417 42.625 50.625 43.7083C51.7083 44.7917 52.9445 45.3333 54.3333 45.3333ZM15 60.5833V65V15V60.5833ZM15 70C13.7222 70 12.5694 69.5 11.5417 68.5C10.5139 67.5 10 66.3333 10 65V15C10 13.7222 10.5139 12.5694 11.5417 11.5417C12.5694 10.5139 13.7222 10 15 10H65C66.3333 10 67.5 10.5139 68.5 11.5417C69.5 12.5694 70 13.7222 70 15V26.1667H65V15H15V65H65V53.9167H70V65C70 66.3333 69.5 67.5 68.5 68.5C67.5 69.5 66.3333 70 65 70H15ZM44.8333 55.5833C42.9445 55.5833 41.4444 55.0278 40.3333 53.9167C39.2222 52.8056 38.6667 51.3333 38.6667 49.5V30.5833C38.6667 28.6944 39.2222 27.2083 40.3333 26.125C41.4444 25.0417 42.9445 24.5 44.8333 24.5H67.3333C69.2222 24.5 70.7222 25.0417 71.8333 26.125C72.9445 27.2083 73.5 28.6944 73.5 30.5833V49.5C73.5 51.3333 72.9445 52.8056 71.8333 53.9167C70.7222 55.0278 69.2222 55.5833 67.3333 55.5833H44.8333ZM68.5 50.5833V29.5H43.6667V50.5833H68.5Z" fill="white"/>
</svg>
`;

const measure_svg = `
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 70C14.8333 70 13.2639 69.3472 11.9583 68.0417C10.6528 66.7361 10 65.1667 10 63.3334V18.4167C10 16.3611 10.9583 14.9445 12.875 14.1667C14.7917 13.3889 16.5 13.75 18 15.25L21.75 19L18.25 22.5L20.5 24.75L24 21.25L33.75 31L30.25 34.5L32.5 36.75L36 33.25L45.8333 43.0833L42.3333 46.5833L44.5833 48.8333L48.0833 45.3333L57.8333 55.0833L54.3333 58.5834L56.5833 60.8334L60.0833 57.3334L63.8333 61.0834C65.5 62.75 65.9167 64.6528 65.0833 66.7917C64.25 68.9306 62.7222 70 60.5 70H16.6667ZM16.6667 63.3334H55.25L16.6667 24.75V63.3334Z" fill="white"/>
</svg>
`;

const location_svg = `
<svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.5077 38.6771C41.0937 38.6771 42.4491 38.1124 43.5738 36.9828C44.6984 35.8533 45.2607 34.4955 45.2607 32.9094C45.2607 31.3233 44.696 29.9679 43.5664 28.8433C42.437 27.7186 41.0791 27.1563 39.493 27.1563C37.9069 27.1563 36.5515 27.7211 35.4269 28.8506C34.3022 29.9801 33.7399 31.3379 33.7399 32.924C33.7399 34.5101 34.3047 35.8655 35.4342 36.9901C36.5637 38.1148 37.9215 38.6771 39.5077 38.6771ZM39.5003 65.9157C46.7969 59.2775 52.187 53.2565 55.6706 47.8526C59.1543 42.4488 60.8962 37.6896 60.8962 33.575C60.8962 27.113 58.8309 21.8217 54.7003 17.7014C50.5697 13.581 45.5031 11.5209 39.5003 11.5209C33.4976 11.5209 28.4309 13.581 24.3004 17.7014C20.1698 21.8217 18.1045 27.113 18.1045 33.575C18.1045 37.6896 19.8875 42.4488 23.4535 47.8526C27.0194 53.2565 32.3684 59.2775 39.5003 65.9157ZM39.5003 72.4167C30.6677 64.9007 24.0706 57.9197 19.7092 51.4735C15.3477 45.0273 13.167 39.0612 13.167 33.575C13.167 25.3459 15.814 18.79 21.1081 13.9073C26.4022 9.02469 32.533 6.58337 39.5003 6.58337C46.4677 6.58337 52.5984 9.02469 57.8925 13.9073C63.1866 18.79 65.8337 25.3459 65.8337 33.575C65.8337 39.0612 63.6529 45.0273 59.2915 51.4735C54.93 57.9197 48.333 64.9007 39.5003 72.4167Z" fill="white"/>
</svg>
`;

const category = (item) => `
<a class="category-details" href=${item.link}>
    <img src=${item.img} alt=${item.title} />     
    <span>${item.title}</span>
</a>
`;

const uspDetails = (svg = '', text = '', link = '') => `
<a class="usp-details" href=${link}>
    ${svg}    
    <span>${text}</span>
</a>
`;

const style = `
<style>
	.cat-header h2{
		color: #000000;
		font-size: 36px;
		font-weight: 900;
		line-height: 43.2px;
		position: relative;
		overflow: hidden;
		margin: 0;
	}
	.cat-header h2::after{
		content: '';
		position: absolute;
		top: 50%;
		width: 100%;
		border-top: 3px solid #ff0000;
	}
	.shogun-root
		> div:nth-of-type(2)
		> div:nth-of-type(1)
		> div:nth-of-type(1)
		> div:nth-of-type(2)
		> div:nth-of-type(1) {
		display: none !important;
	}
	#s-b13170db-9bb7-4c65-ab04-ca4cd2e0f673
		.shg-box-content
		> div:not(
			#s-59ded273-fd06-4e7c-9c05-ab0aa79fb6f2,
            .new-elm,
			:nth-last-child(-n + 5)
		) {
		display:  none;
	}
    .new-elm{
        margin: 30px auto;
        max-width: 1520px;
        width: 100%;
        display: grid;
        gap: 30px;
    }
	.cat-wrapper{
		display:grid;
		gap: 20px;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.cat-wrapper.cat-equal{
		grid-template-columns: 1fr 1fr;
	}
	.cat-left .category-details:first-child{
		grid-column: span 2;
	}
	.cat-right .category-details:last-child{
		grid-column: span 2;
	}
	.category-details{
		display: flex;
		flex-direction: column;
	}
	.category-details img{
		height: 400px;
		object-fit: cover;
	}
	.category-details span{
		background: #000000;
		border-radius: 0 0 5px 5px;
		color: #ffffff;
		padding: 28px;
		font-size: 24px;
		font-weight: 500;
		line-height: 28px;
	}
	.category-details:hover span{
		background: #FF0000;
	}
	.usp-store{
		display: grid;
		gap: 20px;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.usp-details{
		background: linear-gradient(130.82deg, #6EA73A 10.64%, #5A8028 53.57%);
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items:center;
		justify-content: center;
		gap:20px;
		border-radius: 5px;
    	padding: 40px;
	}
	.usp-details span{
		color: #FFFFFF;
		font-size: 36px;
		font-weight: 700;
		line-height: 43px;
	}
	.usp-details svg{
		margin-left: auto;
	}
	@media (max-width:991px){
		.new-elm{
			gap: 20px;
		}
		.category-details img{
			height: 200px;
		}
		.cat-wrapper{
			grid-template-columns: 1fr 1fr;
		}
		.cat-left .category-details:first-child{
			grid-column: span 1;
		}
		.cat-right .category-details:last-child{
			grid-column: span 1;
		}
		.usp-store{
			grid-template-columns: 1fr;
		}
		.usp-details{
			padding: 32px;
		}
		.usp-details span{
			font-size: 28px;
			line-height: 32px;
		}
		.cat-header h2{
			font-size: 24px;
			line-height: 28px;
		}
	}
	@media (max-width:480px){
		.cat-wrapper{
			grid-template-columns: 1fr;
		}
		.cat-wrapper.cat-equal{
			grid-template-columns: 1fr;
		}
		.usp-details{
			padding: 20px;
		}
		.usp-details span{
			font-size: 24px;
			line-height: 28px;
		}
		.cat-header h2{
			font-size: 20px;
			line-height: 24px;
		}
	}
</style>
`;

const new_elm_html = `
<div class="new-elm">
    <div class="cat-header">
        <h2>Shop Our Popular Categories</h2>
    </div>
    <div class="cat-wrapper cat-left">
		${left_cats.map((item) => category(item)).join('')}
    </div>
    <div class="cat-wrapper cat-right">
		${right_cats.map((item) => category(item)).join('')}
    </div>
    <div class="usp-store">
        ${uspDetails(location_svg, 'Find A Store', ' ')}
        ${uspDetails(measure_svg, 'Schedule a Measurement', ' ')}
        ${uspDetails(saving_svg, 'Want Savings?', ' ')}
    </div>
    <div class="cat-wrapper cat-equal">
		${middle_cats.map((item) => category(item)).join('')}
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'#s-b13170db-9bb7-4c65-ab04-ca4cd2e0f673 #s-59ded273-fd06-4e7c-9c05-ab0aa79fb6f2'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
