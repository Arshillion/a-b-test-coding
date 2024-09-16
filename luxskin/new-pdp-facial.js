const style = `
<style>
.product-single__meta--wrapper{
    padding-left: 10px;
    padding-right: 10px;
}

.box_quantity{
    gap: 20px;
}

#AddToCart--product-template{
    gap: 10px;
    border-radius: 8px;
    background: linear-gradient(90deg, #FF437B 0%, #EA2661 100%)!important;
    color: white!important;
}

.box_quantity .qtydiv{
    background: none!important;
}

.qtybox {
    background: #F5F5F5!important;
    border: 1px solid #E9E9E9!important;
    overflow: hidden;
    border-radius: 8px;
}

#ProductSelect ~ .box_quantity:hover *{
    background: #F5F5F5!important;
}

#ProductSelect ~ .box_quantity:hover input{
    background: #ffffff!important;
}

#ProductSelect ~ .box_quantity:hover button{
    background: linear-gradient(90deg, #FF437B 0%, #EA2661 100%)!important;
}

.qtybox input{
    background: #ffffff!important;
    border:0!important;
}

@media screen and (max-width: 590px){
    .product-single__meta--wrapper{
        margin: 0;
        padding: 0;
    }
}
@media screen and (max-width: 410px){
    #AddToCart--product-template{
        font-size:10px;
        padding: 14px;
    }
}
</style>
`;

const interval = setInterval(() => {
	try {
		const add_cart = document.querySelector('#AddToCart--product-template');
		const product_price = document.querySelector('#ProductPrice');
		const head = document.querySelector('head');
		if (
			add_cart &&
			product_price &&
			head &&
			!document.querySelector('.new-points-elm')
		) {
			head.insertAdjacentHTML('beforeend', style);
			add_cart.innerHTML = `ADD TO CART | ${product_price.innerText}`;
			clearInterval(interval);
		}
	} catch (error) {
		console.log('product-usp', error);
	}
}, 10);
