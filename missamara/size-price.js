const style = `
<style>
    .swatchwrapper{
        grid-template-columns: repeat(2, 1fr)!important;
    }
    .product-detail .product-form .input-row .swatch-element label {
        border-radius: 6px!important;
        box-shadow: 0 0 0 1px #CACACA;
        background: #FFF;
        color: #000;
        display: flex;
        flex-direction: column;
        padding:12px!important;
        align-items: flex-start;
        gap:4px;

    }
    .product-detail .product-form .input-row .swatch-element label:hover {
        background: #FFF;
        box-shadow: 0 0 0 2px #F4AC96;
        color: #000;
    }
    .product-detail .product-form .input-row .swatch-element label span.price {
        border-radius: 4px;
        background: #EBEBEB;
        padding: 4px 10px;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .product-detail .product-form .input-row .swatch-element label span.size {
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .product-detail .product-form .input-row .swatch input:checked + label{
        background: #FFF;
        box-shadow: 0 0 0 2px #F4AC96;
        color: #000;
    }
</style>
`;

const int = setInterval(() => {
	const sizes = [...document.querySelectorAll('.singleoption-selector')];
	const head = document.querySelector('head');
	if (sizes.length > 0 && head) {
		head.insertAdjacentHTML('beforeend', style);
		sizes.map((size) => {
			const price = size.getAttribute('prod-price');
			const label = size.querySelector('label');
			if (price && label) {
				const label_text = label.innerText;
				label.innerHTML = `<span class="size">${label_text}</span><span class="price">${price}</span>`;
			}
		});
		clearInterval(int);
	}
}, 10);
