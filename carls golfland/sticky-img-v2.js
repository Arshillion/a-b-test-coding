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
</style>
`;

const new_elm_html = `
<div class="new-sticky-img">
    <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/BMNS_2022_Com.png" alt="" />
    <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/BMNS_2022_mix.png" alt="" />
</div>
`;

const interval = setInterval(() => {
	const img_elm = document.querySelector('.fotorama__stage');
	const head = document.querySelector('head');
	if (img_elm && head && !document.querySelector('.new-sticky-img')) {
		head.insertAdjacentHTML('beforeend', style);
		img_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
