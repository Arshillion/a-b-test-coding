const detailInfo = {
	'essence-byzantine-bracelet-4mm': {
		description: `
        <div class="metafield-rich_text_field"><p>The Essence Bracelet stands out in our collection as a testament to minimalist luxury. Its slim design and intricate Byzantine detailing in sterling silver make it an ideal choice for those seeking understated elegance. </p><p>Designed for comfort and style, it seamlessly integrates into your daily wardrobe, proving that true luxury lies in the subtlety of craftsmanship and design.</p></div>
        `,
		details: `
        <div class="metafield-rich_text_field"><ul><li>4mm. Width</li><li>925 Sterling Silver&nbsp;</li><li>Secure Lobster clasp</li><li>Handcrafted in Bali</li></ul></div>
        `,
	},
};

const style = `
<style>
.product-single__description.rte{
    display: none!important;
}
.single-option-radio__label{
    display: flex!important;
    justify-content: space-between;
    align-items: center;
}
.usp_area {
    margin-bottom: 30px;
    margin-top: 25px;
}
.usp_area_wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
}
.usp_area_item {
    flex: 1;
}
.usp_area_item h4 {
    font-size: 13px;
    text-transform: initial;
    margin: 0;
}
.tab-content-item {
    border-top: 1px solid #F2F2F2;
}
.tab-title {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
}
.tab-title span {
    line-height: 0;
}
.tab-title .minus_icon {
    display: none;
}
.tab-content {
    display: none;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 20px;
}
.grid__item.large--seven-twelfths.medium--seven-twelfths.text-center{
    position: sticky;
}
</style>
`;

const new_elm_html = (item) => `
<div class="new-elm">
    <div class="usp_area">
        <div class="usp_area_wrap">
            <div class="usp_area_item">
                <img
                    src="//9rxkt267r3u702je-11086970.shopifypreview.com/cdn/shop/files/925_icon_10137fbe-58f6-4df1-b551-4a20fb3a25db.svg?v=1708512028"
                    alt=""
                    width=""
                    height=""
                />
                <h4>925 Sterling Silver</h4>
            </div>
            <div class="usp_area_item">
                <img
                    src="//9rxkt267r3u702je-11086970.shopifypreview.com/cdn/shop/files/SVG.svg?v=1708512028"
                    alt=""
                    width=""
                    height=""
                />
                <h4>Complimentary Shipping</h4>
            </div>
            <div class="usp_area_item">
                <img
                    src="//9rxkt267r3u702je-11086970.shopifypreview.com/cdn/shop/files/Protect.png?v=1708512161"
                    alt=""
                    width=""
                    height=""
                />
                <h4>12 month warranty</h4>
            </div>
        </div>
    </div>
    <div class="tab-content-area">
        <div class="tab-content-item">
            <h3 class="tab-title">
                DESCRIPTION
                <span class="plus_icon">
                    <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_733)">
                            <path
                                d="M5 1.06006H7V13.0601H5V1.06006Z"
                                fill="#1C1D1D"
                            ></path>
                            <path
                                d="M12 6.06006V8.06006H0L1.19209e-07 6.06006H12Z"
                                fill="#1C1D1D"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_733">
                                <rect
                                    width="12"
                                    height="13"
                                    fill="white"
                                    transform="translate(0 0.560059)"
                                ></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <span class="minus_icon">
                    <svg
                        width="14"
                        height="3"
                        viewBox="0 0 14 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.54004H13"
                            stroke="#1C1D1D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </span>
            </h3>
            <div class="tab-content">
                ${item.description}
            </div>
        </div>
        <div class="tab-content-item">
            <h3 class="tab-title">
                DETAILS
                <span class="plus_icon">
                    <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_733)">
                            <path
                                d="M5 1.06006H7V13.0601H5V1.06006Z"
                                fill="#1C1D1D"
                            ></path>
                            <path
                                d="M12 6.06006V8.06006H0L1.19209e-07 6.06006H12Z"
                                fill="#1C1D1D"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_733">
                                <rect
                                    width="12"
                                    height="13"
                                    fill="white"
                                    transform="translate(0 0.560059)"
                                ></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <span class="minus_icon">
                    <svg
                        width="14"
                        height="3"
                        viewBox="0 0 14 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.54004H13"
                            stroke="#1C1D1D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </span>
            </h3>
            <div
                class="tab-content"
            >
                ${item.details}
            </div>
        </div>
        <div class="tab-content-item">
            <h3 class="tab-title">
                SHIPPING &amp; RETURNS
                <span class="plus_icon">
                    <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_733)">
                            <path
                                d="M5 1.06006H7V13.0601H5V1.06006Z"
                                fill="#1C1D1D"
                            ></path>
                            <path
                                d="M12 6.06006V8.06006H0L1.19209e-07 6.06006H12Z"
                                fill="#1C1D1D"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_733">
                                <rect
                                    width="12"
                                    height="13"
                                    fill="white"
                                    transform="translate(0 0.560059)"
                                ></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <span class="minus_icon">
                    <svg
                        width="14"
                        height="3"
                        viewBox="0 0 14 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.54004H13"
                            stroke="#1C1D1D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </span>
            </h3>
            <div class="tab-content">
                <div class="metafield-rich_text_field">
                    <ul>
                        <li>14 Day Exchanges/Returns</li>
                        <li>Complimentary standard shipping from Nevada</li>
                        <li>Faster options available at checkout</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const interval = setInterval(() => {
	try {
		const cartForm = document.querySelector('.product-single__form');
		const head = document.querySelector('head');
		const productName = window.location.pathname.split('/products/')[1];
		const sizeLabel = document.querySelector('.single-option-radio__label');
		const sizeGuide = document.querySelector(
			"[data-app='eastsideco_sizeGuides']"
		);
		if (
			sizeLabel &&
			sizeGuide &&
			productName &&
			cartForm &&
			head &&
			!document.querySelector('.new-elm')
		) {
			head.insertAdjacentHTML('beforeend', style);
			sizeLabel.insertAdjacentElement('beforeend', sizeGuide);
			cartForm.insertAdjacentHTML(
				'afterend',
				new_elm_html(detailInfo[productName])
			);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const tabInterval = setInterval(() => {
	try {
		const tabContents = [
			...document.querySelectorAll('.tab-content-area .tab-content-item'),
		];
		if (tabContents.length > 0) {
			tabContents.map((item) => {
				const tabTitle = item.querySelector('.tab-title');
				const tabTitlePlus = tabTitle.querySelector('.plus_icon');
				const tabTitleMinus = tabTitle.querySelector('.minus_icon');
				const tabContent = item.querySelector('.tab-content');
				tabTitle.addEventListener('click', () => {
					const currentStyle = getComputedStyle(tabContent).display === 'none';
					if (currentStyle) {
						tabContent.style.display = 'block';
						tabTitlePlus.style.display = 'none';
						tabTitleMinus.style.display = 'block';
					} else {
						tabContent.style.display = 'none';
						tabTitlePlus.style.display = 'block';
						tabTitleMinus.style.display = 'none';
					}
				});
			});
			clearInterval(tabInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

document.addEventListener('scroll', () => {
	try {
		const slider = document.querySelector(
			'.grid__item.large--seven-twelfths.medium--seven-twelfths.text-center'
		);
		if (slider) {
			slider.style.top = `${window.scrollY}px`;
		}
	} catch (error) {
		console.log('error', error);
	}
});
