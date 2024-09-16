const style = `
<style>
.return-product-cta{
    width: 100% !important;
    margin-right: 0 !important;
}
.free-shipping-cta {
    margin-bottom: 16px;
}
.free-shipping-cta h1{
    font-size: 20px;
    line-height: 16px;
    font-weight: 600;
    font-family: lato;
    color: #1f1f1f;
    text-align: left;
    letter-spacing: 0!important;
    margin-bottom: 5px!important;
}
</style>
`;

const interval = setInterval(() => {
	const quantity_row = document.querySelector('.quantity-submit-row');
	const free_shipping = document.querySelector('.free-shipping-cta');
	const head = document.querySelector('head');
	if (quantity_row && free_shipping && head) {
		head.insertAdjacentHTML('beforeend', style);
		quantity_row.insertAdjacentElement('beforebegin', free_shipping);
		clearInterval(interval);
	}
}, 10);
