/* CUSTOM CODE */
const bellSeller = [
	{
		link: '/nourison-prismatic-prs08-multicolor-area-rug/',
		title: 'Nourison Prismatic PRS08 Multicolor Area Rug',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/120/404/PRISM_PRS08_MULTI_8x10_099446354518_Room__51455.1698260242.jpg?c=1',
	},
	{
		link: '/karastan-spice-market-90661-90097-petra-multi-area-rug/',
		title: 'Karastan Spice Market 90661-90097 Petra Multi Area Rug',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/1280x1280/products/1714/72080/Petra_Multi_90661_90097_063094__30759.1695854885.jpg?c=1',
	},
	{
		link: '/ancient-garden-57226-6464-ivory-ivory-64-pearl-area-rug-by-dynamic-rugs/',
		title: 'Ancient Garden 57226-6464 Ivory/Ivory (64 Pearl) Area Rug by Dynamic Rugs',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/334/94165/ancient_garden_57226-6464_ivory_ivory_64_pearl_area_rug_by_dynamic_rugs_room__19992.1709068997.jpg?c=1',
	},
	{
		link: '/carlisle-car-02-beige-slate-area-rug-magnolia-home-by-joanna-gaines/',
		title: 'Carlisle CAR-02 Beige Slate Area Rug - Magnolia Home by Joanna Gaines',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/19243/94648/carlisle_car-02_beige_slate_area_rug_magnolia_home_by_joanna_gaines_room__17645.1709678889.jpg?c=1',
	},
	{
		link: '/london-brick-multi-5-x-10-porcelain-floor-tile/',
		title: 'London Brick Multi 5" x 10" Porcelain Floor Tile',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/1873/94913/LONDON_BRICK_MULTI_5_X_10_PORCELAIN_FLOOR_TILE__82948.1710343448.png?c=1',
	},
	{
		link: '/belmar-white-12-x-24-porcelain-tile/',
		title: 'Belmar White 12" X 24" Porcelain Tile',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/18889/56204/10026378_Room__29181.1700663325.jpg?c=1',
	},
	{
		link: '/pergo-elements-originals-chancing-psr04-02-saffron-chestnut-6-1-4-x-47-1-4-12-mm-laminate-flooring/',
		title: 'Pergo Elements Originals Chancing PSR04-02 37004-02 Saffron Chestnut 6-1/4" X 47-1/4" 12 MM Laminate Flooring',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/23470/65572/50005677_Room2_37004_02__57720.1709745633.jpg?c=1',
	},
	{
		link: '/mohawk-elderwood-cdl80-04-aged-copper-7-1-2-x-54-revwood-plus-12-mm-laminate-flooring/',
		title: 'Mohawk Elderwood CDL80-04 Aged Copper 7 1/2" X 54" RevWood Plus 12 MM Laminate Flooring',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/8067/94745/Mohawk_Elderwood_CDL80-04_Aged_Copper_7.5_X_54_RevWood_Plus_12_MM_Laminate_Flooring__16484.1710262621.png?c=1',
	},
	{
		link: '/happy-feet-pinnacle-hf1211-york-7-x-60-luxury-vinyl-plank/',
		title: 'Happy Feet Pinnacle HF1211 York 7" X 60" Luxury',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/25441/73739/67150035002_room__84642.1709747467.jpg?c=1',
	},
	{
		link: '/shaw-floorte-pro-endura-plus-0736v-00820-amber-oak-7-x-48-luxury-vinyl-plank/',
		title: 'Shaw Floorte Pro Endura Plus 0736V 00820 Amber Oak 7" X 48" Luxury Vinyl Plank',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/14924/35562/45174_RM__43723.1709751476.jpg?c=1',
	},
	{
		link: '/dutton-pass-eknr6l307w-taupe-brown-3-8-x-6-1-2-white-oak-hardwood-flooring/',
		title: 'Dutton Pass EKNR6L307W Taupe Brown 3/8" X 6-1/2" White Oak Hardwood Flooring',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/29374/89847/10010977_room__37461.1702336490.jpg?c=1',
	},
	{
		link: '/armstrong-american-scrape-hardwood-hickory-gold-rush-hardwood-flooring-3-4-x-5/',
		title: 'Armstrong American Scrape Hardwood Hickory - Gold Rush Hardwood Flooring - 3/4" x 5"',
		src: 'https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/products/3346/94762/ARMSTRONG_AMERICAN_SCRAPE_HARDWOOD_HICKORY_-_GOLD_RUSH_HARDWOOD__46989.1710272883.png?c=1',
	}
];
const getSingleSeller = (seller) => `
<div class="single-product">
    <img src=${seller.src}>
    <strong>${seller.title}</strong>
    <a class="info" href=${seller.link}>Please call store for details and price</a>
    <a href=${seller.link}>VIEW</a>
</div>
`;
const style = `
<style>
    #s-56dceeca-b58c-4d7a-88c4-4270f6bf464a{
        display: none!important;
    }
    .new-seller-elm {
        background: white;
        margin: 30px 0;
        padding: 30px 0;
        position: relative;
    }
    .new-seller-elm::after {
        content: '';
        position: absolute;
        background: #fff;
        right: -100%;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 999;
    }
    .new-seller-elm::before {
        content: '';
        position: absolute;
        background: #fff;
        left: -100%;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 999;
    }
    .new-seller-elm *{
        margin:0;
        padding:0;
    }
    .new-seller-elm .header-best{
        display: flex;
        align-items: center;
        gap:20px;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .new-seller-elm .header-best h1{
        font-size: 32px;
        font-weight: 900;
        line-height: 38px;
        text-align: left;
    }
    .new-seller-elm .header-best span{
        border: 1px solid #FF0000;
        flex-grow: 1;
    }
    .new-seller-elm .header-best .rotate-btns{
        display: flex;
    }
    .new-seller-elm .header-best .rotate-btns button{
        display: grid;
        place-items: center;
        border:1px solid #000000;
        width:40px;
        height:40px;
    }
    .new-seller-elm .header-best .rotate-btns button:last-child{
        border-left: none;
    }
    .new-seller-elm .header-best .rotate-btns button svg{
        width: 20px;
        height: 20px;
    }
    .new-seller-elm .sellers-section{
        position: relative;
        width:100%;
    }
    .new-seller-elm .all-sellers{
        display: grid;
        grid-template-columns: repeat(15, 24%);
        gap: 1.7%;
        overflow-y: auto;
        scroll-snap-type: x mandatory;
		scrollbar-width: none;
		padding: 10px 0;
    }
    .new-seller-elm .all-sellers::-webkit-scrollbar {
		display: none;
	}
    .new-seller-elm .all-sellers .single-product{
        scroll-snap-align: start;
        display: grid;
		grid-template-rows: subgrid;
		grid-row: span 4;
        gap: 20px;
        padding:20px;
        background: white;
        border-radius: 6px;
        box-shadow: 0px 2px 6px 0px #ccc;
    }
    .new-seller-elm .all-sellers .single-product img{
        width: 100%;
    }
    .new-seller-elm .all-sellers .single-product strong{
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: #000;
    }
    .new-seller-elm .all-sellers .single-product a.info{
        font-size: 16px;
        font-weight: 500;
        color: #777;
        text-decoration: underline;
        text-align: center;
    }
    .new-seller-elm .all-sellers .single-product a:last-child{
        color: #fff;
        background-color: #627e36;
        padding: 20px;
        text-align: center;
        font-weight: 700;
        font-size: 20px;
        display:none;
    }
    .new-seller-elm .all-sellers .single-product:hover a:last-child{
        display:block;
    }
    @media only screen and (max-width:1200px){
		.new-seller-elm .all-sellers {
			grid-template-columns: repeat(15, 32%);
			gap: 2%;
		}
	}
	@media only screen and (max-width:991px){
		.new-seller-elm .all-sellers {
			grid-template-columns: repeat(15, 48%);
			gap: 4%;
		}
	}
	@media only screen and (max-width:480px){
		.new-seller-elm .all-sellers {
			grid-template-columns: repeat(15, 100%);
			gap: 0;
		}
        .new-seller-elm .header-best h1{
            font-size: 20px;
            font-weight: 700;
            line-height: 22px;
        }
	}
</style>
`;
const new_elm_html = `
<div class="new-seller-elm">
	<div class="header-best">
		<h1>BEST SELLERS</h1>
		<span class="str-line"></span>
		<div class="rotate-btns">
			<button class="prev">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
					version="1.1"
				>
					<path
						d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"
					></path>
				</svg>
			</button>
			<button class="next">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
					version="1.1"
				>
					<path
						d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"
					></path>
				</svg>
			</button>
		</div>
	</div>
	<div class="sellers-section">
		<div class="all-sellers">
			${bellSeller.map((seller) => getSingleSeller(seller)).join('')}
		</div>
	</div>
</div>
`;
const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'#s-59ded273-fd06-4e7c-9c05-ab0aa79fb6f2'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-seller-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
const btn_interval = setInterval(() => {
	const next_btn = document.querySelector(
		'.new-seller-elm .header-best .rotate-btns .next'
	);
	const prev_btn = document.querySelector(
		'.new-seller-elm .header-best .rotate-btns .prev'
	);
	const all_sell = document.querySelector('.sellers-section .all-sellers');
	if (next_btn && prev_btn && all_sell) {
		prev_btn.addEventListener('click', () => {
			all_sell.scrollBy({
				left: -20,
				behavior: 'smooth',
			});
		});
		next_btn.addEventListener('click', () => {
			all_sell.scrollBy({
				left: 20,
				behavior: 'smooth',
			});
		});
		clearInterval(btn_interval);
	}
}, 10);
