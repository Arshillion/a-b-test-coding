const instant_saving_html = `
<style>
	.instant-saving-img-cnt {
		display: flex!important;
		align-items: center;
		justify-content: space-between;
	}
	.instant-saving-img-cnt img {
		width: 50px;
	}
</style>
<img
	src="https://carlsgolfland.s3.us-east-2.amazonaws.com/CM_Coupon_Badge_2022.png"
/>
`;

const interval = setInterval(() => {
	const cyber_monday = document.querySelector(
		'.filter-options-content.cybermonday'
	);
	if (cyber_monday && !document.querySelector('.instant-saving-img-cnt')) {
		cyber_monday.classList.add('instant-saving-img-cnt');
		cyber_monday.insertAdjacentHTML('beforeend', instant_saving_html);
	}
}, 1);
