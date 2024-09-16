let prevUrl = '';
const styleInterval = setInterval(() => {
	const paths = document.querySelectorAll(
		'.bv_ratings_summary .bv_stars_component_container svg path,.bv_stars_component_container .bv_stars_button_container svg path'
	);
	const currentUrl = window.location.href;
	try {
		if (prevUrl !== currentUrl) {
			prevUrl = currentUrl;
			paths.forEach((path) => {
				if (!path.classList.contains('star-svg-added')) {
					path.classList.add('star-svg-added');
					path.style = 'fill:#B780F0!important';
				}
			});
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
