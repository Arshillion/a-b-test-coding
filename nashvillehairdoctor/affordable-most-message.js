const urls = {
	'/neograft-price/': '#main .container p:nth-of-type(6)',
	'/neograft-price/travel-discount/': '#main ul li:nth-of-type(1)',
	'/fue-hair-transplant-in-chicago/': '#main ul li:nth-of-type(1)',
	'/fue-hair-transplant-in-miami/': '#main ul li:nth-of-type(2)',
	'/fue-hair-transplant-in-new-york/': '#main .container p:nth-of-type(2)',
};

const new_elm_html = `
	Affordable Cost. At prices as low as $4.20 per graft, save up to $10,000 or
	more on an all-inclusive NeoGraft® hair transplant compared to the average
	cost in the Chicago metro area
`;

const interval = setInterval(() => {
	try {
		const pathname = window.location.pathname;
		const exist_elm = document.querySelector(urls[pathname]);
		if (exist_elm && !document.querySelector('.new-message-elm')) {
			exist_elm.classList.add('new-message-elm');
			exist_elm.innerHTML = new_elm_html;
			clearInterval(interval);
		}
	} catch (error) {
		console.log(error);
		clearInterval(interval);
	}
}, 10);
