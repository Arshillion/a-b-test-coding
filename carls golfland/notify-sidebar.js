const sidebar_area = '320px';

const notify_html = `
<style>
	.minicart-wrapper {
		margin-right: 12px !important;
	}
	.notify-icon {
		position: absolute;
		right: 10px;
		top: 6px;
		cursor: pointer;
	}
	.notify-icon img {
		width: 24px;
	}
	.notify-icon span {
		background: red;
		width: 14px;
		height: 14px;
		display: inline-block;
		font-size: 10px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		color: white;
		position: absolute;
		top: 0;
		right: -2px;
		animation: moveLeftRight 0.5s linear infinite;
		animation-play-state: paused;
	}
	@keyframes moveLeftRight {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-2px);
		}
		50% {
			transform: translateX(0);
		}
		75% {
			transform: translateX(2px);
		}
		100% {
			transform: translateX(0);
		}
	}
	@media only screen and (min-width: 1280px) {
		.notify-icon {
			right: -12px;
		}
		.minicart-wrapper {
			margin-right: 0px !important;
		}
	}
</style>
<div class="notify-icon">
	<img
		src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-bell-icon.svg"
	/>
	<span>4</span>
</div>

`;

const icon_int = setInterval(() => {
	const header_content = document.querySelector('.page-header .header.content');

	if (header_content && !document.querySelector('.notify-icon')) {
		header_content.insertAdjacentHTML('beforeend', notify_html);
		clearInterval(icon_int);
	}
}, 10);

const notify_sidebar_html = `
<style>
	.notify-sidebar{
	  top:0;
	  bottom:0;
	  right: -${sidebar_area};
	  width: ${sidebar_area};
	  border:1px solid #dfdfdf;
	  background:#ffffff;
	  position:fixed;
	  z-index:9999;
	  overflow:auto;
	  transition: 0.25s;
	}
	.notify-header{
	  padding:11.5px;
	  display: flex;
	  align-items:center;
	  justify-content:space-between;
	  border-bottom:1px solid #dfdfdf;
	}
	.notify-header h3{
	  margin:0;
	  font-size:16px;
	}
	.close-notify{
	  font-size:18px;
	  font-weight:600;
	  cursor: pointer;
	}
	.notify-deals{
	   padding:20px 10px;
	   display:flex;
	  align-items:center;
	  flex-direction:column;
	  gap:10px;
	}
	.notify-deal{
	   display:flex;
	   align-items:center;
	   gap:10px;
	   border: 2px solid #dfdfdf;
	   padding:10px 20px;
	   text-decoration: none;
	}

	.notify-deal:hover{
	   border: 2px solid #fe8b2c;
	}

	.notify-deal img{
	  width:80px;
	}
	.notify-deal-info *{
	  margin:0;
	  padding:0;
	}

	.notify-deal-info{
	  display:flex;
	  align-items:center;
	  flex-direction:column;
	  text-align:center;
	  gap:6px;
	  color:#333;
	}

	.notify-deal-info .a-link{
	  background:#09324F;
	  color:white;
	  text-decoration: none;
	  font-size: 12px;
	  line-height: 12px;
	  padding:8px 10px;
	  border-radius: 2px;
	  margin-top: 6px;
	}
	.btn-promo{
	  background:#09324F;
	  text-align:center;
	  color:white!important;
	  text-decoration: none;
	  margin: 30px auto 20px;
	  padding:12px 10px;
	  border-radius:2px;
	  display:block;
	  width: 80%;
	}
</style>
<div class="notify-sidebar">
	<div class="notify-header">
		<h3>Our Newest Deals & Promotions</h3>
		<span class="close-notify">X</span>
	</div>
	<div class="notify-deals">
		<a
			href="https://www.carlsgolfland.com/clearance/pre-black-friday-sale"
			class="notify-deal"
		>
			<img
				src="https://carlsgolfland.s3.us-east-2.amazonaws.com/holiday-free-ship.png"
			/>
			<span class="notify-deal-info">
				<h4>Free Shipping (No Minimum)</h4>
				<p>Free Shipping + Free Extended Returns</p>
				<span class="a-link">SHOP PRE-BLACK FRIDAY</span>
			</span>
		</a>
		<a
			href="https://www.carlsgolfland.com/gift-guide/stocking-stuffers"
			class="notify-deal"
		>
			<img
				src="https://carlsgolfland.s3.us-east-2.amazonaws.com/holiday-stocking-stuffers.png"
			/>
			<span class="notify-deal-info">
				<h4>Stocking Stuffers</h4>
				<p>Get Deals on Some our Hottest Products.</p>
				<span class="a-link">STOCKING STUFFERS</span>
			</span>
		</a>
		<a
			href="https://www.carlsgolfland.com/gift-guide/top-tech"
			class="notify-deal"
		>
			<img
				src="https://carlsgolfland.s3.us-east-2.amazonaws.com/holiday-tech-deals.png"
			/>
			<span class="notify-deal-info">
				<h4>Tech Deals</h4>
				<p>Huge Savings on Watches, Rangefinders & Speakers</p>
				<span class="a-link">TECH DEALS</span>
			</span>
		</a>
		<a
			href="https://www.carlsgolfland.com/gift-cards"
			class="notify-deal"
		>
			<img
				src="https://www.carlsgolfland.com/media/catalog/product/cache/d683f18d2576274d783c486896cdd9a7/c/a/carls_golfland_gift_card_2023.jpg"
			/>
			<span class="notify-deal-info">
				<h4>Grab a Gift Card</h4>
				<p>Get the Gift That Always Gets a Smile</p>
				<span class="a-link">GIFT CARDS</span>
			</span>
		</a>
	</div>
	<a
		class="btn-promo"
		href="https://www.carlsgolfland.com/clearance"
		>See All Deals & Promotions</a
	>
</div>

`;

const area_int = setInterval(() => {
	const page_content = document.querySelector('.page-wrapper');
	if (page_content && !document.querySelector('.notify-sidebar')) {
		page_content.insertAdjacentHTML('afterbegin', notify_sidebar_html);
		clearInterval(area_int);
	}
}, 10);

const first_interval = (elm) => {
	const span_elm = elm.querySelector('span');
	span_elm.style.animationPlayState = 'running';
	const timeout_animation = setTimeout(() => {
		span_elm.style.animationPlayState = 'paused';
		clearInterval(timeout_animation);
	}, 1000);
};

const toggle_int = setInterval(() => {
	const notify_icon = document.querySelector('.notify-icon');
	const notify_area_close = document.querySelector(
		'.notify-sidebar .close-notify'
	);
	const notify_area = document.querySelector('.notify-sidebar');
	if (notify_icon && notify_area && notify_area_close) {
		document.addEventListener('click', (event) => {
			if (
				event.target !== notify_area &&
				event.target !== notify_icon &&
				!notify_area.contains(event.target) &&
				!notify_icon.contains(event.target)
			) {
				notify_area.style.right = `-${sidebar_area}`;
			}
		});
		const first_time = setTimeout(() => {
			first_interval(notify_icon);
			clearTimeout(first_time);
		}, 2000);
		setInterval(() => {
			first_interval(notify_icon);
		}, 15000);
		notify_icon.addEventListener('click', () => {
			notify_area.style.right = '0';
		});
		notify_area_close.addEventListener('click', () => {
			notify_area.style.right = `-${sidebar_area}`;
		});
		clearInterval(toggle_int);
	}
}, 10);
