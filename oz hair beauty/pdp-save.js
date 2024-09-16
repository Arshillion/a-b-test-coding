const PRICE_TO_SEE_OFFER = 49;

const style = `
<style>
.new-save-elm {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 10;
}
@media only screen and (min-width:768px){
    .new-save-elm {
        bottom: 40px;
    }
}
</style>
`;

const new_elm_html = `<img class="new-save-elm" src="https://i.ibb.co/LxnTFMj/Group.png" alt="" />`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'.relative > .Swiper_swiperCommon__TaNb5'
	);
	const price_text = document.querySelector(
		'.Price_current-price__NDbru'
	).innerText;
	const price_number = Number(price_text);
	const head = document.querySelector('head');
	if (
		exist_elm &&
		head &&
		price_number >= PRICE_TO_SEE_OFFER &&
		!document.querySelector('.new-save-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforeend', new_elm_html);
	}
}, 10);
