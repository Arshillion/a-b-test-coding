const style = `
<style>
#shopify-section-product-template
	.station-tabs-tabset.mod-vertical
	.station-tabs-tab {
	border: none !important;
}
#shopify-section-product-template .station-tabs-tabset::after {
	content: '';
	position: absolute;
	background: #fff3f7;
	right: -100%;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: 999;
}
#shopify-section-product-template .station-tabs-tabset::before {
	content: '';
	position: absolute;
	background: #fff3f7;
	left: -100%;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: 999;
}
#shopify-section-product-template .station-tabs-tabset {
	background: #fff3f7;
	padding: 16px !important;
	border-radius: 8px;
}
#shopify-section-product-template .station-tabs .station-tabs-tabset.mod-vertical .station-tabs-tabcontent{
	margin: 0 !important;
}

#shopify-section-product-template .station-tabs-tabtitle{
	padding: 10px !important;
	background: #ffffff !important;
}
#shopify-section-product-template .station-tabs-tabpanel .station-tabs-tabcontent{
	padding: 10px !important;
	background: #ffffff !important;
}
#shopify-section-product-template .station-tabs-tabset .station-tabs-tabtitle:first-child{
	margin-top: 20px !important;
	border-radius: 8px 8px 0 0 !important;
}
#shopify-section-product-template .station-tabs-tabset .station-tabs-tabpanel{
	border-top: 1px solid #eeeeee !important;
}
#shopify-section-product-template .station-tabs-tabset .station-tabs-tabpanel:last-child{
	margin-bottom: 20px !important;
	border-radius: 0 0 8px 8px!important;
	border-top: none !important;
}
</style>
`;

const interval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
