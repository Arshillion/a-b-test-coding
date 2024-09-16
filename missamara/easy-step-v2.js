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
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }
    .new-easy-step .easy-step-imgs > img{
        margin-bottom: 30px;
    }
    .new-easy-step .easy-step-imgs a{
        align-self: flex-start;
    }
    .easy-step-header {
        width: 50%;
        margin-bottom: 20px;
    }
    @media only screen and (max-width:1200px){
        .new-easy-step .easy-step-imgs > img{
            width: 60px;
        }
        .new-easy-step .easy-step-imgs{
            gap: 20px;
        }
        .new-easy-step {
            width: 90%;
        }
    }
    @media only screen and (max-width:767px){
        .new-easy-step .easy-step-imgs > img{
            width: 40px;
        }
        .new-easy-step .easy-step-imgs{
            gap: 10px;
        }
        .new-easy-step {
            margin: 20px auto;
        }
        .easy-step-header {
            margin-bottom: 10px;
        }
    }
    @media only screen and (max-width:480px){
        .new-easy-step .easy-step-imgs > img{
            width: 20px;
        }
        .new-easy-step .easy-step-imgs > img{
            margin-bottom: 20px;
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
   <img class="easy-step-header" src="https://i.ibb.co/ydGYvsw/UNROLL-YOUR-RUG-IN-4-EASY-STEPS.png" alt="" />
    <div class="easy-step-imgs">
        <a href="">
            <img src="https://i.ibb.co/3yvCDSS/1.png" alt="" />
        </a>
        <img src="https://i.ibb.co/dDC4VMC/Arrow.png" alt="" />
        <a href="">
            <img src="https://i.ibb.co/6wvsCm9/2.png" alt="" />
        </a>
        <img src="https://i.ibb.co/dDC4VMC/Arrow.png" alt="" />
        <a href="">
            <img src="https://i.ibb.co/2Szw3fm/3.png" alt="" />
        </a>
        <img src="https://i.ibb.co/dDC4VMC/Arrow.png" alt="" />
        <a href="">
            <img src="https://i.ibb.co/FhqT3j1/4-v2.png" alt="" />
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
