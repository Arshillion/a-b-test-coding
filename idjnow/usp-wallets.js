const style = `
<style>
    .new-elm{
        margin: 30px 0;
        width: 100%;
    }
    .new-elm *{
        margin: 0;
        padding: 0;
    }
    .digital-wallets{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        margin-bottom: 30px;
    }
    .digital-wallets span{
        font-size: 15px;
        font-weight: 600;
    }
    .wallet-imgs{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    .wallet-imgs img{
        width: 50px;
    }
    .wallet-imgs span{
        width: 1px;
        background: #dfdfdf;
        height: 34px;
    }
    .idj-usp{
        border: 1px solid #dfdfdf;
        border-radius: 6px;
        position: relative;
        padding: 10px;
    }
    .idj-usp h3{
        position: absolute;
        background: white;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 10px;
        color: #aa1c03;
    }
    .idj-usps{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 10px;
        gap: 6px;
    }
    .idj-single-usp{
        display: flex;
        gap: 0 6px;
        align-items: center;
    }
    .idj-single-usp img{
        width: 40px;
    }
    .idj-single-usp span{
        display: flex;
        gap: 6px;
        flex-direction: column;
    }
    .idj-single-usp h6{
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
    }
    .idj-single-usp strong{
        font-size: 12px;
        line-height: 12px;
        font-weight: 600;
    }
    .pr-6p{
        padding-right: 6px;
    }
    @media only screen and (max-width:550px){
        .idj-single-usp img{
            width: 36px;
        }
        .idj-single-usp h6{
            font-size: 12px;
            line-height: 12px;
        }
        .idj-single-usp strong{
            font-size: 10px;
            line-height: 10px;
        }
        .idj-single-usp span {
            gap: 4px;
        }
        .wallet-imgs img{
            width: 40px;
        }
        .wallet-imgs span{
            height: 24px;
        }
    }
    @media only screen and (max-width:450px){
        .idj-single-usp img{
            width: 32px;
        }
        .idj-single-usp h6{
            font-size: 10px;
            line-height: 10px;
        }
        .idj-single-usp strong{
            font-size: 8px;
            line-height: 8px;
        }
        .idj-usps{
            gap: 4px;
        }
        .idj-usp{
            padding: 4px;
        }
        .idj-single-usp span {
            gap: 2px;
        }
        .idj-single-usp {
            gap: 0 4px;
        }
        .pr-6p{
            padding-right: 4px;
        }
        .wallet-imgs img{
            width: 30px;
        }
        .wallet-imgs span{
            height: 20px;
        }
    }
</style>
`;

const new_elm_html = (apple) => `
<div class="new-elm">
    <div class="digital-wallets">
        <span>Digital Wallets Accepted: </span>
        <div class="wallet-imgs">
            <img src="https://www.idjnow.com/static/version1686749612/frontend/Ecomitize/idjnow/en_US/PayPal_Braintree/images/venmo_logo_blue.png" alt="" />
            <span></span>
            <img src="https://images.idjnow.com/media/amasty/webp/wysiwyg/affirm_png.webp" alt="" />
            <span></span>
            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-medium.png" alt="" />
            ${
							apple
								? `
                                <span></span>
                                <img
									src="https://www.idjnow.com/static/version1686749612/frontend/Ecomitize/idjnow/en_US/PayPal_Braintree/images/applepaymark.png"
									alt=""
								/>`
								: ''
						}
        </div>
    </div>
    <div class="idj-usp">
        <h3>Only at I DJ NOW</h3>
        <div class="idj-usps">
            <div class="idj-single-usp">
                <img class="pr-6p" src="https://idjnow.s3.us-east-2.amazonaws.com/idj-shipping.png" slt="">
                <span>
                    <h6>Free Shipping</h6>
                    <strong>Most products <u>ship same-day</u></strong>
                </span>
            </div>
            <div class="idj-single-usp">
                <img src="https://idjnow.s3.us-east-2.amazonaws.com/idj-price-lock.png" slt="">
                <span>
                    <h6>30-Day Price Protection</h6>
                    <strong>Find a lower price, you're covered.</strong>
                </span>
            </div>
            <div class="idj-single-usp">
                <img class="pr-6p w-32p" src="https://idjnow.s3.us-east-2.amazonaws.com/idj-reviews.png" slt="">
                <span>
                    <h6>2700+ Reviews</h6>
                    <strong>90%+5-star reviews</strong>
                </span>
            </div>
            <div class="idj-single-usp">
                <img src="https://idjnow.s3.us-east-2.amazonaws.com/idj-returns.png" slt="">
                <span>
                    <h6>30-Day Returns</h6>
                    <strong>Don't Like it? Return it.</strong>
                </span>
            </div>
        </div>
    </div>
</div>
`;

function isSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.amtheme-add-form-bottom');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforeend', new_elm_html(isSafari()));
		clearInterval(interval);
	}
}, 10);
