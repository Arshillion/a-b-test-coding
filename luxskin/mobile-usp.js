const star_svg = `
<svg
	width="89"
	height="16"
	viewBox="0 0 89 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		width="16"
		height="16"
		transform="translate(0.5)"
		fill="#FF437B"
	/>
	<path
		d="M8.5 3L9.96065 5.98959L13.2553 6.45492L10.8634 8.76791L11.4389 12.0451L8.5 10.485L5.56107 12.0451L6.13662 8.76791L3.74472 6.45492L7.03935 5.98959L8.5 3Z"
		fill="white"
	/>
	<rect
		width="16"
		height="16"
		transform="translate(18.5)"
		fill="#FF437B"
	/>
	<path
		d="M26.5 3L27.9606 5.98959L31.2553 6.45492L28.8634 8.76791L29.4389 12.0451L26.5 10.485L23.5611 12.0451L24.1366 8.76791L21.7447 6.45492L25.0394 5.98959L26.5 3Z"
		fill="white"
	/>
	<rect
		width="16"
		height="16"
		transform="translate(36.5)"
		fill="#FF437B"
	/>
	<path
		d="M44.5 3L45.9606 5.98959L49.2553 6.45492L46.8634 8.76791L47.4389 12.0451L44.5 10.485L41.5611 12.0451L42.1366 8.76791L39.7447 6.45492L43.0394 5.98959L44.5 3Z"
		fill="white"
	/>
	<rect
		width="16"
		height="16"
		transform="translate(54.5)"
		fill="#FF437B"
	/>
	<path
		d="M62.5 3L63.9606 5.98959L67.2553 6.45492L64.8634 8.76791L65.4389 12.0451L62.5 10.485L59.5611 12.0451L60.1366 8.76791L57.7447 6.45492L61.0394 5.98959L62.5 3Z"
		fill="white"
	/>
	<rect
		width="16"
		height="16"
		transform="translate(72.5)"
		fill="#FF437B"
	/>
	<path
		d="M80.5 3L81.9606 5.98959L85.2553 6.45492L82.8634 8.76791L83.4389 12.0451L80.5 10.485L77.5611 12.0451L78.1366 8.76791L75.7447 6.45492L79.0394 5.98959L80.5 3Z"
		fill="white"
	/>
</svg>`;
const style = `
<style>
    .drawer__inner.drawer-left__inner{
        padding-left: 0;
        padding-right: 0;
    }
    .drawer__inner.drawer-left__inner ul{
        padding: 15px 15px 0;
    }
    .new-rev-elm {
        background: #F8EADD;
        padding: 16px 0;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .new-rev-elm .rating-nav{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .new-rev-elm span{
        display: flex;
        align-items: flex-end;
        font-size: 16px;
        font-weight: 500;
        color: #222239;
    }
    .new-rev-elm strong{
        font-size: 20px;
        font-weight: 800;
    }
    .new-rev-elm h6{
        color: #222239;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
    }
	.social_fr{
		list-style: none;
		display: flex;
		align-items: center;
		gap: 10px;
		justify-content: center;
		margin: 20px 0!important;
		padding: 0!important;
	}
	#NavDrawer{
		background: #F9F5F1;
	}
	.mobile-nav__item--secondary{
		width: 100%;
		border: none!important;
	}
	.mobile-nav>.mobile-nav__item{
		background: #F9F5F1;
	}
	.mobile-nav > li{
		border-bottom: 1px solid #EAE1D8!important;
	}
	.mobile-nav > li:last-child{
		border-bottom: none!important;
	}
	.mobile-nav > li a{
		padding: 15px 0!important;
	}
	.mobile-nav > li a::after{
		display: none!important;
	}
	ul.mobile-nav{
		margin: 0 15px!important;
		padding: 15px 0!important;
	}
	li.social_fr img{
		width: 20px!important;
	}
	li.social_fr a{
		margin: 0!important;
	}
</style>
`;

const new_elm_html = `
<div class="new-rev-elm">
    <div class="rating-nav">
        <span>
            <strong>4.9/</strong>
            5
        </span>
        ${star_svg}
    </div>
    <h6>Over 100,000 5-star reviews!</h6>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'.drawer__inner.drawer-left__inner .mobile-nav'
	);
	const social = document.querySelector(
		'.drawer__inner.drawer-left__inner .social_fr'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-rev-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentElement('afterend', social);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
