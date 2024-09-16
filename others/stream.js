setTimeout(() => {
	document.querySelector('.sixty-forty-text-form .col-lg-5.col-12') &&
		document.querySelector('.sixty-forty-text-form .col-lg-5.col-12').classList.remove('col-lg-5');
	const findSixty = document.querySelector('.sixty-forty-text-form');
	if (findSixty) {
		findSixty.querySelector('.mktoForm.mktoHasWidth.mktoLayoutLeft') &&
			findSixty.querySelector('.mktoForm.mktoHasWidth.mktoLayoutLeft').classList.add('row');
		findSixty.querySelector('.mktoButtonRow') &&
			findSixty.querySelector('.mktoButtonRow').classList.add('text-center');
		findSixty.querySelector('.mktoTemplateBox') &&
			findSixty.querySelector('.mktoTemplateBox').classList.add('text-center');
		findSixty.querySelector('.mktoTemplateBox span') &&
			findSixty
				.querySelector('.mktoTemplateBox span')
				.setAttribute('style', 'color:#2D52D2!important');
		findSixty.querySelector('button') &&
			findSixty.querySelector('button').classList.replace('mktoButton', 'mktoButtonEd');
		findSixty.querySelector('button').innerHTML = 'Download';
	}
	const header = findSixty.querySelector('#sixty-forty-form-body').nextSibling;
	if (header) {
		header.innerHTML = 'Read it Now!';
		header && header.classList.add('section-header');
	}
	const rows = findSixty.querySelectorAll('.mktoFormRow');

	if (rows && rows[0]) {
		const linkedInButton = rows[0].querySelector('.IN-widget');
		linkedInButton && linkedInButton.classList.add('text-center');
		linkedInButton.querySelector('span') &&
			linkedInButton
				.querySelector('span')
				.setAttribute(
					'style',
					'padding: 0 !important; margin: 0 !important; text-indent: 0 !important; display: inline-block !important; vertical-align: baseline !important; font-size: 1px !important;width: 180px!important;'
				);
	}

	rows[0] && rows[0].setAttribute('style', 'margin-bottom:20px!important');

	//if (rows[7].querySelector('.mktoPlaceholderState')) {
	// rows[7].remove();
	//}

	rows.length > 0 &&
		rows.forEach((node, i) => {
			if (i % 2 == 1) {
				node.querySelector('.mktoFieldDescriptor') &&
					node.querySelector('.mktoFieldDescriptor').classList.add('cfl');
			}
			if (i !== 0) {
				node && node.classList.add('col-lg-6');
				node && node.classList.add('col-12');
			}
			node.querySelector('input') &&
				node
					.querySelector('input')
					.setAttribute(
						'style',
						'border:1px solid #C1C1C1!important;background: #F0F2F9!important'
					);
			node.querySelector('select') &&
				node
					.querySelector('select')
					.setAttribute(
						'style',
						'border:1px solid #C1C1C1!important;background-color: #F0F2F9!important'
					);
			node.querySelector('.mktoOffset') && node.querySelector('.mktoOffset').remove();
		});
}, 1000);

setInterval(() => {
	const rowsSec = findSixty.querySelectorAll('.mktoFormRow');
	rowsSec.length > 0 &&
		rowsSec.forEach((node, i) => {
			if (i % 2 == 1) {
				node.querySelector('.mktoFieldDescriptor') &&
					node.querySelector('.mktoFieldDescriptor').classList.add('cfl');
			}
			if (i !== 0) {
				node && node.classList.add('col-lg-6');
				node && node.classList.add('col-12');
			}
			node.querySelector('input') &&
				node
					.querySelector('input')
					.setAttribute(
						'style',
						'border:1px solid #C1C1C1!important;background: #F0F2F9!important'
					);
			node.querySelector('select') &&
				node
					.querySelector('select')
					.setAttribute(
						'style',
						'border:1px solid #C1C1C1!important;background-color: #F0F2F9!important'
					);
			node.querySelector('.mktoOffset') && node.querySelector('.mktoOffset').remove();
		});
}, 1000);
