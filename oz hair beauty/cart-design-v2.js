const style = `
<style>
.SidebarLayout_container__fGitD .style_container__2w1Ui .flex-1 .text-xs.font-semibold{
    color: #9440EC;
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
    margin-bottom: 6px;
	display: none!important;
}

.SidebarLayout_container__fGitD .style_container__2w1Ui .flex-1 .text-sm{
    color: #0D0C22;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
}

.SidebarLayout_container__fGitD .style_container__2w1Ui .flex-1 .mt-1{
    display: none;
}

.SidebarLayout_container__fGitD .style_container__2w1Ui .cursor-pointer.underline.underline-offset-2{
	font-size: 14px;
    font-weight: 300;
    line-height: 14px;
    text-align: left;
    color: #A5A5A5;
    border: 1px solid!important;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    text-decoration: none;
}

.new-price-elm{
    color: #0D0C22;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 20px;
}

.price-elm{
    align-self: center;
	display: flex;
    flex-direction: column;
    align-items: center;
}

.slow-price{
    color: #0D0C22;
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
}

#sidebar-footer .mx-auto.mt-4{
    max-width: 100%!important;
}

#sidebar-footer .mx-auto.mt-4 button{
    border-radius: 8px!important;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
}

#sidebar-footer .py-4{
    padding: 30px!important;
}

#sidebar-footer .text-base .mt-2.text-right.text-primary{
    color: #009E6E;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
}

#sidebar-footer .text-base div span:first-child{
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #0D0C22; 
}

#sidebar-footer .text-base span:last-child{
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: #0D0C22;
}

.new-like-elm{
    padding: 20px;
    background: #FAF4FF;
}
.new-like-elm h4{
    margin-bottom: 16px;
    color: #0D0C22;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
}
.new-like-elm .side-products{
    flex-direction: row!important;
    overflow: auto;
}
.new-like-elm .side-products > div{
    width: 320px!important;
    flex-shrink: 0;
    background: #FFFFFF;
    border: 1px solid #ECE4F4;
    width: 220px;
    border-radius: 4px;
    padding:10px;
}
.new-like-elm .side-products::-webkit-scrollbar{
    display: none!important;
}
.Sidebar_sidebar__leoJc .absolute.flex.h-screen.flex-col.bg-white{
    display: none!important;
}
.new-like-elm .side-products > div .flex-grow .text-xs.font-semibold{
    display: none!important;
}
.new-like-elm .side-products > div .flex-grow .hideZeroData{
    display: none!important;
}
.new-like-elm .side-products > div .flex-grow button.mt-1.hidden.text-sm{
    display: none!important;
}
.new-like-elm .side-products > div .flex-grow{
    position: relative!important;
}
.side-products .live-cart{
    position: absolute;
    bottom: 0;
    right: 0;
    width: max-content;
}
.side-products div > div{
    background: none!important;
    padding: 0!important;
    border: none!important;
}
.side-products .mt-2.flex.gap-4.text-base div{
    color: #0D0C22;
    font-size: 12px;
    font-weight: 300;
    line-height: 12px;
}
.side-products .mt-1.text-xs a{
    color: #0D0C22;
    font-size: 12px;
    font-weight: 500;
    line-height: 16.8px;
}
</style>
`;

const new_elm_html = (price) => `
<div class="new-price-elm">
    ${price}
</div>
`;

const new_like_html = `
<h4 class="new-h4-elm">you may also like</h4>
`;

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const sideInterval = setInterval(() => {
	try {
		const sideProduct = document.querySelector(
			'.Sidebar_sidebar__leoJc .ozscroll .flex'
		);
		const sidebarContainer = document.querySelector(
			'.SidebarLayout_container__fGitD'
		);
		const sideProducts = document.querySelectorAll(
			'.Sidebar_sidebar__leoJc .ozscroll .flex > div'
		);
		if (
			sideProduct &&
			sidebarContainer &&
			!document.querySelector('.new-h4-elm')
		) {
			sideProducts.forEach((item) => {
				if (!item.querySelector('.live-cart')) {
					const button = item.querySelector(
						'.cursor-pointer.rounded.border.border-primary.bg-primary.text-center.text-white.duration-200'
					);
					const prodArea = item.querySelector('.flex-grow');
					if (button && prodArea) {
						button.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white"/>
                        <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#9440EC"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13V18H13V13H18V11H13V6H11V11H6V13H11Z" fill="#9440EC"/>
                        </svg>
                        `;
						const buttonParent =
							item.querySelector(
								'.cursor-pointer.rounded.border.border-primary.bg-primary.text-center.text-white.duration-200'
							)?.parentNode?.parentNode ?? null;
						if (buttonParent) {
							buttonParent.classList.add('live-cart');
							prodArea.insertAdjacentElement('beforeend', buttonParent);
						}
					}
				}
			});
			const liveDiv = document.createElement('div');
			liveDiv.classList.add('new-like-elm');
			sideProduct.classList.add('side-products');
			liveDiv.insertAdjacentElement('afterbegin', sideProduct);
			liveDiv.insertAdjacentHTML('afterbegin', new_like_html);
			sidebarContainer.insertAdjacentElement('beforeend', liveDiv);
			clearInterval(sideInterval);
		}
	} catch (error) {
		console.log('error1', error);
	}
}, 10);

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ''));
};

let oldSubTotal;
const subInterval = setInterval(() => {
	try {
		const exist_elms = document.querySelectorAll(
			'.SidebarLayout_container__fGitD .style_container__2w1Ui'
		);
		const subTotal = document.querySelector(
			'#sidebar-footer .text-base span:last-child'
		);
		if (subTotal) {
			const subTotalPrice = numberOnly(subTotal.innerText);
			if (exist_elms.length > 0 && subTotalPrice !== oldSubTotal) {
				oldSubTotal = subTotalPrice;
				exist_elms.forEach((item) => {
					const price = item.querySelector('.mt-3.text-xs span.font-bold');
					if (item.querySelector('.price-elm')) {
						const newPrice = item.querySelector('.new-price-elm');
						console.log('newPrice', newPrice);
						newPrice.innerText = price.innerText;
					} else {
						const removeItem = item.querySelector(
							'.cursor-pointer.underline.underline-offset-2'
						);
						const info = item.querySelector('.flex-1');
						price.classList.add('slow-price');
						const newDiv = document.createElement('div');
						newDiv.classList.add('price-elm');
						if (removeItem) {
							removeItem.innerText = 'X';
							newDiv.insertAdjacentElement('beforeend', removeItem);
						}
						newDiv.insertAdjacentHTML(
							'beforeend',
							new_elm_html(price.innerText)
						);
						info.insertAdjacentElement('afterend', newDiv);
					}
				});
			}
		}
	} catch (error) {
		console.log('error2', error);
	}
}, 10);
