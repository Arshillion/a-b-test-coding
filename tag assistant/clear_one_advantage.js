const body = document.querySelector('body');

const form_closest = body.closest('form');

const types_value = [
	...document.querySelectorAll('input[name="q_debt_types"]:checked'),
]
	.map((item) => item.value)
	.join();

const bills_value = document.querySelector(
	'input[name="q_bills"]:checked'
).value;

//es5 code
function debt_types() {
	var checkedItems = [];
	var checkboxes = document.querySelectorAll(
		'input[name="q_debt_types"]:checked'
	);
	for (var i = 0; i < checkboxes.length; i++) {
		checkedItems.push(checkboxes[i].value);
	}
	var joinedValues = '';
	for (var i = 0; i < checkedItems.length; i++) {
		joinedValues += checkedItems[i];
		if (i < checkedItems.length - 1) {
			joinedValues += ',';
		}
	}
	return joinedValues;
}

const financial_solution = document.querySelector(
	'input[name="q_financial_situation"]:checked'
).value;

//es5 code
function debt_types() {
	var checkedItems = [];
	var checkboxes = document.querySelectorAll(
		'input[name="q_hardships"]:checked'
	);
	for (var i = 0; i < checkboxes.length; i++) {
		checkedItems.push(checkboxes[i].value);
	}
	var joinedValues = '';
	for (var i = 0; i < checkedItems.length; i++) {
		joinedValues += checkedItems[i];
		if (i < checkedItems.length - 1) {
			joinedValues += ',';
		}
	}
	return joinedValues;
}
