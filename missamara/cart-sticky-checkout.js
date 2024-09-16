const style = `
<style>
	.new-float-elm{
		display: none;
		align-items: center;
		justify-content: center;
		gap: 16px;
		position: fixed;
		bottom: 10px;
		left: 10px;
		right: 10px;
		border-radius: 4px;
		z-index: 99;
	}
</style>
`;

const new_elm_html = `
<button class="new-float-elm" onclick="document.querySelector('#update-cart').click()">
	<span>CHECK OUT</span>
</button>
`;

const interval = setInterval(() => {
	const body = document.querySelector('body');
	const head = document.querySelector('head');
	const exists = document.querySelector('#update-cart');
	if (exists && head && !document.querySelector('.new-float-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		body.insertAdjacentHTML('beforeend', new_elm_html);
		clearInterval(interval);
	}
}, 10);

function getElementVisibility(el) {
	const rect = el.getBoundingClientRect();
	const viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;
	const viewportWidth =
		window.innerWidth || document.documentElement.clientWidth;

	// Check if the element is fully within the viewport
	if (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= viewportHeight &&
		rect.right <= viewportWidth
	) {
		return true;
	}
	// Check if the element is partially within the viewport
	else if (
		rect.bottom > 0 &&
		rect.right > 0 &&
		rect.top < viewportHeight &&
		rect.left < viewportWidth
	) {
		return true;
	}
	// Otherwise, the element is completely outside the viewport
	else {
		return false;
	}
}

window.addEventListener('scroll', function () {
	const float = document.querySelector('.new-float-elm');
	const exist = document.querySelector('#update-cart');
	if (exist && float) {
		if (getElementVisibility(exist)) {
			float.style.display = 'none';
		} else {
			float.style.display = 'flex';
		}
	}
});
