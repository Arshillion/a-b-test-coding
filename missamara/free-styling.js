const style = `
.appointment-wrapper.container {
    margin: auto;
    margin-bottom: 30px;
    border: none;
    padding: 0 !important;
  }

  .container-app {
    border-radius: 12px;
    background: #333;
  }

  .appointment-wrapper.container .appointment-content-wrapper {
    padding: 0;
  }

  .appointment-wrapper.container .appointment-content-wrapper .appointment-content {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    margin: 16px 20px;
  }

  .app-cnt-wrap {
    color: white;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .app-cnt-wrap img {
    max-width: 100px;
    width: 100%;
    margin: 0;
  }

  .app-cnt-wrap .appointment-content-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .app-cnt-wrap .appointment-content-text small {
    font-size: 12px;
    line-height: 12px;
  }

  .app-cnt-wrap .appointment-content-text strong {
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
  }

  .appointment-wrapper.container .appointment-content-wrapper .appointment-content .appointment-content-btn {
    border-radius: 48px;
    background: white;
    display: flex;
    padding: 12px 24px;
    align-items: center;
    gap: 16px;
    letter-spacing: 0px;
    margin: 0;
    color: black !important;
    flex-shrink: 0;
    text-decoration: none;
  }

  .appointment-wrapper.container .appointment-header,
  .appointment-content-img {
    display: none !important;
  }

  @media only screen and (max-width:991px) {

    .appointment-content,
    .app-cnt-wrap {
      flex-direction: column !important;
      gap: 10px;
    }

    .appointment-content {
      gap: 20px!important;
    }
  }
  .page-header.cf .majortitle{
  margin-top:0;
  } 
  #store-messages{
  display:none;
  }
  .free-style-need-help {
    margin-top: 20px!important;
}
  #fs-requirement {
    border-radius: 6px;
    border: 1px solid #555;
    background: #FFF;
  }

  #shopify-section-featured-blogs-section,
  div.free-style-video-container {
    display: none !important;
  }

  .majortitle {
    color: #000;
    text-align: center;
    font-family: Cardo;
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
  }

  .sub-header {
    display: block;
    color: #000;
    text-align: center;
    font-family: Cardo;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20px;
  }

  .small-header {
    margin: 0 !important;
    font-weight: 600;
    font-size: 20px !important;
  }

  #shopify-section-brands-logo {
    background: #fbe6e3;
  }

  @media (min-width: 1024px) {
    .sub-header {
      font-size: 32px;
    }
  }

  @media (max-width: 1024px) {
    .majortitle {
      margin: 0 !important;
    }
  }
  .fsa-top {
    border-radius: 2px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://cdn.shopify.com/s/files/1/2594/4244/files/Untitled_design_13.png?v=1693787823);
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    place-items: center;
    padding: 100px 50px;
    margin-bottom: 40px;
  }

  .fsa-top-content * {
    color: white;
  }

  .fsa-top-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .fsa-top-content ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 16px;
  }

  .fsa-top-content li {
    list-style-type: none;
  }

  .fsa-top-content a {
    background: #fbe6e3;
    padding: 10px 16px;
    border-radius: 25px;
    font-weight: 700;
    text-decoration: none;
    font-size: 14px;
    line-height: 14px;
  }

  @media only screen and (max-width:767px) {
    .fsa-top {
      padding: 50px;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width:500px) {
    .fsa-top {
      padding: 30px;
    }
  }
  .fsa-stylist {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 40px;
  }

  .fsa-stylist-content {
    background: #F7E5D7;
    display: grid;
    place-items: center;
  }

  .fsa-stylist-content * {
    color: black;
  }

  .fsa-stylist-content div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .fsa-stylist-content div strong {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 16px;
  }

  .fsa-stylist-content a {
    background: black;
    padding: 10px 16px;
    border-radius: 25px;
    font-weight: 700;
    text-decoration: none;
    font-size: 14px;
    line-height: 14px;
    color: white;
  }

  @media only screen and (max-width:767px) {
    .fsa-stylist {
      margin-bottom: 30px;
      grid-template-columns: 1fr;
    }

    .fsa-stylist-content div {
      padding: 30px 10px;
    }
  }
  #free-styling-form-wrapper {
    background: none !important;
  }

  .free-styling-container {
    padding: 30px !important;
  }

  .free-styling-container.container {
    border-radius: 12px;
    background: #FFF8F5;
    box-sizing: border-box;
  }

  .form-first-row-item-first {
    width: 100% !important;
  }

  .free-styling-form-text-content,
  .form-third-row .form-third-row-content {
    width: 100% !important;
  }

  .form-third-row .half-width-field {
    margin: 0 !important;
  }

  .form-second-row,
  .form-first-row,
  .form-third-row {
    border: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    margin-bottom: 20px !important;
  }

  .free-styling-form-text-container p {
    font-size: 18px !important;
    font-family: Cardo;
  }

  .fs-checkbox-container {
    font-size: 12px !important;
    line-height: normal;
    display: flex !important;
    align-items: center;
    margin: 0 !important;
    padding: 0 !important;
    gap: 6px;
    flex-direction: row-reverse;
  }

  .fs-checkbox-container .checkmark {
    display: block;
    top: 0 !important;
    left: 0 !important;
    position: relative !important;
    position: static;
    flex-shrink: 0;
    border-radius: 2px;
    border: 1px solid #757575;
    background: #FFF;
  }

  .form-first-row-item.form-first-row-item-second {
    margin-top: 30px;
  }

  .free-styling-file-description {
    line-height: normal;
    padding-top: 10px;
  }

  .freeStyling-submit-button {
    border-radius: 48px !important;
    background: #333 !important;
    text-transform: capitalize !important;
  }

  .custom-file-upload {
    border-radius: 6px !important;
    border: 1px dashed #555 !important;
    background: #FFF !important;
    height: 120px;
  }

  #free-styling-form .input-custom {
    border-radius: 6px;
    border: 1px solid #555;
    background: #FFF;
  }

  .free-styling-inputs-radio-container .free-styling-inputs-radio-wrapper {
    display: block;
    width: max-content;
    margin: 0;
    margin-bottom: 10px !important;
  }

  .form-third-row-content .half-width-field.half-width-field-second {
    width: 50% !important;
  }

  .form-third-row-content .half-width-field.half-width-field-first {
    width: 50% !important;
  }

  .custom-file-upload {
    width: 100% !important;
  }

  .form-third-row .form-third-row-content {
    gap: 30px;
  }

  .select-room-radio-wrapper img {
    border-radius: 8px;
  }

  .select-room-radio-wrapper input[type=radio]:checked+label img {
    padding: 6px;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 12px;
    outline: 3px solid #F4AC96 !important;
    transform: scale(1) !important;
  }

  .free-styling-inputs-checkbox-wrapper {
    width: 50% !important;
  }

  .free-styling-inputs-content {
    height: 100%;
  }

  .free-styling-inputs-content span:first-child {
    margin-bottom: auto;
  }

  .free-styling-inputs-content span:last-child {
    margin-top: auto;
    border-radius: 25px;
    border: 1px solid #000;
  }

  .free-styling-inputs-content span:last-child svg {
    width: 16px;
    height: 16px;
    padding: 6px;
  }

  @media only screen and (max-width:767px) {

    .free-styling-inputs-checkbox-wrapper,
    .form-third-row-content .half-width-field.half-width-field-second,
    .form-third-row-content .half-width-field.half-width-field-first {
      width: 100% !important;
    }
  }
  .how-does-it-work-content {
    align-items: flex-start !important;
    gap: 16px;
  }

  div.how-does-it-work-index {
    align-items: flex-start !important;
    gap: 12px;
  }

  .how-does-it-work-content .hd-header {
    color: #333;
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
  }

  .how-does-it-work-index>p {
    width: max-content !important;
  }

  .how-does-it-work-index>p img {
    width: 34px;
    height: 34px;
    fill: #333;
  }

  .how-it-works-content-richtext p {
    margin-top: 4px;
    font-size: 13px;
    line-height: 15px;
    color: #555;
  }

  @media only screen and (max-width:767px) {
    .hd-header svg {
      display: none;
    }
  }

  .how-does-it-work-container {
    border-radius: 20px;
    background: #FFF;
    padding: 20px 0px;
    margin-top: 30px;
  }
  .service-and-advice-carousel {
    border-radius: 12px;
    background: #FBE6E3;
    padding: 0px 40px !important;
  }

  .service-and-advice-carousel.slick-initialized.slick-slider {
    padding-bottom: 0;
  }

  .service-and-advice-carousel .slick-button {
    background: #FBE6E3 !important;
  }

  @media (min-width: 1024px) {
    .service-and-advice-carousel .slick-prev {
      left: 15px !important;
    }

    .service-and-advice-carousel .slick-next {
      right: 15px !important;
    }
  }
  .service-and-advice-image-after,
  .service-and-advice-image-before {
    position: relative;
  }

  .advice-before-after svg {
    width: 12px;
    height: 12px;
  }

  .advice-before-after {
    position: absolute;
    border-radius: 32px;
    padding: 6px 12px;
    background: #333;
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .rug-ending-wrapper {
    margin-top: 30px;
  }

  .rug-endings {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  @media only screen and (max-width:991px) {
    .rug-endings {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const majorSubMessage = `<span class="major-sub-message">We have worked with over 10,000 customers to design their dream space!</span>`;

const headerInt = setInterval(() => {
	const title = document.querySelector('.page-header.cf .majortitle');
	if (title && !document.querySelector('.major-sub-message')) {
		title.insertAdjacentHTML('afterend', majorSubMessage);
		clearInterval(headerInt);
	}
}, 10);

const newContact = `<div class="fsa-top">
<div class="fsa-top-content">
<h6 class="small-header">Need Help Choosing a Rug?</h6>
<ul>
<li>Free Rug Styling Advice</li>
<li>Curated To Your Space And Style</li>
<li>24 Hour Turnaround Time</li>
</ul>
<a href="#free-styling-form-wrapper">Get Free Styling Now --></a>
</div>
</div>
<div class="fsa-stylist">
<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Banner_a5c7ca34-7474-4448-8a00-3d710be42620.png?v=1692676935">
<div class="fsa-stylist-content">
<div>
<h6 class="small-header">Need Help Choosing a Rug?</h6>
<strong>Our Interior Experts will help you find your perfect rug.</strong>
<a href="#free-styling-form-wrapper">Get Free Styling Now --></a>
</div>
</div>
</div>
<div class="fsa-team-img">
<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Free_Style_Page_Banner.png?v=1693204398">
</div>
`;

const topInt = setInterval(() => {
	const topParent = document.querySelector('div.free-style-need-help');
	if (topParent && !document.querySelector('.fsa-top')) {
		topParent.style.setProperty('margin-top', '20px', 'important');
		topParent.innerHTML = newContact;
		clearInterval(topInt);
	}
}, 10);

const howHeader = `<span class="sub-header">How does it work?</span>`;
const howDoesHeader = [
	"Tell us  what you're looking for?",
	'We curate a rug selector for you',
	'Free styling service - No Cost!',
];
const howDoesTxt = [
	'Fill in our form and let us know more details about your space, style and specific requirements.',
	'Within 24 hours our expert rug stylists will analyse your space and curate a rug collection based on your needs!',
	'Email or call us and our team is here to help you from rug selection to the delivery!',
];
const howDoesImgs = [
	`https://cdn.shopify.com/s/files/1/2594/4244/files/11-icon.png`,
	`https://cdn.shopify.com/s/files/1/2594/4244/files/2-icon.png`,
	`https://cdn.shopify.com/s/files/1/2594/4244/files/3-icon.png`,
];

const howDoesItWorkInt = setInterval(() => {
	const howDoesItWork = document.querySelector('.how-does-it-work-container');
	const howDoesItWorkHeading = howDoesItWork.querySelector(
		'.how-does-it-work-heading'
	);
	const howDoesItWorkContent = howDoesItWork.querySelector(
		'.how-does-it-work-content'
	);
	const howDoesWorkItems = [
		...document.querySelectorAll('.how-does-it-work-index'),
	];
	if (
		howDoesItWork &&
		howDoesItWorkHeading &&
		howDoesItWorkContent &&
		howDoesWorkItems.length === 3 &&
		!document.querySelector('.hd-header')
	) {
		howDoesWorkItems.map((item, index) => {
			item.querySelector('p').innerHTML = `<img src=${howDoesImgs[index]}>`;
			item
				.querySelector('.how-it-works-content-richtext')
				.insertAdjacentHTML(
					'afterbegin',
					`<span class="hd-header">${howDoesHeader[index]}</span>`
				);
			item.querySelector('.how-it-works-content-richtext p').innerHTML =
				howDoesTxt[index];
		});
		howDoesItWorkHeading.innerHTML = howHeader;
		howDoesItWorkHeading.style.setProperty('margin-top', '0px', 'important');
		clearInterval(howDoesItWorkInt);
	}
}, 10);

const fileUpload = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1642 13.6515L15.4439 14.3452L15.4517 14.3532L16.1642 13.6515ZM16.2875 15.2018C16.675 15.5953 17.3082 15.6001 17.7017 15.2126C18.0951 14.8251 18.1 14.1919 17.7124 13.7984L16.2875 15.2018ZM5.04083 12.2346L4.33667 11.5245L4.3312 11.5301L5.04083 12.2346ZM8.00001 3C8.55231 3 9.00001 2.55228 9.00001 2C9.00001 1.44772 8.55231 1 8.00001 1V3ZM18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11H18ZM14 7C14 7.55228 14.4477 8 15 8C15.5523 8 16 7.55228 16 7H14ZM16 1C16 0.44772 15.5523 0 15 0C14.4477 0 14 0.44772 14 1H16ZM18 5C18.5523 5 19 4.55228 19 4C19 3.44772 18.5523 3 18 3V5ZM12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5V3ZM8.84321 12.9447L10.5605 14.6477L11.9688 13.2276L10.2515 11.5246L8.84321 12.9447ZM11.9688 14.6477L12.3102 14.3092L10.9019 12.8891L10.5605 13.2276L11.9688 14.6477ZM10.5514 14.6385L14.5067 18.6637L15.9333 17.2619L11.9779 13.2368L10.5514 14.6385ZM15.4517 14.3532L16.2875 15.2018L17.7124 13.7984L16.8767 12.9498L15.4517 14.3532ZM12.3102 14.3092C12.7249 13.8979 12.9936 13.6326 13.2141 13.4471C13.4258 13.2691 13.525 13.2249 13.5781 13.2081L12.9764 11.3008C12.5671 11.4299 12.2338 11.6584 11.9269 11.9164C11.6288 12.1671 11.2931 12.5012 10.9019 12.8891L12.3102 14.3092ZM16.8845 12.9578C16.5024 12.5611 16.1743 12.2193 15.8822 11.9619C15.5813 11.6969 15.2533 11.4608 14.8471 11.3223L14.2017 13.2153C14.2543 13.2333 14.3526 13.2798 14.5601 13.4626C14.7763 13.6531 15.0387 13.9245 15.4439 14.3452L16.8845 12.9578ZM13.5781 13.2081C13.7814 13.144 13.9999 13.1465 14.2017 13.2153L14.8471 11.3223C14.2417 11.1159 13.5863 11.1084 12.9764 11.3008L13.5781 13.2081ZM5.74497 12.9447C6.15131 12.5417 6.41407 12.2823 6.62984 12.1005C6.8366 11.9264 6.93395 11.8823 6.98666 11.8652L6.37181 9.9621C5.97014 10.0919 5.64296 10.3169 5.34145 10.5708C5.04895 10.8172 4.71968 11.1447 4.33667 11.5245L5.74497 12.9447ZM10.2515 11.5246C9.86851 11.1448 9.53921 10.8172 9.24671 10.5708C8.94521 10.3168 8.61801 10.0919 8.21631 9.9621L7.60151 11.8652C7.65421 11.8823 7.75161 11.9264 7.95831 12.1005C8.17411 12.2823 8.43681 12.5417 8.84321 12.9447L10.2515 11.5246ZM6.98666 11.8652C7.18651 11.8007 7.40161 11.8007 7.60151 11.8652L8.21631 9.9621C7.61681 9.7684 6.9714 9.7684 6.37181 9.9621L6.98666 11.8652ZM4.20001 3H8.00001V1H4.20001V3ZM13.8 17H4.20001V19H13.8V17ZM2.00001 14.8V5.2H6.32377e-06V14.8H2.00001ZM4.20001 17C3.62346 17 3.25118 16.9992 2.96785 16.9761C2.69618 16.9539 2.59546 16.9162 2.54602 16.891L1.63804 18.673C2.01642 18.8658 2.40964 18.9371 2.80498 18.9694C3.18865 19.0008 3.65646 19 4.20001 19V17ZM2.54602 16.891C2.35786 16.7951 2.20488 16.6422 2.109 16.454L0.326986 17.362C0.614606 17.9265 1.07355 18.3854 1.63804 18.673L2.54602 16.891ZM16 14.8C16 15.3766 15.9992 15.7488 15.9761 16.0322C15.9539 16.3038 15.9162 16.4045 15.891 16.454L17.673 17.362C17.8658 16.9836 17.9371 16.5904 17.9694 16.195C18.0008 15.8114 18 15.3436 18 14.8H16ZM13.8 19C14.3987 19 14.9107 19.0013 15.3258 18.9572L15.1142 16.9684C14.8299 16.9987 14.4439 17 13.8 17V19ZM15.3258 18.9572C15.6765 18.9199 16.0245 18.8449 16.362 18.673L15.454 16.891C15.4104 16.9132 15.325 16.946 15.1142 16.9684L15.3258 18.9572ZM15.891 16.454C15.7951 16.6422 15.6422 16.7951 15.454 16.891L16.362 18.673C16.9265 18.3854 17.3854 17.9265 17.673 17.362L15.891 16.454ZM4.20001 1C3.65646 1 3.18865 0.99922 2.80498 1.03057C2.40964 1.06287 2.01642 1.13419 1.63804 1.32698L2.54602 3.10899C2.59546 3.0838 2.69618 3.04612 2.96785 3.02393C3.25118 3.00078 3.62346 3 4.20001 3V1ZM2.00001 5.2C2.00001 4.62345 2.00079 4.25117 2.02394 3.96784C2.04613 3.69617 2.08381 3.59545 2.109 3.54601L0.326986 2.63803C0.134196 3.01641 0.0628764 3.40963 0.0305764 3.80497C-0.000773648 4.18864 6.32377e-06 4.65645 6.32377e-06 5.2H2.00001ZM1.63804 1.32698C1.07355 1.6146 0.614606 2.07354 0.326986 2.63803L2.109 3.54601C2.20488 3.35785 2.35786 3.20487 2.54602 3.10899L1.63804 1.32698ZM6.32377e-06 14.8C6.32377e-06 15.421 -0.00165367 15.9512 0.0488163 16.3793L2.03506 16.1451C2.00167 15.8619 2.00001 15.4721 2.00001 14.8H6.32377e-06ZM0.0488163 16.3793C0.0880363 16.712 0.163766 17.0416 0.326986 17.362L2.109 16.454C2.08792 16.4126 2.05725 16.3333 2.03506 16.1451L0.0488163 16.3793ZM1.75157 16.9668L5.75046 12.9392L4.3312 11.5301L0.332306 15.5576L1.75157 16.9668ZM16 11V14.8H18V11H16ZM16 7V4H14V7H16ZM16 4V1H14V4H16ZM18 3H15V5H18V3ZM15 3H12V5H15V3Z" fill="#131A29"/>
</svg>
`;

const freeStyleInt = setInterval(() => {
	const formStyle = document.querySelector('.free-styling-container.container');
	const freeStyleType = formStyle.querySelector('.form-second-row');
	const freeStyleConcern = formStyle.querySelector(
		'.form-first-row-item.form-first-row-item-second'
	);
	const freeStyleSubmit = formStyle.querySelector(
		'.full-width-field.free-styling-submit'
	);
	const freeStyleThird = formStyle.querySelector('.form-third-row-content');
	const freeStyleThirdCheckbox = formStyle.querySelector(
		'.free-styling-inputs-checkbox-wrapper'
	);
	const freeStyleThirdInput = formStyle.querySelector(
		'.free-styling-inputs-content span:nth-of-type(2)'
	);
	if (
		freeStyleType &&
		formStyle &&
		freeStyleSubmit &&
		freeStyleConcern &&
		freeStyleThird &&
		freeStyleThirdCheckbox &&
		freeStyleThirdInput
	) {
		formStyle.insertAdjacentElement('afterbegin', freeStyleType);
		freeStyleSubmit.insertAdjacentElement('beforebegin', freeStyleConcern);
		freeStyleThird.insertAdjacentElement('afterend', freeStyleThirdCheckbox);
		freeStyleThirdInput.innerHTML = fileUpload;
		clearInterval(freeStyleInt);
	}
}, 10);

const adviceHeader = `<span class="sub-header">Finished Customer Spaces</span>`;

const adviceBeforeAfter = (
	text
) => `<span class="advice-before-after"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 10.8C7.27304 10.8 8.49394 10.2943 9.39411 9.39411C10.2943 8.49394 10.8 7.27304 10.8 6C10.8 4.72696 10.2943 3.50606 9.39411 2.60589C8.49394 1.70571 7.27304 1.2 6 1.2C4.72696 1.2 3.50606 1.70571 2.60589 2.60589C1.70571 3.50606 1.2 4.72696 1.2 6C1.2 7.27304 1.70571 8.49394 2.60589 9.39411C3.50606 10.2943 4.72696 10.8 6 10.8ZM5.4 3H6.6V4.2H5.4V3ZM5.4 5.4H6.6V9H5.4V5.4Z" fill="white"/>
</svg>
${text}</span>`;

const adviceInt = setInterval(() => {
	const advice = document.querySelector(
		'.service-and-advice-container.container'
	);
	const after = [...advice.querySelectorAll('.service-and-advice-image-after')];
	const before = [
		...advice.querySelectorAll('.service-and-advice-image-before'),
	];
	if (
		advice &&
		after.length > 0 &&
		before.length > 0 &&
		!document.querySelector('.advice-before-after')
	) {
		advice.insertAdjacentHTML('beforebegin', adviceHeader);
		after.map((item) => {
			item.insertAdjacentHTML('beforeend', adviceBeforeAfter('After'));
		});
		before.map((item) => {
			item.insertAdjacentHTML('beforeend', adviceBeforeAfter('Before'));
		});
		clearInterval(adviceInt);
	}
}, 10);

const appointmentTextContent = `<div class="app-cnt-wrap">
<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Phone_icon_30c5c2e2-06b8-40c7-ad13-e8755d8108b5.svg?v=1693204397">
<span class="appointment-content-text"><small>Call now to speak to one of our interior Stylist</small><strong>Don't waste another moment searching for the perfect rug!</strong></span>
</div>`;

const appointmentActionContent = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_741_207)">
<path d="M15.9911 19.9555C15.1216 19.9555 13.9002 19.6411 12.0713 18.6192C9.84724 17.372 8.12697 16.2206 5.91494 14.0143C3.7822 11.8829 2.74434 10.503 1.29178 7.85976C-0.3492 4.87535 -0.0694674 3.31099 0.243227 2.64239C0.61561 1.84328 1.16528 1.36533 1.87574 0.890944C2.27929 0.62655 2.70633 0.399905 3.15147 0.213883C3.19601 0.19473 3.23744 0.176467 3.27441 0.159986C3.4949 0.0606541 3.82897 -0.0894573 4.25214 0.0708991C4.53454 0.176912 4.78666 0.393839 5.18131 0.783594C5.99067 1.58181 7.09668 3.35954 7.5047 4.23259C7.77864 4.82101 7.95993 5.20943 7.96038 5.64506C7.96038 6.15509 7.70381 6.5484 7.39245 6.9729C7.3341 7.05264 7.27619 7.12881 7.22006 7.20275C6.88109 7.64818 6.8067 7.77691 6.8557 8.00676C6.95503 8.46867 7.69579 9.84373 8.91316 11.0584C10.1305 12.2731 11.4659 12.9671 11.9296 13.066C12.1693 13.1172 12.3007 13.0397 12.7604 12.6887C12.8263 12.6384 12.894 12.5863 12.9648 12.5342C13.4397 12.1809 13.8147 11.931 14.3127 11.931H14.3154C14.7488 11.931 15.1198 12.119 15.7345 12.429C16.5363 12.8335 18.3675 13.9252 19.1706 14.7355C19.5613 15.1293 19.7791 15.3805 19.8855 15.6624C20.0459 16.0869 19.8949 16.4197 19.7965 16.6424C19.78 16.6794 19.7617 16.7199 19.7426 16.7649C19.5551 17.2092 19.3271 17.6354 19.0615 18.0379C18.588 18.7462 18.1083 19.2945 17.3074 19.6673C16.8961 19.8619 16.446 19.9604 15.9911 19.9555Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_741_207">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<span>Call now</span>
<span>02 8015 5926</span>
`;

const replaceAppointmentInt = setInterval(() => {
	const replaceAppointment = document.querySelector('.appointment-wrapper');
	const replaceAppointmentParent = document.querySelector(
		'#shopify-section-service-advice'
	);
	const replaceAppointmentContentWrapper = document.querySelector(
		'.appointment-content-wrapper'
	);
	if (
		replaceAppointment &&
		replaceAppointmentParent &&
		!document.querySelector('.appointment-content-text')
	) {
		const replaceAppointmentImg = replaceAppointment.querySelector(
			'.appointment-content img'
		);
		const replaceAppointmentAction = replaceAppointment.querySelector(
			'.appointment-content-btn'
		);
		replaceAppointmentImg.insertAdjacentHTML(
			'afterend',
			appointmentTextContent
		);
		replaceAppointmentAction.innerHTML = appointmentActionContent;
		replaceAppointmentParent.insertAdjacentElement(
			'afterend',
			replaceAppointment
		);
		const newDiv = document.createElement('div');
		newDiv.classList.add('container-app');
		replaceAppointment.classList.add('container');
		newDiv.insertAdjacentElement(
			'afterbegin',
			replaceAppointmentContentWrapper
		);
		replaceAppointment.insertAdjacentElement('beforeend', newDiv);
		clearInterval(replaceAppointmentInt);
	}
}, 10);

const happyRugEndings = `<div class="container rug-ending-wrapper">
<span class="sub-header">Happy Rug Endings</span>
<div class="rug-endings">
<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/2_be357073-aa24-4078-8025-4592d504e657.png">
<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/4_953558f9-b329-4b0f-93c2-12e696ca1cdd.png">
<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/1_9e4bf85c-eda9-4412-a352-a3f9483e710f.png?">
<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/3_475af7c2-cc4b-401f-9b69-5ba10f0cbde8.png">
</div>
</div>`;

const logoInt = setInterval(() => {
	const formElm = document.querySelector('#shopify-section-free-styling-form');
	const logoElm = document.querySelector('#shopify-section-brands-logo');
	if (formElm && logoElm && !document.querySelector('.rug-ending-wrapper')) {
		formElm.insertAdjacentElement('afterend', logoElm);
		logoElm.insertAdjacentHTML('afterend', happyRugEndings);
		clearInterval(logoInt);
	}
}, 10);

const callInt = setInterval(() => {
	const appElm = document.querySelector('.appointment-wrapper.container');
	const stylish = document.querySelector('.fsa-stylist');
	if (appElm && stylish) {
		stylish.insertAdjacentElement('afterend', appElm);
		clearInterval(callInt);
	}
}, 10);
