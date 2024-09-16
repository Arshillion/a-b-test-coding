/* CUSTOM CODE */
const style = `
<style>
	.header-clock {
		background: #0f0f0f;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
		width: 100%;
	}
	.header-clock h2 {
		color: #fff;
		font-family: Oswald;
		font-size: 32px;
		line-height: 32px;
		font-style: normal;
		font-weight: 700;
		margin: 0;
		letter-spacing: 1px;
	}
	.header-clock .clock-timer {
		display: inline-flex;
		align-items: center;
		gap: 12px;
	}
	.header-clock .clock-area {
		border-radius: 6px;
		background: #03a196;
		display: flex;
		padding: 8px 12px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;
	}
	.header-clock .clock-area span {
		color: #fff;
		font-family: Roboto;
		font-size: 24px;
		line-height: 24px;
		font-style: normal;
		font-weight: 900;
	}
	.header-clock .clock-area small {
		color: #fbfbfb;
		font-family: Roboto;
		font-size: 10px;
		line-height: 10px;
		font-style: normal;
		font-weight: 500;
	}
	.header-clock:nth-of-type(2) {
		display: none;
	}

	@media only screen and (max-width: 798px) {
		.header-clock:nth-of-type(1) {
			display: none;
		}
		.header-clock:nth-of-type(2) {
			display: flex;
		}
	}
	@media only screen and (max-width: 700px) {
		.header-clock {
			gap: 20px;
		}
		.header-clock h2 {
			font-size: 16px;
			line-height: 16px;
		}
		.header-clock .clock-area {
			padding: 4px 8px;
			gap: 2px;
		}
		.header-clock .clock-area span {
			font-size: 12px;
			line-height: 12px;
		}
		.header-clock .clock-area small {
			font-size: 8px;
			line-height: 8px;
		}
	}
	@media only screen and (max-width: 420px) {
		.header-clock {
			gap: 10px;
		}
		.header-clock h2 {
			font-size: 14px;
			line-height: 14px;
		}
		.header-clock .clock-timer {
			gap: 6px;
		}
	}
</style>
`;
const clock_html = `
<div class="header-clock">
	<h2>CYBER WEEK SALE ENDS IN</h2>
	<div class="clock-timer">
		<div class="clock-area days">
			<span>00</span>
			<small>DAYS</small>
		</div>
		<div class="clock-area hrs">
			<span>00</span>
			<small>HRS</small>
		</div>
		<div class="clock-area min">
			<span>00</span>
			<small>MIN</small>
		</div>
		<div class="clock-area sec">
			<span>00</span>
			<small>SEC</small>
		</div>
	</div>
</div>
`;

const toTwoDigits = (number) => {
	return number.toString().padStart(2, '0');
};

const addDaysUntilPositiveMilliseconds = (date, add_day) => {
	let daysToAdd = 0;
	let milliseconds = date.getTime() - new Date();

	while (milliseconds < 0) {
		daysToAdd += add_day;
		milliseconds += 86400000 * add_day;
	}

	return new Date(date.getTime() + daysToAdd * 86400000);
};

const header_clock_int = setInterval(() => {
	const header_top = document.querySelector('.header .top-bar');
	const header = document.querySelector('#header');
	const head = document.querySelector('head');
	if (
		header &&
		header_top &&
		head &&
		!document.querySelector('.header-clock')
	) {
		head.insertAdjacentHTML('beforeend', style);
		header_top.insertAdjacentHTML('beforebegin', clock_html);
		header.insertAdjacentHTML('beforebegin', clock_html);
		clearInterval(header_clock_int);
	}
}, 10);

const getTimeDiff = () => {
	const expire_date = new Date('2023-11-30');
	const today = new Date();
	let milliseconds;
	if (expire_date - today > 0) {
		milliseconds = expire_date - today;
	} else {
		milliseconds = addDaysUntilPositiveMilliseconds(expire_date, 3) - today;
	}
	const sec = Math.floor(milliseconds / 1000);
	const min = Math.floor(sec / 60);
	const hrs = Math.floor(min / 60);
	const days = Math.floor(hrs / 24);
	return { days, hrs: hrs % 24, min: min % 60, sec: sec % 60 };
};

const setTime = (clock) => {
	const day_elm = clock.querySelector('.days span');
	const hour_elm = clock.querySelector('.hrs span');
	const min_elm = clock.querySelector('.min span');
	const sec_elm = clock.querySelector('.sec span');
	const { days, hrs, min, sec } = getTimeDiff();
	day_elm.innerHTML = toTwoDigits(days);
	hour_elm.innerHTML = toTwoDigits(hrs);
	min_elm.innerHTML = toTwoDigits(min);
	sec_elm.innerHTML = toTwoDigits(sec);
};

const timer_int = setInterval(() => {
	const clock_areas = [...document.querySelectorAll('.header-clock')];
	if (clock_areas.length === 2) {
		clock_areas.map((clock_area) => {
			setInterval(() => setTime(clock_area), 1000);
		});
		clearInterval(timer_int);
	}
}, 10);

const extraCheckMin = (min) => {
	if (60 >= min && min > 50) return min - 50;
	if (50 >= min && min > 40) return min - 40;
	if (40 >= min && min > 30) return min - 30;
	if (30 >= min && min > 20) return min - 20;
	if (20 >= min && min > 10) return min - 10;
	return min;
};
