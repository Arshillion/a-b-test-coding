const style = `
<style>
    .attribute-badges-section ul{
        display: flex;
        justify-content: space-between;
        gap: 6px;
    }
    .attribute-badges-section ul li{
        background-position: top!important;
        height: auto!important;
        margin: 0!important;
        padding: 20px 0 0!important;
        background-color: unset!important;
        font-size: 14px!important;
        font-weight: 400!important;
        color: #000!important;
    }
    .swatchwrapper{
        grid-template-columns: repeat(1,1fr)!important;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input+label{
        display: flex!important;
        align-items:center!important;
        flex-direction:row!important;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input+label .swatch-price-wrapper{
        width: 50%!important;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input+label .swatch-size{
        flex-grow: 1;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input:checked+label{
        box-shadow: 0 0 0 2px #000000 !important;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input+label svg{
        fill:#fff!important;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input+label .checked{
        display:none;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input+label .unchecked{
        display:block;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input:checked+label .checked{
        display:block;
    }
    #shopify-section-product-template .product-detail .product-form .input-row .swatch input:checked+label .unchecked{
        display:none;
    }
    h1.title{
        text-align: left!important;
        margin: 16px 0!important;
    }
    #pay_widget{
        justify-content: flex-start!important;
    }
    .swatch-price-wrapper .swatch-discount{
        color: #000!important;
    }
    .attribute-badges-section{
        margin-bottom: 20px!important;
    }
    .attribute-badges-section{
        background: #FFF6F4;
        padding: 20px;
        border-radius: 8px;
    }
    .product-details-background-wrapper{
        background: none!important;
        border-radius: 8px;
        border-width: 1px!important;
    }
    @media (max-width:480px){
        .attribute-badges-section ul li{
            font-size: 12px!important;
        }
    }
</style>
`;

const labelCheckbox = `
<svg class="checked" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8.5" r="6" stroke="black" stroke-width="4"/>
</svg>
<svg class="unchecked" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="7.5" r="7" stroke="#C0C0C0"/>
</svg>
`;

const interval = setInterval(() => {
	const head = document.querySelector('head');
	const labels = [...document.querySelectorAll('.swatchwrapper label')];
	const price_wrap = document.querySelector('.product-price-wrapper');
	const title = document.querySelector('h1.title');
	const reviews = document.querySelector('.product-reviews-wrapper');
	if (
		head &&
		price_wrap &&
		title &&
		labels.length > 0 &&
		!document.querySelector('svg.checked')
	) {
		head.insertAdjacentHTML('beforeend', style);
		price_wrap.insertAdjacentElement('beforebegin', reviews);
		price_wrap.insertAdjacentElement('beforebegin', title);
		labels.map((label) =>
			label.insertAdjacentHTML('afterbegin', labelCheckbox)
		);
		clearInterval(interval);
	}
}, 10);
