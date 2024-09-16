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
      background: #797085!important;
    }
  }
</style>
<span class="bf-exclusive">BLACK FRIDAY EXCLUSIVE</span>
`;

const bf_sale_img = `
<picture>
  <source media="(min-width: 768px)" srcset="https://jafpodcasts.s3.us-east-2.amazonaws.com/ua/q4_2023_custom2_promo_lmod.jpg">
  <img src="https://jafpodcasts.s3.us-east-2.amazonaws.com/ua/q4_2023_custom2_promo_lmod_mob.jpg">
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
		'.carousel__slide .carousel__text a'
	);
	const carousel_link_mobile = document.querySelector(
		'.carousel__slide .carousel__mobile-button-wrapper a'
	);
	if (
		carousel_link &&
		carousel_link_mobile &&
		carousel_content &&
		carousel_img &&
		!document.querySelector('.bf-exclusive')
	) {
		carousel_link.innerText = 'Build My Bundle';
		carousel_link_mobile.innerText = 'Build My Bundle';
		carousel_content
			.querySelector('h1')
			.insertAdjacentHTML('beforebegin', bf_sale_html);
		carousel_content.querySelector('h1').innerText =
			'Pick ANY 2 Plug-Ins for $99';
		carousel_content.querySelector('h2').remove();
		carousel_img.innerHTML = bf_sale_img;
		clearInterval(carousel_test);
	}
}, 10);
