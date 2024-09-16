// v1
const test_int = setInterval(() => {
	const type_area = document.querySelector(
		'#shopify-section-408b8ba8-8b28-48e0-9652-3fad92bd41da'
	);
	const photo_area = document.querySelector(
		'#shopify-section-0b438056-01c6-4e1d-b266-294fe61ed8bd'
	);
	if (photo_area && type_area) {
		type_area.insertAdjacentElement('beforebegin', photo_area);
		clearInterval(test_int);
	}
}, 10);

// v2
const test_sec_int = setInterval(() => {
	const type_area = document.querySelector(
		'#shopify-section-408b8ba8-8b28-48e0-9652-3fad92bd41da'
	);
	const photo_area = document.querySelector(
		'#shopify-section-0b438056-01c6-4e1d-b266-294fe61ed8bd'
	);
	if (photo_area && type_area) {
		photo_area.querySelector('a').innerHTML = `
			<picture>
  				<source media="(min-width: 768px)" srcset="https://cdn.shopify.com/s/files/1/2594/4244/files/SydneyTeam-ABTest_Desktop4-gotham.png?v=1701833074">
  				<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/SydneyTeam-ABTest_Mobile4-gotham.png?v=1701833074">
			</picture>
`;
		type_area.insertAdjacentElement('beforebegin', photo_area);
		clearInterval(test_sec_int);
	}
}, 10);

// #shopify-section-0b438056-01c6-4e1d-b266-294fe61ed8bd .fully-spaced-row{
// 	margin-top: 0px!important;
//     margin-bottom: 0px!important;
// }
