const new_elm_html = `
<div class="reeview-app-widget" id="reeview-app-widget_66d1028513d8e40033496ce3">
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('#extraDescriptionContainer');
		if (
			exist_elm &&
			!document.querySelector('#reeview-app-widget_66d1028513d8e40033496ce3')
		) {
			exist_elm.insertAdjacentHTML('afterend', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
