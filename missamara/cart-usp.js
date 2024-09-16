const truckSvg = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="20" cy="20" rx="20" ry="20" fill="#F2F2F2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1811 24.571H29.4527C29.7552 24.571 29.9993 24.3127 29.9993 23.994V20.3249C29.9993 20.0072 29.8458 19.5467 29.6564 19.2985L26.6623 16.9216C26.4728 16.6733 26.0751 16.4722 25.7737 16.4722H22.7266V24.571H24.5447C24.5447 23.5055 25.3588 22.6418 26.3629 22.6418C27.3671 22.6418 28.1811 23.5055 28.1811 24.571Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 24.5707H11.0906C10.4872 24.5707 10 24.0524 10 23.4131V14H22.7273V24.5707H15.6364C15.6364 23.5052 14.8223 22.6415 13.8182 22.6415C12.814 22.6415 12 23.5052 12 24.5707Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8182 26.4996C14.8223 26.4996 15.6364 25.6359 15.6364 24.5704C15.6364 23.5049 14.8223 22.6411 13.8182 22.6411C12.814 22.6411 12 23.5049 12 24.5704C12 25.6359 12.814 26.4996 13.8182 26.4996Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.3641 26.4996C27.3682 26.4996 28.1823 25.6359 28.1823 24.5704C28.1823 23.5049 27.3682 22.6411 26.3641 22.6411C25.3599 22.6411 24.5459 23.5049 24.5459 24.5704C24.5459 25.6359 25.3599 26.4996 26.3641 26.4996Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const returnSvg = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="20" cy="20" rx="20" ry="20" fill="#F2F2F2"/>
<path d="M12.667 14H22.2045C23.4709 14 24.6854 14.5031 25.5809 15.3986C26.4764 16.2941 26.9795 17.5086 26.9795 18.775C26.9762 20.0392 26.4716 21.2506 25.5765 22.1434C24.6814 23.0361 23.4687 23.5375 22.2045 23.5375H12.667" stroke="#333333" stroke-width="1.4" stroke-miterlimit="10"/>
<path d="M17.4295 28.3122L12.667 23.5372L17.4295 18.7622" stroke="#333333" stroke-width="1.4" stroke-miterlimit="10"/>
</svg>
`;

const payLaterSvg = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="20" cy="20" rx="20" ry="20" fill="#F2F2F2"/>
<path d="M19.4167 25.5882V30L11.25 24.1177L18.8532 18.4381L20.5833 22.2794L28.75 17.1324L21.75 11.25V15.6618" stroke="#333333" stroke-width="1.4"/>
</svg>
`;

const style = `
<style>
#content {
    overflow: hidden;
}
.cart-product-recommendation.cart-product-recommendation-mobile,
.cart-product-recommendation.cart-product-recommendation-desktop,
#shopify-section-ups-wrapper {
    display: none!important;
}
.cart-usp-elm * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: normal;
}
.cart-usp-elm {
    border: 1px solid #333333;
    border-radius: 8px;
    padding: 20px;
    margin: 30px 0;
}
.cart-usp-elm .usp-header {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin: -30px auto 10px;
    background: white;
    width: max-content;
    padding: 0 10px;
}
.cart-usps {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.cart-usps .cart-usp {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2px 4px;
    align-items: center;
}
.cart-usps .cart-usp svg {
    grid-row: span 2;
}
.cart-usps .cart-usp strong {
    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
}
.cart-usps .cart-usp span{
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
}
.may-like {
    background: #FFF6F4;
    padding: 20px 0;   
    position: relative;     
}
.like-products-wrapper::after {
    content: '';
    position: absolute;
    background: #FFF6F4;
    right: -100%;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
}
.like-products-wrapper::before {
    content: '';
    position: absolute;
    background: #FFF6F4;
    left: -100%;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
}
.may-like-header {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.2px;
    text-align: left;
}
.like-products-wrapper {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.like-products-wrapper::-webkit-scrollbar {
    display: none;
}
.like-products {
    display: flex;
    width: max-content;
    gap: 10px;
}
.like-products .like-product {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2px 6px;
    border: 1px solid #ECE4F4;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 8px;
    width: 220px;
}
.like-products .like-product div.info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.like-products .like-product img {
    width: 75px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
}
.like-products .like-product strong {
    font-size: 12px;
    line-height: 16.8px;
    text-align: left;
}
.like-products .like-product span {
    font-size: 12px;
    font-weight: 300;
    line-height: 14.4px;
    text-align: left;
}
</style>
`;

const new_elm_html = `
<div class="cart-usp-elm">
    <h2 class="usp-header">Why Shop at Miss Amara</h2>
    <div class="cart-usps">
        <div class="cart-usp">
            ${truckSvg}
            <strong>Free & Fast Shipping</strong>
            <span>All rugs ship within one business day!</span>
        </div>
        <div class="cart-usp">
            ${returnSvg}
            <strong>Don't Like It?</strong>
            <span>Return It Free without any Hassle in 30 Days</span>
        </div>
        <div class="cart-usp">
            ${payLaterSvg}
            <strong>Buy Now, Pay Later</strong>
            <span>Buy Now, Pay Later with Afterpay</span>
        </div>
    </div>
</div>
`;

const likedProductsElm = (products) => `
<div class="may-like">
    <h2 class="may-like-header">You May Also Like</h2>
    <div class="like-products-wrapper">
        <div class="like-products">
            ${products}
        </div>
    </div>
</div>
`;

const setProduct = (product) => {
	const { link, imgSrc, title, price } = product;
	return `
        <a class="like-product" href="${link}" target="_blank">
            <img src="${imgSrc}" alt="${title}"/>
            <div class="info">
                <strong>${title}</strong>
                <span>${price.textContent}</span>
            </div>
        </a>
    `;
};

const productAdded = [];
const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('#cartform');
		const products = document.querySelectorAll('.swiper-wrapper .swiper-slide');
		const head = document.querySelector('head');
		if (
			exist_elm &&
			products?.length > 0 &&
			head &&
			!document.querySelector('.cart-usp-elm')
		) {
			head.insertAdjacentHTML('beforeend', style);
			let likedProducts = ``;
			products.forEach((product) => {
				const dataSwiperSliderIndex = product.getAttribute(
					'data-swiper-slide-index'
				);
				if (!productAdded.includes(dataSwiperSliderIndex)) {
					productAdded.push(dataSwiperSliderIndex);
					const link = product
						.querySelector('a.product-link')
						.getAttribute('href');
					const imgSrc = product.querySelector('img').getAttribute('src');
					const title = product.querySelector('.title').textContent;
					const price =
						product.querySelector('.ss-current-price') ??
						product.querySelector('.price.plp-price');
					likedProducts += setProduct({ link, imgSrc, title, price });
				}
			});
			exist_elm.insertAdjacentHTML('afterend', new_elm_html);
			exist_elm.insertAdjacentHTML('afterend', likedProductsElm(likedProducts));
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
