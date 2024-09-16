/* CUSTOM CODE */
const usp_html = `
<style>
	.zpa-accordion__item{
    	border:1px solid #dfdfdf;
        border-radius:2px;
        border-bottom:none;
    }
    .zpa-accordion__item:last-child{
        border-bottom:1px solid #dfdfdf;
    }
    .product-block.product-block--title .feature_divider{
    	display:none;
    }
    
    .float-new-btn {
        bottom: 10px;
        right: 10px;
        left: 10px;
        z-index: 10;
        border-radius: 4px;
		background: #03A196;
    }
	.sale.savings {
    	border-radius: 4px;
		background: #D60000;
        color: #FFF;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding:10px;
        width: max-content!important;
    }
    .sale.savings span {
    	color: #FFF;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
	.price-ui .unit-pricing{
    	display:none!important;
    }
    .price-ui {
    	flex-wrap:nowrap!important;
        align-items:center;
        width:100%!important;
        gap: 6px;
    }
    .price.price--sale{
    	color: #F00;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .compare-at-price{
    	color: #A1A1A1;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration-line: strikethrough;
    }
    .product-usps {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto 1fr;
        background: #EEF5F6;
        padding: 10px;
    }
    .product-usp {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    .product-usp span {
        color: #000;
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
    }
    .product-usp-divider {
        width: 1px;
        height: 13px;
        background: #474747;
    }
    @media only screen and (max-width:667px){
    	.product-usp span {
          font-size: 10px;
    	}
    }
</style>
<div class="product-usps">
    <div class="product-usp">
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1272_4)">
                <path d="M0.5 0V10.5H3.65328C3.86634 11.3594 4.60645 12 5.49233 12C6.37822 12 7.11832 11.3594 7.33138 10.5H14.3118C14.5248 11.3594 15.2649 12 16.1508 12C17.0367 12 17.7768 11.3594 17.9899 10.5H19.5V5.29688L19.3654 5.14062L16.4947 2.14062L16.3452 2H13.7586V0H0.5ZM13.7586 3H15.9415L18.5431 5.71875V9.5H17.9899C17.7768 8.64062 17.0367 8 16.1508 8C15.2649 8 14.5248 8.64062 14.3118 9.5H13.7586V3ZM5.49233 9C6.02685 9 6.44924 9.44141 6.44924 10C6.44924 10.5586 6.02685 11 5.49233 11C4.95781 11 4.53543 10.5586 4.53543 10C4.53543 9.44141 4.95781 9 5.49233 9ZM16.1508 9C16.6854 9 17.1077 9.44141 17.1077 10C17.1077 10.5586 16.6854 11 16.1508 11C15.6163 11 15.1939 10.5586 15.1939 10C15.1939 9.44141 15.6163 9 16.1508 9Z" fill="black"></path>
                <path d="M2.22289 3V8H1.5V3H2.22289ZM3.62048 5.13599V5.93956H2.0253V5.13599H3.62048ZM3.78916 3V3.80701H2.0253V3H3.78916Z" fill="white"></path>
                <path d="M4.20843 3H5.51687C5.78514 3 6.01566 3.05723 6.20843 3.1717C6.40281 3.28617 6.55221 3.45559 6.65663 3.67995C6.76104 3.9043 6.81325 4.18017 6.81325 4.50756C6.81325 4.77541 6.78112 5.00549 6.71687 5.1978C6.65422 5.38782 6.56506 5.54693 6.4494 5.67514C6.33534 5.80105 6.2012 5.90179 6.04699 5.97734L5.81807 6.14904H4.68072L4.6759 5.34547H5.52169C5.64859 5.34547 5.75382 5.31342 5.83735 5.24931C5.92088 5.18521 5.98353 5.09592 6.0253 4.98146C6.06867 4.86699 6.09036 4.7342 6.09036 4.5831C6.09036 4.42285 6.06948 4.28434 6.02771 4.16758C5.98594 4.05082 5.92249 3.96154 5.83735 3.89973C5.75221 3.83791 5.64538 3.80701 5.51687 3.80701H4.93133V8H4.20843V3ZM6.16988 8L5.36988 5.77129L6.13374 5.76442L6.94337 7.95192V8H6.16988Z" fill="white"></path>
                <path d="M9.7241 7.19643V8H7.85663V7.19643H9.7241ZM8.09277 3V8H7.36988V3H8.09277ZM9.48072 5.0364V5.81937H7.85663V5.0364H9.48072ZM9.72169 3V3.80701H7.85663V3H9.72169Z" fill="white"></path>
                <path d="M12.5 7.19643V8H10.6325V7.19643H12.5ZM10.8687 3V8H10.1458V3H10.8687ZM12.2566 5.0364V5.81937H10.6325V5.0364H12.2566ZM12.4976 3V3.80701H10.6325V3H12.4976Z" fill="white"></path>
            </g>
            <defs>
                <clipPath id="clip0_1272_4">
                    <rect width="20" height="12" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
        <span>Free shipping on over $150</span>
    </div>
    <div class="product-usp-divider"></div>
    <div class="product-usp">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6667 2.36L15.3767 2.75667C15.4629 2.77656 15.5534 2.76139 15.6284 2.71451C15.7035 2.66763 15.7568 2.59286 15.7767 2.50667C15.7966 2.42047 15.7814 2.3299 15.7345 2.25489C15.6876 2.17988 15.6129 2.12656 15.5267 2.10667C12.4033 1.38333 12.3333 1.29667 12.1533 1.48667C11.9733 1.67667 12.0267 1.63333 12.7733 4.86333C12.7932 4.95174 12.8474 5.02862 12.924 5.07707C13.0006 5.12552 13.0933 5.14156 13.1817 5.12167C13.2701 5.10178 13.347 5.04758 13.3954 4.971C13.4438 4.89443 13.4599 4.80174 13.44 4.71333L12.93 2.57333C17.8667 7.06 14.6967 15.3333 8 15.3333C6.05508 15.3333 4.18982 14.5607 2.81455 13.1855C1.43928 11.8102 0.666667 9.94492 0.666667 8C0.666667 6.05508 1.43928 4.18982 2.81455 2.81455C4.18982 1.43928 6.05508 0.666667 8 0.666667C8.08841 0.666667 8.17319 0.631548 8.2357 0.569036C8.29821 0.506523 8.33333 0.421739 8.33333 0.333333C8.33333 0.244928 8.29821 0.160143 8.2357 0.0976311C8.17319 0.035119 8.08841 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C15.1067 16 18.6667 7.38333 13.6667 2.36Z" fill="black"></path>
            <path d="M14 7.99436C14.001 9.02155 13.7382 10.0318 13.2369 10.9283C12.7356 11.8249 12.0125 12.5777 11.1368 13.1147C10.2612 13.6517 9.26237 13.955 8.23597 13.9954C7.20958 14.0358 6.19 13.812 5.27488 13.3454C4.35975 12.8789 3.57972 12.1852 3.00948 11.3309C2.43924 10.4765 2.09789 9.49005 2.01812 8.46596C1.93835 7.44188 2.12283 6.41446 2.55389 5.4821C2.98495 4.54973 3.64815 3.74365 4.48 3.14103C5.37514 2.49256 6.43203 2.10397 7.53404 2.01812C8.63605 1.93228 9.74036 2.15253 10.7251 2.65457C11.7099 3.1566 12.5368 3.92091 13.1147 4.86317C13.6926 5.80543 13.999 6.88901 14 7.99436Z" fill="black"></path>
            <path d="M8 7.31271C7.86823 7.31271 7.73942 7.27241 7.62985 7.19689C7.52029 7.12137 7.4349 7.01403 7.38447 6.88844C7.33404 6.76286 7.32085 6.62467 7.34656 6.49135C7.37226 6.35803 7.43572 6.23556 7.52889 6.13944C7.62207 6.04333 7.74078 5.97787 7.87002 5.95135C7.99926 5.92483 8.13322 5.93844 8.25496 5.99046C8.3767 6.04248 8.48076 6.13057 8.55396 6.24359C8.62717 6.35662 8.66625 6.4895 8.66625 6.62543C8.66625 6.80771 8.73644 6.98252 8.86138 7.11141C8.98633 7.2403 9.15579 7.31271 9.33249 7.31271C10.4385 7.31271 10.1386 5.25086 8.66625 4.68729C8.66625 4.50501 8.59605 4.33019 8.47111 4.2013C8.34616 4.07241 8.1767 4 8 4C7.8233 4 7.65384 4.07241 7.52889 4.2013C7.40395 4.33019 7.33376 4.50501 7.33376 4.68729C6.89312 4.85222 6.5227 5.17167 6.28724 5.58978C6.05178 6.0079 5.96626 6.49808 6.04564 6.97465C6.12501 7.45121 6.36424 7.88384 6.72148 8.1969C7.07873 8.50996 7.53127 8.68353 8 8.68728C8.13177 8.68728 8.26058 8.72759 8.37015 8.80311C8.47971 8.87863 8.5651 8.98597 8.61553 9.11156C8.66596 9.23714 8.67915 9.37533 8.65344 9.50865C8.62774 9.64197 8.56428 9.76444 8.47111 9.86056C8.37793 9.95667 8.25922 10.0221 8.12998 10.0486C8.00074 10.0752 7.86678 10.0616 7.74504 10.0095C7.6233 9.95752 7.51924 9.86943 7.44604 9.75641C7.37283 9.64338 7.33376 9.5105 7.33376 9.37457C7.33376 9.19229 7.26356 9.01748 7.13862 8.88859C7.01367 8.7597 6.84421 8.68728 6.66751 8.68728C5.56154 8.68728 5.86135 10.7491 7.33376 11.3127C7.33376 11.495 7.40395 11.6698 7.52889 11.7987C7.65384 11.9276 7.8233 12 8 12C8.1767 12 8.34616 11.9276 8.47111 11.7987C8.59605 11.6698 8.66625 11.495 8.66625 11.3127C9.10688 11.1478 9.4773 10.8283 9.71276 10.4102C9.94822 9.9921 10.0337 9.50192 9.95436 9.02535C9.87499 8.54879 9.63577 8.11616 9.27852 7.8031C8.92127 7.49004 8.46873 7.31647 8 7.31271Z" fill="white"></path>
        </svg>
        <span>Buy now pay later with klarna</span>
    </div>
</div>
`;
const usp_int = setInterval(() => {
	const main_area = document.querySelector(
		'.section-wrapper.section-wrapper--product'
	);
	if (main_area && !document.querySelector('.product-usps')) {
		main_area.insertAdjacentHTML('beforebegin', usp_html);
		clearInterval(usp_int);
	}
}, 10);
const recommend_html = `
<style>
    .recommend-option {
        display: flex;
        width: 328px;
        padding: 12px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border-radius: 6px;
		border: 1px dashed #03A196;
		background: #F0F9F9;
        width: 100%;
        max-width: 400px;
    }
    .recommend-option span {
        color: #1E4B48;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
    }
     @media only screen and (max-width:667px){
    	.recommend-option span{
          font-size: 12px;
    	}
    }
</style>

<div class="recommend-option">
	<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1300_199)">
<path d="M35.25 10.5H0.75V16.5H35.25V10.5Z" fill="#5585FF"></path>
<path d="M35.25 10.5V15H5.25C4.45435 15 3.69129 14.6839 3.12868 14.1213C2.56607 13.5587 2.25 12.7956 2.25 12V10.5H35.25Z" fill="#76ADFF"></path>
<path d="M33.75 16.5H2.25V35.25H33.75V16.5Z" fill="#5585FF"></path>
<path d="M33.75 16.5V33.75H8.25C7.05653 33.75 5.91193 33.2759 5.06802 32.432C4.22411 31.5881 3.75 30.4435 3.75 29.25V16.5H33.75Z" fill="#76ADFF"></path>
<path d="M20.25 16.5H15.75V35.25H20.25V16.5Z" fill="#A856DB"></path>
<path d="M20.25 16.5C20.25 34.185 20.175 33.75 20.25 33.75C19.4544 33.75 18.6913 33.4339 18.1287 32.8713C17.5661 32.3087 17.25 31.5457 17.25 30.75V16.5H20.25Z" fill="#EF66F2"></path>
<path d="M15.0976 11.2498H14.2051C9.3076 11.5348 6.6076 8.69985 6.8026 6.53985C7.7101 -4.24515 17.0176 2.39235 17.9251 7.49985C17.4738 7.51143 17.031 7.62471 16.6295 7.83126C16.2281 8.0378 15.8785 8.33227 15.6067 8.69273C15.3349 9.05319 15.148 9.47034 15.0598 9.91309C14.9717 10.3558 14.9846 10.8128 15.0976 11.2498Z" fill="#A856DB"></path>
<path d="M17.9251 7.49992C17.1425 7.51949 16.3986 7.84418 15.8521 8.40468C15.3056 8.96518 14.9999 9.7171 15.0001 10.4999C12.0976 10.4999 10.0876 9.38992 8.8951 7.82242C8.44594 7.23643 8.23436 6.50258 8.3026 5.76742C8.4151 4.41742 8.8051 2.01742 10.0951 0.757419C13.1326 0.247419 17.3701 4.16992 17.9251 7.49992Z" fill="#EF66F2"></path>
<path d="M15.7875 12.5249C13.5282 15.9456 12.2209 19.9064 12 23.9999L9.75 20.2499L6.75 22.4999C7.0875 18.9374 8.43 13.7099 10.86 10.9199C13.245 11.6174 14.9775 11.0249 15.1125 11.2949C15.2338 11.7538 15.4655 12.1761 15.7875 12.5249Z" fill="#A856DB"></path>
<path d="M15.1126 11.2949C13.5001 13.9724 12.0001 18.4349 12.0001 21.7499L9.75007 17.9999L7.13257 19.9649C7.69507 16.9649 8.85757 13.2149 10.8826 10.9199C13.1476 11.5874 15.0001 11.0624 15.1126 11.2949Z" fill="#EF66F2"></path>
<path d="M29.1975 6.53985C29.3925 8.69235 26.7075 11.5348 21.795 11.2498H20.9025C21.0155 10.8128 21.0284 10.3558 20.9402 9.91309C20.8521 9.47034 20.6651 9.05319 20.3934 8.69273C20.1216 8.33227 19.7719 8.0378 19.3705 7.83126C18.9691 7.62472 18.5262 7.51143 18.075 7.49985C18.9825 2.39985 28.29 -4.26015 29.1975 6.53985Z" fill="#A856DB"></path>
<path d="M29.25 22.4999L26.25 20.2499L24 23.9999C23.7903 19.9099 22.496 15.9494 20.25 12.5249C20.5808 12.1627 20.8177 11.7249 20.94 11.2499C22.361 11.3718 23.7925 11.2603 25.1775 10.9199C27.54 13.6799 28.92 18.9149 29.25 22.4999Z" fill="#A856DB"></path>
<path d="M20.2501 12.5247C19.9162 12.8889 19.4976 13.165 19.0314 13.3285C18.5651 13.492 18.0657 13.5379 17.5775 13.4619C17.0893 13.386 16.6275 13.1907 16.2329 12.8933C15.8384 12.5959 15.5234 12.2057 15.3159 11.7573C15.1084 11.3089 15.0149 10.8162 15.0437 10.323C15.0724 9.82976 15.2225 9.35127 15.4807 8.93002C15.7388 8.50876 16.097 8.15778 16.5235 7.90826C16.9499 7.65874 17.4313 7.5184 17.9251 7.49971C18.5165 7.47731 19.1014 7.63039 19.6061 7.93967C20.1108 8.24895 20.5127 8.70061 20.7613 9.23781C21.0098 9.775 21.0939 10.3737 21.0029 10.9586C20.912 11.5435 20.65 12.0884 20.2501 12.5247Z" fill="#A856DB"></path>
<path d="M20.73 11.7374C20.1743 11.9865 19.556 12.0606 18.9571 11.9498C18.3583 11.839 17.8074 11.5486 17.3776 11.1172C16.9478 10.6858 16.6595 10.1337 16.551 9.53451C16.4424 8.93528 16.5188 8.31721 16.77 7.76244C17.3257 7.51335 17.9441 7.43928 18.5429 7.55007C19.1417 7.66086 19.6927 7.95127 20.1225 8.3827C20.5523 8.81412 20.8406 9.36614 20.9491 9.96537C21.0576 10.5646 20.9812 11.1827 20.73 11.7374Z" fill="#EF66F2"></path>
<path d="M18 11.25C17.8011 11.25 17.6103 11.171 17.4697 11.0303C17.329 10.8897 17.25 10.6989 17.25 10.5C17.25 10.3517 17.294 10.2067 17.3764 10.0833C17.4588 9.95999 17.5759 9.86386 17.713 9.80709C17.85 9.75032 18.0008 9.73547 18.1463 9.76441C18.2918 9.79335 18.4254 9.86478 18.5303 9.96967C18.6352 10.0746 18.7067 10.2082 18.7356 10.3537C18.7645 10.4992 18.7497 10.65 18.6929 10.787C18.6361 10.9241 18.54 11.0412 18.4167 11.1236C18.2933 11.206 18.1483 11.25 18 11.25Z" fill="#8C45C4"></path>
<path d="M16.59 7.85238C15.5175 8.41488 15.6 9.06738 15.3825 8.73738C14.205 7.16238 11.535 4.10238 10.35 5.69988C10.2307 5.85901 10.053 5.96421 9.85607 5.99234C9.65916 6.02047 9.45913 5.96923 9.3 5.84988C9.14087 5.73053 9.03567 5.55286 9.00754 5.35594C8.97941 5.15903 9.03066 4.95901 9.15 4.79988C10.4625 3.03738 12.3975 3.67488 14.07 5.07738C15.0069 5.90956 15.8517 6.83988 16.59 7.85238Z" fill="#8C45C4"></path>
<path d="M18.075 7.49992C18.8575 7.51949 19.6015 7.84418 20.148 8.40468C20.6944 8.96518 21.0002 9.7171 21 10.4999C23.9025 10.4999 25.9125 9.38992 27.105 7.82242C27.5541 7.23643 27.7657 6.50258 27.6975 5.76742C27.585 4.41742 27.195 2.01742 25.905 0.757419C22.8675 0.247419 18.63 4.16992 18.075 7.49992Z" fill="#EF66F2"></path>
<path d="M20.8875 11.2949C22.5 13.9724 24 18.4349 24 21.7499L26.25 17.9999L28.8675 19.9649C28.305 16.9649 27.1425 13.2149 25.1175 10.9199C22.8525 11.5874 21 11.0624 20.8875 11.2949Z" fill="#EF66F2"></path>
<path d="M26.6999 5.85004C26.5408 5.96939 26.3408 6.02063 26.1438 5.9925C25.9469 5.96437 25.7693 5.85917 25.6499 5.70004C24.1499 3.72004 20.7149 8.70004 20.5049 8.85004C20.229 8.43124 19.8525 8.08829 19.4099 7.85254C19.4099 7.77754 22.3574 3.72754 24.8399 3.72754C26.1674 3.75004 27.6599 5.13004 26.6999 5.85004Z" fill="#8C45C4"></path>
</g>
<defs>
<clipPath id="clip0_1300_199">
<rect width="36" height="36" fill="white"></rect>
</clipPath>
</defs>
</svg>

    <span>${
			new Date().getDate() % 2 === 0 ? '96' : '97'
		}% of reviewers would recommend this gift to a friend.</span>
</div>
`;
const recommend_int = setInterval(() => {
	const option_area = document.querySelector(
		'.htusb-ui-prod-boost-generic-pricing'
	);
	if (option_area && !document.querySelector('.recommend-option')) {
		option_area.insertAdjacentHTML('beforebegin', recommend_html);
		clearInterval(recommend_int);
	}
}, 10);
const rev_html = (rating_value, review_count) => `
<style>
    .price-ui-badges.price-ui-badges--square {
        display: none;
    }
    .new-rev {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .new-rev strong {
        color: #000;
        text-align: center;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }
    .new-rev span {
        color: #949494;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
    }
</style>
<div class="new-rev">
    <svg width="74" height="14" viewBox="0 0 74 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="black"></path>
        <path d="M22 0L23.5716 4.83688H28.6574L24.5429 7.82624L26.1145 12.6631L22 9.67376L17.8855 12.6631L19.4571 7.82624L15.3426 4.83688H20.4284L22 0Z" fill="black"></path>
        <path d="M37 0L38.5716 4.83688H43.6574L39.5429 7.82624L41.1145 12.6631L37 9.67376L32.8855 12.6631L34.4571 7.82624L30.3426 4.83688H35.4284L37 0Z" fill="black"></path>
        <path d="M52 0L53.5716 4.83688H58.6574L54.5429 7.82624L56.1145 12.6631L52 9.67376L47.8855 12.6631L49.4571 7.82624L45.3426 4.83688H50.4284L52 0Z" fill="black"></path>
        <path d="M67 0L68.5716 4.83688H73.6574L69.5429 7.82624L71.1145 12.6631L67 9.67376L62.8855 12.6631L64.4571 7.82624L60.3426 4.83688H65.4284L67 0Z" fill="black"></path>
    </svg>
    <strong>${rating_value}/5</strong>
    <span>
        <b>${Number(review_count - 1)}+</b> Happy customers </span>
</div>
`;
const rev_int = setInterval(() => {
	const header = document.querySelector(
		'.product-block.product-block--title.product-block--first'
	);
	const rating_value = document
		.querySelector('.stamped-header [itemprop="ratingValue"]')
		.getAttribute('content');
	const review_count = document
		.querySelector('.stamped-header [itemprop="reviewCount"]')
		.getAttribute('content');
	if (
		header &&
		rating_value &&
		review_count &&
		!document.querySelector('.new-rev')
	) {
		header.insertAdjacentHTML(
			'beforebegin',
			rev_html(rating_value, review_count)
		);
		clearInterval(rev_int);
	}
}, 10);
window.addEventListener('scroll', function () {
	const div = document.querySelector('.purchase-details');
	const button = document.querySelector('.purchase-details button');
	const topOffset = div.getBoundingClientRect().top;
	if (topOffset < -70) {
		button.classList.add('float-new-btn');
		button.setAttribute('style', 'position:fixed !important');
	} else {
		button.classList.remove('float-new-btn');
		button.setAttribute('style', 'position:relative !important');
	}
});
setInterval(() => {
	const save = document.querySelector('.sale.savings');
	if (save) {
		save.innerHTML = save.innerHTML.replace('You ', '');
	}
}, 10);
