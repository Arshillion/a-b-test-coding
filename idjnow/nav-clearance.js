const v1_int = setInterval(() => {
	const link = document.querySelector(
		".ammenu-items a[href='https://www.idjnow.com/deals.html']"
	);
	const text = link.querySelector('.ammenu-text');
	if (link && text) {
		text.innerText = 'Clearance';
		clearInterval(v1_int);
	}
}, 10);

const v2_int = setInterval(() => {
	const link = document.querySelector(
		".ammenu-items a[href='https://www.idjnow.com/deals.html']"
	);
	const text = link.querySelector('.ammenu-text');
	const label = link.querySelector('.ammenu-label');
	if (link && text && label) {
		text.innerText = 'Clearance';
		label.innerText = ' +1,400 Deals';
		clearInterval(v2_int);
	}
}, 10);
