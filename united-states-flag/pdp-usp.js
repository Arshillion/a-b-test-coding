const style = `
<style>
   .promo.promo-badge-left {
        max-width: 160px;
   }
   .productView-img-container .promo{
        margin:12px 16px;
   }
   .productView-options{
        margin-bottom:10px;
   }
   .productView-options .form{
        display:flex;
        flex-wrap:wrap;
   }
   .productView-options .availability{
        width:100%;
        margin-bottom:16px;
   }
   .form-field.form-field--increments.productView-price--wrapper{
        margin: 0;
        width: 30%;
   }
   .productView-options .ols--product-checkout{
        display:none;
   }
   .productView-options .form-action{
        margin:0;
        width:70%;
   }
   .form-field.form-field--increments.productView-price--wrapper .form-label.form-label--alternate{
        display:none;
   }
   .form-field.form-field--increments.productView-price--wrapper .form-increment{
        display:flex;
   }
   .form-field.form-field--increments.productView-price--wrapper .form-increment button{
        width:40px;
        height:48px;
        border-radius:0;
        border: 1px solid #E9E9E9;
        background: #FFF;
    }
   .form-field.form-field--increments.productView-price--wrapper .form-increment input{
        width:50px;
        height:48px;
        margin:0;
        border-radius:0;
        border: 1px solid #E9E9E9;
        border-left:0;
        border-right:0;
        background: #FFF;
   }
   .productView-options .form-action input{
        width:calc(100% - 10px)!important;
        margin:0!important;
        margin-left:10px!important;
        height: 48px;
        border-radius: 4px;
        background: #0C0A3A;
   }
   .usp{
        display: flex;
        justify-content: space-between;
        align-items:center;
        gap:4px;
   }
   .usp div{
        display: flex;
        align-items:center;
        gap:2px;
   }
   .usp span{
        color: #4D4D4D;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: capitalize;
   }
   .productView-short-description ul li{
        color: #111827;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        display:flex;
        align-items:center;
        gap:4px;
   }
   .productView-short-description ul li::before{
        display:none;
   }
   .productView-short-description ul li svg{
        flex-shrink :0;
   }
   .productView-info {
        display:flex;
        align-items:center;
   }
   .productView-info .productView-info-name{
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
   }
   .productView-info .productView-info-value{
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
   }
   #product-sku{
        margin-right:10px;
   }
   .price.price--withoutTax{
        color: #B40000;
        font-family: Roboto;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .productView-price{
        font-size:0;
        margin:0;
    }
    .productView-title{
        color: #000;
        font-family: Roboto;
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin:12px 0;
        text-align: left;
    }
    .productView-short-description{
        margin-top:0;
    }
    @media only screen and (max-width:1400px){
        .usp span{
            font-size: 12px;
        }
        .usp svg{
            font-size: 16px;
        }
    }
    @media only screen and (max-width:1199px) and (min-width:801px){
        .productView-details{
            padding-left:0!important;
        }
    }
    @media only screen and (max-width:1199px) and (min-width:992px){
        .form-field.form-field--increments.productView-price--wrapper .form-increment button{
            width:30px;
        }
       .form-field.form-field--increments.productView-price--wrapper .form-increment input{
            width:30px;
       }
    }
</style>
`;
const right_promo_html = `<img class="promo promo-badge-left" src="https://i.ibb.co/v3QS9hh/am-flag-seen.png">`;
const usp_html = `
<div class="usp">
	<div>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.4898 7.52002C20.4841 7.49366 20.4841 7.46638 20.4898 7.44002C20.485 7.41694 20.485 7.3931 20.4898 7.37002V7.28002L20.4298 7.13002C20.4054 7.08909 20.3751 7.05202 20.3398 7.02002L20.2498 6.94002H20.1998L16.2598 4.45002L12.5398 2.15002C12.4538 2.08175 12.3553 2.03081 12.2498 2.00002H12.1698C12.0804 1.9851 11.9892 1.9851 11.8998 2.00002H11.7998C11.6837 2.02571 11.5723 2.06959 11.4698 2.13002L3.99982 6.78002L3.90982 6.85002L3.81982 6.93002L3.71982 7.00002L3.66982 7.06002L3.60982 7.21002V7.30002V7.36002C3.60011 7.42633 3.60011 7.49371 3.60982 7.56002V16.29C3.60948 16.46 3.65246 16.6272 3.7347 16.7759C3.81693 16.9246 3.93571 17.0499 4.07982 17.14L11.5798 21.78L11.7298 21.84H11.8098C11.979 21.8937 12.1606 21.8937 12.3298 21.84H12.4098L12.5598 21.78L19.9998 17.21C20.1439 17.1199 20.2627 16.9946 20.345 16.8459C20.4272 16.6972 20.4702 16.53 20.4698 16.36V7.63002C20.4698 7.63002 20.4898 7.56002 20.4898 7.52002ZM11.9998 4.17002L13.7798 5.27002L8.18982 8.73002L6.39982 7.63002L11.9998 4.17002ZM10.9998 19.17L5.49982 15.81V9.42002L10.9998 12.82V19.17ZM11.9998 11.06L10.0898 9.91002L15.6798 6.44002L17.5998 7.63002L11.9998 11.06ZM18.4998 15.78L12.9998 19.2V12.82L18.4998 9.42002V15.78Z"
				fill="black"
			/>
		</svg>
		<span>14 day returns</span>
	</div>
    <svg width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.25" y1="2.18557e-08" x2="1.25" y2="20" stroke="#4D4D4D"/>
    </svg>
	<div>
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_40_140)">
				<path
					d="M11.5 2L18.798 4.28C19.0015 4.34354 19.1794 4.47048 19.3057 4.64229C19.432 4.81409 19.5001 5.02177 19.5 5.235V7H21.5C21.7652 7 22.0196 7.10536 22.2071 7.29289C22.3946 7.48043 22.5 7.73478 22.5 8V16C22.5 16.2652 22.3946 16.5196 22.2071 16.7071C22.0196 16.8946 21.7652 17 21.5 17L18.28 17.001C17.893 17.511 17.423 17.961 16.88 18.331L11.5 22L6.12 18.332C5.31252 17.7815 4.65175 17.042 4.19514 16.1779C3.73853 15.3138 3.4999 14.3513 3.5 13.374V5.235C3.50012 5.02194 3.56829 4.81449 3.69456 4.64289C3.82084 4.47128 3.99862 4.34449 4.202 4.281L11.5 2ZM11.5 4.094L5.5 5.97V13.374C5.49986 13.9862 5.64025 14.5903 5.91036 15.1397C6.18048 15.6892 6.57311 16.1692 7.058 16.543L7.247 16.679L11.5 19.58L15.282 17H10.5C10.2348 17 9.98043 16.8946 9.79289 16.7071C9.60536 16.5196 9.5 16.2652 9.5 16V8C9.5 7.73478 9.60536 7.48043 9.79289 7.29289C9.98043 7.10536 10.2348 7 10.5 7H17.5V5.97L11.5 4.094ZM11.5 12V15H20.5V12H11.5ZM11.5 10H20.5V9H11.5V10Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_40_140">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
		<span>secure payments</span>
	</div>
    <svg width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.25" y1="2.18557e-08" x2="1.25" y2="20" stroke="#4D4D4D"/>
    </svg>
	<div>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.33008 21.51H7.22008L9.11008 22.45H15.0501C15.7535 22.4532 16.4327 22.1935 16.9544 21.7217C17.4762 21.2499 17.8027 20.6002 17.8701 19.9L18.5501 13.09C18.555 13.0301 18.555 12.9699 18.5501 12.91C18.5501 12.6736 18.5035 12.4396 18.4131 12.2212C18.3226 12.0028 18.19 11.8044 18.0229 11.6372C17.8557 11.4701 17.6573 11.3375 17.4389 11.247C17.2205 11.1566 16.9865 11.11 16.7501 11.11H12.8901L12.9901 10.91C13.5477 9.79892 13.8388 8.57317 13.8401 7.33C13.8403 6.83729 13.648 6.36398 13.3043 6.01094C12.9606 5.6579 12.4926 5.45304 12.0001 5.44C11.4988 5.44 11.0181 5.63913 10.6636 5.99357C10.3092 6.34801 10.1101 6.82874 10.1101 7.33C10.1102 7.93008 9.99195 8.52429 9.762 9.07856C9.53206 9.63283 9.19498 10.1363 8.77008 10.56L7.27008 12.05H5.33008"
				stroke="black"
				stroke-width="1.89"
				stroke-miterlimit="10"
			/>
			<path
				d="M1.5498 11.11H5.3298V22.45H1.5498V11.11Z"
				stroke="black"
				stroke-width="1.89"
				stroke-miterlimit="10"
			/>
			<path
				d="M18.5601 3.54999L19.1801 4.78999L20.5501 4.98999L19.5601 5.95999L19.7901 7.32999L18.5601 6.67999L17.3401 7.32999L17.5701 5.95999L16.5801 4.98999L17.9501 4.78999L18.5601 3.54999Z"
				stroke="black"
				stroke-width="1.89"
				stroke-miterlimit="10"
			/>
		</svg>
		<span>100% satisfaction</span>
	</div>
</div>
`;
const check_svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99983 1.66666C5.39567 1.66666 1.6665 5.39582 1.6665 9.99999C1.6665 14.6 5.39567 18.3333 9.99983 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99999C18.3332 5.39582 14.5998 1.66666 9.99983 1.66666ZM8.33317 14.1667L4.1665 9.99999L5.34567 8.82082L8.33317 11.8083L14.654 5.48749L15.8332 6.66665L8.33317 14.1667Z" fill="#1F4694"/>
</svg>
`;

const pdp_usp_int = setInterval(() => {
	const product_details = document.querySelector('.productView-details');
	const title = document.querySelector('.productView-title');
	const promo_right = document.querySelector('.promo.promo-badge-right');
	const product_options = document.querySelector('.productView-options');
	const features = [
		...document.querySelectorAll('.productView-short-description ul li'),
	];
	const head = document.querySelector('head');
	if (
		promo_right &&
		style &&
		title &&
		product_details &&
		features &&
		head &&
		!document.querySelector('.usp')
	) {
		head.insertAdjacentHTML('beforeend', style);
		product_details.insertAdjacentElement('afterbegin', title);
		promo_right.insertAdjacentHTML('afterend', right_promo_html);
		product_options.insertAdjacentHTML('afterend', usp_html);
		features.map((feature) => {
			feature.insertAdjacentHTML('afterbegin', check_svg);
		});
		clearInterval(pdp_usp_int);
	}
}, 10);

const rev_int = setInterval(() => {
	const product_details = document.querySelector('.productView-details');
	const rev = document.querySelector('.productView-product .stjr-product-rating.stjr-init');
	if (rev && product_details) {
		product_details.insertAdjacentElement('afterbegin', rev);
		clearInterval(rev_int);
	}
}, 10);
