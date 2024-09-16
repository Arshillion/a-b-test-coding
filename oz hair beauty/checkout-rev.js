const quoteSvg = `
<svg width="45" height="32" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M24.954 19.7977C24.954 27.2685 29.2389 32 35.1622 32C40.7074 32 44.4883 28.1401 44.4883 22.6615C44.4883 17.1829 40.8335 14.07 36.2965 14.07C34.9102 14.07 33.7759 14.3191 32.7677 14.6926C32.7677 10.3346 36.6746 6.97276 42.0938 5.97665V0C32.0115 1.24513 24.954 9.33852 24.954 19.7977ZM0.000476837 19.7977C0.000476837 27.2685 4.28542 32 10.2087 32C15.7539 32 19.5348 28.1401 19.5348 22.6615C19.5348 17.1829 16.006 14.07 11.469 14.07C10.0827 14.07 8.94844 14.3191 7.94022 14.6926C7.94022 10.3346 11.7211 6.97276 17.1403 5.97665V0C7.05803 1.24513 0.000476837 9.33852 0.000476837 19.7977Z" fill="#7A7A7A"/>
</svg>
`;

const revs = [
	{
		name: 'Asfak Mahmud',
		quote: `1Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.`,
	},
	{
		name: 'Asfak Mahmud',
		quote: `2Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.`,
	},
	{
		name: 'Asfak Mahmud',
		quote: `3Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.`,
	},
];

const style = `
<style>
    .checkout-revs {
        padding: 24px 48px;
        border-radius: 4px;
        border: 1px solid #E9D4FF;
        background: #FBF8FF;
        position: relative;
        margin: 40px 0;
    }
    .checkout-revs h4 {
        background: #4E4E4E;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        width: max-content;
        margin: auto;
        padding: 12px 24px;
        border-radius: 24px;
        margin-top: -40px;
        margin-bottom: 40px;
    }
    .checkout-revs .checkout-rev{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    .checkout-revs .checkout-rev p{
        color: #000;
        font-size: 16px;
        font-weight: 400;
        line-height: 22.4px;
        text-align: center;
    }
    .checkout-revs .checkout-rev strong{
        color: #000;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }
    .checkout-revs svg {
        position: absolute;
        top: 24px;
        left: 12px;
        width: 40px;
        height: 30px;
    }
    .checkout-revs .checkout-rev:not(:nth-of-type(1)) {
        display: none;
    }
</style>
`;

const revsElm = `
<div class="checkout-revs">
    <h4>Over 90,000+ Reviews</h4>
    ${quoteSvg}
    ${revs
			.map(
				(rev) => `
        <div class="checkout-rev">
            <p>${rev.quote}</p>
            <strong>${rev.name}</strong>
        </div>
        `
			)
			.join('')}
</div>
`;

const interval = setInterval(() => {
	try {
		const orderSummary = document.querySelector('#order-summary');
		const head = document.querySelector('head');
		if (orderSummary && head && !document.querySelector('.checkout-revs')) {
			head.insertAdjacentHTML('beforeend', style);
			orderSummary.insertAdjacentHTML('beforeend', revsElm);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

let currentRev = 1;

const showHideInterval = setInterval(() => {
	try {
		const revsChk = document.querySelectorAll('.checkout-revs .checkout-rev');
		if (revsChk) {
			revsChk.forEach((rev, index) => {
				if (index === currentRev) {
					rev.style.display = 'flex';
				} else {
					rev.style.display = 'none';
				}
			});
			if (currentRev < revsChk.length - 1) {
				currentRev++;
			} else {
				currentRev = 0;
			}
		}
	} catch (error) {
		console.log('error', error);
	}
}, 3000);
