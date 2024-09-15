const style = `
<style>
    .new-cus-area .icon-customize{
        display:none;
    }
    .new-cus-area .product-item-information-customize img{
        width:16px;
        height:16px;
    }
    .new-cus-area .product-item-information-customize{
        display: flex;
        align-items: center;
        gap: 4px;
    }
	.custom-product-choice-button img.new-img-elm{
		width:26px;
        height:26px;
	}
</style>
`;

const new_elm_html = `
<img class='new-img-elm' src="https://i.ibb.co/7WyKZzm/custom-wrench.png">
`;

const interval = setInterval(() => {
	const exist_elm = [
		...document.querySelectorAll(
			'.price-final_price[data-product-id="291168"],.price-final_price[data-product-id="291169"],.price-final_price[data-product-id="291170"]'
		),
	];
	const head = document.querySelector('head');
	if (exist_elm.length > 0 && head && !document.querySelector('.new-img-elm')) {
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
