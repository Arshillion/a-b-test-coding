const revs = [
	{
		name: 'Karen R.',
		title: 'Works well',
		quote: `Love it .It is so easy. Wishing I had bought two one for traveling with . Will do that soon.`,
		img: 'https://cdn.stamped.io/uploads/photos/99967_4691735609433_61310a02_fd07_4dce_82ff_0db8c88b8b93.jpg',
	},
	{
		name: 'Celine L.',
		title: `It's good`,
		quote: `It's teadious and haven't seen much of a difference but definitely feels like my skin is tighter`,
		img: 'https://cdn.stamped.io/uploads/photos/99967_4691735609433_80086e9d_c3d4_4661_9e42_65334260852f.jpg',
	},
	{
		name: 'Julie B.',
		title: 'Body sculptor',
		quote: `So far so good. Used twice now`,
		img: 'https://cdn.stamped.io/uploads/photos/99967_4691735609433_742ce80d_16e0_410f_bd7f_4945682b7fac.jpg',
	},
];

const style = `
<style>
    .static-revs {
        padding: 0;
        border-radius: 4px;
        border: 1px solid #E9D4FF;
        background: #FBF8FF;
        position: relative;
        margin: 40px 0;
    }
    .static-revs .static-rev{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
    }
    .static-revs .static-rev .rev-info{
        padding: 12px;
        text-align: left;
    }
    .static-revs .static-rev img{
        object-fit: cover;
        height: 200px;
        width: 120px;
    }
    .static-revs .static-rev h3{
        color: #000;
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
    }
    .static-revs .static-rev p{
        color: #000;
        font-size: 16px;
        font-weight: 400;
        line-height: 22.4px;
    }
    .static-revs .static-rev strong{
        color: #000;
        font-size: 16px;
        font-weight: 600;
    }
    .static-revs .static-rev:not(:nth-of-type(1)) {
        display: none;
    }
</style>
`;

const revsElm = `
<div class="static-revs">
    ${revs
			.map(
				(rev) => `
        <div class="static-rev">
            <img src=${rev.img} alt="" />
            <div class="rev-info">
                <h3>${rev.title}</h3>
                <p>${rev.quote}</p>
                <strong>${rev.name}</strong>
            </div>
        </div>
        `
			)
			.join('')}
</div>
`;

const styleInterval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(styleInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

const revInterval = setInterval(() => {
	try {
		const reviewApp = document.querySelector('.reeview-app-widget');
		if (reviewApp && !document.querySelector('.static-revs')) {
			reviewApp.insertAdjacentHTML('beforebegin', revsElm);
			clearInterval(revInterval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);

let currentRev = 1;

const showHideInterval = setInterval(() => {
	try {
		const revsChk = document.querySelectorAll('.static-revs .static-rev');
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
