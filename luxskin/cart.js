const smile_svg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3207_190)">
<mask id="mask0_3207_190" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
<path d="M0 0H20V20H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_3207_190)">
<path d="M6.78584 4.99994V8.57161M5.00001 6.78578H8.57167M13.2142 4.99994V8.57161M11.4283 6.78578H15M10 19.2858C11.2194 19.2858 12.4269 19.0456 13.5535 18.5789C14.6802 18.1123 15.7038 17.4283 16.5661 16.566C17.4284 15.7038 18.1123 14.6801 18.579 13.5535C19.0457 12.4269 19.2858 11.2194 19.2858 9.99994C19.2858 8.78051 19.0457 7.57302 18.579 6.44641C18.1123 5.3198 17.4284 4.29614 16.5661 3.43387C15.7038 2.5716 14.6802 1.88761 13.5535 1.42095C12.4269 0.954297 11.2194 0.714111 10 0.714111C7.53725 0.714111 5.17536 1.69244 3.43393 3.43387C1.6925 5.1753 0.714172 7.53719 0.714172 9.99994C0.714172 12.4627 1.6925 14.8246 3.43393 16.566C5.17536 18.3075 7.53725 19.2858 10 19.2858Z" stroke="#009E6E" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.04999 11.4282C5.21982 12.6201 5.81397 13.7106 6.7233 14.4996C7.63264 15.2885 8.7961 15.7229 9.99999 15.7229C11.2039 15.7229 12.3673 15.2885 13.2767 14.4996C14.186 13.7106 14.7802 12.6201 14.95 11.4282H5.04999Z" stroke="#009E6E" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_3207_190">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const style = `
<style>
.mu-subtotal{
    background: #F6F6F6;
    padding: 12px 16px!important;
    border-radius: 4px;
}
.mu-subtotal span:first-child{
    font-size: 14px!important;
    font-weight: 400!important;
    line-height: 14px!important;
}
.mu-subtotal span:last-child{
    font-size: 14px!important;
    font-weight: 600!important;
    line-height: 14px!important;
}
#mu-checkout-button{
    background-color: #0D0C22!important;
    color: white!important;
    padding: 12px 24px;
    gap: 10px;
    font-size: 14px!important;
    line-height: 14px!important;
    border-radius: 4px!important;
    margin: 10px 0px 0px!important;
}
#mu-scarcity,#mu-coupon,#mu-ocu-container,.mu-free-gifts-container,.mu-atu-banner:first-child{
    display: none!important;
}
#mu-checkout-container{
    border-top-width: 0!important;
}
.refund-policy{
    background: #EEFBF7;
    padding: 4px 8px 4px 8px;
    gap: 8px;
    display: flex;
    align-items: center;
    border-radius: 20px 0px 0px 0px;
    margin: 10px auto!important;
    width: max-content;
}
.refund-policy span{
    font-size: 12px;
    font-weight: 500;
    color: #009E6E;
}
#mu-header > div {
    box-shadow: 0px 4px 12px 0px #00000014!important;
    background: #FFFFFF!important;
    margin-bottom: 10px!important;
}
.mu-cart-item .mu-flex-1.mu-flex-col {
    display: flex;
    justify-content: space-between;
    gap: 8px;
}
.mu-cart-item .mu-item-title {
    order: 1;
    margin: 0!important;
}
.mu-cart-item .mu-flex.mu-items-center {
    order: 3;
    flex-direction: row-reverse;
    justify-content: space-between;
}
.mu-cart-item .mu-flex.mu-items-center b {
    flex: 0 1 0%!important;
}
.mu-remove-item-container{
    display: block!important;
    order: 2!important;
}
.mu-remove-item-container button{
    border: none!important;
    padding: 0!important;
}
</style>
`;

const refund_html = `
<div class="refund-policy">
    ${smile_svg}
    <span>90 DAYS FULL REFUND GUARANTEE</span>
</div>
`;

const interval = setInterval(() => {
	const head = document.querySelector('head');
	const muContainer = document.querySelector('#mu-checkout-container');
	if (head) {
		head.insertAdjacentHTML('beforeend', style);
		muContainer.insertAdjacentHTML('beforeend', refund_html);
		clearInterval(interval);
	}
}, 10);
