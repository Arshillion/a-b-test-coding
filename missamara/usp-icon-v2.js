const returnIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2697_288)">
<path d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.1675 14.8325 1.25 10 1.25C5.1675 1.25 1.25 5.1675 1.25 10C1.25 14.8325 5.1675 18.75 10 18.75Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10"/>
<path d="M6.02344 6.0249H12.3818C13.226 6.0249 14.0357 6.36029 14.6327 6.95728C15.2297 7.55427 15.5651 8.36396 15.5651 9.20824C15.5629 10.0511 15.2265 10.8586 14.6298 11.4538C14.033 12.049 13.2246 12.3832 12.3818 12.3832H6.02344" stroke="black" stroke-width="1.4" stroke-miterlimit="10"/>
<path d="M9.19844 15.5666L6.02344 12.3833L9.19844 9.19995" stroke="black" stroke-width="1.4" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_2697_288">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const checkedIcon = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2697_295)">
<path d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM12.03 4.97C11.9586 4.89882 11.8735 4.84277 11.7799 4.80522C11.6863 4.76766 11.5861 4.74936 11.4853 4.75141C11.3845 4.75347 11.2851 4.77583 11.1932 4.81717C11.1012 4.85851 11.0185 4.91797 10.95 4.992L7.477 9.417L5.384 7.323C5.24183 7.19052 5.05378 7.1184 4.85948 7.12183C4.66518 7.12525 4.47979 7.20397 4.34238 7.34138C4.20497 7.47879 4.12625 7.66418 4.12283 7.85848C4.1194 8.05278 4.19152 8.24083 4.324 8.383L6.97 11.03C7.04128 11.1012 7.12616 11.1572 7.21958 11.1949C7.313 11.2325 7.41305 11.2509 7.51375 11.2491C7.61444 11.2472 7.71374 11.2251 7.8057 11.184C7.89766 11.1429 7.9804 11.0837 8.049 11.01L12.041 6.02C12.1771 5.8785 12.2523 5.68928 12.2504 5.49296C12.2485 5.29664 12.1698 5.10888 12.031 4.97H12.03Z" fill="#00A355"/>
</g>
<defs>
<clipPath id="clip0_2697_295">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const style = `
<style>
.return-product-cta h1 svg,.free-shipping-cta h1 svg{
    width: 18px;
    height: 18px;
}
.return-product-cta h1 svg{
    fill: #fff!important;
}
.return-product-cta h1 svg g{
    fill: #fff!important;
}
#main-product-detail .return-product-cta h1,#main-product-detail .free-shipping-cta h1{
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: flex-start;
    font-size: 14px!important;
    font-weight: 700!important;
    line-height: 16px;
    color: #333333;
    margin-bottom: 2px!important;
}
#main-product-detail .return-product-cta p,#main-product-detail .free-shipping-cta #dispatch_info{
    color: #878787;
    font-size: 12px!important;
    font-weight: 600;
    line-height: 14px;
    text-align: left!important;
    margin-left: 22px;
}
</style>
`;

const interval = setInterval(() => {
	const returnItem = document.querySelector('button.return-product-cta');
	const freeShipping = document.querySelector('a.free-shipping-cta');
	const head = document.querySelector('head');
	if (returnItem && freeShipping && head) {
		head.insertAdjacentHTML('beforeend', style);
		returnItem.querySelector('h1').innerHTML = `${returnIcon} Don't like it?`;
		returnItem.querySelector('p').innerText = `Return it free`;
		freeShipping.querySelector(
			'h1'
		).innerHTML = `${checkedIcon} Ready for fast shipping`;
		freeShipping.querySelector(
			'#dispatch_info'
		).innerText = ` `;
		clearInterval(interval);
	}
}, 10);
