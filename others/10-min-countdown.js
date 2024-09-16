let deadline_ms = 10 * 60000;
let remaining_ms = 10 * 60000;

const countdown = () => {
	remaining_ms = remaining_ms < 1000 ? deadline_ms : remaining_ms;
	const time = new Date(remaining_ms);
	const sec = Math.floor(time / 1000);
	const min = Math.floor(sec / 60);
	const hrs = Math.floor(min / 60);
	const days = Math.floor(hrs / 24);
	remaining_ms -= 1000;
	return { days, hrs: hrs % 24, min: min % 60, sec: sec % 60 };
};

setInterval(() => {
	const { hrs, min, sec } = countdown();
	console.log('hrs,min,sec', hrs, min, sec);
}, 1000);
