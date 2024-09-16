const style = `
<style>
@media (min-width: 768px) {
    #main-product-detail.product-detail{
        max-width: 1340px;
    }
    .product-detail .detail .title{
        text-align: left;
    }
    .main-image-wrapper{
        width: 98%!important;
    }
    #thumbscroll{
        width: 98%!important;
        display: flex;
        align-items: center;
    }
    #pdp-carousel{
        height: auto!important;
        width: 100%!important;
    }
    #pdp-carousel ul::-webkit-scrollbar {
        display: none;
    }
    #pdp-carousel ul {
        -ms-overflow-style: none;  
        scrollbar-width: none;  
    }
    #pdp-carousel ul{
        top: 0!important;
        height: 60px!important;
        display: flex;
        overflow-x: auto!important;
    }
    .product-detail .gallery .thumbnails li a img{
        width: 60px!important;
        height: 60px!important;
    }
    #thumbscroll .prev, #thumbscroll .next{
        display: none!important;
    }
    .thumb-prev svg, .thumb-next svg{
        fill: black;
    }
    .thumb-prev,.thumb-next{
        min-width: 40px!important;
        background: none;
        padding: 0;
        margin: 0;
        color: black;
    }
    .thumb-prev:hover,.thumb-next:hover{
        min-width: 40px!important;
        background: none;
        padding: 0;
        margin: 0;
        color: black;
    }
}
</style>
`;

const prev_html = `
<button class="thumb-prev">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
        <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"/>
    </svg>
</button>
`;
const next_html = `
<button class="thumb-next">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"/>
    </svg>
</button>
`;

const interval = setInterval(() => {
	const price_wrapper = document.querySelector(
		'#main-product-detail .product-price-wrapper'
	);
	const title = document.querySelector('#main-product-detail .title');
	const thumbs = document.querySelector('#thumbscroll');
	const discount_wrapper = document.querySelector(
		'.main-image.main-image-discount-wrapper'
	);
	const head = document.querySelector('head');
	if (
		price_wrapper &&
		head &&
		discount_wrapper &&
		thumbs &&
		title &&
		!document.querySelector('.thumb-prev')
	) {
		head.insertAdjacentHTML('beforeend', style);
		price_wrapper.insertAdjacentElement('beforebegin', title);
		discount_wrapper.insertAdjacentElement('afterend', thumbs);
		thumbs.insertAdjacentHTML('afterbegin', prev_html);
		thumbs.insertAdjacentHTML('beforeend', next_html);
		clearInterval(interval);
	}
}, 10);

const btn_interval = setInterval(() => {
	const next_btn = document.querySelector('.thumb-next');
	const prev_btn = document.querySelector('.thumb-prev');
	const lis = document.querySelector('#thumbscroll ul');
	if (next_btn && prev_btn && lis) {
		prev_btn.addEventListener('click', () => {
			lis.scrollBy({
				left: -60,
				behavior: 'smooth',
			});
		});
		next_btn.addEventListener('click', () => {
			lis.scrollBy({
				left: 60,
				behavior: 'smooth',
			});
		});
		clearInterval(btn_interval);
	}
}, 10);
