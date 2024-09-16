const check_svg = `
<svg
	width="16"
	height="16"
	viewBox="0 0 16 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		width="16"
		height="16"
		rx="8"
		fill="#FDFDFF"
	/>
	<path
		d="M4.75 7.6L6.75 10L11.25 6"
		stroke="#061A4E"
		stroke-width="2"
	/>
</svg>
`;

const star_svg = `
<svg
	width="88"
	height="16"
	viewBox="0 0 88 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M8 0L10.2195 4.94515L15.6085 5.52786L11.5912 9.16685L12.7023 14.4721L8 11.776L3.29772 14.4721L4.40881 9.16685L0.391548 5.52786L5.78052 4.94515L8 0Z"
		fill="black"
	/>
	<path
		d="M26 0L28.2195 4.94515L33.6085 5.52786L29.5912 9.16685L30.7023 14.4721L26 11.776L21.2977 14.4721L22.4088 9.16685L18.3915 5.52786L23.7805 4.94515L26 0Z"
		fill="black"
	/>
	<path
		d="M44 0L46.2195 4.94515L51.6085 5.52786L47.5912 9.16685L48.7023 14.4721L44 11.776L39.2977 14.4721L40.4088 9.16685L36.3915 5.52786L41.7805 4.94515L44 0Z"
		fill="black"
	/>
	<path
		d="M62 0L64.2195 4.94515L69.6085 5.52786L65.5912 9.16685L66.7023 14.4721L62 11.776L57.2977 14.4721L58.4088 9.16685L54.3915 5.52786L59.7805 4.94515L62 0Z"
		fill="black"
	/>
	<path
		d="M80 0L82.2195 4.94515L87.6085 5.52786L83.5912 9.16685L84.7023 14.4721L80 11.776L75.2977 14.4721L76.4088 9.16685L72.3915 5.52786L77.7805 4.94515L80 0Z"
		fill="black"
	/>
</svg>
`;

const style = `
<style>
    .new-header{
        display: none;
    }
    @media only screen and (max-width:480px){
        .shopify-section.index-section--hero{
            display: none;
        }
        .new-header *{
            margin: 0;
            padding: 0;
        }
        .new-header{
            display: grid;
            gap: 10px;
        }
        .new-header img{
            width: 100%;
        }
        .header-info{
            display: grid;
            gap: 14px;
            margin: 20px;
            background: #061A4E;
            padding: 20px;
            border-radius: 12px;
        }
        .new-header .rev{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }
        .new-header .rev strong{
            color: #fff;
            font-family: Montserrat;
            font-size: 16px;
            line-height: normal;
            font-weight: 800!important;
        }
        .new-header .rev svg path{
            fill: #FF904E;
        }
        .new-header .rev span{
            color: #fff;
            font-size: 14px;
            font-weight: 400;
        }
        .new-header .top-info{
            display: grid;
            gap: 10px;
        }
        .new-header .top-info h3{
            font-family: Livvic;
            font-size: 32px;
            font-weight: 500;
            line-height: 40px;
            color: #fff;
        }
        .new-header .top-info p{
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: #fff;
        }
        .new-header .top-info ul{
            margin: 0;
        }
        .new-header .top-info li{
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 6px;
        }
        .new-header .top-info li span{
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            color: #fff;
        }
        .new-header a{
            background: #FFED8F;
            padding: 12px;
            border-radius: 30px;
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 600;
            color: #000;
            text-align: center;
        }
    }
</style>
`;

const new_elm_html = `
<div class="new-elm new-header">
    <img src="https://www.travx.nl/cdn/shop/files/MOBILE_IMAGE_360x.png" alt="" />
    <div class="header-info">
        <div class="top-info">
            <h3>BEST AIRSTYLER YOU CAN GET</h3>
            <p>We’ve got the best Airstyler for your Hair</p>
            <ul>
                <li>
                    ${check_svg}
                    <span>We’ve got the best Airstyler</span>
                </li>
                <li>
                    ${check_svg}
                    <span>Ypoinanceex perience</span>
                </li>
                <li>
                    ${check_svg}
                    <span>Financeex perience and encrypt</span>
                </li>
            </ul>
        </div>
        <a href="/collections/best-seller">SHOP NOW</a>
        <div class="rev">
            <strong>4.9/5</strong>
            ${star_svg}
            <span>(1286 reviews)</span>
        </div>
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'.shopify-section.index-section--hero'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);
