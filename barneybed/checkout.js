const style = `
<style>
    .check-elm {
        Padding: 20px 0;
    }
</style>
`;

const new_elm_html = `
<div class="check-elm">
    <h3>WHY WE BEST</h3>
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('._4QenE');
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.new-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.insertAdjacentHTML('beforeend', new_elm_html);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
