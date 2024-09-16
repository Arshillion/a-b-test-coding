const style = `
<style>
    .top-area-message{
        background: #0D324F;
        color: #fff;
        padding: 10px;
        text-align: center;
        font-weight: 700;
        font-size: 20px;
    }
    .top-area-message a{
        color: #FE8B2C;
    }
    .top-area-message a:hover{
        text-decoration: underline;
    }
    @media only screen and (max-width:767px){
        .top-area-message{
            font-weight: 500;
            font-size: 14px;
        }
    }
    @media only screen and (max-width:480px){
        .top-area-message{
            font-size: 10px;
        }
    }
</style>
`;

const new_elm_html = `
<div class="top-area-message">
    It's New Gear SZN! <a href="/club-fitting">Book a Fitting</a> today to try all the 2024 releases.
</div>
`;

const interval = setInterval(() => {
	const body_elm = document.querySelector('#html-body');
	const head = document.querySelector('head');
	if (body_elm && head && !document.querySelector('.top-area-message')) {
		head.insertAdjacentHTML('beforeend', style);
		body_elm.insertAdjacentHTML('afterbegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);
