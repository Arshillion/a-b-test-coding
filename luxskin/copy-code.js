const style = `
<style>
.meta_save{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:4px;
    background: linear-gradient(90deg, #FEF8F3 0%, #FFE5D3 100%);
    border: 1px solid #FEF8F3;
}
.for_promo{
    display:none!important;
}
.for_only p{
    display: none!important;
}
.for_algn{
    margin: 0!important;
}
.copy-code{
    display: flex;
    align-items: center;
    gap: 6px;
}
span#price-off{
    background: none;
    padding:0;
}
.new-elm{
    display: grid;
    gap: 4px;
}
.new-elm strong{
    font-size: 14px;
    font-weight: 700;
    color: #0D0C22;
}
.copy-code span{
    color: #0D0C22;
    font-size: 14px;
    font-weight: 400;
}
.copy-code button{
    padding: 2px 6px;
    gap: 6px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
}
.copy-code button span{
    color: #0D0C22;
    font-size: 12px;
    font-weight: 600;
}
#ProductPrices{
    color: #FF437A;
    font-size: 24px;
    font-weight: 700;
}
@media only screen and (max-width:480px){
    .meta_save{
        padding: 10px;
    }
    .new-elm strong{
        font-size: 12px;
    }
    #ProductPrices{
        font-size: 18px;
    }
    .copy-code span{
        font-size: 10px;
    }
    .copy-code button{
        gap: 4px;
        padding: 2px 6px;
    }
    .copy-code button span{
        font-size: 10px;
    }
}
</style>
`;

const new_elm_html = `
<div class="new-elm">
    <strong>FLAT 20% OFF FOR TODAY!</strong>
    <div class="copy-code">
        <span>Use code: SKIN20</span>
        <button>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6663 5.83337C11.6663 5.05681 11.6663 4.66852 11.5395 4.36223C11.3703 3.95386 11.0458 3.6294 10.6375 3.46024C10.3312 3.33337 9.94292 3.33337 9.16634 3.33337H6.66634C5.09499 3.33337 4.30932 3.33337 3.82117 3.82153C3.33301 4.30968 3.33301 5.09536 3.33301 6.66671V9.16671C3.33301 9.94329 3.33301 10.3315 3.45987 10.6379C3.62903 11.0462 3.95349 11.3707 4.36187 11.5399C4.66816 11.6667 5.05644 11.6667 5.83301 11.6667" stroke="#0D0C22" stroke-width="1.4"/>
                <path d="M14.9997 8.33337H9.99967C9.07917 8.33337 8.33301 9.07954 8.33301 10V15C8.33301 15.9205 9.07917 16.6667 9.99967 16.6667H14.9997C15.9202 16.6667 16.6663 15.9205 16.6663 15V10C16.6663 9.07954 15.9202 8.33337 14.9997 8.33337Z" stroke="#0D0C22" stroke-width="1.4"/>
            </svg>
            <span>Copy Code</span>        
        </button>
    </div>
</div>
`;

const interval = setInterval(() => {
	const product_meta = document.querySelector('.product-single__meta');
	const meta_save = document.querySelector('.meta_save');
	const price_elm = document.querySelector('.meta_save #price-off');
	const head = document.querySelector('head');
	if (
		product_meta &&
		meta_save &&
		price_elm &&
		head &&
		!document.querySelector('.new-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		price_elm.innerHTML = new_elm_html;
		product_meta.insertAdjacentElement('afterbegin', meta_save);
		clearInterval(interval);
	}
}, 10);

const copy_interval = setInterval(() => {
	const copy_text = 'SKIN20';
	const copy_code = document.querySelector('.copy-code button');
	const copy_code_span = document.querySelector('.copy-code button span');
	const copy_code_svg = document.querySelector('.copy-code button svg');
	if (copy_code_span && copy_code) {
		copy_code.addEventListener('click', () => {
			navigator.clipboard.writeText(copy_text);
			copy_code_span.innerHTML = 'Copied!';
			copy_code_svg.style.display = 'none';
			setTimeout(() => {
				copy_code_span.innerHTML = 'Copy Code';
				copy_code_svg.style.display = 'block';
			}, 2500);
		});
		clearInterval(copy_interval);
	}
}, 10);
