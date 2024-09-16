const style = `
<style>
.product-single__title {
    text-align: left;
    margin-bottom: 0;
}
.price-area{
    display: flex;
    margin: 6px 0 10px;
}
.stamped-product-reviews-badge.stamped-main-badge .stamped-badge{
    display: flex;
    gap: 6px;
    align-items: center;
}
#AddToCartForm--product-template{
    margin-bottom: 16px;
}
body.template-product .box_quantity:hover *{
    background: #eca1a1!important; 
}
body.template-product .box_quantity .qtybox{
    border-bottom: 1px solid #e9b9b9;
}
@media screen and (min-width: 591px){
    .product-single__title {
        font-size: 1.8em!important;
    }
}
</style>
`;

const interval = setInterval(() => {
	const title = document.querySelector('.product-single__title');
	const price = document.querySelector('div[itemprop="offers"]');
	const rev_star = document.querySelector(
		'.stamped-product-reviews-badge.stamped-main-badge'
	);
	const head = document.querySelector('head');
	if (
		title &&
		head &&
		price &&
		rev_star &&
		!document.querySelector('.price-area')
	) {
		head.insertAdjacentHTML('beforeend', style);
		title.insertAdjacentElement('beforebegin', rev_star);
		title.insertAdjacentElement('afterend', price);
		price.classList.add('price-area');
		clearInterval(interval);
	}
}, 10);
