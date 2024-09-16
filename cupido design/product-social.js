const eye_svg = `
<svg
	width="32"
	height="33"
	viewBox="0 0 32 33"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M15.9788 7.5C11.1076 7.5 6.11069 10.3194 2.17693 15.9581C2.06465 16.1208 2.00312 16.3132 2.00012 16.5109C1.99711 16.7086 2.05277 16.9027 2.16006 17.0688C5.18256 21.8 10.1126 25.5 15.9788 25.5C21.7813 25.5 26.8126 21.7888 29.8407 17.0469C29.9455 16.8841 30.0012 16.6945 30.0012 16.5009C30.0012 16.3073 29.9455 16.1178 29.8407 15.955C26.8057 11.2675 21.7376 7.5 15.9788 7.5Z"
		stroke="white"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M16 21.5C18.7614 21.5 21 19.2614 21 16.5C21 13.7386 18.7614 11.5 16 11.5C13.2386 11.5 11 13.7386 11 16.5C11 19.2614 13.2386 21.5 16 21.5Z"
		stroke="white"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
</svg>`;

const star_svg = `
<svg width="83" height="16" viewBox="0 0 83 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0.5L9.69097 4.98439L14.6329 5.68237L11.0451 9.15186L11.9084 14.0676L7.5 11.7275L3.09161 14.0676L3.95494 9.15186L0.367076 5.68237L5.30903 4.98439L7.5 0.5Z" fill="#FF9E0D"/>
    <path d="M24.5 0.5L26.691 4.98439L31.6329 5.68237L28.0451 9.15186L28.9084 14.0676L24.5 11.7275L20.0916 14.0676L20.9549 9.15186L17.3671 5.68237L22.309 4.98439L24.5 0.5Z" fill="#FF9E0D"/>
    <path d="M41.5 0.5L43.691 4.98439L48.6329 5.68237L45.0451 9.15186L45.9084 14.0676L41.5 11.7275L37.0916 14.0676L37.9549 9.15186L34.3671 5.68237L39.309 4.98439L41.5 0.5Z" fill="#FF9E0D"/>
    <path d="M58.5 0.5L60.691 4.98439L65.6329 5.68237L62.0451 9.15186L62.9084 14.0676L58.5 11.7275L54.0916 14.0676L54.9549 9.15186L51.3671 5.68237L56.309 4.98439L58.5 0.5Z" fill="#FF9E0D"/>
    <path d="M75.5 0.5L77.691 4.98439L82.6329 5.68237L79.0451 9.15186L79.9084 14.0676L75.5 11.7275L71.0916 14.0676L71.9549 9.15186L68.3671 5.68237L73.309 4.98439L75.5 0.5Z" fill="#FF9E0D"/>
</svg>
`;
const style = `
<style>
    #r-1698334340291, #m-1681222740762, #r-1698331910893, #r-1680958187116, #r-1698333112570, #r-1698337581076 {
        display: none!important;
    }
    #c-1631095168934 #r-1698334184777 {
        border: 0!important;
    }
    .gf_product-prices {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
    }
    #c-1698330487292 #m-1680957036352 .gf_product-price {
        font-size: 24px !important;
        font-weight: 700 !important;
        color: #00CA8D !important;
    }
    #c-1698330487292 #m-1680957036352 .gf_product-compare-price {
        font-size: 18px !important;
        font-weight: 400;
    }
    #c-1698330487292 #bcpo .bcpo-front-button-option:checked + .bcpo-front-button-label {
        border: 2px solid #000000;
    }
    #c-1698330487292 #m-1680957036352 .gf_pq-discount {
        font-size: 14px !important;
        font-weight: 500 !important;
        line-height: 28px;
        background: #3B82F6 !important;
        color: #fff !important;
        border: none !important;
    }
    #m-1681240900071 #bcpo .bcpo-buttons label.bcpo-front-button-label {
        border: 1px solid #E0E0E0;
        background: white;
        color: black;
        font-size: 14px !important;
        line-height: 14px !important;
        border-radius: 4px !important;
    }
    #m-1681240900071 #bcpo .bcpo-title {
        font-size: 16px;
        font-weight: 400;
    }
    #m-1681240900071 #bcpo .bcpo-value {
        font-size: 16px;
        font-weight: 600;
    }
    #m-1681240900071 #bcpo .bcpo-images input:checked + label {
        border: 2px solid #253368 !important;;
        box-shadow: none !important;
    }
    #m-1681240900071 #bcpo .bcpo-images .bcpo-medium-swatches div.bcpo-image-parent {
        padding: 0;
        border: 1px solid #E1E1E1;
        border-radius: 4px;
        width: 64px;
        overflow: hidden;
    }
    #m-1681240900071 .bcpo-label {
        margin-bottom: 8px;
    }
    #c-1631157248483 #m-1680957036368 .gf_add-to-cart {
        border-radius: 4px!important;
    }
    .bcpo-buttons .bcpo-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .ks-chart-container.sizing-chart-container.ks-container-with-modal {
        width: max-content;
    }
    .ks-chart-modal-link.sizing-chart-modal-link.with-icon {
        margin: 0;
    }
    #c-1698330487292 {
        padding-left: 0!important;
        padding-right: 0!important;
    }
    #c-1698330487292 #m-1680957036358 .product-single__title{
        text-align: left!important;
    }
    #r-1698330487290 #e-1701779074874 .text-edit {
        background: #ececec;
        border-radius: 4px;
        overflow: hidden;
        padding: 10px!important;
        border: none!important;
        margin-top: 20px!important;
    }
    .new-rev-elm {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .new-rev-elm svg {
        flex-shrink: 0;
    }
    .new-rev-elm strong {
        font-size: 15px;
        font-weight: 700;
    }
    .new-rev-elm span {
        font-size: 14px;
        font-weight: 500;
        color: #4B5563;
        text-decoration: underline;
    }
    .new-pdp-elm {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
    .new-pdp-elm div {
        display: flex;
        align-items: center;
        border-right: 1px solid;
        gap: 6px;
        padding: 0 10px;
    }
    .new-pdp-elm div:last-child {
        border: 0;
    }
    .new-pdp-elm div img{
        width: 24px;
    }
    .new-pdp-elm div span{
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
    }
    .extra-rev {
        display: flex;
        align-items: baseline;
        margin-top: 20px;
        gap: 10px;
    }
    .extra-rev svg{
        flex-shrink: 0;
    }
    .extra-rev-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
    }
    .extra-rev-info .rev-user{
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
    }
    .extra-rev-info svg {
        margin-left: auto;
    }
    .extra-rev-info p{
        grid-column: span 2;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: #3b3b3b;
    }
    .social-proof {
        position: absolute;
        top: 16px;
        left: 0px;
        display: grid;
        grid-template-columns: auto 1fr;
        padding: 6px 20px 6px 10px;
        gap: 0px 10px;
        align-items: end;
        border-radius: 0px 40px 40px 0px;
        background: #FF437A;
        box-shadow: 1px 4px 5.599999904632568px 0px #695D5C61;
        z-index: 99;
    }
    .social-proof svg{
        grid-row: span 2;
        flex-shrink: 0;
    }
    .social-proof strong{
        color: #FFFFFF;
        font-family: Lato;
        font-size: 14px;
        font-weight: 700;
    }
    .social-proof span{
        color: #FFFFFF;
        font-family: Lato;
        font-size: 10px;
        font-weight: 400;
    }
    @media only screen and (max-width:767px) {
        .new-rev-elm {
            gap: 6px;
        }
        .new-rev-elm strong {
            font-size: 13px;
        }
        .new-rev-elm span {
            font-size: 12px;
        }
        .new-pdp-elm {
            margin: 16px 0;
        }
        .new-pdp-elm div {
            gap: 4px;
        }
        .new-pdp-elm div img{
            width: 18px;
        }
        .new-pdp-elm div span{
            font-size: 12px;
            line-height: 14px;
        }
        #m-1681240900071 #bcpo .bcpo-title {
            font-size: 14px;
        }
        #m-1681240900071 #bcpo .bcpo-value {
            font-size: 14px;
        }
        #m-1681240900071 #bcpo #bcpo-select-option-1 {
            margin-bottom: 6px;
        }
    }
    @media only screen and (max-width:480px) {
        .new-rev-elm {
            gap: 4px;
        }
        .new-rev-elm strong {
            font-size: 11px;
        }
        .new-rev-elm span {
            font-size: 10px;
        }
        .new-pdp-elm {
            margin: 12px 0;
        }
        .new-pdp-elm div {
            gap: 3px;
            padding: 0 6px;
        }
        .new-pdp-elm div img{
            width: 16px;
        }
        .new-pdp-elm div span{
            font-size: 10px;
            line-height: 12px;
        }
        ._ks_text{
            font-size: 12px;
        }
        #m-1681240900071 #bcpo .bcpo-title {
            font-size: 12px;
        }
        #m-1681240900071 #bcpo .bcpo-value {
            font-size: 12px;
        }
    }
</style>
`;

const new_elm_html = `
<div class="new-rev-elm">
    <strong>4.9/5</strong>
    ${star_svg}
    <span>Più di 14,000+ clienti soddisfatti</span>
</div>
`;

const new_elm_html_sec = `
<div class="new-pdp-elm">
    <div>
        <img src="https://ucarecdn.com/acf20fcc-bbda-4d3c-ae1e-dd840006969e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Icon%20Spedizione%20Gratuita%20Cupido.png" alt="" />
        <span>Made In Italy</span>
    </div>
    <div>
        <img src="https://ucarecdn.com/afe8f111-1052-4189-8bbd-3dcec57e4e14/-/format/auto/-/preview/3000x3000/-/quality/lighter/Icon%20Pagamento%20Sicuro%20Cupido.png" alt="" />
        <span>Pagamento Sicuro</span>
    </div>
    <div>
        <img src="https://ucarecdn.com/131f2e4a-5013-402e-9ead-2a89029dc92c/-/format/auto/-/preview/3000x3000/-/quality/lighter/Installments%20Payments%20_1_.png" alt="" />
        <span>Pagamento a rate</span>
    </div>
</div>
<div class="extra-rev">
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.9745 7.07058C8.9745 9.73873 10.5156 11.4286 12.6459 11.4286C14.6402 11.4286 16 10.05 16 8.09337C16 6.13673 14.6856 5.025 13.0538 5.025C12.5552 5.025 12.1473 5.11394 11.7847 5.24734C11.7847 3.69093 13.1898 2.49026 15.1388 2.13451V-1.23978e-05C11.5127 0.444678 8.9745 3.33517 8.9745 7.07058ZM0 7.07058C0 9.73873 1.54107 11.4286 3.67139 11.4286C5.66572 11.4286 7.0255 10.05 7.0255 8.09337C7.0255 6.13673 5.75637 5.025 4.12465 5.025C3.62606 5.025 3.21813 5.11394 2.85552 5.24734C2.85552 3.69093 4.2153 2.49026 6.16431 2.13451V-1.23978e-05C2.53824 0.444678 0 3.33517 0 7.07058Z" fill="black"/>
    </svg>
    <div class="extra-rev-info">
        <strong class="rev-user">
            <span>Pasquale C.</span>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0.5L0.5 2.5V5.5C0.5 8.2775 2.4175 10.8675 5 11.5C7.5825 10.8675 9.5 8.2775 9.5 5.5V2.5L5 0.5ZM4 8.5L2 6.5L2.7075 5.7925L4 7.085L7.2925 3.7925L8 4.5L4 8.5Z" fill="#00A3FF"/>
            </svg>            
        </strong>
        <svg width="83" height="16" viewBox="0 0 83 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0.5L9.69097 4.98439L14.6329 5.68237L11.0451 9.15186L11.9084 14.0676L7.5 11.7275L3.09161 14.0676L3.95494 9.15186L0.367076 5.68237L5.30903 4.98439L7.5 0.5Z" fill="#00CA8D"/>
            <path d="M24.5 0.5L26.691 4.98439L31.6329 5.68237L28.0451 9.15186L28.9084 14.0676L24.5 11.7275L20.0916 14.0676L20.9549 9.15186L17.3671 5.68237L22.309 4.98439L24.5 0.5Z" fill="#00CA8D"/>
            <path d="M41.5 0.5L43.691 4.98439L48.6329 5.68237L45.0451 9.15186L45.9084 14.0676L41.5 11.7275L37.0916 14.0676L37.9549 9.15186L34.3671 5.68237L39.309 4.98439L41.5 0.5Z" fill="#00CA8D"/>
            <path d="M58.5 0.5L60.691 4.98439L65.6329 5.68237L62.0451 9.15186L62.9084 14.0676L58.5 11.7275L54.0916 14.0676L54.9549 9.15186L51.3671 5.68237L56.309 4.98439L58.5 0.5Z" fill="#00CA8D"/>
            <path d="M75.5 0.5L77.691 4.98439L82.6329 5.68237L79.0451 9.15186L79.9084 14.0676L75.5 11.7275L71.0916 14.0676L71.9549 9.15186L68.3671 5.68237L73.309 4.98439L75.5 0.5Z" fill="#00CA8D"/>
        </svg>
        <p>Bellissimo!... L' ho acquistato per arredare il mio soggiorno insieme a " passione di Londra" si abbinano perfettamente. I miei complimenti per l' imballaggio</p>
    </div>
</div>
`;

const social_proof = (views) => `
<div class="social-proof">
    ${eye_svg}
    <strong>Get it or regret it</strong>
    <span>${views} views in last 24 hours</span>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#m-1680957036358');
	const exist_elm_pay = document.querySelector('#r-1680958187116');
	const title_lab_btn = document.querySelector('.bcpo-buttons .bcpo-label');
	const size_modal = document.querySelector(
		'.ks-chart-container.sizing-chart-container.ks-container-with-modal'
	);
	const title_btn = document.querySelector('.bcpo-buttons .bcpo-title');
	const title_img = document.querySelector('.bcpo-images .bcpo-title');
	const slide_img = document.querySelector('#r-1680957036303');
	const head = document.querySelector('head');
	if (
		exist_elm &&
		exist_elm_pay &&
		title_btn &&
		title_img &&
		head &&
		slide_img &&
		title_lab_btn &&
		size_modal &&
		!document.querySelector('.new-rev-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		title_btn.innerHTML = 'SCEGLI: Misura in cm (altezza x larghezza):';
		title_img.innerHTML = 'SCEGLI: Tipologia di prodotto:';
		title_lab_btn.insertAdjacentElement('beforeend', size_modal);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		exist_elm_pay.insertAdjacentHTML('beforebegin', new_elm_html_sec);
		const random_num = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
		slide_img.insertAdjacentHTML('beforeend', social_proof(random_num));
		clearInterval(interval);
	}
}, 10);

function numberOnly(string) {
	return parseFloat(string.replace(',', '.').replace(/[^0-9\-+\.]/g, ''));
}

function currencyOnly(string) {
	return string.replace(/[0-9,. ]/g, '');
}

let dis_prev_price = null;

const price_chk_int = setInterval(() => {
	const dis_select = document.querySelector(
		'.gf_pq-discount-selector .gf_pq-discount'
	);
	const comp_price = document.querySelector(
		'.gf_product-compare-price'
	).innerText;
	const prod_price = document.querySelector('.gf_product-price').innerText;
	const dis_price = numberOnly(comp_price) - numberOnly(prod_price);
	const currency = currencyOnly(prod_price);

	if (dis_select && dis_price && currency && dis_price !== dis_prev_price) {
		dis_prev_price = dis_price;
		dis_select.innerHTML = `Risparmia ${currency}${dis_price.toFixed(2)}`;
	}
}, 500);
