const style = `
<style>
	#shopify-section-0b438056-01c6-4e1d-b266-294fe61ed8bd{
    	display: none;
    }
	.new-founder-section {
    	background: #FBE6E3;
        padding:40px 0;
    }
	.new-founder-section .container{
    	display:grid;
        grid-template-columns: 1fr 1fr;
        gap:20px;
    }
	.new-founder-section span{
    	color: #000;
        font-family: Julee;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
	.new-founder-section p{
        color: #333;
        font-family: Lato;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 0;
    }
	.new-founder-section p strong{
        color: #000;
        text-align: justify;
        font-family: Lato;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
    }
	.new-founder-section .founder-info{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
	.new-founder-section .founder-info .f-img-name{
        max-width:250px;
        margin-bottom : 10px;
    }
	.new-founder-section .founder-info .f-img-title{
        max-width:180px;
    }
    .header-img img{
        width: 100%;
    }
    @media only screen and (max-width: 991px) {
        .new-founder-section .container {
            grid-template-columns: 1fr;
        }
        .new-founder-section .founder-info img{
            margin: auto;
        }
        .new-founder-section p,.new-founder-section p strong{
            font-size: 16px;
            line-height: 22px;
    	}
    }
</style>
`;
const founder_html = `
<div class="shopify-section new-founder-section">
	<div class="container">
        <picture class="header-img">
            <source media="(min-width: 991px)" srcset="https://i.ibb.co/nL7jWpZ/Desktop.png">
            <img src="https://i.ibb.co/2q72TRR/Mobile.png">
        </picture>
		<div class="founder-info">
			<img class="f-img-title" src="https://i.ibb.co/cYjJ7dz/Meet-Our-Founder.png">
			<img class="f-img-name" src="https://i.ibb.co/H70rkCy/founder-meet.png">
			<p>
                <strong>We are </strong>, co-founders plus husband and wife! Miss Amara truly is a family owned business.
			</p>
            <p>
                We believe shopping for rugs online should be fun and easy. We LOVE designing beautiful rugs, but we've since learnt there are other things that drive us. Today, that's about making a difference to your life, our team, our makers and the environment - we've developed a higher purpose if you will.
            </p>
		</div>
	</div>
</div>
`;

setInterval(() => {
	const rugs_elm = document.querySelector(
		'#shopify-section-ss_home_recommendations_BCJFWT'
	);
	const head = document.querySelector('head');
	if (rugs_elm && head && !document.querySelector('.new-founder-section')) {
		head.insertAdjacentHTML('beforeend', style);
		rugs_elm.insertAdjacentHTML('beforebegin', founder_html);
	}
}, 10);
