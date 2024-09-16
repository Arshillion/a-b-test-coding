const style_elm = `
<style>
    .nav-star{
        border-radius: 12px;
        background: #EFFBFF;
        margin: 16px 20px;
        display: inline-flex;
        padding: 16px 20px;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    .nav-star span{
        color: #000;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .drawer__scrollable{
        padding-left: 0;
        padding-right: 0; 
    }
    .drawer__scrollable ul{
        margin-left: 20px;
        margin-right: 20px; 
    }
    .nav-best-sell{
        background: #FFF5EF;
        display: inline-flex;
        padding: 16px 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    .nav-products-area{    
        width: 100%;
        overflow: scroll;
    }
    .nav-products{
        display: flex;
        padding: 1px;
        justify-content: center;
        align-items: flex-start;
        width: fit-content;
        overflow: auto;
        gap: 8px;
    }
    .nav-product{
        border-radius: 4px;
        border: 1px solid #EEEBE9;
        background: #FFF;
        display: flex;
        padding-bottom: 4px;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }
    .nav-product img{
        border-radius: 8px;
    }
    .nav-product .price{
        display: flex;
        padding: 0px 8px;
        align-items: flex-start;
        gap: 2px;
        align-self: stretch;
        padding: 0 8px;
    }
    .nav-product s{
        color: #9A9A9A;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
    .nav-product strong{
        color: #000;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
    .nav-product .name{
        color: #000;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;
        padding:0 8px;
    }
    .nav-products::-webkit-scrollbar {
        display: none;
    }
    .nav-products {
        -ms-overflow-style: none; 
        scrollbar-width: none;
    }
</style>
`;

const top_five_star = `
<svg width="96" height="22" viewBox="0 0 96 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3L10.3794 7.7251L15.6085 8.52786L11.8499 12.2509L12.7023 17.4721L8 15.048L3.29772 17.4721L4.15012 12.2509L0.391548 8.52786L5.62065 7.7251L8 3Z" fill="#F79E1B"/>
    <path d="M28 3L30.3794 7.7251L35.6085 8.52786L31.8499 12.2509L32.7023 17.4721L28 15.048L23.2977 17.4721L24.1501 12.2509L20.3915 8.52786L25.6206 7.7251L28 3Z" fill="#F79E1B"/>
    <path d="M48 3L50.3794 7.7251L55.6085 8.52786L51.8499 12.2509L52.7023 17.4721L48 15.048L43.2977 17.4721L44.1501 12.2509L40.3915 8.52786L45.6206 7.7251L48 3Z" fill="#F79E1B"/>
    <path d="M68 3L70.3794 7.7251L75.6085 8.52786L71.8499 12.2509L72.7023 17.4721L68 15.048L63.2977 17.4721L64.1501 12.2509L60.3915 8.52786L65.6206 7.7251L68 3Z" fill="#F79E1B"/>
    <path d="M88 3L90.3794 7.7251L95.6085 8.52786L91.8499 12.2509L92.7023 17.4721L88 15.048L83.2977 17.4721L84.1501 12.2509L80.3915 8.52786L85.6206 7.7251L88 3Z" fill="#F79E1B"/>
</svg>
`;

const small_five_star = `
<svg width="126" height="16" viewBox="0 0 126 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 4L14.4577 6.99364L17.7553 7.45492L15.3586 9.76636L15.9389 13.0451L13 11.48L10.0611 13.0451L10.6414 9.76636L8.24472 7.45492L11.5423 6.99364L13 4Z" fill="#FF5F00"/>
    <path d="M23 4L24.4577 6.99364L27.7553 7.45492L25.3586 9.76636L25.9389 13.0451L23 11.48L20.0611 13.0451L20.6414 9.76636L18.2447 7.45492L21.5423 6.99364L23 4Z" fill="#FF5F00"/>
    <path d="M33 4L34.4577 6.99364L37.7553 7.45492L35.3586 9.76636L35.9389 13.0451L33 11.48L30.0611 13.0451L30.6414 9.76636L28.2447 7.45492L31.5423 6.99364L33 4Z" fill="#FF5F00"/>
    <path d="M43 4L44.4577 6.99364L47.7553 7.45492L45.3586 9.76636L45.9389 13.0451L43 11.48L40.0611 13.0451L40.6414 9.76636L38.2447 7.45492L41.5423 6.99364L43 4Z" fill="#FF5F00"/>
    <path d="M53 4L54.4577 6.99364L57.7553 7.45492L55.3586 9.76636L55.9389 13.0451L53 11.48L50.0611 13.0451L50.6414 9.76636L48.2447 7.45492L51.5423 6.99364L53 4Z" fill="#FF5F00"/>
</svg>
`;

const interval = setInterval(() => {
	const btn_wrapper = document.querySelector('#NavDrawer .drawer__scrollable');
	const head = document.querySelector('head');
	if (btn_wrapper && head && !document.querySelector('.float-area-message')) {
		head.insertAdjacentHTML('beforeend', style_elm);
		btn_wrapper.insertAdjacentHTML('beforeend', rev_html);
		clearInterval(interval);
	}
}, 10);

const rev_html = `
<div class="nav-star">
	${top_five_star}
	<span>Over 100,000 5-star reviews!</span>
</div>
<div class="nav-best-sell">
	<strong>BEST SELLERS</strong>
    <div class="nav-products-area">
        <div class="nav-products">
            <a href="https://www.dogfriendlyco.com/products/df-co-orthopedic-memory-foam-bed" class="nav-product">
                <img src="https://us.dogfriendlyco.com/cdn/shop/products/Large-DFCODogBeds0457_540x.jpg?v=1664188569" alt="" />
                ${small_five_star}
                <span class="price"> 
                    <s>$270.00</s> 
                    <strong>$252.00</strong> 
                </span>
                <span class="name">Dog Foam Bed</span>
            </a>
            <a href="https://www.dogfriendlyco.com/products/dog-friendly-co-signature-kit" class="nav-product">
                <img src="https://us.dogfriendlyco.com/cdn/shop/products/blackkit_540x.jpg?v=1651721013" alt="" />
                ${small_five_star}
                <span class="price"> 
                    <s>$112.00</s> 
                    <strong>$83.00</strong> 
                </span>
                <span class="name">Signature Kit</span>
            </a>
            <a href="https://www.dogfriendlyco.com/products/df-co-orthopedic-memory-foam-bed" class="nav-product">
                <img src="https://us.dogfriendlyco.com/cdn/shop/products/blackharness_aa2d79f9-e27b-45c4-bed2-684a9a990322_1080x.jpg?v=1651720985" alt="" />
                ${small_five_star}
                <span class="price"> 
                    <s>$156.00</s> 
                    <strong>$92.00</strong> 
                </span>
                <span class="name">Dog Lovers Pack</span>
            </a>
        </div>
    </div>
</div>
`;
