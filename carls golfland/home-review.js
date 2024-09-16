const reviews = [
	{
		user: 'Marita',
		title: 'Perfect!!!!',
		description:
			'Rating Great Big Bertha ladies - ordered online from Switzerland, delivery our House on time 4 days after ordering. Great price, great service - perfect - thank you',
	},
	{
		user: 'Brian M',
		title: 'Cobra Radspeed Driver',
		description:
			'Just purchased a Cobra Radspeed XB driver. Driver came as promised. Excellent shipping package. Driver in pristine condition and would highly recommend this seller.',
	},
	{
		user: 'David R.',
		title: "Carl's should have a loyalty",
		description:
			"Carl's should have a loyalty program for people such as myself who buy a ton of stuff there.",
	},
	{
		user: 'Kimberly T.',
		title: "Women's Golf Shoes",
		description:
			"Fantastic selection and quick delivery on my golf shoes! I would order from Carl's Golfland again!",
	},
	{
		user: 'Harriet W.',
		title: 'Order arrived on time. Great',
		description: 'Order arrived on time. Great shoes for a great price.',
	},
	{
		user: 'Ben B.',
		title: 'Putter was delivered fast and in perfect condition',
		description:
			'Putter was delivered fast and in perfect condition. Love the selection , will be ordering more clubs from Carls',
	},
	{
		user: 'Marita',
		title: 'Perfect!!!!',
		description:
			'Rating Great Big Bertha ladies - ordered online from Switzerland, delivery our House on time 4 days after ordering. Great price, great service - perfect - thank you',
	},
	{
		user: 'Brian M',
		title: 'Cobra Radspeed Driver',
		description:
			'Just purchased a Cobra Radspeed XB driver. Driver came as promised. Excellent shipping package. Driver in pristine condition and would highly recommend this seller.',
	},
	{
		user: 'David R.',
		title: "Carl's should have a loyalty",
		description:
			"Carl's should have a loyalty program for people such as myself who buy a ton of stuff there.",
	},
	{
		user: 'Kimberly T.',
		title: "Women's Golf Shoes",
		description:
			"Fantastic selection and quick delivery on my golf shoes! I would order from Carl's Golfland again!",
	},
	{
		user: 'Harriet W.',
		title: 'Order arrived on time. Great',
		description: 'Order arrived on time. Great shoes for a great price.',
	},
	{
		user: 'Ben B.',
		title: 'Putter was delivered fast and in perfect condition',
		description:
			'Putter was delivered fast and in perfect condition. Love the selection , will be ordering more clubs from Carls',
	},
];

const star_svg = `
<svg width="83" height="16" viewBox="0 0 83 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0.5L9.69097 4.98439L14.6329 5.68237L11.0451 9.15186L11.9084 14.0676L7.5 11.7275L3.09161 14.0676L3.95494 9.15186L0.367076 5.68237L5.30903 4.98439L7.5 0.5Z" fill="#FF9E0D"/>
    <path d="M24.5 0.5L26.691 4.98439L31.6329 5.68237L28.0451 9.15186L28.9084 14.0676L24.5 11.7275L20.0916 14.0676L20.9549 9.15186L17.3671 5.68237L22.309 4.98439L24.5 0.5Z" fill="#FF9E0D"/>
    <path d="M41.5 0.5L43.691 4.98439L48.6329 5.68237L45.0451 9.15186L45.9084 14.0676L41.5 11.7275L37.0916 14.0676L37.9549 9.15186L34.3671 5.68237L39.309 4.98439L41.5 0.5Z" fill="#FF9E0D"/>
    <path d="M58.5 0.5L60.691 4.98439L65.6329 5.68237L62.0451 9.15186L62.9084 14.0676L58.5 11.7275L54.0916 14.0676L54.9549 9.15186L51.3671 5.68237L56.309 4.98439L58.5 0.5Z" fill="#FF9E0D"/>
    <path d="M75.5 0.5L77.691 4.98439L82.6329 5.68237L79.0451 9.15186L79.9084 14.0676L75.5 11.7275L71.0916 14.0676L71.9549 9.15186L68.3671 5.68237L73.309 4.98439L75.5 0.5Z" fill="#FF9E0D"/>
</svg>
`;

const getSingleRev = (rev) => `
<div class="single-review">
    ${star_svg}
    <strong>${rev.user}</strong>
    <h3>${rev.title}</h3>
    <p>${rev.description}</p>
</div>
`;

const style = `
<style>
    .new-review-elm{
        margin: 30px 0px;
		box-sizing: border-box;
		margin-left: auto;
		margin-right: auto;
		max-width: 1400px;
		padding: 0 40px;
		width: 100%;
    }
	.small-line{
		width: 160px;
		display: block;
		background: #dfdfdf;
		height: 1px;
		margin: 12px auto 0!important;
	}
    .new-review-elm *{
        margin:0;
        padding:0;
    }
    .new-review-elm h1{
        text-align: center;
		color: #09324f;
		font-size: 32px;
    }
    .new-review-elm h6{
        margin:12px 0 36px;
        text-align: center;
		font-size: 16px;
    }
    .reviews-section{
        position: relative;
        width:100%;
    }
    .reviews-section button{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
		border: none;
		background: none;
    }
    .reviews-section button:active{
        box-shadow: none;
    }
    .reviews-section button svg{
        width: 40px;
		height: 40px;
		fill: #999999;
    }
    .reviews-section button.next{
        right:-40px;
    }
    .reviews-section button.prev{
        left: -40px;
    }
    .all-reviews {
        display: grid;
        grid-template-columns: repeat(12, 24%);
        gap: 1.7%;
        overflow-y: auto;
        scroll-snap-type: x mandatory;
		scrollbar-width: none;
		ms-overflow-style: none; 
    }
	.all-reviews::-webkit-scrollbar {
		display: none;
	}
    .single-review{
        scroll-snap-align: start;
        display: grid;
    }
    .single-review strong{
		font-size: 16px;
    }
    .single-review h3{
        margin: 12px 0 6px;
		font-size: 20px;
    }
    .single-review p{
		font-weight: 500;
    }
	@media only screen and (max-width:1200px){
		.all-reviews {
			grid-template-columns: repeat(12, 32%);
			gap: 2%;
		}
	}
	@media only screen and (max-width:991px){
		.all-reviews {
			grid-template-columns: repeat(12, 48%);
			gap: 4%;
		}
		.reviews-section button.next{
			right:-30px;
		}
		.reviews-section button.prev{
			left: -30px;
		}
		.reviews-section button svg{
			width: 32px;
			height: 32px;
		}
		.new-review-elm{
			padding: 0 30px;
		}
		.new-review-elm h1{
			font-size: 26px;
		}
	}
	@media only screen and (max-width:480px){
		.all-reviews {
			grid-template-columns: repeat(12, 100%);
			gap: 0;
		}
		.new-review-elm h1{
			font-size: 20px;
		}
	}
</style>
`;

const new_elm_html = `
<div class="new-review-elm">
    <h1>Over XX,XXX Golfers Served Since 1958</h1>
	<span class="small-line"></span>
    <h6>16000+ Reviews - 94% 5-Stars</h6>
    <div class="reviews-section">
        <button class="prev">
			<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
				<path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"/>
			</svg>
		</button>
        <button class="next">
			<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
				<path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"/>
			</svg>
		</button>
        <div class="all-reviews">
            ${reviews?.map((review) => getSingleRev(review)).join('')}
        </div>
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.home-page-slider');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-review-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);

const btn_interval = setInterval(() => {
	const next_btn = document.querySelector('.reviews-section .next');
	const prev_btn = document.querySelector('.reviews-section .prev');
	const all_revs = document.querySelector('.reviews-section .all-reviews');
	if (next_btn && prev_btn && all_revs) {
		prev_btn.addEventListener('click', () => {
			all_revs.scrollBy({
				left: -20,
				behavior: 'smooth',
			});
		});
		next_btn.addEventListener('click', () => {
			all_revs.scrollBy({
				left: 20,
				behavior: 'smooth',
			});
		});
		clearInterval(btn_interval);
	}
}, 10);
