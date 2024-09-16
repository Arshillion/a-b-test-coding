const style = `
<style>
    .new-elm {
        background: #1F2128;
        padding: 16px;
        border-radius: 12px;
        display: grid;
        margin: 40px 20px;
        gap: 12px;
    }
    .new-usp{
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .new-usp svg{
        flex-shrink: 0;
    }
    .new-usp span{
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        color: #ffffff;
    }
    .menu-drawer__localization{
        width: max-content;
        Padding: 10px 16px 10px 16px!important;
        border-radius: 20px;
        margin: auto;
        overflow: hidden;
        flex-wrap: unset!important;
    }
    .menu-drawer__localization:before{
        background-color: #262626!important;
    }
    .header .menu-drawer .localization-selector {
        color: #ffffff;
    }
    .menu-drawer__utility-links {
        border-top: none!important;
    }
    .menu-drawer__utility-links > a {
        display: none;
    }
    .menu-drawer__utility-links > ul {
        margin: auto;
    }
    .menu-drawer__inner-container .menu-drawer__navigation-container .menu-drawer__navigation .list-menu li a, .menu-drawer__inner-container .menu-drawer__navigation-container .menu-drawer__navigation .list-menu li span{
        font-size: 14px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }
</style>
`;

const car_svg = `
<svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
    d="M4.8 4.125C4.125 4.125 3.6 4.65234 3.6 5.25V6.375H9C9.3 6.375 9.6 6.65625 9.6 6.9375C9.6 7.2539 9.3 7.5 9 7.5H0.6C0.2625 7.5 0 7.2539 0 6.9375C0 6.65625 0.2625 6.375 0.6 6.375H2.4V5.25C2.4 4.01953 3.45 3 4.8 3H13.2C14.5125 3 15.6 4.01953 15.6 5.25V6.375H18.0375C18.5625 6.375 19.05 6.62109 19.3875 6.97265L22.35 10.207C22.6125 10.5234 22.8 10.9101 22.8 11.2969V16.5H23.4C23.7 16.5 24 16.7812 24 17.0625C24 17.3789 23.7 17.625 23.4 17.625H21.6C21.6 19.4883 19.9875 21 18 21C16.0125 21 14.4 19.4883 14.4 17.625H9.6C9.6 19.4883 7.98752 21 6 21C4.0125 21 2.4 19.4883 2.4 17.625V16.5V13.125H3.6V15.1289C4.2375 14.6015 5.0625 14.25 6 14.25C7.53749 14.25 8.88752 15.1992 9.37499 16.5H14.4V5.25C14.4 4.65234 13.8375 4.125 13.2 4.125H4.8ZM21.375 10.875L18.4875 7.71094C18.375 7.57031 18.225 7.5 18.0375 7.5H15.6V10.875H21.375ZM15.6 12V15.1289C16.2375 14.6015 17.0625 14.25 18 14.25C19.5375 14.25 20.8875 15.1992 21.375 16.5H21.6V12H15.6ZM3.6 17.625C3.6 18.4336 4.05 19.1719 4.8 19.5938C5.51248 19.9804 6.45003 19.9804 7.2 19.5938C7.91248 19.1719 8.4 18.4336 8.4 17.625C8.4 16.8516 7.91248 16.1133 7.2 15.6914C6.45003 15.3047 5.51248 15.3047 4.8 15.6914C4.05 16.1133 3.6 16.8516 3.6 17.625ZM18 15.375C17.1375 15.375 16.35 15.8321 15.9 16.5C15.4875 17.2031 15.4875 18.0821 15.9 18.75C16.35 19.4531 17.1375 19.875 18 19.875C18.825 19.875 19.6125 19.4531 20.0625 18.75C20.475 18.0821 20.475 17.2031 20.0625 16.5C19.6125 15.8321 18.825 15.375 18 15.375ZM1.8 8.625H10.2C10.5 8.625 10.8 8.90625 10.8 9.1875C10.8 9.5039 10.5 9.75 10.2 9.75H1.8C1.4625 9.75 1.2 9.5039 1.2 9.1875C1.2 8.90625 1.4625 8.625 1.8 8.625ZM0.6 10.875H9C9.3 10.875 9.6 11.1562 9.6 11.4375C9.6 11.7539 9.3 12 9 12H0.6C0.2625 12 0 11.7539 0 11.4375C0 11.1562 0.2625 10.875 0.6 10.875Z"
    fill="white"
/>
</svg>
`;
const undo_svg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25 6.93751L6.24 5.78579C7.07941 4.90415 8.08943 4.20252 9.20859 3.7236C10.3278 3.24468 11.5327 2.99849 12.75 3.00001C17.7188 3.00001 21.75 7.03126 21.75 12C21.75 16.9688 17.7188 21 12.75 21C10.8886 20.9999 9.07297 20.4229 7.55299 19.3484C6.03301 18.2739 4.8834 16.7548 4.26234 15" stroke="white" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M2.25001 3.20858V10.3125C2.25001 10.3622 2.26977 10.4099 2.30493 10.4451C2.34009 10.4802 2.38778 10.5 2.43751 10.5H9.54142C9.57852 10.5 9.6148 10.489 9.64566 10.4684C9.67653 10.4478 9.70058 10.4185 9.71478 10.3843C9.72899 10.35 9.7327 10.3123 9.72545 10.2759C9.71821 10.2395 9.70033 10.2061 9.67407 10.1798L2.57017 3.07593C2.54394 3.04967 2.51052 3.03179 2.47413 3.02455C2.43774 3.0173 2.40002 3.02101 2.36574 3.03522C2.33146 3.04942 2.30216 3.07347 2.28156 3.10434C2.26096 3.1352 2.24998 3.17148 2.25001 3.20858Z" fill="white"/>
</svg>
`;
const star_svg = `
<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.91001L14.6592 7.67514L14.8468 8.08177L15.2914 8.1345L21.5962 8.88202L16.9349 13.1926L16.6062 13.4966L16.6934 13.9358L17.9307 20.163L12.3908 17.0619L12 16.8432L11.6092 17.0619L6.06925 20.163L7.30657 13.9358L7.39385 13.4966L7.06508 13.1926L2.40385 8.88202L8.70855 8.1345L9.15324 8.08177L9.3408 7.67514L12 1.91001Z" stroke="white" stroke-width="1.6"/>
</svg>
`;

const new_elm_html = `
<div class="new-elm">
    <div class="new-usp">
        ${car_svg}
        <span>Free shipping on all orders</span>
    </div>
    <div class="new-usp">
        ${undo_svg}
        <span>14-Day Returns for all in-stock orders</span>
    </div>
    <div class="new-usp">
        ${star_svg}
        <span>All products are backed by our Fitment Guarantee.</span>
    </div>
</div>
`;

const login_html = `
<li>
    <a href="/account/login" class="menu-drawer__menu-item list-menu__itemfocus-inset">
        Log In
    </a>
</li>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.menu-drawer__localization');
	const menu_items = document.querySelector(
		'#menu-drawer .menu-drawer__menu.list-menu'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && menu_items && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		menu_items.insertAdjacentHTML('beforeend', login_html);
		clearInterval(interval);
	}
}, 10);
