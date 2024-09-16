const style = `
<style>
    #content .mobile_layout .hero__top-title,#content .mobile_layout .hero__mobile-content,.desktop_layout .hero__top-title,.desktop_layout .hero__title {
        display: none!important;
    }
    #mobile-header-srh,#content .mobile-title,#content .desktop-title, #content .ns-20-text-content {
        display: none!important;
    }
    .header-main-message {
        display: grid;
        margin: 12px 0;
    }
    .header-main-message small{
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.01em;
        text-align: center;
        color: #00594E;
    }
    .header-main-message strong{
        font-size: 48px;
        line-height: 48px;
        font-weight: 400;
        letter-spacing: -0.01em;
        text-align: center;
        color: #00594E;
    }
    .header-main-message span{
        font-size: 48px;
        line-height: 48px;
        font-weight: 200;
        letter-spacing: -0.01em;
        text-align: center;
        color: #00594E;
    }
    .header-secondary-message{
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #212529;
        padding: 0 10px;
    }
    .header-main-message.small{
        display: none;
    }
    @media (max-width:1000px){
        .header-main-message.small{
            display: grid;
            margin: 30px 0;
        }
        .header-main-message.large{
            display: none;
        }
    }
    @media (max-width:480px){
        .header-main-message small{
            font-size: 18px;
            line-height: 18px;
        }
        .header-main-message strong{
            font-size: 36px;
            line-height: 36px;
        }
        .header-main-message span{
            font-size: 36px;
            line-height: 36px;
        }
    }
</style>
`;

const mainHeader = (type = 'small') => `
<h1 class="header-main-message ${type}">
    <small>Healthy living made easy</small>
    <strong>Reach your goals</strong>
    <span>and stay there</span>
</h1>
`;

const secondaryHeader = `
<p class="header-secondary-message">
    Kickstart weight-loss, reset your healthy habits & feel your best. Our natural juices are packed with fruit and veg to get you feeling healthier, cleanse your body, crush your cravings and keep you on track!
</p>
`;

const firstInterval = setInterval(() => {
	try {
		const heroDetail = document.querySelector('#content .hero__cards');
		const imgDetails = document.querySelector(
			'#content .mobile_layout .hero__img'
		);
		const head = document.querySelector('head');
		if (heroDetail && head) {
			head.insertAdjacentHTML('beforeend', style);
			heroDetail.insertAdjacentHTML('beforebegin', mainHeader('large'));
			heroDetail.insertAdjacentHTML('beforebegin', secondaryHeader);
			imgDetails.insertAdjacentHTML('beforebegin', mainHeader('small'));
			imgDetails.insertAdjacentHTML('afterend', secondaryHeader);
			clearInterval(firstInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const secondInterval = setInterval(() => {
	try {
		const heroDetail = document.querySelector('#content .mobile-title');
		const imgDetails = document.querySelector('#content img');
		const head = document.querySelector('head');
		if (heroDetail && head) {
			head.insertAdjacentHTML('beforeend', style);
			imgDetails.insertAdjacentHTML('beforebegin', mainHeader('small'));
			heroDetail.insertAdjacentHTML('beforebegin', mainHeader('large'));
			heroDetail.insertAdjacentHTML('beforebegin', secondaryHeader);
			clearInterval(secondInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
