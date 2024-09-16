const style = `
<style>
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
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }
	.new-founder-section p strong{
        color: #000;
        text-align: justify;
        font-family: Lato;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
    }
	.new-founder-section .founder-info{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
	.new-founder-section .founder-info img{
        max-width:250px;
        margin : 10px 0;
    }
    @media only screen and (max-width: 991px) {
        .new-founder-section .container {
            grid-template-columns: 1fr;
        }
    }
</style>
`;
const founder_html = `
<div class="shopify-section new-founder-section">
	<div class="container">
		<img src="" />
		<div class="founder-info">
			<span>Meet Our Founder</span>
			<img src="https://i.ibb.co/H70rkCy/founder-meet.png">
			<p>
				<strong>Alex</strong> and <strong>Aaron</strong> here! Husband and Wife
				and family founders,</p><p> At Miss Amara we’re on a mission to create the most
				enjoyable and uncomplicated journey to your dream rug but we’ve since
				learnt that there are other things that drive us.</p><p> Today that's all about
				running our business whilst we also are making a difference to you, our
				team, our makers and the environment - we’ve developed a higher purpose
				if you will.
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
