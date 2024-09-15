/* CUSTOM CODE */
const usp_html = `
<style>
	.usp-area .page-width {
		max-width: 1520px;
	}

	.new-usps {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}

	.new-usp {
		display: flex;
		align-items: center;
	}

	.new-usp p {
		font-weight: 400;
		font-size: 12px;
		color: #000000;
		margin: 0;
		padding: 0;
		margin-left: 10px;
	}

	.new-usp .svg-wrapper {
		width: 36px;
		display: grid;
		place-items: center;
	}

	.new-usp .svg-wrapper svg {
		width: 100%;
	}

	.new-usp-area {
		border-radius: 6px;
		border: 1px solid #bfd6ee;
		background: #fafcff;
		padding: 20px;
		margin-top: 40px;
	}

	.new-usp-area h3 {
		background: #fff;
		border: 1px solid #bfd6ee;
		border-radius: 20px;
		font-weight: 700;
		font-size: 12px;
		line-height: 18px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #000000;
		padding: 10px 30px;
		width: max-content;
		margin: -40px auto 10px;
	}

	@media only screen and (max-width: 1200px) {
		.new-usp p {
			font-size: 10px;
			margin-left: 6px;
		}

		.new-usp .svg-wrapper {
			width: 24px;
			display: grid;
			place-items: center;
		}
	}

	@media only screen and (max-width: 667px) {
		.new-usps {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

<div class="usp-area">
	<div class="page-width">
		<div class="new-usp-area">
			<h3>Why Aleeph is Best?</h3>
			<div class="new-usps">
				<div class="new-usp">
					<div class="svg-wrapper">
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16.356 1H12.3107"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M14.3333 1V4.46667"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M6.57069 3.37732L5.14136 4.80799L3.71069 6.23732"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M5.14136 4.80801L7.59202 7.25868"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M1.33331 11.9773V16.0227"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M1.33331 14H4.79998"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M3.71069 21.7627L5.14136 23.192L6.57069 24.6227"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M5.14136 23.192L7.59202 20.7413"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M24.956 6.23732L23.5253 4.80799L22.096 3.37732"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M23.5253 4.80801L21.0746 7.25868"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M10 14C10.5304 14 11.0391 13.7893 11.4142 13.4142C11.7893 13.0391 12 12.5304 12 12C12 11.4696 11.7893 10.9609 11.4142 10.5858C11.0391 10.2107 10.5304 10 10 10C9.46957 10 8.96086 10.2107 8.58579 10.5858C8.21071 10.9609 8 11.4696 8 12C8 12.5304 8.21071 13.0391 8.58579 13.4142C8.96086 13.7893 9.46957 14 10 14Z"
								fill="#044D9B"
							></path>
							<path
								d="M23.384 11C22.8816 9.48506 22.0069 8.1205 20.8401 7.03146C19.6733 5.94242 18.2517 5.16376 16.7058 4.76689C15.1598 4.37002 13.539 4.36764 11.9919 4.75997C10.4448 5.1523 9.02095 5.92678 7.85095 7.01238C6.68095 8.09799 5.80223 9.45998 5.29539 10.9734C4.78855 12.4869 4.6698 14.1034 4.95004 15.6747C5.23028 17.2459 5.90053 18.7217 6.89933 19.9666C7.89813 21.2116 9.19352 22.1858 10.6667 22.8"
								stroke="#044D9B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M31 18.6667C31.005 21.3058 30.1158 23.8676 28.4792 25.9285C26.8427 27.9893 24.5569 29.4256 22 30C19.4431 29.4256 17.1573 27.9893 15.5208 25.9285C13.8842 23.8676 12.995 21.3058 13 18.6667V15.2667C13 14.6655 13.2371 14.089 13.659 13.6639C14.081 13.2388 14.6533 13 15.25 13H28.75C29.3467 13 29.919 13.2388 30.341 13.6639C30.7629 14.089 31 14.6655 31 15.2667V18.6667Z"
								fill="#044D9B"
							></path>
							<path
								d="M22 17V25"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M18 21H26"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</div>
					<p>Allergy-Friendly Options</p>
				</div>
				<div class="new-usp">
					<div class="svg-wrapper">
						<svg
							width="29"
							height="32"
							viewBox="0 0 29 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M9.89917 0H18.8524C19.5777 0 20.1657 0.587993 20.1657 1.31332V2.18664C20.1657 2.91197 19.5777 3.49996 18.8524 3.49996H9.89917C9.17384 3.49996 8.58585 2.91197 8.58585 2.18664V1.31332C8.58585 0.587993 9.17384 0 9.89917 0ZM22.179 19.7998L26.8457 24.4664C27.4634 25.0844 27.8838 25.8719 28.0535 26.729C28.2233 27.5862 28.1347 28.4744 27.7992 29.2812C27.4636 30.088 26.8961 30.7771 26.1685 31.261C25.441 31.745 24.5862 32.002 23.7124 31.9997H5.04589C4.17072 32.0034 3.31421 31.7468 2.58522 31.2625C1.85624 30.7782 1.28769 30.0882 0.951841 29.28C0.615995 28.4718 0.528017 27.582 0.69909 26.7237C0.870162 25.8654 1.29256 25.0774 1.9126 24.4597L6.57921 19.7931C8.87806 17.4945 10.1705 14.3774 10.1725 11.1266V3.49997H18.5857V11.1332C18.5878 14.3841 19.8802 17.5012 22.179 19.7998Z"
								fill="#044D9B"
							></path>
							<circle
								cx="12.5"
								cy="19.5"
								r="1.5"
								fill="white"
							></circle>
							<circle
								cx="14.5"
								cy="8.5"
								r="1.5"
								fill="white"
							></circle>
							<circle
								cx="15.5"
								cy="15.5"
								r="2.5"
								fill="white"
							></circle>
						</svg>
					</div>
					<p>Nutritionist-Approved Formulas</p>
				</div>
				<div class="new-usp">
					<div class="svg-wrapper">
						<svg
							width="30"
							height="32"
							viewBox="0 0 30 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M28.7245 4.14578C20.5218 5.33333 18.8952 3.25867 15.2063 0C11.5174 3.25867 9.89071 5.33333 1.68804 4.14578C-2.68352 25.92 15.2063 32 15.2063 32C15.2063 32 33.096 25.92 28.7245 4.14578Z"
								fill="#044D9B"
							></path>
							<path
								d="M15.5 19.6081L20.1369 22L19.25 16.9328L23 13.3468L17.8175 12.609L15.5 8L13.1825 12.609L8 13.3468L11.75 16.9347L10.865 22L15.5 19.6081Z"
								fill="white"
							></path>
						</svg>
					</div>
					<p>Quality Guarantee Confidence</p>
				</div>
				<div class="new-usp">
					<div class="svg-wrapper">
						<svg
							width="33"
							height="32"
							viewBox="0 0 33 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_29_431)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M16.9825 7.11111H3.64918C2.70619 7.11111 1.80182 7.48572 1.13503 8.15251C0.468229 8.81931 0.0936279 9.72368 0.0936279 10.6667V21.3333V22.2222V24C0.0936279 24.943 0.468231 25.8474 1.13503 26.5142C1.80182 27.1809 2.70619 27.5555 3.64918 27.5555H28.5381C29.4811 27.5555 30.3854 27.1809 31.0522 26.5142C31.719 25.8474 32.0936 24.943 32.0936 24V21.3333C32.0936 21.0582 32.0617 20.7863 32 20.5227V17.7345L29.9474 12.6923C29.9474 12.6923 29.2632 11 27.1106 11H20.5381V10.6667C20.5381 9.72368 20.1635 8.81931 19.4967 8.15251C18.8299 7.48572 17.9255 7.11111 16.9825 7.11111Z"
									fill="#044D9B"
								></path>
								<path
									d="M20 13.6923L20.5153 13H26.2389C27.8947 13 28.4211 14.3846 28.4211 14.3846L30 18.5101V22H20V13.6923Z"
									fill="white"
								></path>
								<path
									d="M24.0936 31.1111C22.13 31.1111 20.5381 29.5192 20.5381 27.5556C20.5381 25.5919 22.13 24 24.0936 24C26.0573 24 27.6492 25.5919 27.6492 27.5556C27.6492 29.5192 26.0573 31.1111 24.0936 31.1111Z"
									fill="#044D9B"
								></path>
								<path
									d="M24.0936 29.3333C23.1118 29.3333 22.3158 28.5374 22.3158 27.5555C22.3158 26.5737 23.1118 25.7778 24.0936 25.7778C25.0755 25.7778 25.8714 26.5737 25.8714 27.5555C25.8714 28.5374 25.0755 29.3333 24.0936 29.3333Z"
									fill="white"
								></path>
								<path
									d="M8.09363 31.1111C6.12995 31.1111 4.53807 29.5192 4.53807 27.5556C4.53807 25.5919 6.12995 24 8.09363 24C10.0573 24 11.6492 25.5919 11.6492 27.5556C11.6492 29.5192 10.0573 31.1111 8.09363 31.1111Z"
									fill="#044D9B"
								></path>
								<path
									d="M8.09362 29.3333C7.11178 29.3333 6.31584 28.5374 6.31584 27.5555C6.31584 26.5737 7.11178 25.7778 8.09362 25.7778C9.07546 25.7778 9.8714 26.5737 9.8714 27.5555C9.8714 28.5374 9.07546 29.3333 8.09362 29.3333Z"
									fill="white"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_29_431">
									<rect
										width="32"
										height="32"
										fill="white"
										transform="matrix(-1 0 0 1 32.0936 0)"
									></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
					<p>Fur-Friendly Fast Delivery</p>
				</div>
				<div class="new-usp">
					<div class="svg-wrapper">
						<svg
							width="31"
							height="30"
							viewBox="0 0 31 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_29_426)">
								<path
									d="M15.7603 0C7.48877 0 0.760254 6.72851 0.760254 15C0.760254 23.2715 7.48877 30 15.7603 30C24.0317 30 30.7603 23.2715 30.7603 15C30.7603 6.72851 24.0317 0 15.7603 0Z"
									fill="#044D9B"
								></path>
								<path
									d="M8 10.6154C8 9.72356 8.76786 9 9.71429 9C10.6607 9 11.4286 9.72356 11.4286 10.6154C11.4286 9.72356 12.1964 9 13.1429 9C14.0893 9 14.8571 9.72356 14.8571 10.6154C14.8571 12.3317 11.4286 14.3846 11.4286 14.3846C11.4286 14.3846 9.21429 12.9838 8.35714 11.5913C8.19643 11.3936 8.08482 11.1749 8.03571 10.9183C8.00893 10.8131 8 10.7163 8 10.6154Z"
									fill="white"
								></path>
								<path
									d="M17.1429 10.6154C17.1429 9.72356 17.9107 9 18.8571 9C19.8036 9 20.5714 9.72356 20.5714 10.6154C20.5714 9.72356 21.3393 9 22.2857 9C23.2321 9 24 9.72356 24 10.6154C24 10.9267 23.8616 11.238 23.6786 11.5577C22.8438 12.9964 20.5714 14.3846 20.5714 14.3846C20.5714 14.3846 18.3571 12.9838 17.5 11.5913C17.3393 11.3936 17.2277 11.1749 17.1786 10.9183C17.1518 10.8131 17.1429 10.7163 17.1429 10.6154Z"
									fill="white"
								></path>
								<path
									d="M8.10714 18.6923L10.0714 17.6154C11.2589 19.5463 13.4554 20.8462 16 20.8462C18.5446 20.8462 20.7411 19.5463 21.9286 17.6154L23.8929 18.6923C22.3125 21.2626 19.375 23 16 23C12.625 23 9.6875 21.2626 8.10714 18.6923Z"
									fill="white"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_29_426">
									<rect
										width="30"
										height="30"
										fill="white"
										transform="translate(0.760254)"
									></rect>
								</clipPath>
							</defs>
						</svg>
					</div>
					<p>5K Happy Customers</p>
				</div>
			</div>
		</div>
	</div>
</div>
`;
const usp_int = setInterval(() => {
	const product_form = document.querySelector(
		'#shopify-section-template--18034716573977__f2f90c9c-8d66-43e3-859a-74b0f980a026'
	);
	if (product_form && !document.querySelector('.usp-area')) {
		product_form.insertAdjacentHTML('beforebegin', usp_html);
		clearInterval(usp_int);
	}
}, 10);
