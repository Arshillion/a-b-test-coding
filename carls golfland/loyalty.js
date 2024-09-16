const gift_html = `
<style>
    .gift-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        border-radius: 4px;
        color: black !important;
        font-weight: 600;
        position: relative;
        width: calc(100% - 40px);
        opacity:0;
        height:0;
        overflow:hidden;
        transition:0.4s;
        gap:10px;
    }
    
    .gift-link.active{
      height:auto;
      padding:8px;
      margin-top: 16px;
      border: 2px solid #dfdfdf;
      opacity: 1;
      overflow: visible;
    }

    .gift-link:hover {
        border: 2px solid #fe8b2c;
    }

    .gift-logo {
        border-radius: 4px;
        overflow: hidden;
    }

    .gift-logo{
        width: 110px;
    }

    .close-gift {
        position: absolute;
        z-index: 1;
        top: -10px;
        right: -10px;
        background: #dfdfdf;
        width: 18px;
        height: 18px;
        font-size: 14px;
        line-height: 14px;
        color: white;
        display: grid;
        place-items: center;
        border-radius: 50%;
    }
    .product-info-price{
        align-items: center;
    }
    .loyalty-link{
        border: 1px solid;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 6px;
        flex-grow: 1;
        gap: 4px;
    }
    .loyalty-link span{
        color: #000;
        font-weight: 600;
        font-size: 16px;
        flex-grow: 1;
        text-align: center;
    }
    .loyalty-link img{
        width:30px;
    }
    @media only screen and (min-width:860px){
        .price-box.price-final_price {
            width: 105px;
        }
        .loyalty-link{
            max-width: 290px;
        }
    }
    @media only screen and (max-width:859px){
        #product_addtocart_form .fieldset {
            flex-flow: unset;
        }
        #product_addtocart_form .fieldset .field.qty{
            max-width: 82px;
        }
        .price-box.price-final_price {
            width: 75px;
        }
        .price-box.price-final_price .price{
            font-size: 20px!important;
        }
    }
    @media only screen and (max-width:375px){
        #product-addtocart-button{
            font-size: 20px;
        }
    }
</style>
<a class="gift-link" href="https://www.carlsgolfland.com/gift-cards">
    <span class="close-gift">x</span>
    <span>Titleist Loyalty: Buy 3, Get 1 Free. Limited Time Only</span>
    <img class="gift-logo" src="https://i.ibb.co/LpCgWFg/Screenshot-2024-03-01-at-9-51-02-AM-removebg-preview.png">
</a>
`;

const loyalty_link_html = `
<a class="loyalty-link" target="_blank" href="https://www.carlsgolfland.com/golf-balls/titleist-loyalty-golf-ball-promotion">
    <span>Buy 3 + Get 1 Free</span>
    <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-jump-off.png" alt="" />
</a>
`;

const loyalty_link = setInterval(() => {
	const parent = document.querySelector('.product-info-price');
	if (parent && !document.querySelector('.loyalty-link')) {
		parent.insertAdjacentHTML('beforeend', loyalty_link_html);
		clearInterval(loyalty_link);
	}
}, 10);

const gift_card = setInterval(() => {
	const parent = document.querySelector('.product-info-stock-sku');
	if (parent && !document.querySelector('.gift-link')) {
		parent.insertAdjacentHTML('afterend', gift_html);
		clearInterval(gift_card);
	}
}, 10);

const gift_card_event = setInterval(() => {
	const close_icon = document.querySelector('.close-gift');
	const gift_card = document.querySelector('.gift-link');
	if (close_icon && gift_card) {
		const time_fade = setTimeout(() => {
			gift_card.classList.add('active');
			clearTimeout(time_fade);
		}, 1000);
		close_icon.addEventListener('click', (event) => {
			event.preventDefault();
			gift_card.remove();
		});
		clearInterval(gift_card_event);
	}
}, 10);
