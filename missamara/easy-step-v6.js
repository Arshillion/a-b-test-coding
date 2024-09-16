const new_easy_step = `
<style>
    #uvp-mobile-section {
        display: none!important;
    }
    .new-easy-step {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
    }
    .new-easy-step .easy-step-imgs{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 30px;
    }
    .new-easy-step .easy-step-imgs a{
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 10px;
    }
    .easy-step-header {
        font-size: 20px;
        margin-bottom: 20px;
        text-align: center;
        font-weight: 600;
    }
    .new-easy-step .easy-step-imgs a h3 {
        font-size: 12px;
        font-family: Lato;
        margin: 0;
        font-weight: bold;
    }
    @media only screen and (max-width:1200px){
        .new-easy-step .easy-step-imgs{
            gap: 20px;
        }
        .new-easy-step {
            width: 90%;
        }
    }
    @media only screen and (max-width:767px){
        .new-easy-step .easy-step-imgs a{
            grid-template-columns: 1fr;
        }
        .new-easy-step .easy-step-imgs{
            gap: 30px;
        }
        .new-easy-step {
            margin: 20px auto;
        }
        .easy-step-header {
            margin-bottom: 10px;
        }
        .easy-step-header {
            font-size: 16px;
        }
        .new-easy-step .easy-step-imgs a h3 {
            text-align: center;
            font-weight: normal;
        }
    }
    @media only screen and (max-width:480px){
        .new-easy-step .easy-step-imgs{
            gap: 16px;
        }
        .new-easy-step {
            margin: 12px auto;
        }
        .easy-step-header {
            margin-bottom: 6px;
        }
    }
</style>
<div class="slideshow-container-wrapper new-easy-step">
    <h2 class="easy-step-header">UNROLL YOUR RUG IN 4 EASY STEPS</h2>
    <div class="easy-step-imgs">
        <a href="https://missamara.com.au/pages/rug-quiz?utm_source=homepage&utm_medium=abTest&utm_campaign=cro">
            <img src="https://i.ibb.co/M5c3chc/1.png" alt="" />
            <h3>TAKE OUR QUIZ</h3>
        </a>
        <a href="https://missamara.com.au/pages/virtual-rug-styler?utm_source=homepage&utm_medium=abTest&utm_campaign=cro">
            <img src="https://i.ibb.co/fHJJJvz/2.png" alt="" />
            <h3>SEE IT IN YOUR ROOM</h3>
        </a>
        <a href="https://missamara.com.au/pages/free-styling?utm_source=homepage&utm_medium=abTest&utm_campaign=cro">
            <img src="https://i.ibb.co/jbS54Hs/3.png" alt="" />
            <h3>ENJOY A FREE STYLING SESSION</h3>
        </a>
        <a href="https://missamara.com.au/pages/how-it-works?utm_source=homepage&utm_medium=abTest&utm_campaign=cro">
            <img src="https://i.ibb.co/Gpt7WSk/4.png" alt="" />
            <h3>FREE DELIVERY & FREE RETURNS</h3>
        </a>
    </div>
</div>
`;

const test_int = setInterval(() => {
	const head_sec = document.querySelector('#shopify-section-1478795901388');
	if (head_sec && !document.querySelector('.new-easy-step')) {
		head_sec.insertAdjacentHTML('afterend', new_easy_step);
		clearInterval(test_int);
	}
}, 10);
