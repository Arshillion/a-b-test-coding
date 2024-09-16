const five_star = `
<svg width="78" height="14" viewBox="0 0 78 14" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M7 0L9.10662 4.10048L13.6574 4.83688L10.4086 8.10752L11.1145 12.6631L7 10.584L2.8855 12.6631L3.59141 8.10752L0.342604 4.83688L4.89338 4.10048L7 0Z" fill="#F08F00"/>
	<path d="M23 0L25.1066 4.10048L29.6574 4.83688L26.4086 8.10752L27.1145 12.6631L23 10.584L18.8855 12.6631L19.5914 8.10752L16.3426 4.83688L20.8934 4.10048L23 0Z" fill="#F08F00"/>
	<path d="M39 0L41.1066 4.10048L45.6574 4.83688L42.4086 8.10752L43.1145 12.6631L39 10.584L34.8855 12.6631L35.5914 8.10752L32.3426 4.83688L36.8934 4.10048L39 0Z" fill="#F08F00"/>
	<path d="M55 0L57.1066 4.10048L61.6574 4.83688L58.4086 8.10752L59.1145 12.6631L55 10.584L50.8855 12.6631L51.5914 8.10752L48.3426 4.83688L52.8934 4.10048L55 0Z" fill="#F08F00"/>
	<path d="M71 0L73.1066 4.10048L77.6574 4.83688L74.4086 8.10752L75.1145 12.6631L71 10.584L66.8855 12.6631L67.5914 8.10752L64.3426 4.83688L68.8934 4.10048L71 0Z" fill="#F08F00"/>
</svg>
`;

const interval = setInterval(() => {
	const btn_wrapper = document.querySelector('.add-to-cart-wrapper');
	if (btn_wrapper && !document.querySelector('.float-area-message')) {
		btn_wrapper.insertAdjacentHTML('afterbegin', rev_html);
		clearInterval(interval);
	}
}, 10);

const rev_html = `
<div class="float-area-message">
	<strong>4.9/5</strong>
	<span>Grab this special item</span>
	${five_star}
	<small>Rated 5 Star by 10,000+ Happy customers</small>
</div>
`;

window.addEventListener('scroll', function () {
	const btn_area = document.querySelector('.add-to-cart-custom-btn');
	const btn_wrapper = document.querySelector('.add-to-cart-wrapper');
	const topOffset = btn_area.getBoundingClientRect().bottom;
	if (topOffset <= 0) {
		btn_wrapper.classList.add('new-float-btn');
	} else {
		btn_wrapper.classList.remove('new-float-btn');
	}
});

{
	/* <style>
	.float-area-message{
		display: none;
		grid-template-columns: 1fr 4fr;
		align-items: center;
		gap: 0 10px;
	}
	.float-area-message strong{
		color: #1A1A1A;
		font-family: Poppins;
		font-size: 20px;
		font-style: normal;
		font-weight: 800;
		line-height: 150%;
	}
	.float-area-message span{
		color: #1A1A1A;
		font-family: Poppins;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: 150%;
	}
	.float-area-message small{
		color: #1A1A1A;
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
	}
	.new-float-btn .float-area-message{
		display: grid;
	}
    .new-float-btn{
        position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #DDF6FF;
        z-index: 99;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
    }
    .new-float-btn button{
        width: max-content;
		min-width: 300px;
		border: none;
    }
	.product-iwt_wrapper .image-wrapper{
		position: static!important;
      	z-index: unset!important;
    }
	.product-iwt_wrapper .info-wrapper, .triple-inner_wrapper .row-wrapper{
		position: static!important;
    }

	@media only screen and (max-width:767px){
		.new-float-btn button{
			min-width: 100%;
			order:1;
    	}
		.new-float-btn{
			flex-direction: column;
			gap: 10px;
		}
		.float-area-message{
			order:2;
		}
		.float-area-message strong{
			font-size: 18px;
		}
		.float-area-message span{
			font-size: 18px;
		}
		.float-area-message small{
			font-size: 12px;
		}
	}
</style> */
}
