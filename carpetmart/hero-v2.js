const style = `
<style>
#s-225fbdd1-680c-442d-ad91-bfcf01bea3c9,
#s-225fbdd1-680c-442d-ad91-bfcf01bea3c9 + .shg-box-vertical-align-wrapper,
#s-59ded273-fd06-4e7c-9c05-ab0aa79fb6f2{
    display: none!important;
}
#s-f66a8593-6a71-4cd3-849c-382fc3bd04a0{
    background: #F2F7EB!important;
}
#s-d3e61df3-f484-4094-9531-7e95033dccdc{
    max-width: 1520px;
    width: 100%;
    margin-inline: auto;
}
.new-link-elms{
    max-width: 1520px;
    width: 100%;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.new-link-elm{
    border-radius: 5px;
    overflow: hidden;
}
.new-link-elm img{
    width:100%:
}

.large-slide-h1{
    font-size: 64px!important;
    font-weight: 1000!important;
    line-height: 76.8px!important;
    color: white!important;
}
.large-slide-h2{
    font-size: 36px!important;
    font-weight: 700!important;
    line-height: 43.2px!important;
    color: #7CC243!important;
}
.large-slide-a{
    font-size: 24px!important;
    font-weight: 500!important;
    line-height: 28.8px;
    color: white !important;
    padding: 20px 100px!important;
    width: max-content;
    margin: auto!important;
    border-radius: 0!important;
    background: #FF0000!important;
    margin-top: 40px!important;
}

.small-slide-h2{
    font-size: 40px!important;
    font-weight: 1000!important;
    line-height: 40px!important;
    color: white!important;
}
.small-slide-p{
    font-size: 24px!important;
    font-weight: 700!important;
    line-height: 40px!important;
    color: #7CC243!important;
}
.small-slide-a{
    font-size: 24px!important;
    font-weight: 500!important;
    line-height: 28.8px!important;
    text-align: center!important;
    border-radius: 0!important;
    color: white!important;
    background: #FF0000!important;
}

#s-7b2efbab-1d0d-4677-94be-c3a43d51a057>.shg-box-overlay,#s-8c00b443-f71a-4ef3-b17a-af126387b6d5>.shg-box-overlay,
#s-1773b37f-d8a0-47b6-8224-59cd35a4767d>.shg-box-overlay,
#s-6df03fb6-bbd9-4b79-b41f-c4fefcf54ec6>.shg-box-overlay,
#s-3c5b648b-4675-427d-a0f1-fd03d77ab1e7 .shg-sld-item .shg-box-overlay
{
    opacity: 0.5!important;
}

@media (max-width:1200px){
    .new-link-elm img{
        min-height:120px;
    }
}
@media (max-width:767px){
    .new-link-elm img{
        min-height:88px;
    }
    .new-link-elms{
        grid-template-columns: repeat(1,1fr)
    }
    .large-slide-h1{
        font-size: 40px!important;
        line-height: 48px!important;
    }
    .large-slide-h2{
        font-size: 24px!important;
        line-height: 36px!important;
    }
    .large-slide-a{
        font-size: 20px!important;
        line-height: 24px;
        padding: 12px 60px!important;
        margin-top: 10px!important;
    }
    
    .small-slide-h2{
        font-size: 28px!important;
        line-height: 32px!important;
    }
    .small-slide-p{
        font-size: 18px!important;
        line-height: 22px!important;
    }
    .small-slide-a{
        font-size: 16px!important;
        line-height: 20px!important;
    }
}
</style>
`;
const new_elm_html = `
<div class="new-link-elms">
    <a href="https://shop.carpetmart.com/form/" class="new-link-elm">
        <img src="https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/image-manager/group-6.png?t=1715350060" alt="" />
    </a>
    <a href="https://shop.carpetmart.com/deals/clearance-area-rugs/" class="new-link-elm">
        <img src="https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/image-manager/group-7.png?t=1715350060" alt="" />
    </a>
    <a href="https://shop.carpetmart.com/savings/" class="new-link-elm">
        <img src="https://cdn11.bigcommerce.com/s-7rjd0xqdp0/images/stencil/original/image-manager/group-8.png?t=1715350059" alt="" />
    </a>
</div>
`;
const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'#s-f66a8593-6a71-4cd3-849c-382fc3bd04a0'
	);
	const box_content = exist_elm.querySelector('.shg-box-content');
	const head = document.querySelector('head');
	const first_box = [
		...document.querySelectorAll(
			'#slider-s-3c5b648b-4675-427d-a0f1-fd03d77ab1e7,#slider-s-e6a46a22-2e91-4e9a-baab-fa7f1d2a35c7'
		),
	];
	const second_box = [
		...document.querySelectorAll(
			'#s-7b2efbab-1d0d-4677-94be-c3a43d51a057,#s-1773b37f-d8a0-47b6-8224-59cd35a4767d'
		),
	];
	const third_box = [
		...document.querySelectorAll(
			'#s-8c00b443-f71a-4ef3-b17a-af126387b6d5,#s-6df03fb6-bbd9-4b79-b41f-c4fefcf54ec6'
		),
	];
	if (
		exist_elm &&
		second_box &&
		first_box &&
		third_box &&
		head &&
		!document.querySelector('.new-link-elms')
	) {
		head.insertAdjacentHTML('beforeend', style);
		box_content.insertAdjacentHTML('afterend', new_elm_html);

		try {
			first_box.map((item) => {
				const headings = [
					...item.querySelectorAll('.shogun-heading-component h1'),
				];
				headings.map((item) => {
					item.classList.add('large-slide-h1');
					item.innerHTML = 'Carpet & Tile Mart';
				});
				const sub = [...item.querySelectorAll('.shogun-heading-component h2')];
				sub.map((item) => {
					item.classList.add('large-slide-h2');
					item.innerHTML =
						'<span>Available. Affordable.</span><span>At Your Service.</span>';
				});
				const btns = [...item.querySelectorAll('.shg-btn-wrapper a')];
				btns.map((item) => {
					item.classList.add('large-slide-a');
					item.innerHTML = 'Find a Store';
				});
			});
		} catch (error) {}

		try {
			second_box.map((item) => {
				const headings = [
					...item.querySelectorAll('.shogun-heading-component h2'),
				];
				headings.map((item) => {
					item.classList.add('small-slide-h2');
					item.innerHTML = 'Rugs';
				});
				const sub = [...item.querySelectorAll('.shg-default-text-content p')];
				sub.map((item) => {
					item.classList.add('small-slide-p');
					item.innerHTML = 'Up to 50% off MSRP';
				});

				const btns = [...item.querySelectorAll('.shg-btn-wrapper a')];
				btns.map((item) => {
					item.classList.add('small-slide-a');
				});
			});
		} catch (error) {}

		try {
			third_box.map((item) => {
				const headings = [
					...item.querySelectorAll('.shogun-heading-component h2'),
				];
				headings.map((item) => {
					item.classList.add('small-slide-h2');
					item.innerHTML = 'Luxury Vinyl';
				});
				const sub = [...item.querySelectorAll('.shg-default-text-content p')];
				sub.map((item) => {
					item.classList.add('small-slide-p');
					item.innerHTML = 'The easiest waterproof flooring solution.';
				});
				const btns = [...item.querySelectorAll('.shg-btn-wrapper a')];
				btns.map((item) => {
					item.classList.add('small-slide-a');
				});
			});
		} catch (error) {}

		clearInterval(interval);
	}
}, 10);
