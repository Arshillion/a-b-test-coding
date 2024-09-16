const style = `
<style>
    .product-single__meta > div:nth-of-type(3) > div:nth-of-type(1),.product-block.product-block--sales-point{
        display: none !important
    }
    .h2.product-single__title{
        color: #3B3B3B;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        margin: 16px 0;
    }
    .new-usps-area{
        margin-bottom: 0;
    }
    .new-usps-area .header-info{
        position: relative;
    }
    .new-usps-area h3{
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        text-align: center;
        position: relative;
        z-index: 10;
        width: max-content;
        max-width: 100%;
        margin: 24px auto 16px;
        color: #141414;
        background: white;
        padding: 0 6px;
    }
    .new-usps-area .header-info span{
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9;
        border-bottom: 1px solid #484848;
    }
    .new-usps-area .new-usps{
        display: grid;
        gap:10px;
        grid-template-columns: repeat(1, 1fr);
    }
    .new-usps-area .new-usps .new-usp{
        display: grid;
        grid-template-columns: 70px 1fr;
    }
    .new-usps-area .new-usps .new-usp svg{
        grid-row: span 2;
    }
    .new-usps-area .new-usps .new-usp strong{
        font-family: Montserrat;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        color: #333333;
    }
    .new-usps-area .new-usps .new-usp span{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #707070;
    }
    .pdp-usps{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pdp-usp{
        display: flex;
        align-items: center;
        padding: 0 4px;
        gap: 2px;
    }
    .pdp-usp:not(:last-child){
        border-right: 1px solid #000;
    }
    .pdp-usp img{
        width: 16px;
    }
    .pdp-usp span{
        font-size: 10px;
        line-height: 10px;
    }
    .btn.btn--full.add-to-cart{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 4px!important;
        box-shadow: none!important;
        background: #1F1F1F;
        border: none;
    }
    .btn.btn--full.add-to-cart span{
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
    }
    .product-block.product-block--price{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: 16px;
        justify-content: flex-end;
    }
    .product-block.product-block--price .product__price.on-sale{
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 700;
    }
    .product-block.product-block--price .product__price.product__price--compare{
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
        color: #9E9E9E;
    }
    .now-at{
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
    }
    .price-save{
        display: flex;
        align-items: center;
        margin: 12px 0;
        gap:10px;
    }
    .price-save span{
        padding: 2px 8px 2px 8px;
        background: #E0F4FF;
        color: #007FC7;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
    }
    .price-save strong{
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 700;
        color: #007FC7;
    }
    .rev-star {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        gap:10px;
    }
    .rev-star img{
        width: 76px;
        height: 28px;
    }
    .rev-star span{
        color: #3B3B3B;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
    }
    .rev-star svg{
        flex-shrink: 0;
    }
    .prod-points{
        margin: 20px 0;
        display: grid;
        gap: 6px;
    }
    .prod-point{
        display: flex;
        align-items: center;
        gap:16px;
    }
    .prod-point span{
        font-size: 14px;
        line-height: 16px;
        color: #3B3B3B;
    }
    .user-rev{
        display: flex;
        align-items: flex-start;
        gap: 20px;
        margin: 10px 0;
    }
    .rev-details{
        display: grid;
        gap: 4px;
    }
    .rev-details span{
        color: #3B3B3B;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
    }
    .rev-details strong{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
        color: #000;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .rev-details strong span{
        color: #007FC7;
        font-family: Montserrat;
        font-size: 10px;
        font-weight: 400;
        line-height: 20px;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .user-rev svg{
        flex-shrink: 0;
    }
    @media only screen and (min-width:768px){
        .product-single__meta{
            border: 1px solid #E9E9E9;
            padding: 16px;
            margin: 10px;
            border-radius: 4px;
        }
        .h2.product-single__title{
            font-size: 32px;
            line-height: 34px;
        }
        .prod-point span{
            font-size: 16px;
            line-height: 20px;
        }
        .product-block.product-block--price{
            gap: 8px;
        }
        .product-block.product-block--price .product__price.on-sale{
            font-size: 32px;
            line-height: 28px;
        }
        .product-block.product-block--price .product__price.product__price--compare{
            font-size: 24px;
            line-height: 28px;
        }
        .now-at{
            font-size: 20px;
        }
        .pdp-usp{
            padding: 0 8px;
            gap: 4px;
        }
        .pdp-usp img{
            width: 18px;
        }
        .pdp-usp span{
            font-size: 12px;
            line-height: 12px;
        }
        .new-usps-area .new-usps{
            gap:20px;
            grid-template-columns: repeat(3, 1fr);
        }
        .new-usps-area h3{
            font-size: 28px;
            line-height: 34px;
            padding: 0 20px;
            margin: 32px auto 24px;
        }
        .new-usps-area{
            margin-bottom :20px;
        }
    }
</style>
`;

const car_icon = `
<svg
	width="59"
	height="40"
	viewBox="0 0 59 40"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M52.5879 33.9172H56.1425C56.9884 33.9172 57.6706 33.2366 57.6706 32.3971V22.7304C57.6706 21.8935 57.2415 20.6802 56.7121 20.0263L48.3419 9.68744C47.8123 9.03324 46.7004 8.50342 45.8579 8.50342H37.3396V33.9172H42.4224C42.4224 31.1101 44.698 28.8345 47.5051 28.8345C50.3123 28.8345 52.5879 31.1101 52.5879 33.9172Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M7.35117 33.9173H4.80898C3.12224 33.9173 1.76013 32.5517 1.76013 30.8673L1.73169 1.56738H37.311L37.3395 33.9173H17.5167C17.5167 31.1101 15.2411 28.8345 12.4339 28.8345C9.62679 28.8345 7.35117 31.1101 7.35117 33.9173Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M12.4338 39C15.241 39 17.5166 36.7244 17.5166 33.9172C17.5166 31.1101 15.241 28.8345 12.4338 28.8345C9.6267 28.8345 7.35107 31.1101 7.35107 33.9172C7.35107 36.7244 9.6267 39 12.4338 39Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M47.5051 39C50.3123 39 52.5879 36.7244 52.5879 33.9172C52.5879 31.1101 50.3123 28.8345 47.5051 28.8345C44.698 28.8345 42.4224 31.1101 42.4224 33.9172C42.4224 36.7244 44.698 39 47.5051 39Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<line
		x1="36.9817"
		y1="21.1035"
		x2="57.0017"
		y2="21.1035"
		stroke="#D1A333"
		stroke-width="2"
	/>
</svg>
`;

const check_icon = `
	<svg
		width="42"
		height="44"
		viewBox="0 0 42 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M20.6668 42.7692C15.202 41.7078 10.2836 38.8334 6.74914 34.6354C3.21469 30.4373 1.28273 25.1752 1.28223 19.745V5.00873L20.6668 1.23071L40.0515 5.00873V19.745C40.051 25.1752 38.119 30.4373 34.5845 34.6354C31.0501 38.8334 26.1317 41.7078 20.6668 42.7692Z"
			stroke="#D1A333"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
		<path
			d="M10.9744 20.0657L18.2487 27.5384L30.359 15.0769"
			stroke="#D1A333"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>
`;

const return_icon = `
<svg
	width="50"
	height="50"
	viewBox="0 0 50 50"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M25.3334 48.5385C38.3333 48.5385 48.8718 37.9999 48.8718 25C48.8718 12.0001 38.3333 1.46155 25.3334 1.46155C12.3334 1.46155 1.79492 12.0001 1.79492 25C1.79492 37.9999 12.3334 48.5385 25.3334 48.5385Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
	<path
		d="M14.2566 13.9231H31.7874C34.1152 13.9231 36.3476 14.8726 37.9936 16.5626C39.6396 18.2526 40.5643 20.5448 40.5643 22.9349C40.5582 25.3209 39.6308 27.607 37.9855 29.2919C36.3402 30.9769 34.1112 31.9231 31.7874 31.9231H14.2566"
		stroke="#D1A333"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
	<path
		d="M22.5643 40.2307L14.2566 31.2307L22.5643 22.2307"
		stroke="#D1A333"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
</svg>
`;

const cart_icon = `
<svg
	width="20"
	height="20"
	viewBox="0 0 20 20"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M17.5 4.16667L15.8333 10H6.14726M16.6667 13.3333H6.66667L5 2.5H2.5M13.3333 4.58333H11.25M11.25 4.58333H9.16667M11.25 4.58333V6.66667M11.25 4.58333V2.5M7.5 16.6667C7.5 17.1269 7.1269 17.5 6.66667 17.5C6.20643 17.5 5.83333 17.1269 5.83333 16.6667C5.83333 16.2064 6.20643 15.8333 6.66667 15.8333C7.1269 15.8333 7.5 16.2064 7.5 16.6667ZM16.6667 16.6667C16.6667 17.1269 16.2936 17.5 15.8333 17.5C15.3731 17.5 15 17.1269 15 16.6667C15 16.2064 15.3731 15.8333 15.8333 15.8333C16.2936 15.8333 16.6667 16.2064 16.6667 16.6667Z"
		stroke="white"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
`;

const rev_usp_html = `
<div class="new-elm new-usps-area">
    <div class="header-info">
        <h3>WHY 100,000+ CUSTOMERS LOVE TRAVX.</h3>
        <span></span>
    </div>
    <div class="new-usps">
        <div class="new-usp">
            ${car_icon}
            <strong>GRATIS VERZENDING</strong>
            <span>Wij bieden gratis een verzekerde verzending binnen nl & be</span>
        </div>
        <div class="new-usp">
            ${check_icon}
            <strong>BESTEL NU, BETAAL LATER</strong>
            <span>Klarna geeft de extra flexibiliteit omdat u binnen 30 dagen kunt betalen.</span>
        </div>
        <div class="new-usp">
            ${return_icon}
            <strong>30 DAGEN TESTTIJD</strong>
            <span>Niet tevreden? - geen probleem! Wij bieden een 30 dagen testbeleid als</span>
        </div>
    </div>
</div>
`;

const pdp_usp_html = `
<div class="product-block pdp-usps">
    <div class="pdp-usp">
        <img src="https://i.ibb.co/3dvttp8/usp1.png" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/klarna_logo.png?v=1697923808" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/postnl-3-logo-png-transparent-removebg-preview.png?v=1705871635" alt="" />
        <span>Gratis Verzending</span>
    </div>
</div>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^0-9\-+\.]/g, ''));
};

const currencyOnly = (string) => {
	return string.replace(/[0-9,. ]/g, '');
};

const save_html_with_points_and_rev = (price, currency) => `
<div class="price-save">
    <span>You save</span>
    <strong>${currency}${price}</strong>
</div>
<div class="prod-points">
    <div class="prod-point">
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_1896_85)">
                <path
                    d="M11.7392 6.1305V4.19572C11.7392 3.78267 12.087 3.43485 12.5001 3.43485C12.9131 3.43485 13.2609 3.78267 13.2609 4.19572V6.1305C13.2609 6.54354 12.9131 6.89137 12.5001 6.89137C12.087 6.89137 11.7392 6.54354 11.7392 6.1305ZM12.4566 9.08702C12.6957 9.08702 12.9131 9.00006 13.0653 8.82615C13.2174 8.65224 13.3261 8.43485 13.3261 8.21745C13.3261 7.97832 13.2392 7.76093 13.0653 7.60876C12.9131 7.43485 12.674 7.34789 12.4566 7.34789C12.2174 7.34789 12.0001 7.43485 11.8479 7.60876C11.6957 7.76093 11.587 8.00006 11.587 8.21745C11.587 8.43485 11.674 8.67398 11.8479 8.82615C12.0001 9.00006 12.2392 9.08702 12.4566 9.08702ZM18.2174 8.26093C17.5653 8.93485 16.7609 9.34789 15.8044 9.50006C15.3261 12.4131 13.2609 13.8914 10.8696 14.1957V17.3914H12.7392C13.2174 17.3914 13.6087 17.7827 13.6087 18.2609C13.6087 18.7392 13.2174 19.1305 12.7392 19.1305H7.28266C6.8044 19.1305 6.41309 18.7392 6.41309 18.2609C6.41309 17.7827 6.8044 17.3914 7.28266 17.3914H9.13049V14.1957C6.73918 13.8914 4.6957 12.4131 4.21744 9.50006C3.26092 9.34789 2.45657 8.95659 1.78266 8.26093C5.02542e-05 6.41311 0.0870068 3.26093 0.108746 3.1305C0.130485 2.71746 0.456572 2.39137 0.869615 2.39137H4.13049V1.73919C4.13049 1.26093 4.50005 0.869629 4.97831 0.869629H15.0218C15.5 0.869629 15.8696 1.26093 15.8696 1.73919V2.39137H19.1305C19.5435 2.39137 19.8696 2.71746 19.8914 3.1305C19.8914 3.26093 19.9783 6.43485 18.2174 8.26093ZM2.89135 7.21746C3.23918 7.56528 3.6957 7.82615 4.13049 7.93485V3.91311H1.65222C1.73918 4.78267 2.00005 6.28267 2.89135 7.21746ZM14.1305 2.60876H5.86962V8.23919C5.86962 11.3914 8.00005 12.5001 10.0001 12.5001C12.0001 12.5001 14.1305 11.3696 14.1305 8.23919V2.60876ZM17.1087 7.21746C17.9566 6.34789 18.2609 5.00006 18.3479 3.91311H15.8696V7.93485C16.3044 7.80441 16.7609 7.56528 17.1087 7.21746Z"
                    fill="#FF3D71"
                />
            </g>
            <defs>
                <clipPath id="clip0_1896_85">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
        <span>Curl blowdry and straighten with one device</span>
    </div>
    <div class="prod-point">
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.0032 1.97876L11.1169 3.09245C11.7076 3.68319 12.0395 4.48441 12.0395 5.31984C12.0395 6.15527 11.7076 6.95649 11.1169 7.54723L10.0032 8.66092L8.88359 7.54133C8.29543 6.95005 7.96576 6.14966 7.96686 5.31567C7.96797 4.48169 8.29976 3.68217 8.88948 3.09245L10.0032 1.97876Z"
                stroke="#009E6E"
                stroke-width="1.89"
                stroke-miterlimit="10"
            />
            <path
                d="M14.7251 6.8916V8.4666C14.723 9.29342 14.3959 10.0863 13.8143 10.674C13.2328 11.2618 12.4435 11.5973 11.6168 11.6083H10.0418V10.0416C10.0417 9.21334 10.3678 8.41837 10.9496 7.82882C11.5314 7.23926 12.3219 6.90256 13.1501 6.8916H14.7251Z"
                stroke="#009E6E"
                stroke-width="1.89"
                stroke-miterlimit="10"
            />
            <path
                d="M5.28324 6.8916H6.8499C7.67817 6.89153 8.47313 7.21768 9.06269 7.79944C9.65224 8.38119 9.98895 9.17174 9.9999 9.99993V11.5749H8.4249C7.58947 11.5749 6.78826 11.2431 6.19752 10.6523C5.60678 10.0616 5.2749 9.26037 5.2749 8.42493V6.8916H5.28324Z"
                stroke="#009E6E"
                stroke-width="1.89"
                stroke-miterlimit="10"
            />
            <path
                d="M14.7166 11.6167V13.1917C14.7166 13.6054 14.6351 14.015 14.4768 14.3972C14.3185 14.7793 14.0864 15.1266 13.7939 15.4191C13.5014 15.7116 13.1542 15.9436 12.772 16.1019C12.3898 16.2602 11.9802 16.3417 11.5666 16.3417H9.99988V14.7667C9.99988 13.9327 10.3306 13.1328 10.9196 12.5423C11.5085 11.9518 12.3076 11.6189 13.1416 11.6167H14.7166Z"
                stroke="#009E6E"
                stroke-width="1.89"
                stroke-miterlimit="10"
            />
            <path
                d="M5.28324 11.6167H6.8499C7.68389 11.6167 8.48385 11.9474 9.07435 12.5364C9.66485 13.1253 9.9977 13.9244 9.9999 14.7584V16.3334H8.4249C7.58947 16.3334 6.78826 16.0015 6.19752 15.4108C5.60678 14.82 5.2749 14.0188 5.2749 13.1834V11.6167H5.28324Z"
                stroke="#009E6E"
                stroke-width="1.89"
                stroke-miterlimit="10"
            />
            <path
                d="M10 19.4832V8.46655"
                stroke="#009E6E"
                stroke-width="1.89"
                stroke-miterlimit="10"
            />
        </svg>
        <span>Effortless styling without extreme heat</span>
    </div>
    <div class="prod-point">
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_1896_94)">
                <path
                    d="M5.22502 15.5667C5.66224 15.5667 6.01668 15.2123 6.01668 14.7751C6.01668 14.3378 5.66224 13.9834 5.22502 13.9834C4.78779 13.9834 4.43335 14.3378 4.43335 14.7751C4.43335 15.2123 4.78779 15.5667 5.22502 15.5667Z"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M7.61668 11.6083V3.63333C7.61448 3.00047 7.36153 2.39428 6.91324 1.94755C6.46495 1.50083 5.85788 1.25 5.22502 1.25C4.59292 1.25 3.98671 1.5011 3.53974 1.94806C3.09278 2.39502 2.84168 3.00123 2.84168 3.63333V11.6083C2.17225 12.1096 1.67756 12.8088 1.42774 13.6069C1.17791 14.405 1.18562 15.2615 1.44977 16.055C1.71392 16.8485 2.22111 17.5387 2.89945 18.0279C3.5778 18.517 4.39288 18.7802 5.22918 18.7802C6.06548 18.7802 6.88057 18.517 7.55891 18.0279C8.23726 17.5387 8.74445 16.8485 9.0086 16.055C9.27275 15.2615 9.28046 14.405 9.03063 13.6069C8.7808 12.8088 8.28611 12.1096 7.61668 11.6083Z"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M5.2251 10V13.975"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M14.7749 6.81665V11.5916"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M16.3667 5.2251L14.775 6.81676L13.1833 5.2251"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M13.1833 13.1832L14.775 11.5916L16.3667 13.1832"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M17.1583 9.20825H12.3833"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M18.7501 10.8L17.1584 9.20003L18.7501 7.6167"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M10.8 7.6167L12.3834 9.20003L10.8 10.8"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
                <path
                    d="M14.7751 10.0001C15.2123 10.0001 15.5667 9.64564 15.5667 9.20841C15.5667 8.77119 15.2123 8.41675 14.7751 8.41675C14.3378 8.41675 13.9834 8.77119 13.9834 9.20841C13.9834 9.64564 14.3378 10.0001 14.7751 10.0001Z"
                    stroke="#FF6A11"
                    stroke-width="1.91"
                    stroke-miterlimit="10"
                />
            </g>
            <defs>
                <clipPath id="clip0_1896_94">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
        <span>More volume and shine</span>
    </div>
    <div class="prod-point">
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 6.25C18.2487 6.25 16.5348 6.08887 14.8584 5.7666C13.182 5.44434 11.5234 4.97396 9.88281 4.35547C8.28125 3.74349 6.66341 3.28125 5.0293 2.96875C3.39518 2.65625 1.71875 2.5 0 2.5V1.875C1.7513 1.875 3.46517 2.03613 5.1416 2.3584C6.81803 2.68066 8.47656 3.15104 10.1172 3.76953C11.7188 4.38151 13.3366 4.84375 14.9707 5.15625C16.6048 5.46875 18.2812 5.625 20 5.625V6.25ZM0 5C1.78385 5 3.51725 5.16113 5.2002 5.4834C6.88314 5.80566 8.55794 6.28255 10.2246 6.91406C11.8132 7.51302 13.4147 7.96875 15.0293 8.28125C16.6439 8.59375 18.3008 8.75 20 8.75V10C18.2161 10 16.4827 9.83887 14.7998 9.5166C13.1169 9.19434 11.4421 8.71745 9.77539 8.08594C8.18685 7.48698 6.58529 7.03125 4.9707 6.71875C3.35612 6.40625 1.69922 6.25 0 6.25V5ZM20 14.375C18.2031 14.375 16.4486 14.2106 14.7363 13.8818C13.0241 13.5531 11.3314 13.0697 9.6582 12.4316C8.0957 11.8392 6.51367 11.39 4.91211 11.084C3.31055 10.778 1.67318 10.625 0 10.625V8.75C1.79688 8.75 3.55143 8.91602 5.26367 9.24805C6.97591 9.58008 8.66862 10.0618 10.3418 10.6934C11.9043 11.2923 13.4863 11.7432 15.0879 12.0459C16.6895 12.3486 18.3268 12.5 20 12.5V14.375ZM0 12.5C1.81641 12.5 3.59049 12.6676 5.32227 13.0029C7.05404 13.3382 8.76628 13.8249 10.459 14.4629C12.002 15.0488 13.5645 15.4932 15.1465 15.7959C16.7285 16.0986 18.3464 16.25 20 16.25V18.75C18.1836 18.75 16.4095 18.5824 14.6777 18.2471C12.946 17.9118 11.2337 17.4251 9.54102 16.7871C7.99805 16.2012 6.43555 15.7568 4.85352 15.4541C3.27148 15.1514 1.65365 15 0 15V12.5Z"
                fill="black"
            />
        </svg>
        <span>For all hair types</span>
    </div>
</div>
<div class="user-rev">
    <img src="https://i.ibb.co/TmnjMfB/urev-s-rev.png" alt="" />
    <div class="rev-details">
        <span>En 27.358 andere houden van onze bestseller houden van onze bestseller</span>
        <strong>Chantal Janzen 
            <span>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 0.583374L1.75 2.91671V6.41671C1.75 9.65421 3.99 12.6817 7 13.4167C10.01 12.6817 12.25 9.65421 12.25 6.41671V2.91671L7 0.583374ZM5.83333 9.91671L3.5 7.58337L4.3225 6.76088L5.83333 8.26588L9.6775 4.42171L10.5 5.25004L5.83333 9.91671Z"
                        fill="#007FC7"
                    />
                </svg>
                Verified Buyer
            </span>
        </strong>
        <svg
            width="88"
            height="16"
            viewBox="0 0 88 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 0L10.2195 4.94515L15.6085 5.52786L11.5912 9.16685L12.7023 14.4721L8 11.776L3.29772 14.4721L4.40881 9.16685L0.391548 5.52786L5.78052 4.94515L8 0Z"
                fill="#F8A300"
            />
            <path
                d="M26 0L28.2195 4.94515L33.6085 5.52786L29.5912 9.16685L30.7023 14.4721L26 11.776L21.2977 14.4721L22.4088 9.16685L18.3915 5.52786L23.7805 4.94515L26 0Z"
                fill="#F8A300"
            />
            <path
                d="M44 0L46.2195 4.94515L51.6085 5.52786L47.5912 9.16685L48.7023 14.4721L44 11.776L39.2977 14.4721L40.4088 9.16685L36.3915 5.52786L41.7805 4.94515L44 0Z"
                fill="#F8A300"
            />
            <path
                d="M62 0L64.2195 4.94515L69.6085 5.52786L65.5912 9.16685L66.7023 14.4721L62 11.776L57.2977 14.4721L58.4088 9.16685L54.3915 5.52786L59.7805 4.94515L62 0Z"
                fill="#F8A300"
            />
            <path
                d="M80 0L82.2195 4.94515L87.6085 5.52786L83.5912 9.16685L84.7023 14.4721L80 11.776L75.2977 14.4721L76.4088 9.16685L72.3915 5.52786L77.7805 4.94515L80 0Z"
                fill="#F8A300"
            />
        </svg>
    </div>
    <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M9.22096 5.71985C9.22096 2.2179 7.1983 0 4.40227 0C1.7847 0 0 1.80934 0 4.37743C0 6.94553 1.72521 8.40467 3.86686 8.40467C4.52125 8.40467 5.05666 8.28794 5.53258 8.11284C5.53258 10.1556 3.68839 11.7315 1.13031 12.1984V15C5.88952 14.4163 9.22096 10.6226 9.22096 5.71985ZM21 5.71985C21 2.2179 18.9773 0 16.1813 0C13.5637 0 11.779 1.80934 11.779 4.37743C11.779 6.94553 13.4448 8.40467 15.5864 8.40467C16.2408 8.40467 16.7762 8.28794 17.2521 8.11284C17.2521 10.1556 15.4674 11.7315 12.9093 12.1984V15C17.6686 14.4163 21 10.6226 21 5.71985Z"
            fill="black"
        />
    </svg>
</div>
`;

const rev_star_html = `
<div class="rev-star">
    <img src="https://i.ibb.co/PzNMPXk/rev-user.png" alt="" />
    <span>Over 14,000+ satisfied customers love TravX®</span>
    <svg
    width="88"
    height="16"
    viewBox="0 0 88 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <rect
        width="16"
        height="16"
        fill="#E48000"
    />
    <path
        d="M8 3L9.46065 5.98959L12.7553 6.45492L10.3634 8.76791L10.9389 12.0451L8 10.485L5.06107 12.0451L5.63662 8.76791L3.24472 6.45492L6.53935 5.98959L8 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(18)"
        fill="#E48000"
    />
    <path
        d="M26 3L27.4606 5.98959L30.7553 6.45492L28.3634 8.76791L28.9389 12.0451L26 10.485L23.0611 12.0451L23.6366 8.76791L21.2447 6.45492L24.5394 5.98959L26 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(36)"
        fill="#E48000"
    />
    <path
        d="M44 3L45.4606 5.98959L48.7553 6.45492L46.3634 8.76791L46.9389 12.0451L44 10.485L41.0611 12.0451L41.6366 8.76791L39.2447 6.45492L42.5394 5.98959L44 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(54)"
        fill="#E48000"
    />
    <path
        d="M62 3L63.4606 5.98959L66.7553 6.45492L64.3634 8.76791L64.9389 12.0451L62 10.485L59.0611 12.0451L59.6366 8.76791L57.2447 6.45492L60.5394 5.98959L62 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(72)"
        fill="#E48000"
    />
    <path
        d="M80 3L81.4606 5.98959L84.7553 6.45492L82.3634 8.76791L82.9389 12.0451L80 10.485L77.0611 12.0451L77.6366 8.76791L75.2447 6.45492L78.5394 5.98959L80 3Z"
        fill="white"
    />
    </svg>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'.product-grid__container.grid.grid--product-images--partial'
	);
	const form_cart = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(8)'
	);
	const cart_btn = document.querySelector('#product-form__cart-submit');
	const price_elm = document.querySelector(
		'.product-block.product-block--price'
	);
	const header = document.querySelector(
		'.product-block.product-block--header.product-single__header'
	);
	const head = document.querySelector('head');
	const sale_price = price_elm.querySelector(
		'.product__price.on-sale .money'
	).innerText;
	const compare_price = price_elm.querySelector(
		'.product__price.product__price--compare .money'
	).innerText;
	const price = numberOnly(compare_price) - numberOnly(sale_price);
	const currency = currencyOnly(sale_price);
	const check = exist_elm && head && form_cart && cart_btn && price_elm;
	if (check && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		cart_btn.insertAdjacentHTML('afterbegin', cart_icon);
		exist_elm.insertAdjacentHTML('afterend', rev_usp_html);
		form_cart.insertAdjacentHTML('afterend', pdp_usp_html);
		price_elm.insertAdjacentHTML(
			'beforeend',
			'<span class="now-at">Now at</span>'
		);
		price_elm.insertAdjacentHTML(
			'afterend',
			save_html_with_points_and_rev(price, currency)
		);
		header.insertAdjacentHTML('beforebegin', rev_star_html);
		clearInterval(interval);
	}
}, 10);
