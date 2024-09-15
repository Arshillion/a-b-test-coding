/* CUSTOM CODE */
const style = `
<style>
	.float-btn-area {
		position: fixed;
		z-index: 999;
		padding: 10px;
		bottom: 0;
		width: 100%;
		display: grid;
		place-items: center;
		display: none;
	}
	.float-btn {
		border-radius: 8px;
		background: #1cf5e8;
		display: flex;
		padding: 20px;
		justify-content: center;
		align-items: center;
		gap: 20px;
		max-width: 1000px;
		width: max-content;
	}
	.float-btn span {
		color: #111827;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 40px;
	}
	.float-btn a {
		border-radius: 12px;
		border-bottom: 8px solid #082249;
		background: #134e84;
		display: flex;
		padding: 20px 28px;
		justify-content: center;
		align-items: center;
		gap: 16px;
		color: #f9f9f9;
		text-align: center;
		font-size: 20px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
	.fusion-builder-row-5,
	.fusion-builder-row-4,
	.fusion-builder-nested-column-1 > div:nth-of-type(1) {
		display: none !important;
	}

	.motion-banner {
		background: url('https://i.ibb.co/28MPfFD/motionbg.png');
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
		gap: 10px;
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
		gap: 10px;
	}
	.motion-banner .banner-rev {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.motion-banner .banner-rev strong,
	.motion-banner .banner-rev small {
		color: #1f2937;
		font-size: 14px;
		font-style: normal;
	}
	.motion-banner h2 {
		color: #1f2937;
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px;
		margin-bottom: 10px;
	}
	.motion-banner li {
		color: #1f2937;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.motion-banner li svg {
		flex-shrink: 0;
	}
	.quick-call {
		display: flex;
		padding: 20px 28px;
		justify-content: center;
		align-items: center;
		border: 0;
		border-radius: 12px;
		border-bottom: 8px solid #cf4300;
		background: #f85203;
		color: #f9f9f9;
		text-align: center;
		font-size: 20px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
	.quick-call:hover {
		color: white;
		background: #179cd7;
		border-bottom: 8px solid #127cab;
	}
	.btn-w-banner {
		width: 100%;
		max-width: 320px;
		margin-top: 16px;
	}
	.new-btn {
		width: 200px;
	}
	.fusion-builder-column-1 > div:nth-of-type(1) {
		width: 200px !important;
		margin-left: auto !important;
	}
	.fusion-builder-column-1 > div:nth-of-type(1) > div > div {
		width: 100% !important;
	}
	@media only screen and (max-width: 991px) {
		.motion-banner-info {
			width: 100%;
		}
		.float-btn span {
			display: none;
		}
		.float-btn a {
			width: 100%;
			padding: 10px 14px;
			font-size: 16px;
		}
		.float-btn {
			padding: 10px;
			width: 100%;
		}
	}
	@media only screen and (max-width: 640px) {
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
</style>
`;

const new_banner = `
<div class="motion-banner">
	<div class="motion-area">
		<div class="motion-banner-info">
			<div class="banner-rev">
				<svg
					width="102"
					height="16"
					viewBox="0 0 102 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_63_104)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.34548 8C3.34548 7.49192 3.43166 7.0048 3.58548 6.54792L0.893118 4.53476C0.36839 5.57796 0.0727539 6.75343 0.0727539 8C0.0727539 9.24552 0.368027 10.4203 0.892027 11.4628L3.58294 9.44569C3.43057 8.99094 3.34548 8.5056 3.34548 8Z"
							fill="#FBBC05"
						></path>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8.0727 3.37778C9.19998 3.37778 10.2182 3.76889 11.0182 4.40889L13.3454 2.13334C11.9272 0.924447 10.1091 0.17778 8.0727 0.17778C4.91125 0.17778 2.19416 1.94809 0.893066 4.53476L3.58543 6.54791C4.20579 4.704 5.97416 3.37778 8.0727 3.37778Z"
							fill="#EB4335"
						></path>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8.0727 12.6222C5.97416 12.6222 4.20579 11.296 3.58543 9.45209L0.893066 11.4649C2.19416 14.0519 4.91125 15.8222 8.0727 15.8222C10.024 15.8222 11.8869 15.1438 13.2851 13.8727L10.7294 11.9381C10.0083 12.3829 9.10034 12.6222 8.0727 12.6222Z"
							fill="#34A853"
						></path>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15.7091 8.00001C15.7091 7.53779 15.6364 7.04001 15.5273 6.57779H8.07275V9.60001H12.3637C12.1491 10.6304 11.5651 11.4226 10.7295 11.9381L13.2851 13.8727C14.7538 12.538 15.7091 10.5497 15.7091 8.00001Z"
							fill="#4285F4"
						></path>
					</g>
					<path
						d="M31 1L32.5716 5.83688H37.6574L33.5429 8.82624L35.1145 13.6631L31 10.6738L26.8855 13.6631L28.4571 8.82624L24.3426 5.83688H29.4284L31 1Z"
						fill="#F59E0B"
					></path>
					<path
						d="M47 1L48.5716 5.83688H53.6574L49.5429 8.82624L51.1145 13.6631L47 10.6738L42.8855 13.6631L44.4571 8.82624L40.3426 5.83688H45.4284L47 1Z"
						fill="#F59E0B"
					></path>
					<path
						d="M63 1L64.5716 5.83688H69.6574L65.5429 8.82624L67.1145 13.6631L63 10.6738L58.8855 13.6631L60.4571 8.82624L56.3426 5.83688H61.4284L63 1Z"
						fill="#F59E0B"
					></path>
					<path
						d="M79 1L80.5716 5.83688H85.6574L81.5429 8.82624L83.1145 13.6631L79 10.6738L74.8855 13.6631L76.4571 8.82624L72.3426 5.83688H77.4284L79 1Z"
						fill="#F59E0B"
					></path>
					<path
						d="M95 1L96.5716 5.83688H101.657L97.5429 8.82624L99.1145 13.6631L95 10.6738L90.8855 13.6631L92.4571 8.82624L88.3426 5.83688H93.4284L95 1Z"
						fill="#F59E0B"
					></path>
					<defs>
						<clipPath id="clip0_63_104">
							<rect
								width="16"
								height="16"
								fill="white"
							></rect>
						</clipPath>
					</defs>
				</svg>
				<strong>4.8/5</strong>
				<small>based on 67 Happy Clients</small>
			</div>
			<h2>Get Back In Motion with Physical Therapy in Fort Myers, FL</h2>
			<ul>
				<li>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 11L12 14L22 4"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<path
							d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<span>Get to the Root Cause of Your Pain , Stiffness, or Injury</span>
				</li>
				<li>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 11L12 14L22 4"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<path
							d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<span>One-On-One Care With a Doctor of Physical Therapy</span>
				</li>
				<li>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 11L12 14L22 4"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<path
							d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<span>4 Convenient SWFL Locations & Same Day Appointments</span>
				</li>
			</ul>
			<a
				href="https://backinmotionsspt.com/contact-us/"
				class="quick-call btn-w-banner"
				>Get a quick callback</a
			>
		</div>
	</div>
</div>
`;

const float_btn = `
<div class="float-btn-area">
	<div class="float-btn">
		<span>Get in Contact Us With Today Click To Fill Out Form</span>
		<a href="https://backinmotionsspt.com/contact-us/">
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.7333 7.99996C20.0357 8.25405 21.2325 8.89097 22.1708 9.82921C23.1091 10.7674 23.746 11.9643 24 13.2666M18.7333 2.66663C21.4391 2.96721 23.9621 4.17885 25.8884 6.10264C27.8145 8.02641 29.0295 10.548 29.3333 13.2533M24.6667 28C13.2528 28 4 18.7472 4 7.33329C4 6.81833 4.01884 6.30777 4.05585 5.80227C4.09833 5.22212 4.11957 4.93205 4.2716 4.668C4.39752 4.44931 4.62067 4.24191 4.84797 4.13229C5.12241 3.99996 5.44251 3.99996 6.08268 3.99996H9.83909C10.3774 3.99996 10.6466 3.99996 10.8774 4.08856C11.0812 4.16683 11.2627 4.29395 11.4059 4.45876C11.568 4.64533 11.66 4.89831 11.844 5.40424L13.3988 9.68002C13.6128 10.2687 13.7199 10.563 13.7017 10.8422C13.6857 11.0885 13.6016 11.3254 13.4589 11.5267C13.2971 11.755 13.0286 11.9161 12.4915 12.2384L10.6667 13.3333C12.2692 16.8652 15.1335 19.7332 18.6667 21.3333L19.7616 19.5085C20.0839 18.9713 20.2449 18.7028 20.4732 18.541C20.6745 18.3984 20.9115 18.3142 21.1577 18.2982C21.4369 18.2801 21.7313 18.3872 22.32 18.6012L26.5957 20.156C27.1016 20.34 27.3547 20.432 27.5412 20.5941C27.706 20.7373 27.8332 20.9188 27.9113 21.1226C28 21.3533 28 21.6225 28 22.1609V25.9173C28 26.5574 28 26.8776 27.8676 27.152C27.758 27.3793 27.5507 27.6025 27.332 27.7284C27.0679 27.8804 26.7779 27.9016 26.1977 27.9441C25.6921 27.9812 25.1816 28 24.6667 28Z"
					fill="white"
				></path>
			</svg>
			Get a Quick Callback
		</a>
	</div>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	const header_first = document.querySelector(
		'.fusion-tb-header>div>div .fusion-builder-column-1'
	);
	const last_nav_li = document.querySelector('#menu-item-48449');
	const last_nav_li_a = last_nav_li.querySelector('a');
	if (
		main &&
		head &&
		last_nav_li_a &&
		header_first &&
		!document.querySelector('.motion-banner')
	) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('beforebegin', new_banner);
		main.insertAdjacentHTML('beforebegin', float_btn);
		header_first.insertAdjacentElement('beforeend', last_nav_li_a);
		last_nav_li_a.classList.add('new-btn');
		last_nav_li.remove();
		clearInterval(interval);
	}
}, 10);

window.addEventListener('scroll', function () {
	const float = document.querySelector('.float-btn-area');
	const exist = document.querySelector('.motion-banner');
	const topOffset = exist.getBoundingClientRect().bottom;
	if (topOffset <= 0) {
		float.style.display = 'grid';
	} else {
		float.style.display = 'none';
	}
});
