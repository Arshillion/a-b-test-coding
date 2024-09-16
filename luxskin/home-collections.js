const collections = [
	{
		image:
			'//luxskin.co/cdn/shop/collections/184601713_890033861559939_6145889574068033756_n_2_350x350.jpg',
		link: '/collections/lux',
		title: 'Skincare',
	},
	{
		image:
			'//luxskin.co/cdn/shop/collections/186061353_298432648530033_2258344258906981358_n_350x350.jpg',
		link: '/collections/hair-removal-devices',
		title: 'Hair Removal',
	},
	{
		image: '//luxskin.co/cdn/shop/collections/HW_Sale_350x350.png',
		link: '/collections/hair-tools',
		title: 'Hair Styling',
	},
	{
		image: '//luxskin.co/cdn/shop/collections/Bundle_image_350x350.png',
		link: '/collections/bundles',
		title: 'Bundles',
	},
	{
		image:
			'//luxskin.co/cdn/shop/collections/Screen_Shot_2022-07-25_at_6.45.19_am_350x350.png',
		link: '/collections/under-10-specials',
		title: 'Accessories',
	},
];

const arrowSvg = `<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 5L1 9" stroke="white" stroke-width="2"/>
</svg>
`;

const collectionElm = (item) => `
<a class="single-collection" href=${item.link}>
    <img src=${item.image} alt=${item.title} />
    <span>${item.title} ${arrowSvg}</span>
</a>
`;

const style = `
<style>
    #shopify-section-mobile-feature,#shopify-section-1648978479c434547a{
        display: none!important;
    }
    div#shopify-section-1565042116914{
        margin-top: 0!important;
    }
    .new-collection-elm{
        background: #fff;
        display: grid;
        place-items: center;
        gap: 20px;
        padding: 40px 0;
    }
    .new-collection-elm h3{
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        color: #0D0C22;
        margin: 0!important;
        text-decoration: underline;
    }
    .collections-wrapper{
        width: 100%;
        max-width: 1400px;
        overflow-x:auto;
    }
    .collections-wrapper::-webkit-scrollbar{
        display:none;
    }
    .all-collections{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        gap: 12px;
        padding: 20px;
    }
    .all-collections a{
        display: grid;
        grid-template-rows: subgrid;
        grid-row: span 2;
        gap:0;
    }
    .all-collections img{
        width:100%;
        height: 100%;
    }
    .all-collections span{
        background: #0D0C22;
        padding: 14px;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: white;
    }
    @media (max-width:991px){
        .all-collections{
            width: max-content;
        }
        .new-collection-elm h3{
            font-size: 18px;
            line-height: 20px;
        }
        .all-collections a{
            max-width: 200px;
        }
    }
</style>
`;

const new_elm_html = `
<div class="new-collection-elm">
    <h3>View collections</h3>
    <div class="collections-wrapper">
        <div class="all-collections">
            ${collections.map((item) => collectionElm(item)).join('')}
        </div>
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#shopify-section-1565042116914');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-collection-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);
