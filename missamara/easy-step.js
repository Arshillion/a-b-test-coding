const new_easy_step = `
<style>
    .new-easy-step {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
    }
    .new-easy-step a{
        background: #f2e0d4;
        padding: 10px 20px;
        width: max-content;
        border-radius: 50px;
    }
</style>
<div class="slideshow-container-wrapper new-easy-step">
    <img src="https://i.ibb.co/R6gfS08/Homepage-Image.png">
    <a href="https://missamara.com.au/pages/free-styling">Start Rug Shopping Now</a>
</div>
`;

const test_int = setInterval(() => {
	const head_sec = document.querySelector('#shopify-section-1478795901388');
	if (head_sec && !document.querySelector('.new-easy-step')) {
		head_sec.insertAdjacentHTML('afterend', new_easy_step);
		clearInterval(test_int);
	}
}, 10);
