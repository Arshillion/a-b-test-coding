const fiveStarDeskHome = `
<svg width="98" height="18" viewBox="0 0 98 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0L11.645 5.35942L17.5595 6.21885L13.2798 10.3906L14.2901 16.2812L9 13.5L3.70993 16.2812L4.72025 10.3906L0.440492 6.21885L6.35497 5.35942L9 0Z" fill="#FAAD14"/>
<path d="M29 0L31.645 5.35942L37.5595 6.21885L33.2798 10.3906L34.2901 16.2812L29 13.5L23.7099 16.2812L24.7202 10.3906L20.4405 6.21885L26.355 5.35942L29 0Z" fill="#FAAD14"/>
<path d="M49 0L51.645 5.35942L57.5595 6.21885L53.2798 10.3906L54.2901 16.2812L49 13.5L43.7099 16.2812L44.7202 10.3906L40.4405 6.21885L46.355 5.35942L49 0Z" fill="#FAAD14"/>
<path d="M69 0L71.645 5.35942L77.5595 6.21885L73.2798 10.3906L74.2901 16.2812L69 13.5L63.7099 16.2812L64.7202 10.3906L60.4405 6.21885L66.355 5.35942L69 0Z" fill="#FAAD14"/>
<path d="M89 0L91.645 5.35942L97.5595 6.21885L93.2798 10.3906L94.2901 16.2812L89 13.5L83.7099 16.2812L84.7202 10.3906L80.4405 6.21885L86.355 5.35942L89 0Z" fill="#FAAD14"/>
</svg>
`;

const checkSvgDeskHome = `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="25" height="25" rx="12.5" fill="#F36523"/>
<path d="M17.5 10L10.625 16.25L7.5 13.4091" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const styleDeskHome = `
<style>
    #shopify-section-hero-1{
        display: none!important;
    }
    .index-desk-hero *{
        margin: 0;
        padding: 0;
    }
    .index-desk-hero{
        background-color: black;
        background-image: url('https://i.ibb.co/zsXP7Rs/theinvincibleshoe-hero-desk.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        display: grid;
        grid-template-columns: 2fr 3fr;
        margin-bottom: 20px;
        align-items: stretch;
        padding: 80px 40px;
    }
    .index-desk-hero img{
        width: 100%;
    }
    .index-desk-hero .revs{
        padding: 6px;
        display: flex;
        align-items: center;
        gap:10px;
    }
    .index-desk-hero .revs strong{
        font-size: 16px;
        line-height: 20px;
        font-weight: 700;
        color:white;
    }
    .index-desk-hero .revs span{
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        color:white;
    }
    .index-desk-hero .details{
        padding: 0 15px;  
        display: grid;
        gap: 24px;
    }
    .index-desk-hero .details h2{
        font-size: 48px;
        line-height: 56px;
        font-weight: 800;
        color: #ffffff;
    }
    .index-desk-hero .details p{
        font-size: 24px;
        font-weight: 300;
        line-height: 34px;
        color: #ffffff;
    }
    .index-desk-hero .details .features{
        display: grid;
        gap: 12px;
    }
    .index-desk-hero .details .features li{
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .index-desk-hero .details .features li strong{
        font-size: 18px;
        line-height: 20px;
        font-weight: 400;
        color: #ffffff;
    }
    .index-desk-hero .details .features li svg{
        flex-shrink: 0;
    }
    .index-desk-hero .details a{
        background: #F36523;
        padding: 12px;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        border-radius: 6px;
        text-align: center;
        max-width: 320px;
    }
</style>
`;

const newDeskHomeElm = `
<div class="index-desk-hero">
    <div class="details">
        <div class="revs">
            ${fiveStarDeskHome}
            <strong>4.6/5</strong>
            <span>400+ verified reviews</span>
        </div>
        <h2>Built To Last. Built To Protect</h2>
        <p>Explore our custom line of safety shoes, each featuring a steel toe and nail resistant soles.</p>
        <ul class="features">
            <li>
                ${checkSvgDeskHome}
                <strong>Safe, cost-effective, and durable
                </strong>
            </li>
            <li>
                ${checkSvgDeskHome}
                <strong>Significantly reduce waste and pollution</strong>
            </li>
            <li>
                ${checkSvgDeskHome}
                <strong>Made from bamboo, cornstarch, and cellulose</strong>
            </li>
        </ul>
        <a href="/collections/best-sellers">
            SHOP NOW
        </a>
    </div>
    <div></div>
</div>
`;

const intervalDeskHome = setInterval(() => {
	try {
		const header = document.querySelector('.template-index header.site-header');
		const head = document.querySelector('head');
		if (header && head && !document.querySelector('.index-desk-hero')) {
			head.insertAdjacentHTML('beforeend', styleDeskHome);
			header.insertAdjacentHTML('afterend', newDeskHomeElm);
			clearInterval(intervalDeskHome);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
