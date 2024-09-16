const circleSvg = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2084 20.346C16.2711 20.346 20.3753 16.2418 20.3753 11.1791C20.3753 6.11637 16.2711 2.01221 11.2084 2.01221C6.14567 2.01221 2.0415 6.11637 2.0415 11.1791C2.0415 16.2418 6.14567 20.346 11.2084 20.346Z" stroke="white" stroke-width="2"/>
<path d="M15.9357 8.8516C15.9357 9.14137 15.822 9.42105 15.6154 9.62069L10.8104 14.2752C10.5935 14.475 10.3041 14.5948 10.0045 14.5948C9.70477 14.5948 9.41553 14.475 9.20877 14.2752L6.80127 11.948C6.59463 11.7482 6.48096 11.4686 6.48096 11.1789C6.48096 10.8893 6.60486 10.6196 6.81163 10.4098C7.02862 10.2101 7.30749 10.1001 7.60722 10.0902C7.90681 10.0902 8.18582 10.2001 8.40281 10.3999L10.0045 11.948L14.0137 8.07258C14.2307 7.87281 14.5097 7.76294 14.8094 7.76294C15.109 7.77293 15.388 7.8828 15.605 8.09256C15.8116 8.29232 15.9357 8.562 15.9357 8.8516Z" fill="white"/>
</svg>
`;

const style = `
<style>
.custom-header.site-header .grid--full.grid--table{
    display: flex;
    align-items: center;
}
.custom-header.site-header .grid__item.large--one-sixth.one-quarter.custom-misc{
    align-items: center;
    width: max-content;
    display: flex;
}
.nav-message{
    background: #EAB2B0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    font-size: 10px;
    line-height: 12px;
    padding: 8px;
    gap: 6px;
    width: 120px;
    position: relative;
    margin-right: 10px;
}
.nav-message svg{
    flex-shrink: 0;
}
.nav-message::after{
    content: '';
    position: absolute;
    right: -8%;
    top: 50%;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid #EAB2B0;
    clear: both;
    transform: translateY(-50%);

}
#AccessibleNav a:hover{
    color: #FF437A;
    border-bottom: 1px solid #FF437A;
}
#AccessibleNav a::before{
    display: none;
}
</style>
`;

const new_elm_html = `
<div class="nav-message">
    ${circleSvg}
    <span>Your order will ship FREE!</span>
</div>
`;

const interval = setInterval(() => {
	try {
		const navActions = document.querySelector(
			'.grid__item.large--one-sixth.one-quarter.custom-misc'
		);
		const navActionsLast = navActions.querySelector('li:last-child');
		const head = document.querySelector('head');
		if (
			navActions &&
			navActionsLast &&
			head &&
			!document.querySelector('.nav-message')
		) {
			head.insertAdjacentHTML('beforeend', style);
			navActions.insertAdjacentElement('afterbegin', navActionsLast);
			navActions.insertAdjacentHTML('beforebegin', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
