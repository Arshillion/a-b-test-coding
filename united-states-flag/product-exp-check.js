(function () {
	if (document.querySelector('#product-sku')) {
		return true;
	} else {
		convert_recheck_experiment();
		return false;
	}
})();
