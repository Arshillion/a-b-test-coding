const style = `
<style>
.new-discount-elm{
    padding: 10px;
    border-radius: 4px;
    background: #D8FAD1;
    border: 1px dashed green;
}
.new-discount-elm .percent-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
}
</style>
`;

const new_elm_html = `
<div class="new-discount-elm">
    <strong>Discount</strong>
    <div class="percent-info">
        <span>25% Off on Items</span>
        <strong>$20</strong>
    </div>
</div>
`;

const interval = setInterval(() => {
	const static_check = document.querySelector('.block.items-in-cart.active');
	const head = document.querySelector('head');
	if (static_check && head && !document.querySelector('.new-discount-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		static_check.insertAdjacentHTML('beforeend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
