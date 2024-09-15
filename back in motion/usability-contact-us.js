const style_elm = `
<style>
    .fusion-builder-column-10 {
        width: 90%;
        margin: auto!important;
    }
    .fusion-builder-column-10 > div:nth-of-type(1){
        border-radius:0;
    }
    .gf_browser_unknown{
        margin-bottom: 0;
    }
    .gform_button{
        border-radius: 12px!important;
        background: #FF4D00!important;
        box-shadow: none!important;
        margin-top: 0!important;
    }
    #gform_submit_button_53{
        box-shadow: none!important;
    }
    .contact-page-form .gfield{
        border-radius: 6px;
        background: #F3F6F6;
    }
    #main{
        background-size: cover;
        background-image: url(https://i.ibb.co/18M05F1/usp-bg.png);
        padding: 40px 0;
    }
    #content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        max-width: 1200px;
        margin: auto;
        gap: 40px;
    }
    .fusion-builder-column-10 > div:nth-of-type(1) {
        padding: 20px;
        margin: 0;
    }
    .fusion-builder-row-4,.fusion-builder-column-7,.fusion-builder-column-8 {
        display: none!important;
    }
    .fusion-builder-row-5 {
        background: transparent;
    }
    .head-info *{
        margin: 0;
        padding: 0;
    }
    .head-info{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    .head-info ul{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .head-info  h2{
        color: #000;
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
    }
    .head-info  svg{
        flex-shrink: 0;
    }
    .head-info  li{
        display: flex;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        color: #000;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
    }
    .head-info div{
        background: #EDF7FC;
        box-shadow: -3px 4px 24px 0px rgba(127, 155, 167, 0.25);
        display: flex;
        padding: 20px;
        justify-content: center;
        align-items: center;
        gap: 20px;
        align-self: stretch;
    }
    .head-info strong{
        color: #3B3B3B;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
    }
    .head-info strong span{
        color: #FF4D00;
    }
    .client-review-area{
        background: #003A5D;
        width:100%;
    }
    .our-locations-area{
        background: #fff;
        width:100%;
    }
    .client-review,.our-location{
        max-width: 1200px;
        width: 100%;
        margin: auto;
        padding: 60px 10px;
    }
    .client-review *,.our-location *{
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
    .our-location h3{
        color: #003A5D;
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
    .our-locations {
        display:grid;
        grid-template-columns:repeat(4,1fr);
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
    .our-location-info {
        border-radius: 12px;
        border: 1px solid #E5E7EB;
        background: #FFF;
        padding: 20px;
        align-items: flex-start;
    }
    .our-location-info h4{
        color: #FF4D00;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 4px;
    }
    .our-location-info p{
        display: flex;
        align-items: flex-start;
        gap: 4px;
    }
    .our-location-info p strong{
        color: #373737;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .our-location-info p span{
        color: #727272;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    @media only screen and (max-width:1220px){
        .client-review,.our-location{
            padding: 60px 30px;
        }
        .our-locations {
            grid-template-columns: 1fr 1fr;
            gap:20px;
        }
        #content{
            grid-template-columns: 1fr;
        }
        #main{
            padding: 20px 0;
        }
    }
    @media only screen and (max-width:767px){
        .client-revs,.our-locations {
            grid-template-columns: 1fr;
            gap:20px;
        }
        .client-review h3,.our-location h3{
            margin-bottom: 30px;
        }
        .head-info  h2{
            font-size: 32px!important;
            line-height: 36px!important;
        }
        .head-info  li{
            font-size: 16px!important
            line-height: 18px!important;
        }
        .head-info div{
            padding: 10px;
        }
        .head-info strong{
            font-size: 18px!important;
            line-height: 20px!important;
        }
        .head-info{
            gap: 20px;
        }
    }
    @media only screen and (max-width:640px){
        .client-review h3,.our-location h3{
            font-size: 20px;
        }
        .client-review,.our-location{
            padding: 60px 10px;
        }
    }
</style>
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

const check_svg = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#FF4D00"/>
    <path d="M12.8711 19.4444L18.4266 25L27.1304 15" stroke="white" stroke-width="4"/>
</svg>
`;

const client_html_elm = `
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
<div class="our-locations-area">
	<div class="our-location">
		<h3>Our Locations</h3>
		<div class="our-locations">
			<div class="our-location-info">
                <h4>Fort Myers Office</h4>
                <P><strong>Phone</strong><span>239-766-5105</span></P>
                <P><strong>Schedule</strong><span>M-TR 7 AM to 7 PM    F: 7 AM to 5 PM</span></P>
                <P><strong>Address</strong><span>9724 Commerce Center Ct. Fort Myers, FL 33908, USA</span></P>
			</div>
			<div class="our-location-info">
                <h4>Cape Coral Office</h4>
                <P><strong>Phone</strong><span>239-766-5105</span></P>
                <P><strong>Schedule</strong><span>M-TR 7 AM to 7 PM    F: 7 AM to 5 PM</span></P>
                <P><strong>Address</strong><span>2708 Santa Barbara Blvd. #145 Cape Coral, FL 33914, USA</span></P>
			</div>
			<div class="our-location-info">
                <h4>Estero Office – Pelican Sound</h4>
                <P><strong>Phone</strong><span>239-766-5105</span></P>
                <P><strong>Schedule</strong><span>M-TR 7 AM to 7 PM    F: 7 AM to 5 PM</span></P>
                <P><strong>Address</strong><span>4784 Pelican Sound Blvd, Estero, FL 33928</span></P>
			</div>
			<div class="our-location-info">
                <h4>Verandah Office</h4>
                <P><strong>Phone</strong><span>239-766-5105</span></P>
                <P><strong>Schedule</strong><span>M-TR 7 AM to 7 PM    F: 7 AM to 5 PM</span></P>
                <P><strong>Address</strong><span>12230 River Village Way, Fort Myers, FL 33905</span></P>
			</div>
		</div>
	</div>
</div>
`;

const head_rev = `
<div class="head-info">
    <h2>Start Up Your Health Care With Us</h2>
    <ul>
        <li>${check_svg} <span>Get to the Root Cause of Your Pain , Stiffness, or Injury</span></li>
        <li>${check_svg} <span>One-On-One Care With a Doctor of Physical Therapy</span></li>
        <li>${check_svg} <span>4 Convenient SWFL Locations & Same Day Appointments</span></li>
    </ul>
    <div>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6493 26.4766C27.8054 25.4759 28.7327 24.2382 29.3682 22.8475C30.0038 21.4568 30.3327 19.9457 30.3327 18.4166C30.3327 15.5435 29.1913 12.788 27.1597 10.7563C25.128 8.72468 22.3725 7.58331 19.4993 7.58331C16.6262 7.58331 13.8707 8.72468 11.839 10.7563C9.80738 12.788 8.66601 15.5435 8.66601 18.4166C8.666 19.9457 8.99492 21.4568 9.63045 22.8475C10.266 24.2382 11.1933 25.4759 12.3493 26.4766C9.31632 27.8501 6.74302 30.068 4.93714 32.8652C3.13125 35.6624 2.1692 38.9205 2.16602 42.25C2.16602 42.8246 2.39429 43.3757 2.80062 43.782C3.20695 44.1884 3.75805 44.4166 4.33268 44.4166C4.90732 44.4166 5.45842 44.1884 5.86475 43.782C6.27107 43.3757 6.49935 42.8246 6.49935 42.25C6.49935 38.8022 7.86899 35.4956 10.307 33.0576C12.7449 30.6196 16.0515 29.25 19.4993 29.25C22.9472 29.25 26.2538 30.6196 28.6917 33.0576C31.1297 35.4956 32.4993 38.8022 32.4993 42.25C32.4993 42.8246 32.7276 43.3757 33.1339 43.782C33.5403 44.1884 34.0914 44.4166 34.666 44.4166C35.2406 44.4166 35.7917 44.1884 36.1981 43.782C36.6044 43.3757 36.8327 42.8246 36.8327 42.25C36.8295 38.9205 35.8674 35.6624 34.0615 32.8652C32.2557 30.068 29.6824 27.8501 26.6493 26.4766ZM19.4993 24.9166C18.2138 24.9166 16.9571 24.5354 15.8881 23.8212C14.8192 23.107 13.9861 22.0918 13.4941 20.9041C13.0022 19.7164 12.8734 18.4094 13.1242 17.1486C13.375 15.8877 13.9941 14.7295 14.9032 13.8205C15.8122 12.9114 16.9704 12.2923 18.2313 12.0415C19.4921 11.7907 20.7991 11.9195 21.9868 12.4114C23.1745 12.9034 24.1897 13.7365 24.9039 14.8054C25.6181 15.8744 25.9993 17.1311 25.9993 18.4166C25.9993 20.1405 25.3145 21.7939 24.0955 23.0128C22.8766 24.2318 21.2233 24.9166 19.4993 24.9166ZM40.6027 25.61C41.9893 24.0485 42.895 22.1196 43.2109 20.0554C43.5268 17.9912 43.2393 15.8796 42.3832 13.975C41.527 12.0703 40.1386 10.4537 38.385 9.31973C36.6315 8.18575 34.5876 7.58275 32.4993 7.58331C31.9247 7.58331 31.3736 7.81159 30.9673 8.21792C30.5609 8.62424 30.3327 9.17534 30.3327 9.74998C30.3327 10.3246 30.5609 10.8757 30.9673 11.282C31.3736 11.6884 31.9247 11.9166 32.4993 11.9166C34.2232 11.9166 35.8765 12.6015 37.0955 13.8205C38.3145 15.0394 38.9993 16.6927 38.9993 18.4166C38.9963 19.5547 38.6945 20.6719 38.1241 21.6567C37.5538 22.6415 36.7349 23.4593 35.7493 24.0283C35.4281 24.2136 35.1598 24.4782 34.9701 24.7969C34.7804 25.1156 34.6757 25.4776 34.666 25.8483C34.6569 26.2161 34.7417 26.5802 34.9123 26.9062C35.0829 27.2322 35.3336 27.5094 35.641 27.7116L36.486 28.275L36.7677 28.4266C39.3794 29.6654 41.5827 31.6246 43.1181 34.0737C44.6536 36.5227 45.4572 39.3595 45.4343 42.25C45.4343 42.8246 45.6626 43.3757 46.0689 43.782C46.4753 44.1884 47.0264 44.4166 47.601 44.4166C48.1756 44.4166 48.7267 44.1884 49.1331 43.782C49.5394 43.3757 49.7677 42.8246 49.7677 42.25C49.7854 38.9251 48.9526 35.6509 47.3485 32.7384C45.7444 29.826 43.4223 27.3722 40.6027 25.61Z" fill="black"/>
        </svg>
        <strong>
            Back in Motion is <span>Trusted</span> by more than <span>50,000</span> patients. 
        </strong>
    </div>
</div>
`;

const interval_elm = setInterval(() => {
	const main = document.querySelector('#main');
	const content = document.querySelector('#content');
	const head = document.querySelector('head');
	if (
		main &&
		head &&
		content &&
		!document.querySelector('.client-review-area')
	) {
		head.insertAdjacentHTML('beforeend', style_elm);
		main.insertAdjacentHTML('afterend', client_html_elm);
		content.insertAdjacentHTML('afterbegin', head_rev);
		clearInterval(interval_elm);
	}
}, 10);
