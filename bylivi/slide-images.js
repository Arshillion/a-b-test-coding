const style = `
<style>
    .flickity-page-dots .dot{
        width: 30px!important;
        height: 30px!important;
        overflow: hidden!important;
        border-radius: 0!important;
        border: 1px solid #dfdfdf!important;
    }
    .dot-image{
        width: 100%;
    }
    // .AspectRatio:before{
    //     display: none;
    // }
    .Product__SlideshowMobileNav{
        margin: 20px 0 0!important;
    }
</style>
`;

const interval = setInterval(() => {
	const dots = [...document.querySelectorAll('.flickity-page-dots button')];
	const images = [
		...document.querySelectorAll('.Product__SlideshowNavScroller a > img'),
	];
	const head = document.querySelector('head');
	if (dots && head && images && !document.querySelector('.dot-img')) {
		try {
			head.insertAdjacentHTML('beforeend', style);
			dots.map((item, index) => {
				item.innerHTML = `<img class="dot-image" src="${images[index].src}">`;
			});
		} catch (error) {
			console.log(error);
		} finally {
			clearInterval(interval);
		}
	}
}, 10);
