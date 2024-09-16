const bf_sale_html = `
<style>
  .bf-exclusive{
    color: rgba(255, 255, 255, 0.90);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
  @media only screen and (max-width:980px){
    .bf-exclusive{
      display:none;
    }
    .carousel__content-wrapper,.carousel__mobile-button-wrapper {
      background: #3B5E57!important;
    }
  }
</style>
<span class="bf-exclusive">BLACK FRIDAY EXCLUSIVE</span>
`;

const bf_sale_img = `
<picture>
  <source media="(min-width: 768px)" srcset="https://jafpodcasts.s3.us-east-2.amazonaws.com/ua/q4_2023_uad_essentials_promo_lmod.jpg">
  <img src="https://jafpodcasts.s3.us-east-2.amazonaws.com/ua/q4_2023_uad_essentials_promo_lmod_mob.jpg">
</picture>
`;

const carousel_test = setInterval(() => {
	const carousel_content = document.querySelector(
		'.carousel__content-wrapper .carousel__text'
	);
	const carousel_img = document.querySelector(
		'.carousel__slide .carousel__img'
	);
	const carousel_link = document.querySelector(
		'.carousel__slide .button.transparent.desktop'
	);
	const carousel_link_mobile = document.querySelector(
		'.carousel__slide .carousel__mobile-button-wrapper .button.transparent'
	);

	if (
		carousel_link &&
		carousel_link_mobile &&
		carousel_content &&
		carousel_img &&
		!document.querySelector('.bf-exclusive')
	) {
		carousel_link.innerText = 'Shop UAD Essentials';
		carousel_link_mobile.innerText = 'Shop UAD Essentials';
		carousel_content
			.querySelector('h1')
			.insertAdjacentHTML('beforebegin', bf_sale_html);
		carousel_content.querySelector('h1').innerText =
			'Get UAD Essentials for $49';
		carousel_content.querySelector('h2').innerText =
			'Sound like your favorite records with a collection of must-have UAD plug-ins and instruments.';
		carousel_img.innerHTML = bf_sale_img;
		clearInterval(carousel_test);
	}
}, 10);
