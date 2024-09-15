/* CUSTOM CODE */
const style = `
<style>
	.fusion-builder-row-7,
	.fusion-builder-row-4,
	.fusion-builder-row-6 {
		display: none !important;
	}
	html {
		scroll-behavior: smooth;
	}
	.motion-banner {
		background: url('https://i.ibb.co/MgLNsZp/motion-v2-bg.png');
		display: flex;
		justify-content: center;
		padding: 80px 30px;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.motion-area {
		max-width: 1220px;
		width: 100%;
	}
	.motion-banner-info {
		display: flex;
		flex-direction: column;
		gap: 32px;
		width: 50%;
	}
	.motion-banner * {
		margin: 0;
		padding: 0;
	}
	.motion-banner ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.motion-banner h2 {
		color: #111827;
		font-family: Titillium Web!important;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
	}
	.motion-banner li {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.motion-banner li span {
		color: #374151;
		font-family: Titillium Web!important;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
	}
	.motion-banner li svg {
		flex-shrink: 0;
	}
	.quick-call {
		border-radius: 8px;
		background: #ff4d00;
		padding: 16px 40px;
		color: #f9f9f9;
		text-align: center;
		font-family: Titillium Web!important;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		width: max-content;
	}
	.quick-call:hover {
		color: white;
		background: #179cd7;
	}
	.motion-page {
		padding: 80px 30px;
		background: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}
	.motion-page-header {
		color: #090d2b;
		font-family: Titillium Web!important;
		font-size: 40px;
		font-style: normal;
		font-weight: 700;
		line-height: 40px!important;
		letter-spacing: -1.2px;
		margin: 0;
	}
	.motion-page-infos {
		max-width: 1220px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 30px;
	}
	.motion-page-info {
		display: flex;
		padding: 12px 12px 20px;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		flex: 1 0 0;
		border-radius: 8px;
		background: #fff;
		box-shadow: 0px 6px 16px 0px rgba(79, 110, 161, 0.17);
	}
	.motion-page-info img {
		border-radius: 6px;
	}
	.motion-page-info span {
		color: #000;
		text-align: center;
		font-family: Titillium Web!important;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}
	.motion-what-we-do {
		padding: 80px 30px;
		background: #ececec;
	}
	.motion-what-we-do-container {
		max-width: 1220px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 20px;
		margin: auto;
	}
	.motion-what-we-do-header {
		color: #090d2b;
		font-family: Titillium Web!important;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px!important;
		letter-spacing: -1.44px;
		margin: 0;
	}
	.motion-what-we-do-infos {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 16px;
	}
	.motion-what-we-do-info {
		border: 1px solid #e1e1e1;
		background: #fff;
		display: flex;
		flex-direction: column;
		gap: 16px;
		flex: 1 0 0;
		position: relative;
	}
	.motion-what-we-do-info strong {
		color: #000;
		font-family: Titillium Web!important;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px;
		padding: 0 20px;
	}
	.motion-what-we-do-info img.do-img {
		width: 100%;
	}
	.motion-what-we-do-info span {
		color: #5c5c5c;
		font-family: Titillium Web!important;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
		padding: 0 20px;
	}
	.motion-what-we-do-info a {
		color: #000;
		font-family: Titillium Web!important;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: 22px;
		padding: 0 20px 24px;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.motion-what-we-do-info .right-abs {
		position: absolute;
		top: 50%;
		left: -6px;
		transform: translateY(-50%);
		width: 30px;
	}
	@media only screen and (max-width: 1200px) {
		.motion-what-we-do-infos {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media only screen and (max-width: 991px) {
		.motion-banner-info {
			width: 100%;
		}
		.motion-page-infos {
			grid-template-columns: repeat(2, 1fr);
		}
		.motion-what-we-do-infos {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media only screen and (max-width: 640px) {
		.motion-page-infos {
			gap: 10px;
		}
		.motion-what-we-do-infos {
			gap: 14px;
		}
		.motion-what-we-do {
			padding: 40px 10px;
		}
		.motion-page {
			padding: 40px 10px;
		}
		.motion-banner {
			padding: 40px 10px;
			background-position: center;
		}
		.motion-banner li {
			font-size: 12px;
			line-height: 20px;
		}
		.motion-banner h2 {
			font-size: 30px;
			line-height: 40px;
		}
		.quick-call {
			font-size: 14px;
		}
		.quick-call {
			padding: 12px 20px;
		}
	}
	@media only screen and (max-width: 480px) {
		.motion-page-infos {
			grid-template-columns: repeat(1, 1fr);
		}
		.motion-what-we-do-infos {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
`;

const check_html = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 0C5.37 0 0 5.37 0 12C0 18.624 5.37 24 12 24C18.624 24 24 18.624 24 12C24 5.37 18.624 0 12 0ZM9.6 18L3.6 12L5.298 10.302L9.6 14.604L18.702 5.502L20.4 7.2L9.6 18Z" fill="#FF4D00"/>
</svg>
`;

const arrow_svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
  	<path d="M0.75 1L6.75 7L0.75 13" stroke="black" stroke-width="2"/>
</svg>
`;

const circle_arrow_svg = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_262_32)">
		<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
		<path d="M4.17969 8H11.8197" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
		<path d="M8.64062 4.81995L11.8206 7.99995L8.64062 11.1799" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
	</g>
	<defs>
		<clipPath id="clip0_262_32">
			<rect width="16" height="16" fill="white"/>
		</clipPath>
	</defs>
</svg>
`;

const new_banner_with_page_data = `
<div class="motion-banner">
	<div class="motion-area">
		<div class="motion-banner-info">
			<h2>Get Back In Motion with Physical Therapy in Fort Myers, FL</h2>
			<ul>
				<li>
					${check_html}
					<span>Specialized tools for leak detection and pool maintenance</span>
				</li>
				<li>
					${check_html}
					<span>Durable and Reliable Products</span>
				</li>
				<li>
					${check_html}
					<span>Expert advice and support</span>
				</li>
			</ul>
			<a
				href="https://backinmotionsspt.com/contact-us/"
				class="quick-call"
				>Inquire Free Appointment</a
			>
		</div>
	</div>
</div>
<div class="motion-page">
	<h4 class="motion-page-header">On This Page</h4>
	<div class="motion-page-infos">
		<a href="#what-we-do" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/wha-we-do.jpg.webp">
			<span>What we do ${arrow_svg}</span>
		</a>
		<a href="#why" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/why-choose-us.jpg.webp">
			<span>Why choose us ${arrow_svg}</span>
		</a>
		<a href="/physical-therapy-clinics" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/locations.jpg.webp">
			<span>Locations ${arrow_svg}</span>
		</a>
		<a href="/contact-us" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/get-touch.jpg.webp">
			<span>Get in touch ${arrow_svg}</span>
		</a>
	</div>
</div>
<div id="what-we-do" class="motion-what-we-do">
	<div class="motion-what-we-do-container">
		<h4 class="motion-what-we-do-header">What we do</h4>
		<div class="motion-what-we-do-infos">
			<div class="motion-what-we-do-info">
				<img class="do-img" src="https://i.ibb.co/yyChxsp/physical-therapy-img.png">
				<img class="right-abs" src="https://i.ibb.co/gZY8wnh/personal-training.png">
				<strong>Physical Therapy</strong>
				<span>A comprehensive program designed to empower you on your journey</span>
				<a href="/physical-therapy-clinic-treatments/physical-therapy/">Read more ${circle_arrow_svg}</a>
			</div>
			<div class="motion-what-we-do-info">
				<img class="do-img" src="https://i.ibb.co/Fg9txBJ/personal-training-img.png">
				<img class="right-abs" src="https://i.ibb.co/FhZRhfs/sports-training.png">
				<strong>Personal Training</strong>
				<span>Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus ma</span>
				<a href="/fitness-performance/fitness/personal-training/">Read more ${circle_arrow_svg}</a>
			</div>
			<div class="motion-what-we-do-info">
				<img class="do-img" src="https://i.ibb.co/xLBDb8T/sports-training-img.png">
				<img class="right-abs" src="https://i.ibb.co/XVVLKxr/pelvic-health.png">
				<strong>Sports Training</strong>
				<span>Our certified trainers will provide tailored workouts, expert guidance, and unwavering</span>
				<a href="/fitness-performance/sports-performance/">Read more ${circle_arrow_svg}</a>
			</div>
			<div class="motion-what-we-do-info">
				<img class="do-img" src="https://i.ibb.co/xLBDb8T/sports-training-img.png">
				<img class="right-abs" src="https://i.ibb.co/pZ0sSJg/golf-performance.png">
				<strong>Golf Performance</strong>
				<span>Our certified trainers will provide tailored workouts, expert guidance, and unwavering</span>
				<a href="/fitness-performance/golf-swing-analysis/" >Read more ${circle_arrow_svg}</a>
			</div>
			<div class="motion-what-we-do-info">
				<img class="do-img" src="https://i.ibb.co/t4x0ZNz/pelvic-health-img.png">
				<img class="right-abs" src="https://i.ibb.co/X32SBpM/physical-therapy.png">
				<strong>Pelvic Health</strong>
				<span>Experience renewed vitality and comfort with our specialized</span>
				<a href="/conditions/pelvic-health/">Read more ${circle_arrow_svg}</a>
			</div>
		</div>
	</div>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.motion-banner')) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('beforebegin', new_banner_with_page_data);
		clearInterval(interval);
	}
}, 10);
