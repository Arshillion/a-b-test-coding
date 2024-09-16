const star = `
<svg width="96" height="14" viewBox="0 0 96 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7375 0C14.5112 0 16.375 2.6075 16.375 5.04C16.375 9.96625 8.64 14 8.5 14C8.36 14 0.625 9.96625 0.625 5.04C0.625 2.6075 2.48875 0 5.2625 0C6.855 0 7.89625 0.79625 8.5 1.49625C9.10375 0.79625 10.145 0 11.7375 0Z" fill="#FF437B"/>
    <path d="M31.4875 0C34.2612 0 36.125 2.6075 36.125 5.04C36.125 9.96625 28.39 14 28.25 14C28.11 14 20.375 9.96625 20.375 5.04C20.375 2.6075 22.2388 0 25.0125 0C26.605 0 27.6462 0.79625 28.25 1.49625C28.8538 0.79625 29.895 0 31.4875 0Z" fill="#FF437B"/>
    <path d="M51.2375 0C54.0112 0 55.875 2.6075 55.875 5.04C55.875 9.96625 48.14 14 48 14C47.86 14 40.125 9.96625 40.125 5.04C40.125 2.6075 41.9888 0 44.7625 0C46.355 0 47.3962 0.79625 48 1.49625C48.6038 0.79625 49.645 0 51.2375 0Z" fill="#FF437B"/>
    <path d="M70.9875 0C73.7612 0 75.625 2.6075 75.625 5.04C75.625 9.96625 67.89 14 67.75 14C67.61 14 59.875 9.96625 59.875 5.04C59.875 2.6075 61.7388 0 64.5125 0C66.105 0 67.1462 0.79625 67.75 1.49625C68.3538 0.79625 69.395 0 70.9875 0Z" fill="#FF437B"/>
    <path d="M90.7375 0C93.5112 0 95.375 2.6075 95.375 5.04C95.375 9.96625 87.64 14 87.5 14C87.36 14 79.625 9.96625 79.625 5.04C79.625 2.6075 81.4888 0 84.2625 0C85.855 0 86.8962 0.79625 87.5 1.49625C88.1038 0.79625 89.145 0 90.7375 0Z" fill="#FF437B"/>
</svg>
`;

const style = `
<style>
    #shopify-section-1658745910cd7c7b95 {
        display: none
    }
    .new-area {
        background: white;
        padding: 40px 20px;
        display: grid;
        gap: 40px;
    }
    .new-hero-elm{
        display: grid;
        grid-template-columns: 3fr 2fr;
        align-items:center;
        background: #F3F3F3;
        padding: 20px 40px;
        max-width: 1400px;
        width: 100%;
        margin:auto;
    }
    .new-hero-elm img {
        margin-left: auto;
    }
    .hero-area {
        display: grid;
        gap:10px;
        max-width: 85%;
    }
    .hero-area span {
        color: #0D0C22;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
    }
    .hero-area h4 {
        color: #0D0C22;
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 400;
        margin:0;
        letter-spacing: 0px;
    }
    .hero-area a {
        padding: 20px 100px;
        gap: 10px;
        border-radius: 40px;
        width: max-content;
        background: #0D0C22;
        margin-top: 30px;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 700;
        color: white;
    }
    .hero-area .rev {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 6px 16px;
    }
    .hero-area .rev strong{
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 800;
        color: #3D3D4E;
    }
    .hero-area .rev span{
        color: #3D3D4E;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
        text-decoration: underline;
    }
    .new-usp-elm{
        display: grid;
        place-items: center;
        gap:20px;
        max-width: 1400px;
        width: 100%;
        margin:auto;
    }
    .new-usp-elm h3{
        color: #0D0C22;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        margin:0;
        letter-spacing: 0px;
    }
    .new-usp-elm .new-usp-img{
    }
    @media only screen and (max-width:767px){
        .new-area {
            padding: 20px;
            gap: 20px;
        }
        .new-hero-elm{
            grid-template-columns: 1fr;
            padding: 20px 20px;
            gap:20px;
        }
        .new-hero-elm img {
            margin: auto;
        }
        .hero-area {
            max-width: 100%;
        }
        .hero-area span {
            font-size: 12px;
            line-height: 18px;
        }
        .hero-area h4 {
            font-size: 24px;
        }
        .hero-area a {
            padding: 10px 40px;
            font-size: 12px;
            margin-top: 12px;
        }
        .hero-area .rev {
            gap: 10px;
            margin: 4px 12px;
        }
        .hero-area .rev strong{
            font-size: 12px;
        }
        .hero-area .rev span{
            font-size: 12px;
        }
        .new-usp-elm{
            gap:10px;
        }
        .new-usp-elm h3{
            font-size: 20px;
        }
    }
</style>
`;

const new_elm_html = `
<div class="new-area">
    <div class="new-hero-elm">
        <div class="hero-area">
            <span>With orders over $100</span>
            <h4>Get A FREE Neck Face Sculptor Today!</h4>
            <a href="/collections/bundles">SHOP BUNDLES</a>
            <div class="rev">
                ${star}
                <strong>4.9/5</strong>
                <span>by 1286 reviews</span>
            </div>
        </div>
        <img src="https://i.ibb.co/wsqF208/image-67.png" alt="" />
    </div>
    <div class="new-usp-elm">
        <h3>Why 800,000+ people loves lux skin</h3>
        <picture class="new-usp-img">
                <source media="(min-width: 991px)" srcset="https://i.ibb.co/BZv4r6M/image-72.png">
                <img src="https://i.ibb.co/BZv4r6M/image-72.png">
        </picture>
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.main-content');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-hero-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterbegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);
