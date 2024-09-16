const badge_text = 'Holiday Deals';
const title_text = 'Hassle-free, analog tone. Your new studio is here.';
const para = 'A subscription for creators and music professionals - now 99¢. Cancel anytime.';
const first_link_href = '/';
const first_link_name = 'Try for 3 Months';
const sec_link_href = '/';
const sec_link_name = 'See All Deals';

const style = `
<style>
#shopify-section-template--15296358711385__hero .flex-wrap.items-center > div {
    display:none;
}
#shopify-section-template--15296358711385__hero .flex-wrap.items-center a {
    min-width: 300px;
    border-radius:4px;
    color: #FFF;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
}
.new-top-info {
    color: #FFF;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 62px;
    margin: 30px 0 50px;
}
@media only screen and (max-width:1280px){
    .new-top-info {
        font-size: 36px;
        line-height: 48px;
        margin: 20px 0 40px;
    }
}
@media only screen and (max-width:768px){
    .new-top-info {
        font-size: 24px;
        line-height: 30px;
        margin: 20px 0 30px;
    }
    #shopify-section-template--15296358711385__hero .flex-wrap.items-center a {
        font-size: 20px;
    }
}
@media only screen and (max-width:480px){
    #shopify-section-template--15296358711385__hero .flex-wrap.items-center a {
        width:100%;
        min-width:100%;
    }
}
</style>
`;

const new_anc = `<a class="button mb-4 md:mb-0 md:mr-standard" href=${sec_link_href}>${sec_link_name}</a>`;
const new_para = `<p class="new-top-info mb-6">${para}</p>`;

const test_int = setInterval(() => {
	const head = document.querySelector('head');
	const badge = document.querySelector(
		'#shopify-section-template--15296358711385__hero .badge'
	);
	const title = document.querySelector(
		'#shopify-section-template--15296358711385__hero .font-extraBold'
	);
	const links = document.querySelector(
		'#shopify-section-template--15296358711385__hero .flex-wrap.items-center'
	);
	const first_link = links.querySelector('a');
	const check_conditions =
		badge &&
		head &&
		title &&
		links &&
		first_link &&
		!document.querySelector('.new-top-info');
	if (check_conditions) {
		head.insertAdjacentHTML('beforeend', style);
		badge.innerHTML = badge_text;
		title.innerHTML = title_text;
		title.insertAdjacentHTML('afterend', new_para);
		title.classList.remove('mb-8');
		first_link.href = first_link_href;
		first_link.innerHTML = first_link_name;
		first_link.classList.remove('large');
		links.insertAdjacentHTML('beforeend', new_anc);
		clearInterval(test_int);
	}
}, 10);