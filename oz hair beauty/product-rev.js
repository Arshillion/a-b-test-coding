const starSvg = `
<svg width="76" height="13" viewBox="0 0 76 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0.714294L7.34708 4.86019H11.7063L8.17963 7.4225L9.52671 11.5684L6 9.00609L2.47329 11.5684L3.82037 7.4225L0.293661 4.86019H4.65292L6 0.714294Z" fill="black"></path>
<path d="M22 0.714294L23.3471 4.86019H27.7063L24.1796 7.4225L25.5267 11.5684L22 9.00609L18.4733 11.5684L19.8204 7.4225L16.2937 4.86019H20.6529L22 0.714294Z" fill="black"></path>
<path d="M38 0.714294L39.3471 4.86019H43.7063L40.1796 7.4225L41.5267 11.5684L38 9.00609L34.4733 11.5684L35.8204 7.4225L32.2937 4.86019H36.6529L38 0.714294Z" fill="black"></path>
<path d="M54 0.714294L55.3471 4.86019H59.7063L56.1796 7.4225L57.5267 11.5684L54 9.00609L50.4733 11.5684L51.8204 7.4225L48.2937 4.86019H52.6529L54 0.714294Z" fill="black"></path>
<path d="M70 0.714294L71.3471 4.86019H75.7063L72.1796 7.4225L73.5267 11.5684L70 9.00609L66.4733 11.5684L67.8204 7.4225L64.2937 4.86019H68.6529L70 0.714294Z" fill="black"></path>
</svg>
`;

const style = `
<style>
    .top-revs{
        background: #d18ffd55;
        border-radius: 6px;
        padding: 16px;
        margin: 20px 0;
    }
    .top-revs .single-rev{
        color: #444;
        font-size: 14px;
        font-weight: 500;
        display: grid;
        gap: 4px;
    }
    .top-revs .single-rev div{
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .top-revs .single-rev svg{
        color: #fea760;
    }
    .top-revs .single-rev h4{
        color: #000;
        font-size: 20px;
        font-weight: 700;
    }
    .top-revs .single-rev:not(:nth-of-type(1)) {
        display: none;
    }
</style>
`;

const getRev = (rev) => {
	const title = rev.querySelector('h4');
	const quote = rev.querySelector('p');
	const name = rev.querySelector('span');
	return `
<div class="single-rev">
    <h4>${title.innerText}</h4>
    <div>
        ${starSvg}
        <span>${name.innerText}</span>
    </div>
    <p>${quote.innerText}</p>
</div>
`;
};

const new_rev_elm = (revs) => `
<div class="top-revs">
    ${revs}
</div>
`;

const interval = setInterval(() => {
	try {
		const revs = document.querySelectorAll(
			'.product-review .pr-do-not-use-aada-a-fapaes a'
		);
		const action = document.querySelector('#product-detail-action');
		const head = document.querySelector('head');
		console.log('revs,action', revs, action);
		if (head && action && !document.querySelector('.top-revs')) {
			head.insertAdjacentHTML('beforeend', style);
			let revsElm = '';
			revs.forEach((rev) => {
				revsElm += getRev(rev);
			});
			action.insertAdjacentHTML('afterend', new_rev_elm(revsElm));
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

let currentRev = 1;

const showHideInterval = setInterval(() => {
	try {
		const revsChk = document.querySelectorAll('.top-revs .single-rev');
		if (revsChk) {
			revsChk.forEach((rev, index) => {
				if (index === currentRev) {
					rev.style.display = 'grid';
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
