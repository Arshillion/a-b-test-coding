const checkSvg = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.58885 0 0 3.58885 0 8C0 12.4112 3.58885 16 8 16C12.4112 16 16 12.4112 16 8C16 3.58885 12.4112 0 8 0ZM12.1635 5.31885L6.99423 11.4727C6.93753 11.5402 6.86697 11.5948 6.78734 11.6327C6.70771 11.6706 6.62087 11.6909 6.53269 11.6923H6.52231C6.43605 11.6923 6.35077 11.6741 6.27199 11.639C6.1932 11.6039 6.12268 11.5526 6.065 11.4885L3.84962 9.02692C3.79335 8.96725 3.74959 8.89693 3.72089 8.8201C3.69219 8.74327 3.67914 8.66148 3.6825 8.57953C3.68587 8.49758 3.70558 8.41714 3.74047 8.34292C3.77537 8.2687 3.82476 8.2022 3.88572 8.14734C3.94668 8.09247 4.018 8.05035 4.09548 8.02345C4.17295 7.99654 4.25502 7.98539 4.33687 7.99065C4.41872 7.99592 4.49869 8.01749 4.57208 8.0541C4.64547 8.09071 4.7108 8.14162 4.76423 8.20385L6.50615 10.1392L11.2212 4.52731C11.3269 4.40503 11.4766 4.32928 11.6377 4.31644C11.7989 4.3036 11.9586 4.35469 12.0824 4.45868C12.2062 4.56266 12.2841 4.71119 12.2993 4.87215C12.3144 5.0331 12.2656 5.19356 12.1635 5.31885Z" fill="#009E6E"/>
</svg>
`;

const ausSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.83 1.35201L16.553 6.049L13.553 3.79901L14.369 2.18401L10.439 2.563L9.80298 4.549L8.13998 3.35501L4.98998 7.368L1.09998 9.646L2.73098 16.994L4.55298 17.299L9.80298 14.299L13.29 16.741L14.303 15.424L15.803 18.799L19.875 19.474L22.901 13.549L22.619 10.516L19.553 6.8L17.83 1.35201ZM17.139 20.628L17.846 22.648L18.803 22.549L19.339 20.868L17.139 20.628Z" fill="black"></path>
</svg>
`;

const qualitySvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.94 17.89C21.8888 18.0387 21.8033 18.1733 21.6903 18.2828C21.5774 18.3922 21.4402 18.4735 21.29 18.52L18.58 19.32L16.89 21.59C16.7979 21.716 16.6776 21.8188 16.5386 21.89C16.3997 21.9612 16.2461 21.9988 16.09 22C15.9305 21.9981 15.7737 21.9581 15.6328 21.8833C15.4919 21.8085 15.3709 21.7011 15.28 21.57L12.4 17.46C12.2965 17.317 12.2328 17.1491 12.2152 16.9735C12.1977 16.7978 12.2269 16.6207 12.3 16.46C12.3646 16.3051 12.4672 16.1689 12.5982 16.0641C12.7293 15.9592 12.8847 15.889 13.05 15.86C13.9288 15.7067 14.7619 15.3574 15.4872 14.838C16.2126 14.3187 16.8117 13.6426 17.24 12.86C17.3651 12.6378 17.5704 12.4717 17.814 12.3959C18.0575 12.3201 18.3208 12.3401 18.55 12.452C18.7025 12.5272 18.8333 12.6401 18.93 12.78L21.82 17C21.908 17.1287 21.9647 17.2762 21.9855 17.4308C22.0063 17.5853 21.9907 17.7426 21.94 17.89ZM10.94 15.89C10.0611 15.7367 9.22808 15.3874 8.5027 14.868C7.77733 14.3487 7.17826 13.6726 6.74998 12.89C6.66674 12.743 6.54761 12.6194 6.4037 12.5309C6.25979 12.4424 6.09581 12.3918 5.92704 12.3838C5.75828 12.3758 5.59025 12.4107 5.43862 12.4852C5.287 12.5598 5.15673 12.6715 5.05998 12.81L2.17998 17C2.08959 17.1302 2.03143 17.2799 2.01029 17.437C1.98914 17.594 2.00562 17.7538 2.05835 17.9032C2.11109 18.0526 2.19858 18.1874 2.31361 18.2964C2.42864 18.4053 2.56792 18.4854 2.71998 18.53L5.41998 19.33L7.10998 21.6C7.20207 21.726 7.32239 21.8288 7.46131 21.9C7.60023 21.9712 7.75388 22.0088 7.90998 22.01C8.0695 22.0081 8.22626 21.9681 8.36717 21.8933C8.50808 21.8185 8.62905 21.7111 8.71997 21.58L11.6 17.47C11.7034 17.327 11.7672 17.1591 11.7847 16.9835C11.8023 16.8078 11.773 16.6307 11.7 16.47C11.6362 16.3268 11.5396 16.2005 11.418 16.1015C11.2964 16.0025 11.1532 15.9335 11 15.9L10.94 15.89Z" fill="black"></path>
<path d="M17.3033 15.3033C15.8968 16.7098 13.9891 17.5 12 17.5C10.0109 17.5 8.10322 16.7098 6.6967 15.3033C5.29018 13.8968 4.5 11.9891 4.5 10C4.5 8.01088 5.29018 6.10322 6.6967 4.6967C8.10322 3.29018 10.0109 2.5 12 2.5C13.9891 2.5 15.8968 3.29018 17.3033 4.6967C18.7098 6.10322 19.5 8.01088 19.5 10C19.5 11.9891 18.7098 13.8968 17.3033 15.3033Z" fill="black" stroke="white"></path>
<path d="M13 12V7C12.9991 6.80255 12.9398 6.60977 12.8294 6.44603C12.7191 6.28228 12.5627 6.15491 12.38 6.08C12.1978 6.00342 11.9971 5.9825 11.8031 6.01987C11.6092 6.05725 11.4306 6.15124 11.29 6.29L10.29 7.29C10.1489 7.42987 10.0527 7.60857 10.0137 7.80332C9.97461 7.99807 9.99442 8.20004 10.0706 8.38348C10.1468 8.56693 10.2758 8.72353 10.4413 8.83333C10.6069 8.94314 10.8013 9.00116 11 9V12C10.7347 12 10.4804 12.1054 10.2928 12.2929C10.1053 12.4804 9.99996 12.7348 9.99996 13C9.99996 13.2652 10.1053 13.5196 10.2928 13.7071C10.4804 13.8946 10.7347 14 11 14H13C13.2652 14 13.5195 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13C14 12.7348 13.8946 12.4804 13.7071 12.2929C13.5195 12.1054 13.2652 12 13 12Z" fill="white"></path>
</svg>
`;

const guaranteeSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.854 2.05789C11.854 2.05789 14.581 5.92102 20.9439 7.05722C20.9439 7.11259 20.944 7.17081 20.9442 7.23176C20.9493 9.92245 20.9647 17.9422 11.854 21.9421C2.74338 17.9426 2.75877 9.9229 2.76394 7.23199C2.76405 7.17095 2.76416 7.11266 2.76416 7.05722C9.12649 5.92102 11.854 2.05789 11.854 2.05789ZM11.8539 20.19C11.8539 20.1901 11.854 20.1901 11.854 20.1901H11.8537C11.8538 20.1901 11.8538 20.1901 11.8539 20.19ZM4.36516 8.34129C4.45681 11.3935 5.24813 16.9741 11.8539 20.19C18.459 16.9741 19.2504 11.3935 19.3414 8.34129C15.6383 7.41729 13.2031 5.65195 11.8537 4.39706C10.5041 5.65195 8.06859 7.41729 4.36516 8.34129Z" fill="black"></path>
<path d="M18.161 8.51402C16.6793 8.10174 15.4378 7.54032 14.4219 6.95063C13.2981 6.29755 12.4493 5.60906 11.854 5.0464V12.0571H18.2427C18.5823 10.7696 18.674 9.57783 18.6973 8.65508C18.5176 8.61156 18.3388 8.56453 18.161 8.51402ZM5.46619 12.0571C5.69983 12.9432 6.04904 13.8747 6.57691 14.7956C7.15106 15.7944 7.93152 16.7806 8.99626 17.6803C9.78386 18.3483 10.7259 18.9688 11.854 19.5131V12.0571H5.46619Z" fill="black"></path>
</svg>
`;

const style = `
<style>
.kaching-bundles .kaching-bundles__block-title::after, .kaching-bundles .kaching-bundles__block-title::before {
    display: none!important;

}
.kaching-bundles .kaching-bundles__block-title {
    align-items: flex-start;
}
.kaching-bundles__bars{
    border: 1px solid #EEEEEE;
    bordrer-radius: 12px;
    padding: 8px 12px;
}
.kaching-bundles__bar{
    border-bottom: 1px solid #EEEEEE;
}
.kaching-bundles .kaching-bundles__bar :checked+.kaching-bundles__bar-container .kaching-bundles__bar-radio{
    background: rgb(0 0 0)!important;
    box-shadow: 0 0 0 2px rgb(0 0 0)!important;
}
.kaching-bundles .kaching-bundles__bar :checked+.kaching-bundles__bar-container {
    background-color: none!important;
    box-shadow: unset!important;
}
.kaching-bundles .kaching-bundles__bar .kaching-bundles__bar-container {
    background-color: unset!important;
    box-shadow: none!important;
}
.kaching-bundles .kaching-bundles__bar-radio {
    box-shadow: 0 0 0 1px rgb(0 0 0)!important;
}
.kaching-bundles__bar-pricing .kaching-bundles__bar-price{
    color: #7A7A7A;
    font-size: 16px;
    font-weight: 400;
}
.kaching-bundles__bar-pricing .kaching-bundles__bar-full-price{
    font-size: 16px;
    font-weight: 600;
    color: #FF6B00;
}
.sc-fHeRUh.ihgygX.pf-2619_ i{
    color: #009E6E!important;
}
.stock-elm{
    display: flex;
    align-items: center;
    gap:6px;
    margin:10px 0;
}
.stock-elm span{
    font-size: 14px;
    font-weight: 500;
    color: #009E6E;
}
.sc-jrQzAO.kXeyzY.pf-icon-right{
    display: none!important;
}
.usp-elm{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap:8px;
    margin:20px 0;
}
.usp-elm .divider{
    border: 1px solid #000000;
}
.single-usp{
    display: flex;
    align-items: center;
    gap:6px;
}
.single-usp span{
    font-weight: 500;
    font-size: 12px;
}
.sc-bLdqUH.eCxunz.pf-2651_.pf-button-1.animate-pop.pulse{
    background: #000000;
    border: 3px solid #000000;
    border-radius: 8px;
    padding: 18px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 600;
}
.sc-bLdqUH.eCxunz.pf-2648_.pf-button-1.animate-pop.pulse{
    background: #F5A623;
    border: 3px solid #f5a623;
    border-radius: 8px;
    padding: 18px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 600;
}
.sc-fkJVfC.cpknaP.pf-2629_.pf-text-1.pf-sm-hide{
    gap: 12px;
    align-items: center;
    padding-left: 0;
}
.sc-fkJVfC.cpknaP.pf-2629_.pf-text-1.pf-sm-hide *{
    margin: 0;
    padding: 0;
}
.sc-fkJVfC.cpknaP.pf-2629_.pf-text-1.pf-sm-hide .save-elm{
    background: #E500531F;
    font-size: 14px;
    font-weight: 700;
    color: #FF437A;
    padding: 2px 10px;
    border-radius: 4px;
}
.sc-fkJVfC.cpknaP.pf-2629_.pf-text-1.pf-sm-hide .pf-2630_{
    font-size: 24px;
    font-weight: 700;
    color: #FF6B00;
}
.sc-fkJVfC.cpknaP.pf-2629_.pf-text-1.pf-sm-hide .pf-2631_{
    color: #9A9A9A;
    font-size: 18px;
    font-weight: 400;
}
.sc-fkJVfC.cpknaP.pf-2629_.pf-text-1.pf-sm-hide .now-elm{
    font-size: 20px;
    font-weight: 500;
    color: #FF6B00;
}
</style>
`;

const new_elm_html = `
<div class="usp-elm">
    <div class="single-usp">
        ${ausSvg}
        <span>Australian Owned</span>
    </div>
    <div class="divider"></div>
    <div class="single-usp">
        ${qualitySvg}
        <span>Highest Quality Tool</span>
    </div>
    <div class="divider"></div>
        <div class="single-usp">
        ${guaranteeSvg}
        <span>60 Day Money Back Guarantee</span>
    </div>
</div>
`;

const stock_html = `
<div class="stock-elm">
    ${checkSvg}
    <span>In Stock & ready to ship</span>
</div>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^\d\-+\.]/g, ''));
};

const interval = setInterval(() => {
	try {
		const formAction = document.querySelector('.sc-fHeRUh.ihgygX.pf-2647_');
		const price = document.querySelector(
			'.sc-fkJVfC.cpknaP.pf-2629_.pf-text-1.pf-sm-hide'
		);
		const head = document.querySelector('head');
		const disPrice = numberOnly(
			price.querySelector('div:first-child').innerText
		);
		const originalPrice = numberOnly(
			price.querySelector('div:last-child').innerText
		);
		const savePrice = (originalPrice - disPrice).toFixed(2);
		if (formAction && price && head && !document.querySelector('.usp-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			price.insertAdjacentHTML(
				'afterbegin',
				`<span class="now-elm">Now</span>`
			);
			price.insertAdjacentHTML(
				'beforeend',
				`<span class="save-elm">Save $${savePrice}</span>`
			);
			formAction.insertAdjacentHTML('beforebegin', stock_html);
			formAction.insertAdjacentHTML('afterend', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
