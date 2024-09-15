/* CUSTOM CODE */
const style = `
<style>
	.fusion-builder-row-4{
		display:none!important;
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
		gap: 12px;
	}
	.motion-banner h2 {
		color: #111827;
		font-family: Titillium Web!important;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
	}
    	.motion-banner p {
		font-size: 20px;
		line-height: 24px;
	}
	.motion-banner li {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.motion-banner li span {
		color: #374151;
		font-size: 20px;
		line-height: 24px;
	}
	.motion-banner li svg {
		flex-shrink: 0;
	}
    	.motion-banner a {
		border-radius: 8px;
		background: #ff4d00;
		padding: 16px 40px;
		color: #f9f9f9;
		text-align: center;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		width: max-content;
	}
	.motion-banner a:hover {
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
	.motion-quality-treatment *{
		margin:0;
		padding:0;
	}
	.motion-quality-treatment{
		display:grid;
        display:none;
		grid-template-columns: 2fr 3fr;
		align-items: stretch;
	}
	.motion-quality-treatment-info{
		background: #E9F3F8;
		padding: 30px;
		display:flex;
		flex-direction: column;
		gap:20px;
	}
	.motion-quality-treatment-info h2{
		color: #1F2937;
		font-family: Titillium Web;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
	}
	.motion-quality-treatment-info p{
		color: #374151;
		font-family: Titillium Web;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.motion-quality-treatment-info ul{
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin: 12px 0;
	}
	.motion-quality-treatment-info li{
		display: flex;
		align-items: center;
		gap: 8px;
		color: #1F2937;
		font-family: Titillium Web;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px;
	}
	.motion-quality-treatment-info .usps{
		border-radius: 10px;
		background: #DAEDF6;
		padding: 24px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap:20px;
	}
	.motion-quality-treatment-info .usp{
		display: grid;
		grid-template-columns: 64px auto;
		align-items: center;
		gap:10px;
	}
	.motion-quality-treatment-info .usp svg{
		grid-row: span 2;
	}
	.motion-quality-treatment-info .usp h3{
		color: #1F2937;
		font-family: Titillium Web;
		font-size: 40px!important;
		font-style: normal;
		font-weight: 700;
		line-height: 32px;
	}
	.motion-quality-treatment-info .usp h6{
		color: #1F2937;
		font-family: Titillium Web;
		font-size: 20px!important;
		font-style: normal;
		font-weight: 600;
		line-height: 32px;
	}
	@media only screen and (max-width: 991px) {
		.motion-banner-info {
			width: 100%;
		}
		.motion-page-infos {
			grid-template-columns: repeat(2, 1fr);
		}
		.motion-quality-treatment{
			grid-template-columns: 1fr;
		}
		.motion-quality-treatment-info{
			padding: 10PX;
		}
		.motion-quality-treatment-info .usps{
			padding: 10px;
		}
		.motion-quality-treatment-info .usp h3{
			font-size: 24px!important;
			line-height: 20px;
		}
		.motion-quality-treatment-info .usp h6{
			font-size: 16px!important;
			line-height: 24px;
		}
		.motion-quality-treatment-info .usp{
			grid-template-columns: 40px auto;
			gap: 6px;
		}
		.motion-quality-treatment-info .usp svg{
			width: 36px;
			height: 36px;
		}
	}
	@media only screen and (max-width: 640px) {
		.motion-page-infos {
			gap: 10px;
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
		.motion-quality-treatment-info li {
			font-size: 16px;
			line-height: 16px;
		}
		.motion-quality-treatment-info .usp h3{
			font-size: 18px!important;
			line-height: 16px;
		}
		.motion-quality-treatment-info .usp h6{
			font-size: 12px!important;
			line-height: 14px;
		}
       .motion-banner a {
			font-size: 14px;
			padding: 12px 20px;
		}
	}
	@media only screen and (max-width: 480px) {
		.motion-page-infos {
			grid-template-columns: repeat(1, 1fr);
		}
        .motion-banner a {
			width:100%;
		}
	}
</style>
`;
const check_html = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 0C5.37 0 0 5.37 0 12C0 18.624 5.37 24 12 24C18.624 24 24 18.624 24 12C24 5.37 18.624 0 12 0ZM9.6 18L3.6 12L5.298 10.302L9.6 14.604L18.702 5.502L20.4 7.2L9.6 18Z" fill="#FF4D00"></path>
</svg>
`;
const arrow_svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
  	<path d="M0.75 1L6.75 7L0.75 13" stroke="black" stroke-width="2"></path>
</svg>
`;
const new_data = `
<div class="motion-banner">
	<div class="motion-area">
		<div class="motion-banner-info">
			<h2>Physical Therapy in Cape Coral, FL</h2>
            <p>If You're Stressed Out About an Injury, Ache, or a Pain, We've Got Your Back!</p>
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
            <a href="https://backinmotionsspt.com/contact-us/">Inquire About an Appointmnet</a>
		</div>
	</div>
</div>
<div class="motion-page">
	<h4 class="motion-page-header">On This Page</h4>
	<div class="motion-page-infos">
		<a href="#conditions" class="motion-page-info">
			<img src="/wp-content/uploads/2023/12/img-1.jpg.webp">
			<span>What We Treat ${arrow_svg}</span>
		</a>
		<a href="#why-choose" class="motion-page-info">
			<img src="/wp-content/uploads/2023/12/img-2.jpg.webp">
			<span>Why Choose Us ${arrow_svg}</span>
		</a>
		<a href="#cape-coral-location" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/locations.jpg.webp">
			<span>Cape Coral Location ${arrow_svg}</span>
		</a>
		<a href="#get-in-touch" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/get-touch.jpg.webp">
			<span>Get In Touch ${arrow_svg}</span>
		</a>
	</div>
</div>
<div class="motion-quality-treatment">
	<img
		src="https://i.ibb.co/FBrw4Cc/quality-treatments.png"
		alt=""
	/>
	<div class="motion-quality-treatment-info">
		<h2>We Proudly Give Quality Treatments</h2>
		<p>
			Donec pellentesque dapibus interdum. Mauris et tellus congue , rutrum
			neque a, varius felis. Phasellus nibh diam, tincidunt nec risus ut, auctor
			gravida metus that covers the front of the eye.
		</p>
		<ul>
			<li>${check_html} No Charges for Consultation</li>
			<li>${check_html} No Charges for Consultation</li>
			<li>${check_html} Fellowship & Speciality Trained Doctors</li>
		</ul>
		<div class="usps">
			<div class="usp">
				<svg
					width="63"
					height="63"
					viewBox="0 0 63 63"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.1777 8.25L19.875 9.82422L17.9375 20.7227V27.625H18.1191C18.6792 31.4849 20.8362 34.8528 23.9316 36.9492C17.0217 39.916 12.125 46.7729 12.125 54.75H16C16 49.8457 18.2705 45.4788 21.8125 42.6406V43.9121L22.3574 44.5176L30.1074 52.2676L31.5 53.5996L32.8926 52.2676L40.6426 44.5176L41.1875 43.9121V42.6406C44.7295 45.4788 47 49.8457 47 54.75H50.875C50.875 46.7729 45.9783 39.916 39.0684 36.9492C42.1638 34.8528 44.3208 31.4849 44.8809 27.625H45.0625V20.7227L43.125 9.82422L42.8223 8.25H20.1777ZM23.4473 12.125H39.5527L41.1875 21.3887V23.75H21.8125V21.3887L23.4473 12.125ZM29.5625 14.0625V16H27.625V19.875H29.5625V21.8125H33.4375V19.875H35.375V16H33.4375V14.0625H29.5625ZM21.9941 27.625H41.0059C40.1052 32.0525 36.2 35.375 31.5 35.375C26.8 35.375 22.8948 32.0525 21.9941 27.625ZM31.5 39.25C33.551 39.25 35.5188 39.6208 37.3125 40.3398V42.2773L31.5 48.0898L25.6875 42.2773V40.3398C27.4812 39.6208 29.449 39.25 31.5 39.25Z"
						fill="#FF4D00"
					></path>
				</svg>
				<h3>24</h3>
				<h6>Skilled Therapist</h6>
			</div>
			<div class="usp">
				<svg
					width="63"
					height="63"
					viewBox="0 0 63 63"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M36.4593 61.2083V51.3142C38.3534 51.2024 40.1332 50.3712 41.4347 48.9907C42.7362 47.6101 43.4611 45.7844 43.4611 43.8871C43.4611 41.9897 42.7362 40.1641 41.4347 38.7835C40.1332 37.4029 38.3534 36.5717 36.4593 36.46C35.4749 36.4428 34.4969 36.6219 33.5824 36.9868C32.6679 37.3518 31.8353 37.8952 31.133 38.5853C30.4308 39.2755 29.8731 40.0987 29.4925 41.0067C29.1118 41.9148 28.9159 42.8895 28.916 43.8742"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M31.4992 38.3458C30.429 37.3975 29.1082 36.7776 27.6949 36.5605C26.2816 36.3433 24.8356 36.538 23.5301 37.1212C22.2246 37.7045 21.1148 38.6516 20.3335 39.8493C19.5523 41.0469 19.1327 42.4443 19.125 43.8741C19.1216 44.8499 19.3109 45.8168 19.682 46.7193C20.0531 47.6219 20.5986 48.4422 21.2874 49.1334C21.9763 49.8247 22.7947 50.3731 23.696 50.7473C24.5972 51.1215 25.5634 51.3141 26.5392 51.3141V61.2083M26.5392 1.79163V11.6858C24.6452 11.7975 22.8654 12.6287 21.5638 14.0093C20.2623 15.3899 19.5374 17.2155 19.5374 19.1129C19.5374 21.0102 20.2623 22.8359 21.5638 24.2165C22.8654 25.597 24.6452 26.4282 26.5392 26.54C27.5237 26.5571 28.5017 26.378 29.4162 26.0131C30.3307 25.6482 31.1633 25.1048 31.8655 24.4146C32.5677 23.7244 33.1254 22.9013 33.5061 21.9932C33.8867 21.0852 34.0827 20.1104 34.0825 19.1258"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M31.5 24.6541C32.5702 25.6024 33.891 26.2223 35.3043 26.4395C36.7176 26.6566 38.1636 26.4619 39.4691 25.8787C40.7746 25.2954 41.8844 24.3483 42.6657 23.1507C43.4469 21.953 43.8665 20.5557 43.8742 19.1258C43.8776 18.15 43.6883 17.1831 43.3172 16.2806C42.9462 15.3781 42.4006 14.5577 41.7118 13.8665C41.023 13.1753 40.2045 12.6268 39.3033 12.2526C38.402 11.8784 37.4358 11.6858 36.46 11.6858V1.79163"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M53.7676 29.02H61.2076"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M58.7286 14.1658L51.3145 19.1258"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M58.7286 43.8741L51.3145 38.9399"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M9.23102 29.02H1.79102"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M4.27148 43.8742L11.6857 38.9142"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
					<path
						d="M4.27148 14.1658L11.6857 19.1258"
						stroke="#FF4D00"
						stroke-width="4"
						stroke-miterlimit="10"
					></path>
				</svg>
				<h3>500+</h3>
				<h6>Solved Cases</h6>
			</div>
			<div class="usp">
				<svg
					width="63"
					height="63"
					viewBox="0 0 63 63"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_263_208)">
						<path
							d="M31.4994 57.3333C17.2316 57.3333 5.66602 45.7677 5.66602 31.5C5.66602 17.2322 17.2316 5.66663 31.4994 5.66663C45.7671 5.66663 57.3327 17.2322 57.3327 31.5C57.3327 45.7677 45.7671 57.3333 31.4994 57.3333ZM31.4994 52.1666C36.9805 52.1666 42.2371 49.9893 46.1129 46.1135C49.9886 42.2378 52.166 36.9811 52.166 31.5C52.166 26.0188 49.9886 20.7622 46.1129 16.8864C42.2371 13.0107 36.9805 10.8333 31.4994 10.8333C26.0182 10.8333 20.7616 13.0107 16.8858 16.8864C13.0101 20.7622 10.8327 26.0188 10.8327 31.5C10.8327 36.9811 13.0101 42.2378 16.8858 46.1135C20.7616 49.9893 26.0182 52.1666 31.4994 52.1666ZM18.5827 34.0833H23.7493C23.7493 36.1387 24.5659 38.11 26.0193 39.5634C27.4727 41.0168 29.4439 41.8333 31.4994 41.8333C33.5548 41.8333 35.526 41.0168 36.9794 39.5634C38.4328 38.11 39.2494 36.1387 39.2494 34.0833H44.416C44.416 37.509 43.0552 40.7944 40.6328 43.2168C38.2105 45.6391 34.9251 47 31.4994 47C28.0736 47 24.7882 45.6391 22.3659 43.2168C19.9435 40.7944 18.5827 37.509 18.5827 34.0833ZM21.166 28.9166C20.1383 28.9166 19.1527 28.5084 18.426 27.7817C17.6993 27.055 17.291 26.0693 17.291 25.0416C17.291 24.0139 17.6993 23.0283 18.426 22.3016C19.1527 21.5749 20.1383 21.1666 21.166 21.1666C22.1937 21.1666 23.1794 21.5749 23.9061 22.3016C24.6328 23.0283 25.041 24.0139 25.041 25.0416C25.041 26.0693 24.6328 27.055 23.9061 27.7817C23.1794 28.5084 22.1937 28.9166 21.166 28.9166ZM41.8327 28.9166C40.805 28.9166 39.8193 28.5084 39.0926 27.7817C38.3659 27.055 37.9577 26.0693 37.9577 25.0416C37.9577 24.0139 38.3659 23.0283 39.0926 22.3016C39.8193 21.5749 40.805 21.1666 41.8327 21.1666C42.8604 21.1666 43.846 21.5749 44.5727 22.3016C45.2994 23.0283 45.7077 24.0139 45.7077 25.0416C45.7077 26.0693 45.2994 27.055 44.5727 27.7817C43.846 28.5084 42.8604 28.9166 41.8327 28.9166Z"
							fill="#FF4D00"
						></path>
					</g>
					<defs>
						<clipPath id="clip0_263_208">
							<rect
								width="62"
								height="62"
								fill="white"
								transform="translate(0.5 0.5)"
							></rect>
						</clipPath>
					</defs>
				</svg>
				<h3>1200+</h3>
				<h6>Happy Patients</h6>
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
		main.insertAdjacentHTML('beforebegin', new_data);
		clearInterval(interval);
	}
}, 10);
