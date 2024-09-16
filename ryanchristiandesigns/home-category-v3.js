const collectionName = ['Bracelets', 'Chains', 'Rings', 'Men', 'Women'];

const style = `
<style>
    #shopify-section-1637554154bdf2e138,#shopify-section-featured-collections{
        display: none!important;
    }
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
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
    }
    .mp-0{
        padding: 0 !important;
        margin: 0 !important;
    }
    @media (max-width: 1024px) {
        .category-content{
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
        }
        .category-content .single-content:first-child{
            grid-column: span 2;
        }
        .category-content .single-content{
            max-height: 320px;
        }
    }
    @media (max-width: 640px) {
        .category-content .single-content{
            max-height: 200px;
        }
    }
</style>
`;

const homeCategoryHtml = `
<div class="home-category">
    <div class="category-header">
        <h2>OUR COLLECTION</h2>
    </div>
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('main.main-content');
		const head = document.querySelector('head');
		const categoryItems = document.querySelectorAll(
			'a.collection-grid__item-link.collection-collage__item-wrapper'
		);
		if (
			exist_elm &&
			categoryItems &&
			head &&
			!document.querySelector('.home-category')
		) {
			head.insertAdjacentHTML('beforeend', style);
			const homeCategory = document.createElement('div');
			homeCategory.classList.add('home-category');
			homeCategory.insertAdjacentHTML('beforeend', homeCategoryHtml);
			const categoryContent = document.createElement('div');
			categoryContent.classList.add('category-content');
			categoryItems.forEach((item, index) => {
				const itemTitle = item.querySelector('.collection-grid__item-title');
				itemTitle.innerText = collectionName[index];
				const bgArea = item.querySelector(
					'.collection-grid__item-overlay.grid__image'
				);
				if (bgArea && collectionName[index] === 'Rings') {
					bgArea.style.backgroundImage =
						"url('https://i.ibb.co/KhKgrBd/Look-2-S2-117.jpg')";
				}
				if (bgArea && collectionName[index] === 'Chains') {
					bgArea.style.backgroundImage =
						"url('https://i.ibb.co/54PsXYL/Look-5-S6-364.jpg')";
				}
				const itemDiv = document.createElement('div');
				itemDiv.classList.add(
					'grid__item',
					'collection-collage__item',
					'mp-0',
					'text-center',
					'single-content'
				);
				itemDiv.insertAdjacentElement('beforeend', item);
				categoryContent.insertAdjacentElement('beforeend', itemDiv);
			});
			homeCategory.insertAdjacentElement('beforeend', categoryContent);
			exist_elm.insertAdjacentElement('beforebegin', homeCategory);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
