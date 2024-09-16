const style = `
<style>
    .buy-save-elm {
        border: 1px dashed #222A58;
        color: #222A58;
        font-size: 16px;
        border-radius: 4px;
        padding: 8px 16px;
        margin: 7px 0 28px 0;
        line-height: 16px;
        font-weight: 600;
        width: 100%;
        text-align: center;
    }
    .inform-block {
        margin: 7px 0 !Important;
    }
</style>
`;

const new_elm_html = `
<div class="buy-save-elm">

    BUY MORE & SAVE MORE
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('form.cart');
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.buy-save-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
