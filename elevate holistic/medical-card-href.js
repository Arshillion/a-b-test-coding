const href_int = setInterval(() => {
	const anchors = [
		...document.querySelectorAll(
			'.elementor-element-24197229 .elementor-icon-box-wrapper a'
		),
	];
	if (anchors.length > 0) {
		anchors.forEach((anchor) => {
			anchor.href =
				'https://app2.elevate-holistics.com/#/elevate/customer/type/type';
		});
		clearInterval(href_int);
	}
}, 10);
