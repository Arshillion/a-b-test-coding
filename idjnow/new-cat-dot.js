const style = `
<style>
.new-dot-elm{
    background:red;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    left: -4px;
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
</style>
`;

const new_elm_html = `
<span class="new-dot-elm">
</span>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.ammenu-menu-wrapper nav ul li p');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-dot-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforeend', new_elm_html);
		clearInterval(interval);
	}
}, 10);

setInterval(() => {
	const span_elm = document.querySelector('.new-dot-elm');
	if (span_elm) {
		span_elm.style.animationPlayState = 'running';
		const timeout_animation = setTimeout(() => {
			span_elm.style.animationPlayState = 'paused';
			clearTimeout(timeout_animation);
		}, 1000);
	}
}, 5000);
