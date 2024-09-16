const revs = [
    {
        name: 'Wahwah L.',
        title: 'Nice',
        quote: `I love this device..nice..so change`,
        img: 'https://cdn.stamped.io/uploads/photos/99967_6643498451127_3a0941f7_4035_4f4c_9391_b2914cea616b.jpeg',
    },
    {
        name: 'charlotte c.',
        title: `Great product`,
        quote: `Works so well, have already seen amazing results!`,
        img: 'https://cdn.stamped.io/uploads/photos/100211_6619884978369_a3ccdb15_6b0c_4d08_a994_e483771eb159.jpg',
    },
    {
        name: 'Prabhdeep K.',
        title: '5star product',
        quote: `I really like the handset. i was so worried to buy i don’t want waste my money, but its really good i am happy with result and shipping. I’ll be more good if it’s wireless.`,
        img: 'https://cdn.stamped.io/uploads/photos/100211_6619884978369_287d0195_e57c_412f_ad2c_4a57cd619ea7.jpg',
    },
    {
        name: 'Supritha S.',
        title: 'Amazing',
        quote: `I can see significant reduction in hair growth after few weeks.`,
        img: 'https://cdn.stamped.io/uploads/photos/100211_6619884978369_7ce85804_e288_4ff3_bf6e_e081bc34c03a.jpg',
    },
    {
        name: 'Jannaye W.',
        title: 'Impressive',
        quote: `Very impressed with my products, just got my order in and can't wait for the results. Watched tons of videos and by far liked their products. Very easy to use`,
        img: 'https://cdn.stamped.io/uploads/photos/99967_6643498451127_f19663f0_bb92_4a1b_ac1c_b7366da2c241.jpg',
    },
];

const star = `
<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0L9.05725 4.16844L13.6574 4.83688L10.3287 8.08156L11.1145 12.6631L7 10.5L2.8855 12.6631L3.6713 8.08156L0.342604 4.83688L4.94275 4.16844L7 0Z" fill="#FCD53F"/>
</svg>
`;
const style = `
<style>
    .static-revs * {
        padding: 0;
        margin: 0;
    }
    .static-revs {
        padding: 0;
        border-radius: 4px;
        border: 2px solid #E9D4FF;
        background: #FBF8FF;
        position: relative;
        margin: 40px 0;
		overflow: hidden;
    }
    .static-revs .static-rev{
        display: grid;
        grid-template-columns: auto 1fr;
		align-items: center;
		overflow: hidden;
    }
    .static-revs .static-rev .rev-info{
        padding: 12px;
        display: flex;
		flex-direction: column;
		gap: 6px;
		align-items: flex-start;
		text-align: left;
    }
    .static-revs .static-rev img{
        object-fit: cover;
        width: 120px;
	    height: 140px;
    }
    .static-revs .static-rev h3{
        color: #000;
        font-size: 15px;
        line-height: 24px;
        min-height: 15px;
        margin: 5px 0 0;
        padding: 0;
        border: none;
        font-weight: 700;
        font-family: Montserrat, sans-serif;
    }
    .static-revs .static-rev p{
        color: #000;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }
    .static-revs .static-rev strong{
        color: #000;
        font-size: 14px;
        font-weight: 600;
    }
    .static-revs .static-rev:not(:nth-of-type(1)) {
        display: none;
    }
	.float-cart button{
        padding: 12px 48px;
        border-radius: 4px;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        text-align: center;
        background: #ff437b !important;
    	color: #000 !important;
        flex-shrink: 0;
		width: 100%;
    }
	.float-cart{
        background: #f5f5f5;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
        gap: 60px;
		position: fixed;
		bottom: -200px;
		left: 0;
		right: 0;
        transition: 1s;
		z-index: 99;
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
                <p>${star}${star}${star}${star}${star}</p>
            </div>
        </div>
        `
        )
        .join('')}
</div>
`;

const float_elm_html = () => `
<div class="float-cart">
    <button onclick="document.querySelector('#AddToCart').click()">ADD TO CART</button>
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
        const reviewApp = document.querySelector('.new-usps');
        if (reviewApp && !document.querySelector('.static-revs')) {
            reviewApp.insertAdjacentHTML('afterend', revsElm);
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

const floatInterval = setInterval(() => {
    const head = document.querySelector('head');
    const body = document.querySelector('body');
    if (body && head && !document.querySelector('.float-cart')) {
        head.insertAdjacentHTML('beforeend', style);
        body.insertAdjacentHTML('beforeend', float_elm_html());
        clearInterval(floatInterval);
    }
}, 10);

window.addEventListener('scroll', function () {
    const float = document.querySelector('.float-cart');
    const exist = document.querySelector('#AddToCart');
    if (float && exist) {
        const topOffset = exist.getBoundingClientRect().bottom;
        if (topOffset <= 0) {
            float.style.bottom = '0';
        } else {
            float.style.bottom = '-200px';
        }
    }
});
