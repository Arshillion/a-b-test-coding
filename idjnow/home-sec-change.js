const message_int = setInterval(() => {
	const review = document.querySelector('.column>div:nth-child(1)');
	const brands = document.querySelector('.home-page-brands');
	const widget = document.querySelector('.widget:nth-child(6)');

	if (review && widget && brands && !document.querySelector('.brand-new')) {
		brands.classList.add('brand-new');
		review.insertAdjacentElement('afterend', brands);
		review.insertAdjacentElement('afterend', widget);
		clearInterval(message_int);
	}
}, 10);

// .home-page-brands .home-page-brands-block {
//     display: grid;
//     grid-template-columns: repeat(10, 1fr);
//   }
//   .home-page-brands .home-page-brands-block .home-page-brands-item{
//     width: 100%;
//     max-width: 100%;
//   }
// @media only screen and (max-width:991px){
//     .home-page-brands .home-page-brands-block {
//       grid-template-columns: repeat(5, 1fr);
//     }
// }
