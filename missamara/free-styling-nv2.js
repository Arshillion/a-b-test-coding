const style = `
<style>
	#shopify-section-featured-blogs-section,
	.user-content.row-spacing.lightboximages,
	.appointment-wrapper,#store-messages {
		display: none !important;
	}
	.majortitle{
		margin: 0!important;
	}
	.new-free-style * {
		margin: 0;
		padding: 0;
	}
	.free-styling-form-description-text{
		margin-bottom: 6px;
	}
	.new-free-style svg {
		fill: transparent;
	}
	.major-sub-message {
		font-family: Lato;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: center;
		margin-bottom: 20px;
	}
	.fsa-stylist {
		border-radius: 8px;
		overflow: hidden;
		display: grid;
		background: #f7dfd3;
		grid-template-columns: 1fr;
	}
	.fsa-stylist-content {
		display: grid;
		place-content: center;
		gap: 6px;
		padding: 20px 10px;
	}
	.fsa-stylist-content h6 {
		font-family: Cardo;
		font-size: 20px;
		font-weight: 700;
		line-height: 27px;
		letter-spacing: 0em;
		text-align: center;
	}
	.fsa-stylist-content small {
		font-family: Inter;
		font-size: 14px;
		font-weight: 400;
		line-height: 18px;
		letter-spacing: 0em;
		text-align: center;
	}
	.fsa-stylist-content a {
		display: flex;
		align-items: center;
		padding: 6px 16px;
		border-radius: 28px;
		background: #000000;
		gap: 10px;
		margin: 12px auto 0;
		width: max-content;
	}
	.fsa-stylist-content span {
		font-size: 16px;
		text-align: center;
		color: white;
	}
	.fsa-stylist-content svg {
		width: 12px;
		height: 12px;
	}
	.call-now {
		background: #e0eef2;
		padding: 10px;
		display: grid;
		grid-template-columns: 75px 1fr;
		gap: 10px;
		border-radius: 8px;
		margin-top: 20px;
	}
	.call-now > svg {
		grid-row: span 2;
		width: 75px;
		height: 75px;
	}
	.call-now-info {
		display: grid;
		gap: 6px;
	}
	.call-now-info span {
		font-family: Lato;
		font-size: 15px;
		font-weight: 700;
		line-height: 18px;
		color: #333333;
	}
	.call-now-info small {
		font-family: Inter;
		font-size: 10px;
		font-weight: 400;
		line-height: 14px;
		color: #333333;
	}
	.call-now a {
		padding: 6px 12px;
		border-radius: 48px;
		gap: 8px;
		background: #ffffff;
		display: flex;
		align-items: center;
		width: max-content;
		gap: 10px;
	}
	.call-now a svg {
		width: 17px;
		height: 16px;
	}
	.call-now-info a span {
		font-size: 14px;
		text-align: center;
	}
	.fsa-team-img {
		margin-top: 20px;
		border-radius: 8px;
		overflow: hidden;
	}
	.fsa-team-img img{
		width: 100%;
	}
	.how-work {
		margin: 20px 0;
	}
	.how-work .header-info {
		font-family: Cardo;
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
		text-align: center;
		margin-bottom: 20px;
	}
	.how-work-types {
		display: grid;
		grid-template-rows: 1fr;
		gap: 20px;
	}
	.how-work-type {
		display: grid;
		grid-template-columns: 40px 1fr;
		gap: 0px 10px;
	}
	.how-work-type strong {
		font-size: 14px;
		font-weight: 600;
		line-height: 24px;
		color: #333333;
	}
	.how-work-type small {
		font-size: 12px;
		font-weight: 400;
		line-height: 17px;
		color: #333333;
	}
	.how-work-type > svg {
		grid-row: span 2;
		width: 40px;
		height: 40px;
	}
	.how-work-type > svg g {
		fill: transparent;
	}
	.our-stylist {
		background: #fbe6e3;
		margin: 20px 0;
		border-radius: 8px;
		padding: 20px;
	}
	.our-stylist .header-info {
		font-family: Cardo;
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
		text-align: center;
		margin-bottom: 20px;
	}
	.our-stylist-wrapper {
		width: 100%;
		overflow: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.our-stylist-wrapper::-webkit-scrollbar {
		display: none;
	}
	.stylist-features {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		width: max-content;
		margin: auto;
	}
	.stylist-feature {
		max-width: 160px;
	}
	#free-styling-form-wrapper {
		background: none !important;
	}
	#shopify-section-free-styling-form {
		border-radius: 8px;
		overflow: hidden;
	}
	#free-styling-form-wrapper .free-styling-container {
		padding: 20px !important;
		margin-top: 20px;
		margin-bottom: 0px;
	}
	.free-styling-container.container {
		border-radius: 8px;
		background: #fff8f8;
		box-sizing: border-box;
	}
	.form-first-row-item-first {
		width: 100% !important;
	}
	.free-styling-form-text-content,
	.form-third-row .form-third-row-content {
		width: 100% !important;
	}
	.form-third-row .half-width-field {
		margin: 0 !important;
	}
	.form-second-row,
	.form-first-row,
	.form-third-row {
		border: 0 !important;
		margin: 0 !important;
		padding: 0 !important;
		margin-bottom: 20px !important;
	}
	.free-styling-form-text-container p {
		font-size: 18px !important;
		font-family: Cardo;
	}
	.fs-checkbox-container {
		font-size: 12px !important;
		line-height: normal;
		display: flex !important;
		align-items: center;
		margin: 0 !important;
		padding: 0 !important;
		gap: 6px;
		flex-direction: row-reverse;
	}
	.fs-checkbox-container .checkmark {
		display: block;
		top: 0 !important;
		left: 0 !important;
		position: relative !important;
		position: static;
		flex-shrink: 0;
		border-radius: 2px;
		border: 1px solid #757575;
		background: #fff;
	}
	.form-first-row-item.form-first-row-item-second {
		margin-top: 30px;
	}
	.free-styling-file-description {
		line-height: normal;
		padding-top: 10px;
	}
	.freeStyling-submit-button {
		border-radius: 48px !important;
		background: #333 !important;
		text-transform: capitalize !important;
	}
	.custom-file-upload {
		border-radius: 6px !important;
		border: 1px dashed #555 !important;
		background: #fff !important;
		height: 120px;
	}
	#free-styling-form .input-custom {
		border-radius: 6px;
		border: 1px solid #555;
		background: #fff;
	}
	.free-styling-inputs-radio-container .free-styling-inputs-radio-wrapper {
		display: block;
		width: max-content;
		margin: 0;
		margin-bottom: 10px !important;
	}
	.half-width-field half-width-field-second{
		margin-top: 20px !important;
	}
	.custom-file-upload {
		width: 100% !important;
	}
	.form-third-row .form-third-row-content {
		gap: 30px;
	}
	.select-room-radio-wrapper img {
		border-radius: 8px;
	}
	.select-room-radio-wrapper input[type='radio']:checked + label img {
		padding: 6px;
		overflow: hidden;
		box-sizing: border-box;
		border-radius: 12px;
		outline: 3px solid #f4ac96 !important;
		transform: scale(1) !important;
	}
	.free-styling-inputs-content {
		height: 100%;
	}
	.free-styling-inputs-content span:first-child {
		margin-bottom: auto;
	}
	.free-styling-inputs-content span:last-child {
		margin-top: auto;
		border-radius: 25px;
		border: 1px solid #000;
	}
	.free-styling-inputs-content span:last-child svg {
		width: 16px;
		height: 16px;
		padding: 6px;
	}
	#fs-requirement {
		padding: 6px;
	}
	.free-styling-submit {
		margin: 10px 0 !important;
	}
	.free-styling-inputs-checkbox-wrapper,
	.form-third-row-content .half-width-field.half-width-field-second,
	.form-third-row-content .half-width-field.half-width-field-first {
		width: 100% !important;
	}
	.free-styling-form-text-content.select-room-radio-wrapper
		.free-styling-inputs-radio-wrapper:nth-child(3),
	.free-styling-form-text-content.select-room-radio-wrapper
		.free-styling-inputs-radio-wrapper:nth-child(5),
	.free-styling-form-text-content.select-room-radio-wrapper
		.free-styling-inputs-radio-wrapper:nth-child(6) {
		display: none;
	}
	.advice-sub-header{
		font-family: Cardo;
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
		text-align: center;
		color: #000000;
	}
	.advice-before-after{
		font-family: Just Another Hand;
		font-size: 16px;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0em;
		text-align: center;
		display: block;
		padding: 4px;
		background: #fff;
		color: #333333;
	}
	.service-and-advice-image-before, .service-and-advice-image-after{
		box-shadow: 0px 4px 4px 0px #00000014;
		border: 4px solid #FFFFFF!important;
		border-radius: 8px;
		border: 4px;
	}
	#service-and-advice{
		background: #F2F4F6;
		border-radius: 8px;
		padding: 20px 20px 50px;
	}
	.service-and-advice-carousel{
		padding: 20px;
	}
	.service-and-advice-text-container {
		padding: 0;
	}
	.service-and-advice-carousel .slick-prev{
		left: calc(50% - 60px)!important;
		top: calc(100% + 15px)!important;
	}
	.service-and-advice-carousel .slick-next{
		right: calc(50% - 50px)!important;
		top: calc(100% + 15px)!important;
	}
	.free-styling-inputs-file-wrapper{
		margin-bottom: 10px;
	}
	@media only screen and (min-width: 768px) {
		.free-styling-inputs-file-wrapper{
			margin-bottom: 0px;
		}
		.fsa-stylist {
			grid-template-columns: 1fr 1fr;
		}
		.fsa-stylist-content h6 {
			font-size: 24px;
			line-height: 30px;
		}
		.fsa-stylist-content small {
			font-size: 16px;
			line-height: 20px;
		}
		.call-now {
			grid-template-columns: 75px 1fr 1fr;
			align-items: center;
		}
		.call-now-info span {
			font-size: 18px;
			line-height: 20px;
		}
		.call-now-info small {
			font-size: 14px;
			line-height: 16px;
		}
		.call-now a {
			padding: 6px 24px;
			gap: 10px;
			margin-left: auto;
		}
		.call-now-info a span {
			font-size: 18px;
		}
		.call-now > svg {
			grid-row: auto;
		}
		.how-work-types {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.how-work-type {
			gap: 2px 10px;
			place-content: flex-start;
		}
		.form-third-row-content .half-width-field.half-width-field-first,
		.form-third-row-content .half-width-field.half-width-field-second,
		.free-styling-inputs-checkbox-wrapper {
			width: 50% !important; 
		}
	}
</style>

`;
const stylist_features = [
	'//missamara.com.au/cdn/shop/files/Harper_s_Bazaar_Logo_680x.png?v=1675228863',
	'//missamara.com.au/cdn/shop/files/InStyle_Logo_680x.png?v=1675228911',
	'//missamara.com.au/cdn/shop/files/home-beautiful-logo_680x_680x_68374462-9d59-41b0-9021-d5e2865b202c_680x.webp?v=1657787464',
	'//missamara.com.au/cdn/shop/files/Vogue_Logo_680x.png?v=1675228945',
	'//missamara.com.au/cdn/shop/files/real-living_680x_680x_0854b2ca-f732-4449-a74d-ed73f375a727_680x.webp?v=1657787508',
	'//missamara.com.au/cdn/shop/files/elle-logo_400x_200x_680x_4c6366d5-1f02-48c5-9149-0e8f96af092b_680x.webp?v=1657787446',
];
const how_work_types = [
	{
		svg: `
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="20" cy="20" r="20" fill="#F7DFD3"/>
			<path d="M20.0141 19C19.7492 19 19.4952 19.1054 19.308 19.2929C19.1207 19.4804 19.0155 19.7348 19.0155 20V23C19.0155 23.2652 19.1207 23.5196 19.308 23.7071C19.4952 23.8946 19.7492 24 20.0141 24C20.2789 24 20.5329 23.8946 20.7202 23.7071C20.9075 23.5196 21.0127 23.2652 21.0127 23V20C21.0127 19.7348 20.9075 19.4804 20.7202 19.2929C20.5329 19.1054 20.2789 19 20.0141 19ZM20.0141 16C19.8166 16 19.6235 16.0586 19.4593 16.1685C19.2951 16.2784 19.1671 16.4346 19.0915 16.6173C19.0159 16.8 18.9961 17.0011 19.0347 17.1951C19.0732 17.3891 19.1683 17.5673 19.308 17.7071C19.4476 17.847 19.6255 17.9422 19.8193 17.9808C20.013 18.0194 20.2137 17.9996 20.3962 17.9239C20.5787 17.8482 20.7346 17.72 20.8444 17.5556C20.9541 17.3911 21.0127 17.1978 21.0127 17C21.0127 16.7348 20.9075 16.4804 20.7202 16.2929C20.5329 16.1054 20.2789 16 20.0141 16ZM20.0141 10C18.7027 10 17.4042 10.2587 16.1926 10.7612C14.9811 11.2638 13.8802 12.0003 12.953 12.9289C11.0802 14.8043 10.0281 17.3478 10.0281 20C10.0194 22.3091 10.8178 24.5485 12.285 26.33L10.2878 28.33C10.1492 28.4706 10.0554 28.6492 10.018 28.8432C9.98071 29.0372 10.0016 29.2379 10.0781 29.42C10.161 29.5999 10.2955 29.7511 10.4644 29.8544C10.6333 29.9577 10.829 30.0083 11.0267 30H20.0141C22.6625 30 25.2025 28.9464 27.0752 27.0711C28.9479 25.1957 30 22.6522 30 20C30 17.3478 28.9479 14.8043 27.0752 12.9289C25.2025 11.0536 22.6625 10 20.0141 10ZM20.0141 28H13.4333L14.362 27.07C14.4564 26.9774 14.5315 26.8669 14.5829 26.7451C14.6343 26.6232 14.6611 26.4923 14.6616 26.36C14.6579 26.0962 14.5502 25.8446 14.362 25.66C13.0545 24.352 12.2402 22.6305 12.058 20.7888C11.8758 18.947 12.3368 17.099 13.3627 15.5595C14.3885 14.02 15.9156 12.8844 17.6839 12.346C19.4521 11.8076 21.352 11.8998 23.06 12.6069C24.7679 13.314 26.1782 14.5923 27.0506 16.2239C27.923 17.8555 28.2034 19.7395 27.8442 21.555C27.4849 23.3705 26.5082 25.005 25.0805 26.1802C23.6527 27.3554 21.8622 27.9985 20.0141 28Z" fill="black"/>
		</svg>
		`,
		strong: `Tell us what you’re looking for`,
		small: `Fill in our form - it takes 30 seconds`,
	},
	{
		svg: `
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="40" height="40" rx="20" fill="#F7DFD3"/>
			<path d="M29.1654 18.1666V14.5C29.1654 14.0137 28.9722 13.5474 28.6284 13.2036C28.2846 12.8598 27.8183 12.6666 27.332 12.6666H12.6654C11.657 12.6666 10.8412 13.4825 10.8412 14.5V18.1666C11.8495 18.1666 12.6654 18.9916 12.6654 20C12.6654 21.0083 11.8495 21.8333 10.832 21.8333V25.5C10.832 26.5083 11.657 27.3333 12.6654 27.3333H27.332C28.3404 27.3333 29.1654 26.5083 29.1654 25.5V21.8333C28.157 21.8333 27.332 21.0083 27.332 20C27.332 18.9916 28.157 18.1666 29.1654 18.1666ZM27.332 16.8283C26.2412 17.4608 25.4987 18.6525 25.4987 20C25.4987 21.3475 26.2412 22.5391 27.332 23.1716V25.5H12.6654V23.1716C13.7562 22.5391 14.4987 21.3475 14.4987 20C14.4987 18.6433 13.7654 17.4608 12.6745 16.8283L12.6654 14.5H27.332V16.8283Z" fill="black"/>
			</svg>		
		`,
		strong: `We curate a rug selection for you`,
		small: `Email or call us - our team is here to help you from rug selection to delivery`,
	},
	{
		svg: `
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="40" height="40" rx="20" fill="#F7DFD3"/>
			<g clip-path="url(#clip0_2208_511)">
			<path d="M24.5827 12.0834H15.416L15.1668 12.905C14.5134 15.061 13.2498 16.9816 11.5285 18.435L10.416 19.375V19.5834M24.5827 12.0834L24.331 12.9209C23.6796 15.0931 22.4092 17.0284 20.6752 18.49L19.6243 19.375L19.3743 19.5834H10.416M24.5827 12.0834L24.8343 12.9209C25.486 15.0932 26.7567 17.0285 28.491 18.49L29.541 19.375L29.5827 19.4167V27.9167H10.416V19.5834M19.5827 19.41V27.9167M24.5827 27.9167V24.1667" stroke="black" stroke-width="1.6"/>
			</g>
			<defs>
			<clipPath id="clip0_2208_511">
			<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
			</clipPath>
			</defs>
		</svg>		
		`,
		strong: `Try it at Home`,
		small: `Shop with confidence with our free styling advice, free delivery & free returns`,
	},
];
const mobile_svg = `
<svg
	width="73"
	height="73"
	viewBox="0 0 73 73"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M52.5475 7.29657C52.0077 3.5477 48.5262 0.942594 44.7773 1.48239L18.6789 5.24026C14.93 5.78006 12.3249 9.26157 12.8647 13.0104L20.4519 65.7034C20.9917 69.4523 24.4732 72.0574 28.2221 71.5176L54.3205 67.7597C58.0693 67.2199 60.6744 63.7384 60.1346 59.9895L52.5475 7.29657ZM39.0621 4.57899L39.3858 6.82708C39.4749 7.44577 39.0454 8.02031 38.4268 8.1094L26.6411 9.8064C26.0224 9.89548 25.4484 9.46543 25.3593 8.84674L25.0356 6.59865L18.9996 7.46775C16.4803 7.8305 14.7295 10.1704 15.0922 12.6897L22.6794 65.3827C23.0421 67.9019 25.3821 69.6528 27.9014 69.2901L53.9997 65.5322C56.519 65.1694 58.2699 62.8295 57.9072 60.3103L50.32 7.6173C49.9572 5.09801 47.6173 3.34713 45.098 3.70988L39.0621 4.57899ZM47.8376 61.2179C47.7438 60.5663 47.1386 60.1135 46.487 60.2073L33.6066 62.0619C32.955 62.1558 32.5022 62.761 32.596 63.4125C32.6898 64.064 33.295 64.5169 33.9465 64.4231L46.827 62.5684C47.4785 62.4746 47.9314 61.8694 47.8376 61.2179Z"
		fill="#333333"
	/>
</svg>
`;
const phone_svg = `
<svg
	width="17"
	height="16"
	viewBox="0 0 17 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_2234_21)">
		<path
			d="M13.2933 15.9645C12.5977 15.9645 11.6206 15.7129 10.1574 14.8954C8.37818 13.8976 7.00197 12.9765 5.23234 11.2115C3.52615 9.50638 2.69586 8.40241 1.53381 6.28785C0.22103 3.90032 0.444817 2.64883 0.694973 2.11395C0.992879 1.47466 1.43261 1.0923 2.00099 0.712792C2.32382 0.501276 2.66546 0.31996 3.02157 0.171143C3.0572 0.15582 3.09034 0.14121 3.11992 0.128025C3.29631 0.0485599 3.56357 -0.0715292 3.9021 0.0567559C4.12802 0.141567 4.32972 0.315108 4.64544 0.626912C5.29292 1.26549 6.17773 2.68767 6.50415 3.38611C6.7233 3.85684 6.86834 4.16758 6.86869 4.51609C6.86869 4.92411 6.66344 5.23876 6.41435 5.57836C6.36767 5.64215 6.32134 5.70308 6.27644 5.76223C6.00526 6.11858 5.94575 6.22157 5.98495 6.40544C6.06442 6.77497 6.65702 7.87502 7.63092 8.84678C8.60482 9.81854 9.67315 10.3737 10.0441 10.4528C10.2358 10.4938 10.3409 10.4318 10.7087 10.151C10.7614 10.1107 10.8156 10.069 10.8723 10.0274C11.2521 9.74477 11.5522 9.54486 11.9506 9.54486H11.9527C12.2994 9.54486 12.5963 9.69524 13.088 9.94326C13.7295 10.2668 15.1944 11.1402 15.8369 11.7884C16.1494 12.1034 16.3237 12.3044 16.4088 12.53C16.5371 12.8696 16.4163 13.1358 16.3376 13.3139C16.3244 13.3435 16.3098 13.376 16.2944 13.4119C16.1444 13.7674 15.9621 14.1083 15.7496 14.4304C15.3708 14.997 14.987 15.4356 14.3463 15.7339C14.0173 15.8895 13.6572 15.9684 13.2933 15.9645Z"
			fill="black"
		/>
	</g>
	<defs>
		<clipPath id="clip0_2234_21">
			<rect
				width="16"
				height="16"
				fill="white"
				transform="translate(0.5)"
			/>
		</clipPath>
	</defs>
</svg>
`;
const fileUpload = `
<svg
	width="19"
	height="19"
	viewBox="0 0 19 19"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M16.1642 13.6515L15.4439 14.3452L15.4517 14.3532L16.1642 13.6515ZM16.2875 15.2018C16.675 15.5953 17.3082 15.6001 17.7017 15.2126C18.0951 14.8251 18.1 14.1919 17.7124 13.7984L16.2875 15.2018ZM5.04083 12.2346L4.33667 11.5245L4.3312 11.5301L5.04083 12.2346ZM8.00001 3C8.55231 3 9.00001 2.55228 9.00001 2C9.00001 1.44772 8.55231 1 8.00001 1V3ZM18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11H18ZM14 7C14 7.55228 14.4477 8 15 8C15.5523 8 16 7.55228 16 7H14ZM16 1C16 0.44772 15.5523 0 15 0C14.4477 0 14 0.44772 14 1H16ZM18 5C18.5523 5 19 4.55228 19 4C19 3.44772 18.5523 3 18 3V5ZM12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5V3ZM8.84321 12.9447L10.5605 14.6477L11.9688 13.2276L10.2515 11.5246L8.84321 12.9447ZM11.9688 14.6477L12.3102 14.3092L10.9019 12.8891L10.5605 13.2276L11.9688 14.6477ZM10.5514 14.6385L14.5067 18.6637L15.9333 17.2619L11.9779 13.2368L10.5514 14.6385ZM15.4517 14.3532L16.2875 15.2018L17.7124 13.7984L16.8767 12.9498L15.4517 14.3532ZM12.3102 14.3092C12.7249 13.8979 12.9936 13.6326 13.2141 13.4471C13.4258 13.2691 13.525 13.2249 13.5781 13.2081L12.9764 11.3008C12.5671 11.4299 12.2338 11.6584 11.9269 11.9164C11.6288 12.1671 11.2931 12.5012 10.9019 12.8891L12.3102 14.3092ZM16.8845 12.9578C16.5024 12.5611 16.1743 12.2193 15.8822 11.9619C15.5813 11.6969 15.2533 11.4608 14.8471 11.3223L14.2017 13.2153C14.2543 13.2333 14.3526 13.2798 14.5601 13.4626C14.7763 13.6531 15.0387 13.9245 15.4439 14.3452L16.8845 12.9578ZM13.5781 13.2081C13.7814 13.144 13.9999 13.1465 14.2017 13.2153L14.8471 11.3223C14.2417 11.1159 13.5863 11.1084 12.9764 11.3008L13.5781 13.2081ZM5.74497 12.9447C6.15131 12.5417 6.41407 12.2823 6.62984 12.1005C6.8366 11.9264 6.93395 11.8823 6.98666 11.8652L6.37181 9.9621C5.97014 10.0919 5.64296 10.3169 5.34145 10.5708C5.04895 10.8172 4.71968 11.1447 4.33667 11.5245L5.74497 12.9447ZM10.2515 11.5246C9.86851 11.1448 9.53921 10.8172 9.24671 10.5708C8.94521 10.3168 8.61801 10.0919 8.21631 9.9621L7.60151 11.8652C7.65421 11.8823 7.75161 11.9264 7.95831 12.1005C8.17411 12.2823 8.43681 12.5417 8.84321 12.9447L10.2515 11.5246ZM6.98666 11.8652C7.18651 11.8007 7.40161 11.8007 7.60151 11.8652L8.21631 9.9621C7.61681 9.7684 6.9714 9.7684 6.37181 9.9621L6.98666 11.8652ZM4.20001 3H8.00001V1H4.20001V3ZM13.8 17H4.20001V19H13.8V17ZM2.00001 14.8V5.2H6.32377e-06V14.8H2.00001ZM4.20001 17C3.62346 17 3.25118 16.9992 2.96785 16.9761C2.69618 16.9539 2.59546 16.9162 2.54602 16.891L1.63804 18.673C2.01642 18.8658 2.40964 18.9371 2.80498 18.9694C3.18865 19.0008 3.65646 19 4.20001 19V17ZM2.54602 16.891C2.35786 16.7951 2.20488 16.6422 2.109 16.454L0.326986 17.362C0.614606 17.9265 1.07355 18.3854 1.63804 18.673L2.54602 16.891ZM16 14.8C16 15.3766 15.9992 15.7488 15.9761 16.0322C15.9539 16.3038 15.9162 16.4045 15.891 16.454L17.673 17.362C17.8658 16.9836 17.9371 16.5904 17.9694 16.195C18.0008 15.8114 18 15.3436 18 14.8H16ZM13.8 19C14.3987 19 14.9107 19.0013 15.3258 18.9572L15.1142 16.9684C14.8299 16.9987 14.4439 17 13.8 17V19ZM15.3258 18.9572C15.6765 18.9199 16.0245 18.8449 16.362 18.673L15.454 16.891C15.4104 16.9132 15.325 16.946 15.1142 16.9684L15.3258 18.9572ZM15.891 16.454C15.7951 16.6422 15.6422 16.7951 15.454 16.891L16.362 18.673C16.9265 18.3854 17.3854 17.9265 17.673 17.362L15.891 16.454ZM4.20001 1C3.65646 1 3.18865 0.99922 2.80498 1.03057C2.40964 1.06287 2.01642 1.13419 1.63804 1.32698L2.54602 3.10899C2.59546 3.0838 2.69618 3.04612 2.96785 3.02393C3.25118 3.00078 3.62346 3 4.20001 3V1ZM2.00001 5.2C2.00001 4.62345 2.00079 4.25117 2.02394 3.96784C2.04613 3.69617 2.08381 3.59545 2.109 3.54601L0.326986 2.63803C0.134196 3.01641 0.0628764 3.40963 0.0305764 3.80497C-0.000773648 4.18864 6.32377e-06 4.65645 6.32377e-06 5.2H2.00001ZM1.63804 1.32698C1.07355 1.6146 0.614606 2.07354 0.326986 2.63803L2.109 3.54601C2.20488 3.35785 2.35786 3.20487 2.54602 3.10899L1.63804 1.32698ZM6.32377e-06 14.8C6.32377e-06 15.421 -0.00165367 15.9512 0.0488163 16.3793L2.03506 16.1451C2.00167 15.8619 2.00001 15.4721 2.00001 14.8H6.32377e-06ZM0.0488163 16.3793C0.0880363 16.712 0.163766 17.0416 0.326986 17.362L2.109 16.454C2.08792 16.4126 2.05725 16.3333 2.03506 16.1451L0.0488163 16.3793ZM1.75157 16.9668L5.75046 12.9392L4.3312 11.5301L0.332306 15.5576L1.75157 16.9668ZM16 11V14.8H18V11H16ZM16 7V4H14V7H16ZM16 4V1H14V4H16ZM18 3H15V5H18V3ZM15 3H12V5H15V3Z"
		fill="#131A29"
	/>
</svg>
`;

const top_elms = `
<div class='new-free-style'>
	<h3 class="major-sub-message">We have worked with over 20,000 customers to design their dream space!</h3>
	<div class="fsa-stylist">
	<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Banner_a5c7ca34-7474-4448-8a00-3d710be42620.png?v=1692676935">
	<div class="fsa-stylist-content">
		<h6 class="small-header">Need Help Choosing a Rug?</h6>
		<small>Our Interior Experts will help you find your perfect rug.</small>
		<a href="#free-styling-form-wrapper">
		<span>Get Free Styling Now</span>
		<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L6 6L1 11" stroke="white" stroke-width="2" stroke-linecap="round" />
		</svg>
		</a>
	</div>
	</div>
	<div class="call-now">
		${mobile_svg}
		<div class="call-now-info">
			<span>Don't waste another moment searching for the perfect rug!</span>
			<small>Call now to speak to one of our Interior Stylists</small>
		</div>
		<a href="tel:+4733378901">
			${phone_svg}
			<span>Call now
			02 8015 5926</span>
		</a>
	</div>
	<div class="fsa-team-img">
		<picture class="header-img">
			<source media="(min-width: 991px)" srcset="https://cdn.shopify.com/s/files/1/2594/4244/files/Styling_Team_Possible_Layouts.png?v=1707800826">
			<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Styling_Team_Possible_Layouts.png?v=1707800826">
		</picture>
	</div>
	<div class="how-work">
		<h4 class="header-info">How does it work?</h4>
		<div class="how-work-types">
			${how_work_types
				.map(
					(item) => `	<div class="how-work-type">
								${item.svg}
								<strong>${item.strong}</strong>
								<small>${item.small}</small>
							</div>`
				)
				.join('')}
		</div>
	</div>
	<div class="our-stylist">
		<h4 class="header-info">Our Stylists have been feautured in</h4>
		<div class="our-stylist-wrapper">
			<div class="stylist-features">
				${stylist_features
					.map((item) => `<img src="${item}" class="stylist-feature">`)
					.join('')}
			</div>
		</div>	
	</div>
</div>
`;

const topInt = setInterval(() => {
	const topParent = document.querySelector('.page-header.cf ');
	const head = document.querySelector('head');
	if (topParent && head && !document.querySelector('.fsa-stylist')) {
		head.insertAdjacentHTML('beforeend', style);
		topParent.insertAdjacentHTML('afterend', top_elms);
		clearInterval(topInt);
	}
}, 10);

const placeInt = setInterval(() => {
	const service_advice = document.querySelector(
		'#shopify-section-service-advice'
	);
	const style_form = document.querySelector(
		'#shopify-section-free-styling-form'
	);
	const our_stylist = document.querySelector('.our-stylist');
	const formStyle = document.querySelector('.free-styling-container.container');
	const freeStyleType = formStyle.querySelector('.form-second-row');
	const freeStyleConcern = formStyle.querySelector(
		'.form-first-row-item.form-first-row-item-second'
	);
	const freeStyleSubmit = formStyle.querySelector(
		'.full-width-field.free-styling-submit'
	);
	const freeStyleThird = formStyle.querySelector(
		'.full-width-field.free-styling-submit'
	);
	const freeStyleThirdCheckbox = formStyle.querySelector(
		'.free-styling-inputs-checkbox-wrapper'
	);
	const freeStyleThirdInput = formStyle.querySelector(
		'.free-styling-inputs-content span:nth-of-type(2)'
	);
	const form_des = document.querySelector(
		'#free-styling-form .free-styling-form-text-container > .free-styling-form-description-text'
	);
	const fs_req = document.querySelector('#fs-requirement');
	if (
		service_advice &&
		our_stylist &&
		style_form &&
		freeStyleType &&
		formStyle &&
		freeStyleSubmit &&
		freeStyleConcern &&
		freeStyleThird &&
		freeStyleThirdCheckbox &&
		form_des &&
		fs_req &&
		freeStyleThirdInput
	) {
		formStyle.insertAdjacentElement('afterbegin', freeStyleType);
		freeStyleSubmit.insertAdjacentElement('beforebegin', freeStyleConcern);
		freeStyleThird.insertAdjacentElement('afterend', freeStyleThirdCheckbox);
		freeStyleThirdInput.innerHTML = fileUpload;
		our_stylist.insertAdjacentElement('beforebegin', style_form);
		our_stylist.insertAdjacentElement('afterend', service_advice);
		fs_req.placeholder = '';
		form_des.innerHTML =
			'Fill out your details and our talented stylists will be in touch with their expert recommendations - no strings attached!';
		clearInterval(placeInt);
	}
}, 10);

const adviceHeader = `<h3 class="advice-sub-header">Finished Customer Spaces</h3>`;
const adviceBeforeAfter = (text) =>
	`<span class="advice-before-after">${text}</span>`;
const adviceInt = setInterval(() => {
	const advice = document.querySelector(
		'.service-and-advice-container.container'
	);
	const after = [...advice.querySelectorAll('.service-and-advice-image-after')];
	const before = [
		...advice.querySelectorAll('.service-and-advice-image-before'),
	];
	if (
		advice &&
		after.length > 0 &&
		before.length > 0 &&
		!document.querySelector('.advice-before-after')
	) {
		advice.insertAdjacentHTML('beforebegin', adviceHeader);
		after.map((item) => {
			item.insertAdjacentHTML('beforeend', adviceBeforeAfter('After'));
		});
		before.map((item) => {
			item.insertAdjacentHTML('beforeend', adviceBeforeAfter('Before'));
		});
		clearInterval(adviceInt);
	}
}, 10);
