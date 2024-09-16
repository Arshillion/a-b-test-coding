const details = {
	'https://cdn2.videowise.com/converted/videos/1696295886840_83dcdbfa-897f-4177-ac98-1acb5cf47dfe_h264c_h264q6clip.mp4':
		{
			image:
				'https://luxskin.co/cdn/shop/collections/184601713_890033861559939_6145889574068033756_n_2_350x350.jpg?v=1635460440',
			title: 'Test 111',
			Price: '',
			Link: '',
		},
};

const style = `
<style>
    .new-link-elm{
        border: 20px solid #FFFFFF;
        display: flex;
        align-items: center;
        gap:10px;
    }
    .new-link-elm div{
        flex-grow: 1;
        display: grid;
        gap:6px;
    }
    .new-link-elm div strong{
        font-size: 16px;
        font-weight: 500;
    }
    .new-link-elm div strong:last-child{
        font-weight: 600;
    }
    .new-link-elm img{
        width: 52px;
        height: 52px;
    }
</style>
`;

const new_elm_html = (item) => `
<div class="new-link-elm">
    <img src=${item}>
    <div>
        <strong>${item}</strong>
        <strong>${item}</strong>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
 </div>
`;

const interval = setInterval(() => {
	try {
		const exist_elms = [
			...document.querySelectorAll('.keen-slider .keen-slider__slide'),
		];
		const head = document.querySelector('head');
		if (
			exist_elms.length > 0 &&
			head &&
			!document.querySelector('.new-link-elm')
		) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elms.map((item) => {
				const videoSrc = item.querySelector('video').src;
				const itemDetails = details[videoSrc];
				item.insertAdjacentHTML('beforeend', new_elm_html(itemDetails));
			});
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
