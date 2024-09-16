const interval = setInterval(() => {
	const mobile_img = document.querySelector('.mobile_image img');
	const desktop_img = document.querySelector('.desktop_image img');
	if (desktop_img && mobile_img) {
		desktop_img.src = 'https://i.ibb.co/ssDn4ys/Banner-desktop.png';
		mobile_img.src = 'https://i.ibb.co/283S7rX/Banner-Mobile-2x.png';
		clearInterval(interval);
	}
}, 10);
