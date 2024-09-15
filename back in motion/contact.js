const style = `
<style>
    .client-review-area{
        background: #003A5D;
        width:100%;
    }
    .client-review{
        max-width: 1200px;
        width: 100%;
        margin: auto;
        padding: 60px 10px;
        padding-top:0;
    }
    .client-review *{
        margin: 0;
        padding: 0;
    }
    .client-review h3{
        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 60px;
    }
    .client-revs {
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:20px;
    }
    .client-revs > div{
        border-radius: 16px;
        background: #FFF;
        display:flex;
        flex-direction:column;
        padding:20px;
        gap:10px;
    }
    .client-revs > div p{
        color: #3A3957;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
    }
    .client-revs > div small{
        color: #6B7280;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        text-align: end;
    }
    .rev-info {
        display: grid;
        grid-template-columns: 50px 1fr;
        gap: 0 10px;
    }
    .rev-info img{
        grid-row: 1/span 2;
    }
    .fusion-chk {
        padding-top: 0!important;
    }
    .fusion-chk .usp{
        background: #EBF2F6;
        display: flex;
        padding: 20px 40px;
        justify-content: center;
        align-items: center;
        margin-bottom:20px!important;
        gap:30px;
    }
    .fusion-chk .usp svg{
        flex-shrink: 0;
    }
    .fusion-chk .usp > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    .fusion-chk .usp span{
        color: #1F2937;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }
    .response-info{
        display: flex;
        align-items:center;
        justify-content:center;
        gap: 8px;
        margin: 18px 0;
    }
    .response-info svg{
        flex-shrink:0;
    }
    .response-info span{
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .gform_page {
        width:100%!important;
        padding:0 60px;
    }
    #multi-form .multi-step-form input[type="submit"]{
        width:100%!important;
    }
    #multi-form .multi-step-form .gform_page_footer{
        background: none!important;
    }
    .gform_page_footer.top_label{
        display:grid;
        gap:10px;
    }
    .gform_page_fields,.gform_page_footer.top_label input{
        width:100%!important;
        margin:0!important;
    }
    body #multi-form .multi-step-form .gform_page_footer{
        padding:0!important;
        margin:30px 0!important;
    }
    .benefit-area{
        background: #174B6A;
        width:100%;
    }
    .benefit-info{
        max-width: 1200px;
        width: 100%;
        margin: auto;
        padding: 60px 10px;
    }
    .benefit-info *{
        margin: 0;
        padding: 0;
    }
    .benefit-info h3{
        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 60px;
    }
    .benefit-info-details{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:60px;
    }
    .benefit-info-details > div, .benefit-info-details > ul{
        display:flex;
        flex-direction:column;
        gap:6px;
    }
    .benefit-info-details li, .benefit-info-details p{
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }
    @media only screen and (max-width:1220px){
        .benefit-info,.client-review{
            padding: 60px 30px;
        }
    }
    @media only screen and (max-width:767px){
        .benefit-info,.client-review{
            padding: 30px 30px;
        }
        .benefit-info-details{
            gap:20px;
            grid-template-columns:1fr;        
        }
        .client-revs {
            grid-template-columns: 1fr;
            gap:20px;
        }
        .benefit-info h3,.client-review h3{
            margin-bottom: 30px;
        }
        .benefit-info-details > ul{
            margin-left: 20px;
        }
    }
    @media only screen and (max-width:640px){
        .benefit-info h3,.client-review h3{
            font-size: 20px;
        }
        .benefit-info,.client-review{
            padding: 60px 10px;
        }
        .benefit-info-details li, .benefit-info-details p{
            font-size: 12px;
            line-height: 16px;
        }
        #multi-form .multi-step-form .gform_page_fields{
            padding: 0;
        }
        .gform_page {
            padding:0 20px;
        }
        .response-info span{
            font-size: 12px;
        }
        .fusion-chk .usp{
            padding: 10px 20px;
            gap:10px;
        }
        .fusion-chk .usp svg{
            flex-shrink: 0;
            width: 20px;
        }
        .fusion-chk .usp > div{
            gap: 4px;
        }
        .fusion-chk .usp span{
            font-size: 10px;
            line-height: 16px;
        }
    }
</style>
`;

const benefit_html = `
<div class="benefit-area">
    <div class="benefit-info">
        <h3>What Are The Benefits Of Physical Therapy?</h3>
        <div class="benefit-info-details">
            <div>
                <p>Physical Therapy is the natural way to treat chronic pain.</p>
                <p>
                    Here at City Physical Therapy, we are a Physical Therapy Clinic that
                    specializes in treating and working with people who have chronic pain.
                </p>
                <p>
                    Throughout the course of your personalized care plan, we will work with
                    you to treat your pain, reverse your injuries, and prevent your issues
                    from returning. We do this through;
                </p>
            </div>
            <ul>
                <li>
                    Avoid Painkillers and Surgery: We can help you put an end to taking
                    painkillers that are no good for your health long-term
                </li>
                <li>
                    We can help you keep out of the Doctor’s waiting room or from making
                    repeat visits only to be given more pills or no new information
                </li>
                <li>
                    We will also help you target the pain and get to the root of the cause
                    ensuring your having lost lasting relief avoiding the pills and surgery.
                </li>
            </ul>
        </div>
    </div>
</div>
`;

const response_html = `
<div class="response-info">
	<svg
		width="25"
		height="24"
		viewBox="0 0 25 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_12_251)">
			<path
				d="M20.438 8.00002H21.5C22.0304 8.00002 22.5391 8.21074 22.9142 8.58581C23.2893 8.96088 23.5 9.46959 23.5 10V14C23.5 14.5305 23.2893 15.0392 22.9142 15.4142C22.5391 15.7893 22.0304 16 21.5 16H20.438C20.1942 17.9333 19.2533 19.7112 17.7917 21C16.3302 22.2888 14.4486 23 12.5 23V21C14.0913 21 15.6174 20.3679 16.7426 19.2427C17.8679 18.1174 18.5 16.5913 18.5 15V9.00002C18.5 7.40872 17.8679 5.8826 16.7426 4.75738C15.6174 3.63216 14.0913 3.00002 12.5 3.00002C10.9087 3.00002 9.38258 3.63216 8.25736 4.75738C7.13214 5.8826 6.5 7.40872 6.5 9.00002V16H3.5C2.96957 16 2.46086 15.7893 2.08579 15.4142C1.71071 15.0392 1.5 14.5305 1.5 14V10C1.5 9.46959 1.71071 8.96088 2.08579 8.58581C2.46086 8.21074 2.96957 8.00002 3.5 8.00002H4.562C4.80603 6.06692 5.74708 4.2893 7.20857 3.0007C8.67007 1.7121 10.5516 1.0011 12.5 1.0011C14.4484 1.0011 16.3299 1.7121 17.7914 3.0007C19.2529 4.2893 20.194 6.06692 20.438 8.00002ZM3.5 10V14H4.5V10H3.5ZM20.5 10V14H21.5V10H20.5ZM8.26 15.785L9.32 14.089C10.2731 14.6861 11.3754 15.0018 12.5 15C13.6246 15.0018 14.7269 14.6861 15.68 14.089L16.74 15.785C15.4693 16.5812 13.9995 17.0023 12.5 17C11.0005 17.0023 9.53074 16.5812 8.26 15.785Z"
				fill="black"
			/>
		</g>
		<defs>
			<clipPath id="clip0_12_251">
				<rect
					width="24"
					height="24"
					fill="white"
					transform="translate(0.5)"
				/>
			</clipPath>
		</defs>
	</svg>
	<span>You will receive a response from our team within 2 hours.</span>
</div>
`;

const usp_html = `
<div class="usp">
	<div>
		<svg
			width="41"
			height="40"
			viewBox="0 0 41 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.5"
				width="40"
				height="40"
				rx="20"
				fill="white"
			/>
			<path
				d="M23.5783 8.57391C19.1174 8.57391 15.4913 12.2522 15.4913 16.7391C15.4913 18.6435 16.1435 20.3652 17.2131 21.7739L9.54349 29.5478C9.10001 30.0174 9.10001 30.7478 9.54349 31.1913C9.77827 31.4261 10.0652 31.5304 10.3522 31.5304C10.6652 31.5304 10.9522 31.4261 11.187 31.1913L18.8565 23.4174C20.187 24.3826 21.8044 24.9304 23.5522 24.9304C28.0131 24.9304 31.6391 21.2522 31.6391 16.7652C31.6391 12.2783 28.0391 8.57391 23.5783 8.57391ZM23.5783 22.8696C20.2652 22.8696 17.5783 20.1304 17.5783 16.7652C17.5783 13.4 20.2652 10.6609 23.5783 10.6609C26.8913 10.6609 29.5783 13.4 29.5783 16.7652C29.5783 20.1304 26.8913 22.8696 23.5783 22.8696ZM27.6217 16.8696C27.5696 17.313 27.1783 17.6522 26.7348 17.6522C26.6826 17.6522 26.6565 17.6522 26.6044 17.6522C26.1087 17.5739 25.7696 17.1304 25.8217 16.6348C26.0044 15.2783 24.4913 14.5739 24.4131 14.5478C23.9696 14.3391 23.7609 13.7913 23.9696 13.3478C24.1783 12.9043 24.7 12.6957 25.1696 12.8783C25.2739 12.9043 27.987 14.1565 27.6217 16.8696ZM25.7174 18.8522C25.9 19.0348 26.0304 19.3217 26.0304 19.5826C26.0304 19.8696 25.9261 20.1304 25.7174 20.313C25.5348 20.4957 25.2478 20.6261 24.987 20.6261C24.7261 20.6261 24.4391 20.5217 24.2565 20.313C24.0739 20.1304 23.9435 19.8435 23.9435 19.5826C23.9435 19.3217 24.0478 19.0348 24.2565 18.8522C24.4391 18.6696 24.7261 18.5391 24.987 18.5391C25.2478 18.5391 25.5087 18.6435 25.7174 18.8522Z"
				fill="#003A5D"
			/>
		</svg>
		<span>Get Back to Being Active</span>
	</div>
	<div>
		<svg
			width="41"
			height="40"
			viewBox="0 0 41 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.5"
				width="40"
				height="40"
				rx="20"
				fill="white"
			/>
			<g clip-path="url(#clip0_9_163)">
				<path
					d="M25.8625 21.2375H15.1375C14.875 21.2375 14.6125 21.35 14.4625 21.575C14.3125 21.8 14.2375 22.0625 14.3125 22.325C15.1 25.1 17.65 27.05 20.5 27.05C23.425 27.05 25.9 25.175 26.6875 22.325C26.7625 22.0625 26.725 21.8 26.5375 21.575C26.3875 21.35 26.125 21.2375 25.8625 21.2375ZM20.5 25.325C18.775 25.325 17.2375 24.3875 16.375 22.925H24.625C23.8 24.3875 22.2625 25.325 20.5 25.325Z"
					fill="#003A5D"
				/>
				<path
					d="M20.5 8.3C14.05 8.3 8.79999 13.55 8.79999 20C8.79999 26.45 14.05 31.7375 20.5375 31.7375C27.025 31.7375 32.275 26.4875 32.275 20C32.275 13.5125 26.95 8.3 20.5 8.3ZM20.5 30.05C14.95 30.05 10.45 25.55 10.45 20C10.45 14.45 14.9875 9.9875 20.5 9.9875C26.0125 9.9875 30.55 14.4875 30.55 20.0375C30.55 25.5875 26.05 30.05 20.5 30.05Z"
					fill="#003A5D"
				/>
				<path
					d="M16 18.05C16.8284 18.05 17.5 17.3784 17.5 16.55C17.5 15.7216 16.8284 15.05 16 15.05C15.1716 15.05 14.5 15.7216 14.5 16.55C14.5 17.3784 15.1716 18.05 16 18.05Z"
					fill="#003A5D"
				/>
				<path
					d="M25 18.05C25.8284 18.05 26.5 17.3784 26.5 16.55C26.5 15.7216 25.8284 15.05 25 15.05C24.1716 15.05 23.5 15.7216 23.5 16.55C23.5 17.3784 24.1716 18.05 25 18.05Z"
					fill="#003A5D"
				/>
			</g>
			<defs>
				<clipPath id="clip0_9_163">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(8.5 8)"
					/>
				</clipPath>
			</defs>
		</svg>
		<span>Stop Worrying</span>
	</div>
	<div>
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="40"
				height="40"
				rx="20"
				fill="white"
			/>
			<g clip-path="url(#clip0_18_8)">
				<path
					d="M8.5 30.52C10.1425 30.5439 11.7715 30.2201 13.28 29.57C15.14 30.1515 17.0719 30.4712 19.02 30.52C21.89 30.52 29.54 29.57 29.54 29.57L30.54 28.57V22.87C30.54 18.09 27.67 9.48 27.67 9.48H22.85L20.93 11.39V13.3L22.85 15.22H24.76"
					stroke="#003A5D"
					stroke-width="1.91"
					stroke-miterlimit="10"
				/>
				<path
					d="M24.76 12.35V16.17C24.053 18.6605 23.7161 21.2415 23.76 23.83C23.6922 22.5829 23.1709 21.4036 22.2943 20.514C21.4176 19.6244 20.246 19.086 19 19C17.2225 19.0637 15.5295 19.775 14.24 21C12.6459 19.6359 10.5967 18.9219 8.5 19"
					stroke="#003A5D"
					stroke-width="1.91"
					stroke-miterlimit="10"
				/>
			</g>
			<defs>
				<clipPath id="clip0_18_8">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(8 8)"
					/>
				</clipPath>
			</defs>
		</svg>
		<span>Get to the Root Cause</span>
	</div>
</div>
`;

const five_star = `
<svg
	width="69"
	height="12"
	viewBox="0 0 69 12"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M6.59564 0L7.94273 4.1459H12.302L8.77527 6.7082L10.1224 10.8541L6.59564 8.2918L3.06893 10.8541L4.41601 6.7082L0.889303 4.1459H5.24856L6.59564 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M20.5956 0L21.9427 4.1459H26.302L22.7753 6.7082L24.1224 10.8541L20.5956 8.2918L17.0689 10.8541L18.416 6.7082L14.8893 4.1459H19.2486L20.5956 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M34.5956 0L35.9427 4.1459H40.302L36.7753 6.7082L38.1224 10.8541L34.5956 8.2918L31.0689 10.8541L32.416 6.7082L28.8893 4.1459H33.2486L34.5956 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M48.5956 0L49.9427 4.1459H54.302L50.7753 6.7082L52.1224 10.8541L48.5956 8.2918L45.0689 10.8541L46.416 6.7082L42.8893 4.1459H47.2486L48.5956 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M62.5956 0L63.9427 4.1459H68.302L64.7753 6.7082L66.1224 10.8541L62.5956 8.2918L59.0689 10.8541L60.416 6.7082L56.8893 4.1459H61.2486L62.5956 0Z"
		fill="#F59E0B"
	/>
</svg>
`;

const client_html = `
<div class="client-review-area">
	<div class="client-review">
		<h3>What Our Clients Say</h3>
		<div class="client-revs">
			<div>
				<div class="rev-info">
					<img
						src="https://i.ibb.co/kxxhJBx/Ellipse-110.png"
						alt="user-img"
					/>
					<strong>Brooklyn Simmons</strong>
					${five_star}
				</div>
				<p>
					“Porem ipsum dolor sit amet consectetur. Metus volutpat pulvinar
					pulvinar pellentesque accumsan. Risus porta in pellentesque vulputate
					egestas integer proin. Tincidunt et adipiscing pharetra mi.”
				</p>
				<small>4 Jun 2023</small>
			</div>
			<div>
				<div class="rev-info">
					<img
						src="https://i.ibb.co/kxxhJBx/Ellipse-110.png"
						alt="user-img"
					/>
					<strong>Brooklyn Simmons</strong>
					${five_star}
				</div>
				<p>
					“Porem ipsum dolor sit amet consectetur. Metus volutpat pulvinar
					pulvinar pellentesque accumsan. Risus porta in pellentesque vulputate
					egestas integer proin. Tincidunt et adipiscing pharetra mi.”
				</p>
				<small>4 Jun 2023</small>
			</div>
			<div>
				<div class="rev-info">
					<img
						src="https://i.ibb.co/kxxhJBx/Ellipse-110.png"
						alt="user-img"
					/>
					<strong>Brooklyn Simmons</strong>
					${five_star}
				</div>
				<p>
					“Porem ipsum dolor sit amet consectetur. Metus volutpat pulvinar
					pulvinar pellentesque accumsan. Risus porta in pellentesque vulputate
					egestas integer proin. Tincidunt et adipiscing pharetra mi.”
				</p>
				<small>4 Jun 2023</small>
			</div>
		</div>
	</div>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.benefit-area')) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('afterend', benefit_html);
		main.insertAdjacentHTML('afterend', client_html);
		clearInterval(interval);
	}
}, 10);

setInterval(() => {
	const forms = [...document.querySelectorAll('.gform_page')];
	const fusion = document.querySelector(
		'.fusion-builder-column-7 .fusion-column-wrapper.fusion-column-has-shadow'
	);
	if (forms.length > 0 && !document.querySelector('.btn-chk')) {
		forms.map((item) => {
			const footer_top_label = item.querySelector(
				'.gform_page_footer.top_label'
			);
			footer_top_label.classList.add('btn-chk');
			footer_top_label.insertAdjacentHTML('beforeend', response_html);
		});
	}
	if (fusion && !document.querySelector('.fusion-chk')) {
		fusion.classList.add('fusion-chk');
		fusion.insertAdjacentHTML('afterbegin', usp_html);
	}
}, 10);
