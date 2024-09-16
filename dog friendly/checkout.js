const style_elm = `
<style>
.checkout-proof-area{
    margin: 30px 0;
}
.checkout-proof-area *{
    margin: 0;
    padding: 0;
}
.checkout-proof-area .title{
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: block;
    margin-bottom: 16px;
}
.checkout-proofs{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.checkout-proof{
    border-radius: 8px;
    border: 1px solid #FFD3E3;
    background: #FFFAFC;
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    position: relative;
}
.checkout-proof .top-rated{
    top: 0;
    position: absolute;
    right: 10px;
}
.checkout-proof div{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 6px;
}
.checkout-proof div strong{
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
}
.checkout-proof div small{
    color: #767676;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
}
.checkout-proof div img{
    grid-row: span 2;
    width: 36px;
    height: 36px;
    border-radius: 36px;
}
.checkout-proof span{
    color: #494949;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
</style>
`;

const proof_html = `
<div class="checkout-proof-area">
	<strong class="title">Why 12,000+ Customers Love Dog Friendly Co.</strong>
    <div class="checkout-proofs">
        <div class="checkout-proof">
            <img class="top-rated" src="https://i.ibb.co/0M1QHQb/top-rated.png" alt="" />
            <div>
                <img src="https://i.ibb.co/3kGb44g/check-user.png" alt="" />
                <strong>xyz</strong>
                <small>12 apr 11:20</small>
            </div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        <div class="checkout-proof">
            <img class="top-rated" src="https://i.ibb.co/0M1QHQb/top-rated.png" alt="" />
            <div>
                <img src="https://i.ibb.co/3kGb44g/check-user.png" alt="" />
                <strong>xyz</strong>
                <small>12 apr 11:20</small>
            </div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        <div class="checkout-proof">
            <img class="top-rated" src="https://i.ibb.co/0M1QHQb/top-rated.png" alt="" />
            <div>
                <img src="https://i.ibb.co/3kGb44g/check-user.png" alt="" />
                <strong>xyz</strong>
                <small>12 apr 11:20</small>
            </div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
    </div>
</div>
`;

const interval = setInterval(() => {
	const total_area = document.querySelector('.aztiL.Oki35 .FCLG9 .J_MDX');
	const head = document.querySelector('head');
	if (total_area && head && !document.querySelector('.checkout-proof-area')) {
		head.insertAdjacentHTML('beforeend', style_elm);
		total_area.insertAdjacentHTML('beforeend', proof_html);
	}
}, 10);
