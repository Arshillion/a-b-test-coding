const discount_input = document.querySelector('input[name="temp-discount"]');
const discount_input_apply = document.querySelector(
	'.docapp-coupon-input--button'
);
if (discount_input && discount_input_apply) {
	discount_input.value = 'HOLIDAY23';
	discount_input_apply.click();
}
