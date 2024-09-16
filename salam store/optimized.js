const style = `
<style>
#MainContent > section:nth-child(1),#MainContent > section:nth-child(2){
    display: none;
}
.new-usp-elm{
    background: #EAEBEE;
    padding: 20px;
    display: flex;
    align-items: center; 
    justify-content: center;
    gap: 10px; 
}
.new-usp-elm .single-usp{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px; 
}
.new-usp-elm .single-usp img{
    max-width: 30px; 
}
.new-usp-elm .single-usp span{
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    font-weight: 600;
}
@media only screen and (max-width:400px){
    .new-usp-elm .single-usp span{
        font-size: 10px;
        line-height: 14px;
    }
    .new-usp-elm{
        padding: 12px;
    }
}
</style>
`;

const new_elm_html = `
<div class="new-usp-elm">
    <div class="single-usp">
        <img src="https://cdn.shopify.com/s/files/1/0655/9865/2631/files/1.png?v=1708350153" alt="" />
        <span>FREE 2-3 DAY UK SHIPPING</span>
    </div>
    <div class="single-usp">
        <img src="https://cdn.shopify.com/s/files/1/0655/9865/2631/files/2_40177ab4-e44a-4da3-9c75-596e720ccf0b.png?v=1708350156" alt="" />
        <span>6-MONTH MONEY BACK GUARANTEE</span>
    </div>
    <div class="single-usp">
        <img src="https://cdn.shopify.com/s/files/1/0655/9865/2631/files/3_f58d4c0d-1805-459e-85cc-b698ab7b374a.png?v=1708350159" alt="" />
        <span>5,437+ HAPPY CUSTOMER</span>
    </div>
</div>
`;

const interval = setInterval(() => {
	const title = document.querySelector('.product__title h1');
	const main_sec = document.querySelector('#MainContent section:nth-child(3)');
	const head = document.querySelector('head');
	if (title && head && main_sec && !document.querySelector('.new-usp-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		main_sec.insertAdjacentHTML('afterbegin', new_elm_html);
		title.innerText = 'Best Selling Muslim Journal';
		clearInterval(interval);
	}
}, 10);
