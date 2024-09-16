const NAME = `Mini'S`;
const IMAGE =
	'https://cdn.shopify.com/s/files/1/0615/7834/6569/files/minis-1.png?v=1725255106';
const MOBILE_IMAGE =
	'https://cdn.shopify.com/s/files/1/0615/7834/6569/files/minis-2.png?v=1725255106';

const navInterval = setInterval(() => {
	try {
		const navElm = document.querySelector(`[data-value='travelsize']`);
		if (navElm) {
			navElm.innerText = NAME.toUpperCase();
			clearInterval(navInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const productsInterval = setInterval(() => {
	try {
		const container = document.querySelector(`.products-container.page-width`);
		const header = container.querySelector(`h1.mb-8`);
		const source = container.querySelector(`picture source`);
		const img = container.querySelector(`picture img`);
		const breadcrumb = container.querySelector(`nav`).lastChild;
		if (header && source && img && breadcrumb) {
			breadcrumb.innerText = NAME;
			header.innerText = NAME;
			source.srcset = IMAGE;
			img.src = MOBILE_IMAGE;
			img.srcset = MOBILE_IMAGE;
			img.alt = NAME;
			clearInterval(productsInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
