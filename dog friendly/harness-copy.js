{
	/* <style>
    .list-type-options{
        margin: 0;
        padding: 0;
    }
    .list-type-options li{
        display: flex;
        align-items: center;
        gap: 6px;
    }
	#shopify-section-template--15357594894384__bb28b4df-49d1-44e1-9f94-427180a66d94 .info-inner-wrapper > :not(ul,h1),
	#shopify-section-template--15357594894384__44781b8c-f965-4357-9a8b-84145aa14a13 .info-inner-wrapper > :not(ul,h1){
		display: none!important;
	}
</style> */
}

const first_copy_html = `
<ul class="list-type-options">
	<li>
		<strong>Easy Clip-On :</strong>
		<span>Get ready for walks in 2 seconds with our one clip harness.</span>
	</li>
	<li>
		<strong>Trendy & Personal :</strong>
		<span>Make a statement with unique colors and a custom name patch.</span>
	</li>
	<li>
		<strong>Supreme Comfort :</strong>
		<span>Soft, breathable, chafe resistant material for happy walks.</span>
	</li>
	<li>
		<strong>Strong & Safe :</strong>
		<span
			>Lightweight yet durable, with a secure unbreakable buckle and
			D-ring.</span
		>
	</li>
</ul>
`;

const sec_copy_html = `
<ul class="list-type-options">
	<li>
		<strong>Comfort Guaranteed :</strong>
		<span>Innovative, lightweight, chafe-resistant - pure comfort for your dog.</span>
	</li>
	<li>
		<strong>Stand Out :</strong>
		<span>Unique colors and personalization for a standout look.</span>
	</li>
	<li>
		<strong>Safe & Secure :</strong>
		<span>Trust in our unbreakable buckle and heavy-duty D-ring.</span>
	</li>
</ul>
`;

const copy_change = setInterval(() => {
	const first_copy_elm = document.querySelector(
		'#shopify-section-template--15357594894384__bb28b4df-49d1-44e1-9f94-427180a66d94 .info-inner-wrapper h1'
	);
	const sec_copy_elm = document.querySelector(
		'#shopify-section-template--15357594894384__44781b8c-f965-4357-9a8b-84145aa14a13 .info-inner-wrapper h1'
	);
	const unique_check = !document.querySelector('.list-type-options');

	if (first_copy_elm && sec_copy_elm && unique_check) {
		first_copy_elm.insertAdjacentHTML('afterend', first_copy_html);
		first_copy_elm.innerText = 'Walk Your Dog With Ease!';
		sec_copy_elm.insertAdjacentHTML('afterend', sec_copy_html);
		sec_copy_elm.innerText = 'Style Meets Comfort';
		clearInterval(copy_change);
	}
}, 10);
