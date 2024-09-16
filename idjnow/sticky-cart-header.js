const style_elm = `
<style>
	.float-area-message{
		display: none;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 0 20px;
	}
	.float-area-message strong{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: bold;
        font-size: 20px;
	}
	.float-area-message .price{
        color: #b71f36;
        font-weight: bold;
        font-size: 20px;
	}
	.float-area-message .rev{
        display: none;
	}
    .new-float-btn{
        position: fixed;
        display: grid;
        align-items: center;
        justify-content: space-around;
        background: #fff;
        border-bottom: 2px solid #ececec;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        padding: 10px 20px;
    }
    .new-float-btn button{
        width: 100%;
		border: none;
    }
	@media only screen and (max-width:767px){
        .float-area-message button{
            font-size: 16px;
        }
        .float-area-message strong{
            font-size: 16px;
        }
        .float-area-message .price{
            font-size: 16px;
        }
	}
</style>
`;

const rev_html = (name, stars, price) => `
<div class="float-area-message">
	<div>
        <strong>${name}</strong>
        <div class="rev">${stars.outerHTML}</div>
        <span class="price">${price}</span>
    </div>
    <button onclick="document.querySelector('#product-addtocart-button').click()" type="button">Add to Cart</button>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#maincontent');
	const stars = document.querySelector('.yotpo-stars').cloneNode(true);
	const prod_name = document.querySelector('.page-title');
	const price = document.querySelector('.price-wrapper .price');
	const head = document.querySelector('head');

	if (
		head &&
		main &&
		stars &&
		prod_name &&
		price &&
		!document.querySelector('.float-area-message')
	) {
		head.insertAdjacentHTML('beforeend', style_elm);
		main.insertAdjacentHTML(
			'afterend',
			rev_html(prod_name.innerHTML, stars, price.innerHTML)
		);
		clearInterval(interval);
	}
}, 10);

window.addEventListener('scroll', function () {
	const btn_area = document.querySelector('.action.primary.tocart');
	const float_area = document.querySelector('.float-area-message');
	const topOffset = btn_area.getBoundingClientRect().bottom;
	if (float_area) {
		if (topOffset <= 0) {
			float_area.classList.add('new-float-btn');
		} else {
			float_area.classList.remove('new-float-btn');
		}
	}
});
