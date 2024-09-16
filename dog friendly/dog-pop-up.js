const style_pop = `
<style>
    .sticker-elm{
        background: #46d3e6;
        color: #000;
        position: absolute;
        top: 10px;
        left: 0;
        border-radius: 0 10px 10px 0;
        padding: 4px 10px 4px 04px;
        text-align: center;
        font-size: 10px;
        cursor: pointer;
    }
    .popup-vid {
        position: fixed;
        top: -100vh;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        background-color: #dfdfdf66;
        transition: 0.1s;
        z-index: 999;
        cursor: pointer;
    }
    .popup-vid-wrap {
        position: relative;
    }
    .popup-vid-wrap > button {
        position: absolute;
        right: 10px;
        top: 10px;
        height: 20px;
        width: 20px;
        font-size: 12px;
        font-weight: bold;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background: white;
    }
    .popup-vid iframe {
        height: 75vh;
        background: #000;
    }
</style>
`;

const new_elm_html = `
<div class="sticker-elm">
    Find out why We are different
</div>
`;

const pop_up = `
<div class="popup-vid">
	<div class="popup-vid-wrap">
		<button>X</button>
		<iframe
			src="https://player.vimeo.com/video/916697540?h=e36c6441b4"
			frameborder="0"
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
`;
const interval = setInterval(() => {
	const photo_elm = document.querySelector(
		'.product__main-photos.aos-init.aos-animate'
	);
	const head = document.querySelector('head');
	const body = document.querySelector('body');
	if (photo_elm && head && body && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style_pop);
		photo_elm.insertAdjacentHTML('beforeend', new_elm_html);
		body.insertAdjacentHTML('beforeend', pop_up);
		clearInterval(interval);
	}
}, 10);

const interval_sec = setInterval(() => {
	const vid_button = document.querySelector('.sticker-elm');
	const vid_container = document.querySelector('.popup-vid');

	if (vid_button && vid_container) {
		vid_container.addEventListener('click', (e) => {
			vid_container.style.top = '-100vh';
		});
		vid_button.addEventListener('click', () => {
			vid_button.remove();
			vid_container.style.top = '0';
		});
		clearInterval(interval_sec);
	}
}, 10);
