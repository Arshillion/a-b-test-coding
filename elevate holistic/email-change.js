const mail_desk_html = `
    <a
	class="elementor-button elementor-button-link elementor-size-sm"
	href="mailto:support@elevate-holistics.com">
        <span class="elementor-button-content-wrapper">
            <span class="elementor-button-icon elementor-align-icon-left">
                <i
                    aria-hidden="true"
                    class="fas fa-envelope"
                >
                </i>
            </span>
            <span class="elementor-button-text">support@elevate-holistics.com</span>
        </span>
    </a>
    `;
const mail_mobile_html = `
    <a
	class="elementor-button elementor-button-link elementor-size-sm"
	href="mailto:support@elevate-holistics.com">
        <span class="elementor-button-content-wrapper">
            <span class="elementor-button-icon elementor-align-icon-left">
                <i
                    aria-hidden="true"
                    class="fas fa-envelope"
                ></i>
            </span>
            <span class="elementor-button-text"></span>
        </span>
    </a>
    `;
const mail_interval = setInterval(() => {
	const desk_wrapper = document.querySelector(
		'.elementor-element-9a51f87 .elementor-button-wrapper'
	);
	const mobile_wrapper = document.querySelector(
		'.elementor-element-7ee1700 .elementor-button-wrapper'
	);
	if (mobile_wrapper && desk_wrapper && !document.querySelector('new-links')) {
		desk_wrapper.classList.add('new-links');
		mobile_wrapper.classList.add('new-links');
		desk_wrapper.insertAdjacentHTML('afterbegin', mail_desk_html);
		mobile_wrapper.insertAdjacentHTML('afterbegin', mail_mobile_html);
		clearInterval(mail_interval);
	}
}, 10);
