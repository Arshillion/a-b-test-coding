const style = `
<style>
    .mob-img-slider-area{
        position: relative;
        width:100%;
        margin: 20px 0 10px;
        display: none;
    }
    .mob-img-slider-area button{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        border: none;
        background: none;
    }
    .mob-img-slider-area button:active{
        box-shadow: none;
    }
    .mob-img-slider-area button svg{
        width: 40px;
        height: 40px;
    }
    .mob-img-slider-area button.next{
        right: 0px;
    }
    .mob-img-slider-area button.prev{
        left: 0px;
    }
    .mob-img-slider {
        display: flex;
        align-items: center;
        gap: 20px;
        overflow-y: auto;
        scrollbar-width: none;
        ms-overflow-style: none; 
    }
    .mob-img-slider img{
        width: 100px;
        cursor: pointer;
    }
    .mob-img-slider::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (max-width:767px){
        .mob-img-slider-area{
            display: block;
        }
    }
</style>
`;

const getSingleImg = (img) => `
    <img src="${img.src}">
`;

const new_elm_html = (imgs) => `
<div class="mob-img-slider-area">
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
        <div class="mob-img-slider">
            ${imgs?.map((review) => getSingleImg(review)).join('')}
        </div>
</div>
`;

const interval = setInterval(() => {
	const product_area = document.querySelector(
		'.ProductInformation_container__V6QIL > div'
	);
	const img_area = document.querySelector(
		'.flex.justify-center.gap-8'
	).parentNode;
	const slide_imgs = [
		...document.querySelectorAll(
			'.flex .relative .Swiper_swiperCommon__TaNb5 .swiper-wrapper img'
		),
	];
	const head = document.querySelector('head');
	if (
		slide_imgs &&
		head &&
		img_area &&
		product_area &&
		!document.querySelector('.mob-img-slider-area')
	) {
		head.insertAdjacentHTML('beforeend', style);
		product_area.insertAdjacentHTML('afterbegin', new_elm_html(slide_imgs));
		product_area.insertAdjacentElement('afterbegin', img_area);
		clearInterval(interval);
	}
}, 10);

const btn_interval = setInterval(() => {
	const next_btn = document.querySelector('.mob-img-slider-area .next');
	const prev_btn = document.querySelector('.mob-img-slider-area .prev');
	const all_imgs = document.querySelector(
		'.mob-img-slider-area .mob-img-slider'
	);
	const slide_first_img = document.querySelector(
		'.flex .relative .Swiper_swiperCommon__TaNb5 .swiper-wrapper img'
	);
	if (next_btn && prev_btn && all_imgs && slide_first_img) {
		prev_btn.addEventListener('click', () => {
			all_imgs.scrollBy({
				left: -100,
				behavior: 'smooth',
			});
		});
		next_btn.addEventListener('click', () => {
			all_imgs.scrollBy({
				left: 100,
				behavior: 'smooth',
			});
		});
		all_imgs.addEventListener('click', (e) => {
			if (e.target.tagName === 'IMG') {
				const src = e.target.src;
				slide_first_img.src = src;
				slide_first_img.srcset = src;
			}
		});
		clearInterval(btn_interval);
	}
}, 10);
