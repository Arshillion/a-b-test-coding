const currency_svg = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2958_493)">
<path d="M14 7.875V9.625" stroke="#0D0C22" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18.375V20.125" stroke="#0D0C22" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z" stroke="#0D0C22" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.375 18.375H15.3125C15.8927 18.375 16.4491 18.1445 16.8593 17.7343C17.2695 17.3241 17.5 16.7677 17.5 16.1875C17.5 15.6073 17.2695 15.0509 16.8593 14.6407C16.4491 14.2305 15.8927 14 15.3125 14H12.6875C12.1073 14 11.5509 13.7695 11.1407 13.3593C10.7305 12.9491 10.5 12.3927 10.5 11.8125C10.5 11.2323 10.7305 10.6759 11.1407 10.2657C11.5509 9.85547 12.1073 9.625 12.6875 9.625H16.625" stroke="#0D0C22" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2958_493">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const certificate_svg = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3333 14L12.7778 16.4444L17.6667 11.5556M14 3L16.3346 5.28735L19.5 4.47372L20.378 7.62189L23.5262 8.5L22.7126 11.6654L25 14L22.7126 16.3346L23.5262 19.5L20.378 20.378L19.5 23.5262L16.3346 22.7126L14 25L11.6654 22.7126L8.5 23.5262L7.62189 20.378L4.47372 19.5L5.28735 16.3346L3 14L5.28735 11.6654L4.47372 8.5L7.62189 7.62189L8.5 4.47372L11.6654 5.28735L14 3Z" stroke="#0D0C22" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const truck_svg = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5.83337H3.5V17.5H17.5V5.83337Z" stroke="#0D0C22" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 10.5H21.5L24.5 13.125V17.5H17.5V10.5Z" stroke="#0D0C22" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.16634 22.1667C9.45501 22.1667 10.4997 21.122 10.4997 19.8333C10.4997 18.5447 9.45501 17.5 8.16634 17.5C6.87768 17.5 5.83301 18.5447 5.83301 19.8333C5.83301 21.122 6.87768 22.1667 8.16634 22.1667Z" stroke="#0D0C22" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 22.1667C21.122 22.1667 22.1667 21.122 22.1667 19.8333C22.1667 18.5447 21.122 17.5 19.8333 17.5C18.5447 17.5 17.5 18.5447 17.5 19.8333C17.5 21.122 18.5447 22.1667 19.8333 22.1667Z" stroke="#0D0C22" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const style = `
<style>
.new-points-elm{
    padding: 20px;
    gap: 10px;
    border-radius: 8px;
    background: linear-gradient(90deg, #F9EADC 0%, #F5EDE1 100%);
    display: grid;
    place-items: flex-start;
    margin-bottom: 20px;
}
.new-points-elm *{
    margin: 0;
    padding: 0;
    letter-spacing: 0px;
    text-align: left;
}
.new-points-elm h6{
    color: #0D0C22;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    text-transform: capitalize;
}
.new-points-elm h6 span{
    font-weight: 700;
}
.new-points-elm strong{
    color: #0D0C22;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
}
.new-points-elm ul li{
    color: #0D0C22;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
}
ul.key-point{
    display: none!important;
}
.new-usps{
    display: flex;
    align-items: center;
    gap:2px;
    justify-content: space-between;
    margin-bottom: 20px;
}
.new-usps .single-usp{
    display: flex;
    align-items: center;
    gap:2px;
}
.new-usps .single-usp span{
    font-size: 10px;
    font-weight: 500;
    color: #0D0C22;
}
.new-usps .divider{
    width: 1px;
    height: 20px;
    background: black;
}
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

@media screen and (max-width: 480px){
    .new-usps .single-usp span{
        font-size: 8px;
    }
}
</style>
`;

const new_elm_html = `
<div class="new-points-elm">
    <h6><span>What it is:</span> Most affordable and effective LED Mask on the market</h6>
    <strong>Why it’s special:</strong>
    <ul>
        <li>Clinically proven benefits</li>
        <li>Reduce fine lines and wrinkles</li>
        <li>Promote glowing, younger looking skin</li>
        <li>Reduce skin bacteria and acne</li>
    </ul>
</div>
`;

const new_usps = `
<div class="new-usps">
    <div class="single-usp">
        ${currency_svg}
        <span>50-80% LOWER Price</span>
    </div>
    <span class="divider"></span>
    <div class="single-usp">
        ${certificate_svg}
        <span>100% Money back guarantee</span>
    </div>
    <span class="divider"></span>
    <div class="single-usp">
        ${truck_svg}
        <span>Fast shipping</span>
    </div>
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.key-point');
		const form_elm = document.querySelector('#AddToCartForm--product-template');
		const add_cart = document.querySelector('#AddToCart--product-template');
		const product_price = document.querySelector('#ProductPrice');
		const single_img = document.querySelector(
			'.product-single__photo-wrapper img'
		);
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.new-points-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.previousElementSibling.style.display = 'none';
			exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
			form_elm.insertAdjacentHTML('afterend', new_usps);
			single_img.src = '';
			add_cart.innerHTML = `ADD TO CART | ${product_price.innerText}`;
			clearInterval(interval);
		}
	} catch (error) {
		console.log('product-usp', error);
	}
}, 10);
