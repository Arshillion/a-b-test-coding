const blog_interval = setInterval(() => {
	const bottom_subs = document.querySelector('.elementor-element-fbf3c0c');
	const top_subs = document.querySelector('.elementor-element-a35ac09');
	if (top_subs && bottom_subs) {
		top_subs.insertAdjacentHTML('beforebegin', bottom_subs.outerHTML);
		top_subs.remove();
		clearInterval(blog_interval);
	}
}, 10);
