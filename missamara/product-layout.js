const style = `
<style>
	.product-link .product-wishlist-cta.js-wishlist-cta, .product-link .view-details_cta, .product-link .inner .price{
		display: none!important;
	}
	.product-link {
		display: grid!important;
		grid-template-columns: 1fr 1fr;
		padding: 10px;
		gap: 6px;
	}
	.product-link *, .product-block .block-inner {
		margin: 0!important;
		padding: 0!important;
	}
	.product-info, .image-cont {
		grid-column: span 2;
	}
	.product-block .image-cont .image-label-wrap div img {
		width: 100%;
	}
	.product-link .ss-current-price {
		text-align: right!important;
	}
	.product-link .inner {
		width: 100%!important;
	}
	.product-link .inner .title {
		font-family: Lato;
		font-size: 13px;
		font-weight: 700;
		line-height: 16px;
		color: #464646;
	}
	.product-link .ss-current-price .from {
		color: #798086;
		font-family: Lato;
		font-size: 14px;
		font-weight: 700;
		line-height: 16px;
	}
	.product-link .ss-current-price .ss__price {
		font-family: Lato;
		font-size: 14px;
		font-weight: 900;
		line-height: 16px;
		color: #000;
	}
	#bc-sf-filter-products > div > div:nth-last-of-type(1) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap:10px;
	}
	.ss__toolbar.ss__toolbar--top{
		grid-column: span 3;
		margin: 0;
	}
	.collection-listing .product-block {
		margin: 0!important;
		width: 100%!important;
	}
	.product-block .image-cont div div img {
		max-height: 400px!important;
		height: 400px!important;
	}
	@media only screen and (max-width:991px){
		#bc-sf-filter-products > div > div:nth-last-of-type(1) {
			grid-template-columns: 1fr 1fr;
		}
		.ss__toolbar.ss__toolbar--top{
			grid-column: span 2;
		}
	}
	@media only screen and (max-width:540px){
		#bc-sf-filter-products > div > div:nth-last-of-type(1) {
			grid-template-columns: 1fr;
		}
		.ss__toolbar.ss__toolbar--top{
			grid-column: span 1;
		}
	}
	@media screen and (min-width: 1200px) {
		#bc-sf-filter-products .ss__toolbar .ss__toolbar__row {
			margin-bottom: 0!important;
		}
	}
	@media screen and (min-width: 768px) {
		.collection-template .collection-listing .product-list {
			max-width:1400px!important;
		}
	}
</style>
`;

const interval = setInterval(() => {
	const product_infos = [...document.querySelectorAll('.product-link')];
	const head = document.querySelector('head');
	if (
		product_infos.length > 0 &&
		head &&
		!document.querySelector('.new-product_link')
	) {
		product_infos.forEach((item) => {
			const price = item.querySelector('.ss-current-price');
			item.insertAdjacentElement('beforeend', price);
			item.classList.add('new-product_link');
		});
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(interval);
	}
}, 10);
