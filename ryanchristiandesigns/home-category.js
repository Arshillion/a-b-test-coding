const rightArrow = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12H8M21 12L15 6M21 12L15 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const categories = [
	{
		title: 'Bracelets',
		image:
			'https://ryanchristiandesigns.com/cdn/shop/collections/FD670065-EE1D-4726-A87B-9B032B4C1D16_360x.jpg',
		link: '/pages/search-results-page?collection=bracelets',
	},
	{
		title: 'FOR HIM',
		image: 'https://ryanchristiandesigns.com/cdn/shop/collections/2_360x.jpg',
		link: '/pages/search-results-page?collection=gifts-for-him-1',
	},
	{
		title: 'CHAINS',
		image:
			'https://ryanchristiandesigns.com/cdn/shop/collections/9076776E-E889-4F02-918C-5FD837E64046_360x.jpg',
		link: '/pages/search-results-page?collection=chains',
	},
	{
		title: 'RINGS & THINGS',
		image:
			'https://ryanchristiandesigns.com/cdn/shop/collections/993DE9F6-1691-4A8D-9E84-699F0461BE60_360x.JPG',
		link: '/pages/search-results-page?collection=accessories',
	},
];

const style = `
<style>
    .home-category{
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 15px;
    }
    .category-header{
        display: grid;
        gap: 10px;
        overflow: hidden;
    }
    .category-header h2{
        font-size: 24px;
        text-align: center;
        font-weight: 700;
        position: relative;
        width: max-content;
        margin: 0 auto;
    }
    .category-header h2::after{
        border: 1px solid #000000;
        content: '';
        position: absolute;
        height: 1px;
        width: 100px;
        right: -120px;
        top: 50%;
        transform: translateY(-50%);
    }
    .category-header h2::before{
        border: 1px solid #000000;
        content: '';
        position: absolute;
        height: 1px;
        width: 100px;
        left: -120px;
        top: 50%;
        transform: translateY(-50%);
    }
    .category-content{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 6px;
    }
    .category-item{
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
    }
    .category-item img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .category-item strong{
        font-size: 32px;
        font-weight: 800;
        text-align: left;
        color: #FFFFFF;
    }
    .category-item small{
        width: max-content;
        display: flex;
        align-items: center;
        gap: 2px;
        border: 1px solid #FFFFFF;
        background: #FFFFFF4F;
        color: #FFFFFF;
        padding: 16px 20px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
    }
    .category-info{
        margin: 0 0 16px 16px;
        position: absolute;
    }
    @media (max-width: 1024px) {
        .category-content{
            grid-template-columns: repeat(2, 1fr);
        }
        .category-content .category-info small{
            display: none;
        }
    }
    @media (max-width: 640px) {
         .category-info{
            margin: 0 0 10px 10px;
        }
        .category-item strong{
            font-size: 20px;
            font-weight: 500;
        }
    }
</style>
`;

const category = (item) => `
    <a href=${item.link} class="category-item">
        <img src=${item.image} alt=${item.title} />
        <span class="category-info">
            <strong>${item.title}</strong>
            <small>
                SHOP NOW ${rightArrow}
            </small>
        </span>
    </a>
`;

const new_elm_html = `
<div class="home-category">
    <div class="category-header">
        <h2>OUR COLLECTION</h2>
    </div>
    <div class="category-content">
        ${categories.map((item) => category(item)).join('')}
    </div>
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('main.main-content');
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.home-category')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
