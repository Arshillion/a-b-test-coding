const style = `
<style>
    .new-sticky-img{
        line-height: normal;
        position: absolute;
        display: block;
        width: 219px;
        height: 32px;
        bottom: 0px;
        left: 0px;
    }
    .sticky-hide{
        display:none;
    }
    .sticky-show{
        display:block;
    }
</style>
`;

const new_elm_html = (even) => `
<div class="new-sticky-img">
    <img class=${
			even ? 'sticky-hide' : 'sticky-show'
		} src="https://carlsgolfland.s3.us-east-2.amazonaws.com/BMNS_2022_Com.png" alt="" />
    <img class=${
			even ? 'sticky-show' : 'sticky-hide'
		} src="https://carlsgolfland.s3.us-east-2.amazonaws.com/BMNS_2022_mix.png" alt="" />
</div>
`;

const interval = setInterval(() => {
	const img_elm = document.querySelector('.fotorama__stage');
	const head = document.querySelector('head');
	if (img_elm && head && !document.querySelector('.new-sticky-img')) {
		head.insertAdjacentHTML('beforeend', style);
		const seconds_even_check = new Date().getSeconds() % 2 === 0;
		img_elm.insertAdjacentHTML('afterend', new_elm_html(seconds_even_check));
		clearInterval(interval);
	}
}, 10);
