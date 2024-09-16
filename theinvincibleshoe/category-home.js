const categories = [
	{
		name: 'Best Sellers',
		link: '/collections/best-sellers',
		image:
			'https://theinvincibleshoe.com/cdn/shop/products/invincible-shoes-asphalt-mens-12-5-united-states-tersustec-chaussure-chaussures-noir_449_360x.jpg?v=1619208512',
	},
	{
		name: 'Men',
		link: '/collections/men',
		image:
			'https://theinvincibleshoe.com/cdn/shop/products/product-image-1161329340_360x.jpg?v=1677789477',
	},
	{
		name: 'Women',
		link: '/collections/women',
		image:
			'https://theinvincibleshoe.com/cdn/shop/products/Untitleddesign_1_360x.jpg?v=1677785831',
	},
	{
		name: 'Accessories',
		link: '/collections/new-products',
		image:
			'https://theinvincibleshoe.com/cdn/shop/products/Untitleddesign_1_360x.png?v=1677786228',
	},
];

const categoryStyle = `
<style>
    .category-products{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
    }
    .category-product{
        border: 1px solid #F36523;
        border-radius: 16px;
        display: grid;
        overflow: hidden;
    }
    .category-product .image-area{
        background: #F3652321;
    }
    .category-product .image-area img{
        width: 100%;
        padding: 20px;
    }
    .category-product strong{
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        text-align: center;
        color: #000000;
        padding:10px;
    }
    .category-title{
        font-size: 32px;
        font-weight: 600;
        line-height: 44.8px;
        text-align: center;
        margin-BOTTOM: 30px 10px;
    }
    @media (max-width: 768px) {
        .category-title{
            font-size: 24px;
            line-height: 30px;
        }
        .category-products{
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
`;

const category = (item) => `
    <a class="category-product" href=${item.link}>
        <div class="image-area">
            <img src=${item.image} alt=${item.name} />
        </div>
        <strong>${item.name}</strong>
    </a>
`;

const categoryElm = `
<div class="page-width">
    <h3 class="category-title">
        THE INVINCIBLE COLLECTION
    </h3>
    <div class="category-products">
        ${categories.map((item) => category(item)).join('')}
    </div>
</div>
`;

const categoryInterval = setInterval(() => {
	try {
		const collection = document.querySelector('#shopify-section-collection');
		const head = document.querySelector('head');
		if (collection && head && !document.querySelector('.category-products')) {
			head.insertAdjacentHTML('beforeend', categoryStyle);
			collection.querySelector('.section-header.text-center h2').innerHTML =
				'Picked for you';
			collection.insertAdjacentHTML('beforebegin', categoryElm);
			clearInterval(categoryInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
