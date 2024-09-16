const items = [
	{
		title: 'Stand Bags',
		link: '/ogio-woode-15-cart-bag',
		image:
			'https://www.carlsgolfland.com/media/catalog/product/cache/d683f18d2576274d783c486896cdd9a7/n/i/nike_air_hybrid_2_stand_bag_n1003478679_hero.jpg',
	},
	{
		title: 'Stand Bags',
		link: '/ogio-woode-15-cart-bag',
		image:
			'https://www.carlsgolfland.com/media/catalog/product/cache/d683f18d2576274d783c486896cdd9a7/n/i/nike_air_hybrid_2_stand_bag_n1003478679_hero.jpg',
	},
	{
		title: 'Stand Bags',
		link: '/ogio-woode-15-cart-bag',
		image:
			'https://www.carlsgolfland.com/media/catalog/product/cache/d683f18d2576274d783c486896cdd9a7/n/i/nike_air_hybrid_2_stand_bag_n1003478679_hero.jpg',
	},
	{
		title: 'Stand Bags',
		link: '/ogio-woode-15-cart-bag',
		image:
			'https://www.carlsgolfland.com/media/catalog/product/cache/d683f18d2576274d783c486896cdd9a7/n/i/nike_air_hybrid_2_stand_bag_n1003478679_hero.jpg',
	},
	{
		title: 'Stand Bags',
		link: '/ogio-woode-15-cart-bag',
		image:
			'https://www.carlsgolfland.com/media/catalog/product/cache/d683f18d2576274d783c486896cdd9a7/n/i/nike_air_hybrid_2_stand_bag_n1003478679_hero.jpg',
	},
	{
		title: 'Stand Bags',
		link: '/ogio-woode-15-cart-bag',
		image:
			'https://www.carlsgolfland.com/media/catalog/product/cache/d683f18d2576274d783c486896cdd9a7/n/i/nike_air_hybrid_2_stand_bag_n1003478679_hero.jpg',
	},
];

const style = `
<style>
    .new-bags-wrapper{
        width: 100%;
        overflow-x: auto;
    }
    .new-bags-wrapper::-webkit-scrollbar {
        display: none;
    }
    .new-bags{
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        gap: 10px;
        overflow-x: auto;
        margin:0 auto 10px;
    }
    .new-bag{
        border: 2px solid #dfdfdf;
        border-radius: 4px;
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px;
        text-decoration: none;
    }
    .new-bag img{
        max-width: 60px;
    }
    .new-bag span{
        color: #333;
        font-size: 20px;
    }
    .new-bag:hover{
        border: 2px solid #fe8b2c;
    }
    @media (max-width:860px){
        .new-bags{
            margin-top: 30px;
        }
        .new-bag{
            flex-direction: column;
        }
        .new-bag img{
            max-width: 100px;
            font-size: 16px;
        }
    }
</style>
`;

const new_elm_html = `
<div class="new-bags-wrapper">
    <div class="new-bags">
        ${items
					.map(
						(item) =>
			`<a class="new-bag" href=${item.link}>
                <img src=${item.image} alt=${item.title} />
                <span>${item.title}</span>
            </a>`
					)
					.join('')}
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.page-title-wrapper');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-bags')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
