const star_svg = `
<svg width="99" height="18" viewBox="0 0 99 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 0L12.1292 5.38127L18.0595 6.21885L13.7541 10.3822L14.7901 16.2812L9.5 13.473L4.20993 16.2812L5.24592 10.3822L0.940492 6.21885L6.87084 5.38127L9.5 0Z" fill="#FF9E0D"/>
    <path d="M29.5 0L32.1292 5.38127L38.0595 6.21885L33.7541 10.3822L34.7901 16.2812L29.5 13.473L24.2099 16.2812L25.2459 10.3822L20.9405 6.21885L26.8708 5.38127L29.5 0Z" fill="#FF9E0D"/>
    <path d="M49.5 0L52.1292 5.38127L58.0595 6.21885L53.7541 10.3822L54.7901 16.2812L49.5 13.473L44.2099 16.2812L45.2459 10.3822L40.9405 6.21885L46.8708 5.38127L49.5 0Z" fill="#FF9E0D"/>
    <path d="M69.5 0L72.1292 5.38127L78.0595 6.21885L73.7541 10.3822L74.7901 16.2812L69.5 13.473L64.2099 16.2812L65.2459 10.3822L60.9405 6.21885L66.8708 5.38127L69.5 0Z" fill="#FF9E0D"/>
    <path d="M89.5 0L92.1292 5.38127L98.0595 6.21885L93.7541 10.3822L94.7901 16.2812L89.5 13.473L84.2099 16.2812L85.2459 10.3822L80.9405 6.21885L86.8708 5.38127L89.5 0Z" fill="#FF9E0D"/>
</svg>
`;

const style = `
<style>
    .new-usp-elm ~ .mt-4.flex.justify-center.gap-3{
        display: none!important;
    }
    .new-usp-elm{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 20px 0;
        gap:6px;
    }
    .new-usp-elm .single-rev{
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        place-content: center;
        gap:2px 6px;
    }
    .new-usp-elm .single-rev svg{
        grid-row: span 2;
    }
    .new-usp-elm .single-rev strong{
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        text-align: left;
        color: #3D3D4E;
        letter-spacing: 0px;
    }
    .new-usp-elm .single-rev span{
        font-size: 10px;
        font-weight: 300;
        line-height: 12px;
        text-align: left;
        color: #3D3D4E;
        letter-spacing: 0px;
    }

    .float-cart{
        background: #F9F2FF;
		padding: 12px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
        gap: 60px;
		position: fixed;
		bottom: -200px;
		left: 0;
		right: 0;
        transition: 1s;
		z-index: 99;
    }

    .float-cart .product-info{
        display: grid;
        gap: 8px;
    }

    .float-cart .product-info h6{
        color: #3D3D4E;
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    }

    .float-cart .product-info .product-rating{
        display: flex;
        gap:16px;
        align-items: center;
    }

    .float-cart .product-info .product-rating strong{
        font-size: 15px;
        font-weight: 700;
        line-height: 28px;
        text-align: left;
    }

    .float-cart .product-info .product-rating span{
        color: #4B5563;
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        text-align: left;
        text-decoration: underline;
    }

    .float-cart button{
        background: #9747FF;
        padding: 12px 48px;
        border-radius: 4px;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        text-align: center;
        color: white;
        flex-shrink: 0;
    }
	
	.mob-product-rating{
		display: none;
	}

    @media only screen and (max-width:767px){
        .float-cart{
            padding: 12px;
            gap: 20px;
        }
    
        .float-cart .product-info{
            display: grid;
            gap: 4px;
        }
    
        .float-cart .product-info h6{
            font-size: 16px;
            line-height: 16px;
        }
    
        .float-cart .product-info .product-rating{
            gap:8px;
        }
    
        .float-cart .product-info .product-rating strong{
            font-size: 12px;
            line-height: 16px;
        }
    
        .float-cart .product-info .product-rating span{
            font-size: 10px;
            line-height: 16px;
        }
    
        .float-cart button{
            font-size: 12px;
            line-height: 12px;
            padding: 12px 36px;
        }
    }

    @media only screen and (max-width:480px){
        .new-usp-elm .single-rev strong{
            font-size: 10px;
            line-height: 11px;
        }
        .new-usp-elm .single-rev span{
            font-size: 8px;
            line-height: 9px;
        }
        .float-cart{
            padding: 12px 6px;
			flex-direction: column;
            gap: 10px;
        }
    
        .float-cart .product-info h6{
            font-size: 14px;
            line-height: 14px;
            text-align: center;
        }
    
        .float-cart .product-info .product-rating{
            gap:0 4px;
            flex-wrap: wrap;
            justify-content: center;
        }
    
        .float-cart .product-info .product-rating strong{
            font-size: 10px;
            line-height: 14px;
        }
    
        .float-cart .product-info .product-rating span{
            font-size: 8px;
            line-height: 14px;
        }
		
        .float-cart button{
            font-size: 10px;
            line-height: 10px;
            padding: 12px 24px;
			width: 100%;
        }
		.float-cart .product-info{
            display: none;
        }
		.mob-product-rating{
			display: flex;
			align-items: center;
            justify-content: center;
			gap:0 4px;
		}
		.mob-product-rating strong{
			display: flex;
			line-height: 14px;
		}
    }
</style>
`;

const new_elm_html = `
<div class="new-usp-elm">
	<div class="single-rev">
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_2506_168)">
				<path
					d="M7 20.9871V10.9684L15.0042 6L23 10.9684V20.9871L15.0042 26L7 20.9871Z"
					fill="#E6CEFF"
				/>
				<path
					d="M8.87613 5.08576C12 2.50033 17 2.0002 20.5 4.00033C23.7704 5.86934 25.5 9 25.5 12.0003"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M12.037 6.78567L8.87627 5.08632L10.2884 1.78691"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M13 28L21 23.3294V14L13 18.6706V28Z"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M13 28L6 23.3285V14L13 18.6706V28Z"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M21 13.9763L13.502 9L6 13.9763L13.502 19L21 13.9763Z"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2506_168">
					<rect
						width="30"
						height="30"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
		<strong>FREE RETURNS</strong>
		<span>140 day returns</span>
	</div>
	<div class="single-rev">
		<svg
			width="39"
			height="29"
			viewBox="0 0 39 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_2506_156)">
				<path
					d="M37.9665 18.6955C37.9489 18.1824 37.8235 17.679 37.5987 17.2195C36.5145 15.159 35.3733 13.1248 34.2633 11.0765C34.2082 10.9612 34.1193 10.8661 34.009 10.8043C33.8987 10.7424 33.7724 10.7168 33.6472 10.7309C32.3901 10.7412 31.1331 10.7309 29.8769 10.7309H29.1881V5H8V7.66081L8.00828 17.7561V22.0503C8.11127 22.0578 8.22714 22.0719 8.34209 22.0728C9.7325 22.0728 12.8389 22.0681 14.2274 22.0794C14.1712 22.2845 14.143 22.4967 14.1437 22.7097C14.1443 23.0322 14.2127 23.3508 14.3445 23.6441C14.4762 23.9373 14.6683 24.1984 14.9075 24.4096C15.1468 24.6208 15.4279 24.7773 15.7316 24.8684C16.0353 24.9596 16.3547 24.9833 16.6683 24.938C16.9818 24.8926 17.2821 24.7793 17.5489 24.6057C17.8158 24.4321 18.0429 24.2021 18.215 23.9314C18.3872 23.6607 18.5003 23.3556 18.5467 23.0366C18.5931 22.7175 18.5718 22.3921 18.4842 22.0822C21.4121 22.0691 25.9834 22.0737 28.9104 22.0728C28.9886 22.0728 29.0677 22.0606 29.1863 22.0513V22.0766C29.3509 22.0766 31.259 22.0616 31.3933 22.0766H31.4089C31.3155 22.3871 31.2888 22.7146 31.3308 23.0366C31.3727 23.3586 31.4824 23.6676 31.6521 23.9426C31.8219 24.2176 32.0479 24.4521 32.3147 24.6302C32.5815 24.8082 32.8828 24.9256 33.1981 24.9744C33.5134 25.0231 33.8354 25.0021 34.142 24.9128C34.4487 24.8234 34.7328 24.6678 34.9751 24.4565C35.2174 24.2453 35.4121 23.9833 35.546 23.6885C35.68 23.3937 35.7499 23.0729 35.7512 22.7481C35.7514 22.5201 35.7204 22.2931 35.6593 22.0737C35.8432 22.055 37.7623 22.0737 37.9876 22.0737C37.9876 20.9208 38.0244 19.8054 37.9711 18.6955"
					fill="#E6CEFF"
				/>
				<path
					d="M33.6075 24C33.7945 23.9803 35.7579 24 35.987 24C35.987 22.7802 36.0254 21.6018 35.9702 20.4273C35.953 19.8846 35.8254 19.352 35.5962 18.8657C34.4882 16.6842 33.3223 14.5363 32.1873 12.3696C32.1309 12.2476 32.0401 12.1469 31.9272 12.0815C31.8144 12.016 31.6851 11.989 31.5571 12.0041C30.2724 12.0149 27 12.0041 27 12.0041V24H29.2514"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M17.402 24L27 23.9948V5H8V7.95991"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8 19V23.9666L11 24"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8 19L3 19"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M6 9H0"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M10 12H3"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M5.58914 15.9756H1.54997"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M10.5236 24.7398C10.5254 25.2263 10.6669 25.7014 10.9303 26.1048C11.1936 26.5083 11.5671 26.822 12.0032 27.0064C12.4394 27.1908 12.9188 27.2374 13.3807 27.1405C13.8426 27.0436 14.2663 26.8075 14.5981 26.462C14.9299 26.1165 15.155 25.6771 15.2449 25.1996C15.3348 24.722 15.2854 24.2276 15.103 23.779C14.9206 23.3304 14.6134 22.9477 14.2202 22.6794C13.8271 22.411 13.3656 22.2691 12.8943 22.2715C12.5815 22.2726 12.272 22.3373 11.9835 22.462C11.695 22.5867 11.4332 22.7689 11.2129 22.9981C10.9927 23.2274 10.8185 23.4992 10.7002 23.7981C10.5819 24.097 10.5219 24.417 10.5236 24.7398Z"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M33.7767 24.7858C33.7767 24.2997 33.6371 23.8246 33.3756 23.4203C33.1141 23.0161 32.7424 22.7009 32.3075 22.5145C31.8725 22.3282 31.3938 22.2791 30.9318 22.3734C30.4699 22.4677 30.0453 22.7012 29.7119 23.0444C29.3784 23.3876 29.1509 23.8251 29.0582 24.3017C28.9655 24.7783 29.0117 25.2725 29.191 25.722C29.3703 26.1714 29.6746 26.556 30.0655 26.8271C30.4564 27.0982 30.9163 27.2436 31.3872 27.245C31.7011 27.2474 32.0123 27.1855 32.3028 27.0629C32.5933 26.9402 32.8573 26.7593 33.0796 26.5306C33.3019 26.3018 33.4779 26.0298 33.5976 25.7303C33.7172 25.4308 33.7781 25.1098 33.7767 24.7858Z"
					stroke="#3D3D4E"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2506_156">
					<rect
						width="39"
						height="28"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
		<strong>FREE & FAST DELIVERY</strong>
		<span>Free Shipping Over $49</span>
	</div>
	<div class="single-rev">
		<svg
			width="32"
			height="30"
			viewBox="0 0 32 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_2506_179)">
				<path
					d="M17.5358 0L20.7833 9.99458H31.2922L22.7903 16.1716L26.0377 26.1661L17.5358 19.9892L9.03393 26.1661L12.2814 16.1716L3.77947 9.99458H14.2884L17.5358 0Z"
					fill="#E6CEFF"
				/>
				<path
					d="M14.4643 2.68932L17.2362 11.2204L17.3484 11.5659H17.7117H26.6818L19.4249 16.8383L19.131 17.0519L19.2432 17.3974L22.0151 25.9284L14.7582 20.6559L14.4643 20.4424L14.1704 20.6559L6.91345 25.9284L9.68536 17.3974L9.79761 17.0519L9.50372 16.8383L2.24677 11.5659H11.2169H11.5801L11.6924 11.2204L14.4643 2.68932Z"
					stroke="#3D3D4E"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2506_179">
					<rect
						width="31.0714"
						height="30"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
		<strong>90k+ Reviews</strong>
		<span>95% 5-star reviews</span>
	</div>
</div>
`;

const float_elm_html = (title, rating) => `
<div class="float-cart">
    <div class="product-info">
        <h6>${title}</h6>
        <div class="product-rating">
            <strong>${rating}/5.0</strong>
            ${star_svg}
            <span>Over 14,000+ satisfied customers love</span>
        </div>
    </div>
    <button onclick="document.querySelector('.AddToCart_btn-add-to-cart___RRI8.button').click()">ADD TO CART</button>
	<div class="mob-product-rating">
            <strong>${rating}/5.0</strong>
            ${star_svg}
    </div>
</div>
`;

const sec_interval = setInterval(() => {
	const width = window.innerWidth;
	const product_area = document.querySelector(
		'.ProductInformation_container__V6QIL > div'
	);
	const img_area = document.querySelector(
		'.flex.justify-center.gap-8'
	).parentNode;
	if (width < 768 && product_area && img_area) {
		product_area.insertAdjacentElement('afterbegin', img_area);
		clearInterval(sec_interval);
	}
}, 10);

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#product-detail-action');
	const head = document.querySelector('head');
	const body = document.querySelector('body');
	const rating = document.querySelector("[itemprop='ratingValue']");
	const title = document.querySelector('h1.Title_title__rAIlq');
	if (
		exist_elm &&
		title &&
		rating &&
		body &&
		head &&
		!document.querySelector('.new-usp-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		body.insertAdjacentHTML(
			'beforeend',
			float_elm_html(title.innerText, rating.innerText)
		);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);

window.addEventListener('scroll', function () {
	const float = document.querySelector('.float-cart');
	const exist = document.querySelector(
		'.AddToCart_btn-add-to-cart___RRI8.button'
	);
	if (float && exist) {
		const topOffset = exist.getBoundingClientRect().bottom;
		if (topOffset <= 0) {
			float.style.bottom = '0';
		} else {
			float.style.bottom = '-200px';
		}
	}
});
