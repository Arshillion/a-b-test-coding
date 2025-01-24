const starSvg = `
<svg width="99" height="18" viewBox="0 0 99 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0L12.4095 4.99537L18.0595 6.21885L14.2077 10.5296L14.7901 16.2812L9.5 13.95L4.20993 16.2812L4.79227 10.5296L0.940492 6.21885L6.59046 4.99537L9.5 0Z" fill="#FF7A00"/>
<path d="M29.5 0L32.4095 4.99537L38.0595 6.21885L34.2077 10.5296L34.7901 16.2812L29.5 13.95L24.2099 16.2812L24.7923 10.5296L20.9405 6.21885L26.5905 4.99537L29.5 0Z" fill="#FF7A00"/>
<path d="M49.5 0L52.4095 4.99537L58.0595 6.21885L54.2077 10.5296L54.7901 16.2812L49.5 13.95L44.2099 16.2812L44.7923 10.5296L40.9405 6.21885L46.5905 4.99537L49.5 0Z" fill="#FF7A00"/>
<path d="M69.5 0L72.4095 4.99537L78.0595 6.21885L74.2077 10.5296L74.7901 16.2812L69.5 13.95L64.2099 16.2812L64.7923 10.5296L60.9405 6.21885L66.5905 4.99537L69.5 0Z" fill="#FF7A00"/>
<path d="M89.5 0L92.4095 4.99537L98.0595 6.21885L94.2077 10.5296L94.7901 16.2812L89.5 13.95L84.2099 16.2812L84.7923 10.5296L80.9405 6.21885L86.5905 4.99537L89.5 0Z" fill="#FF7A00"/>
</svg>
`;

const checkSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11L12 14L22 4" stroke="#6F1645" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#6F1645" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const style = `
<style>
.new-header-elm {
	display: grid;
	grid-template-columns: 2fr 3fr;
	height: 100%;
	align-items: center;
	position: relative;
	z-index: 3;
	gap: 16px;
}
.new-header-elm-left {
	display: flex;
	flex-direction: column;
	gap: 24px;
	background: #ffffff;
	padding: 36px 40px;
	border-radius: 16px;
}
.new-header-elm-left * {
	margin: 0;
	padding: 0;
}
.new-header-elm-left h4 {
	font-family: Gloock;
	font-size: 32px;
	font-weight: 400;
	line-height: 36px;
	text-align: center;
	color: #6f1645;
}
.new-header-elm-left p {
	font-size: 15px;
	font-weight: 400;
	line-height: 18px;
	text-align: center;
	color: #404040;
}
.new-header-elm-left ul {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.new-header-elm-left ul li {
	display: flex;
	align-items: center;
	gap: 8px;
}
.new-header-elm-left ul li svg {
	flex-shrink: 0;
}
.new-header-elm-left ul li span {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	color: #3d3d4e;
}
.new-header-elm-left-bottom {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.new-header-elm-left a {
	padding: 8px 40px 8px 40px;
	text-align: center;
	border-radius: 12px;
	font-size: 20px;
	font-weight: 700;
	color: #fff;
	background: #6f1645;
	width: 100%;
}
.new-header-elm-left .review-info {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	gap: 8px;
}
.new-header-elm-left .review-info svg {
	flex-shrink: 0;
}
.new-header-elm-left .review-info strong {
	font-size: 16px;
	font-weight: 700;
	line-height: 28px;
	color: #000000;
}
.new-header-elm-left .review-info span {
	font-size: 14px;
	font-weight: 400;
	line-height: 14px;
	color: #000000;
}
.new-header-elm-left .better-life {
	font-weight: 700;
}
@media (max-width: 1024px) {
	.new-header-elm-left h4 {
		font-size: 24px;
		line-height: 28px;
	}
	.new-header-elm-left p {
		font-size: 14px;
	}
	.new-header-elm-left ul li span {
		font-size: 14px;
	}
	.new-header-elm-left a {
		font-size: 16px;
	}
	.new-header-elm-left .review-info strong {
		font-size: 14px;
	}
	.new-header-elm-left .review-info span {
		font-size: 12px;
		line-height: 12px;
	}
    .new-header-elm-left .review-info {
		gap: 4px;
	}
	.new-header-elm-left .review-info svg {
		max-width: 60px;
	}
}
@media (max-width: 767px) {
	.new-header-elm-left h4 {
		font-size: 20px;
		line-height: 24px;
	}
	.new-header-elm-left p {
		font-size: 12px;
	}
	.new-header-elm-left ul li span {
		font-size: 12px;
	}
	.new-header-elm-left a {
		font-size: 14px;
	}
	.new-header-elm-left .review-info strong {
		font-size: 12px;
	}
	.new-header-elm-left .review-info span {
		font-size: 10px;
	}
	.new-header-elm {
		grid-template-columns: 1fr;
	}
	.new-header-elm-left {
		padding: 16px 20px;
		gap: 16px;
	}
}
</style>
`;

const new_elm_html = `
<div class="new-header-elm">
    <div class="new-header-elm-left">
        <div>
            <h4>Better Blood Flow</h4>
            <h4 class="better-life">Better Life</h4>
        </div>
        <p>Breakthrough red grape superfood that dilates arteries and
increases blood flow, which enhances delivery of oxygen
and nutrients to the body's tissues and organs .*</p>
        <ul>
            <li>
                ${checkSvg}
                <span>Boosts nitric oxide production*</span>
            </li>
            <li>
                ${checkSvg}
                <span>Improves physical energy and mental alertness*</span>
            </li>
            <li>
                ${checkSvg}
                <span>Supports heart health by improving blood flow*</span>
            </li>
        </ul>
        <div class="new-header-elm-left-bottom">
            <a href="#choose-vinia">GET YOUR VINIA</a>
            <div class="review-info">
                ${starSvg}
                <strong>Rated 4.8 by thousands of happy users!</span>
            </div>
        </div>
    </div>
</div>
`;

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.error('A/B test style error', error);
	}
}, 10);

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.hero__text-wrap .page-width');
		if (exist_elm && !document.querySelector('.new-header-elm')) {
			exist_elm.style.display = 'block';
			exist_elm.innerHTML = new_elm_html;
			clearInterval(interval);
		}
	} catch (error) {
		console.error('A/B test js error', error);
	}
}, 10);
