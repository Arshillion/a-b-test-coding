const style = `
<style>
.product-single__meta > div:nth-of-type(2) > div:nth-of-type(1) div{
    margin: 0;
}
.product-single__meta {
    padding: 20px;
}
.pdp-usps{
    display: flex;
    align-items: center;
    justify-content: center;
}
.pdp-usp{
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 4px;
}
.pdp-usp img{
    width: 18px;
}
.pdp-usp span{
    font-size: 12px;
    line-height: 12px;
}
.pdp-usp:not(:last-child){
    border-right: 1px solid #000;
}
.product-spec{
    background: #fafafd;
    border-radius: 6px;
    padding: 20px 20px 10px;
    margin-bottom: 10px;
}
.product-spec h4{
    margin-bottom: 10px;
}
.product-spec .sales-point:last-child{
    margin-bottom: 10px;
}
.div-specs{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: baseline;
    gap: 20px;
}
.product-block.product-block--sales-point {
    margin-bottom: 0!important;
}
.btn.btn--full.add-to-cart{   
    background-image: linear-gradient(to bottom, #202020, #411903);
    border: none;
}
.btn.btn--full.add-to-cart:hover{   
    background-image: linear-gradient(to bottom, #38ac54, #38ac54);
}
@media only screen and (max-width:480px) {
    .pdp-usp{
        padding: 0 4px;
        gap: 2px;
    }
    .pdp-usp img{
        width: 16px;
    }
    .pdp-usp span{
        font-size: 10px;
        line-height: 10px;
    }
}
</style>
`;

const new_elm_html = `
<div class="product-block pdp-usps">
    <div class="pdp-usp">
        <img src="https://i.ibb.co/3dvttp8/usp1.png" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/klarna_logo.png?v=1697923808" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/postnl-3-logo-png-transparent-removebg-preview.png?v=1705871635" alt="" />
        <span>Gratis Verzending</span>
    </div>
</div>
`;

const interval = setInterval(() => {
	const header = document.querySelector(
		'.product-block.product-block--header.product-single__header'
	);
	const rating = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(1)'
	);
	const form_cart = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(8)'
	);
	const sale_points = document.querySelectorAll(
		'.product-block.product-block--sales-point'
	);
	const product_price = document.querySelector(
		'.product-block.product-block--price'
	);
	const head = document.querySelector('head');
	if (
		header &&
		product_price &&
		sale_points &&
		rating &&
		head &&
		!document.querySelector('.pdp-usps')
	) {
		head.insertAdjacentHTML('beforeend', style);
		header.insertAdjacentElement('beforebegin', rating);
		const spec_div = document.createElement('div');
		spec_div.classList.add('product-spec');
		spec_div.innerHTML = `
		    <h4>Product Specificaties</h4>
		    <div class="div-specs">
		    </div>
		`;
		[...sale_points].map((item) => {
			spec_div.querySelector('.div-specs').appendChild(item);
		});
		product_price.insertAdjacentElement('afterend', spec_div);
		form_cart.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
