const style = `
<style>
    .new-cus-area .icon-customize{
        display:none;
    }
    .new-cus-area .product-item-information-customize svg{
        width:16px;
        height:16px;
    }
    .new-cus-area .product-item-information-customize{
        display: flex;
        align-items: center;
        gap: 4px;
    }
</style>
`;

const new_elm_html = `
<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	height="24"
	width="24"
	viewBox="-5 -5 10 10"
    className='new-svg-elm'
>
	<defs>
		<path
			id="a"
			d="M2.991,0.815A3.1,3.1 0 0 0 2.991,-0.815L4.825,-1.311A5,5 0 0 1 4.825,1.311"
		></path>
	</defs>
	<use
		xlink:href="#a"
		fill="#fd5308"
	></use>
	<use
		xlink:href="#a"
		fill="#fe2712"
		transform="rotate(30)"
	></use>
	<use
		xlink:href="#a"
		fill="#a7194b"
		transform="rotate(60)"
	></use>
	<use
		xlink:href="#a"
		fill="#8601af"
		transform="rotate(90)"
	></use>
	<use
		xlink:href="#a"
		fill="#3d01a4"
		transform="rotate(120)"
	></use>
	<use
		xlink:href="#a"
		fill="#0247fe"
		transform="rotate(150)"
	></use>
	<use
		xlink:href="#a"
		fill="#0392ce"
		transform="rotate(180)"
	></use>
	<use
		xlink:href="#a"
		fill="#66b032"
		transform="rotate(210)"
	></use>
	<use
		xlink:href="#a"
		fill="#d0ea2b"
		transform="rotate(240)"
	></use>
	<use
		xlink:href="#a"
		fill="#fefe33"
		transform="rotate(270)"
	></use>
	<use
		xlink:href="#a"
		fill="#fabc02"
		transform="rotate(300)"
	></use>
	<use
		xlink:href="#a"
		fill="#fb9902"
		transform="rotate(330)"
	></use>
</svg>
`;

const interval = setInterval(() => {
	const exist_elm = [
		...document.querySelectorAll(
			'.price-final_price[data-product-id="291168"],.price-final_price[data-product-id="291169"],.price-final_price[data-product-id="291170"]'
		),
	];
	const head = document.querySelector('head');
	if (exist_elm.length > 0 && head && !document.querySelector('.new-svg-elm')) {
		try {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.map((item) => {
				const customize = item.closest('.product,.product-info-main');
				if (customize) {
					customize.classList.add('new-cus-area');
					const customize_btn =
						customize.querySelector('.icon-customize').parentNode;
					if (customize_btn) {
						customize_btn.insertAdjacentHTML('afterbegin', new_elm_html);
					}
				}
			});
		} catch (error) {}
		clearInterval(interval);
	}
}, 10);
