const img_link =
	'https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-launch-cal.png';
const url = 'https://www.carlsgolfland.com/launch_calendar';

const feature_calendar = `
<li>
  <a class='cal-link-li' href=${url}> 
    <span class='cal-ico-rel'>
      <img src=${img_link} alt='calendar icon'>
      <small class='cal-ico'></small>
    </span> 
    Launch Calendar
  </a>
</li>
`;

const feature_calendar_mobile = `
<li class="level0 nav-11 category-item last level-top gift-cards ui-menu-item">
  <a class='cal-link-li' href=${url}> 
    <span class='cal-ico-rel'>
      <img src=${img_link} alt='calendar icon'>
      <small class='cal-ico'></small>
    </span> 
    Launch Calendar
  </a>
</li>
`;

const feature_int = setInterval(() => {
	const header_panel_right_links = document.querySelector(
		'.header-panel-right .header.links'
	);
	const header_panel_right_links_mobile = document.querySelector('ul#ui-id-2');
	if (
		header_panel_right_links &&
		header_panel_right_links_mobile &&
		!document.querySelector('.cal-link-li')
	) {
		header_panel_right_links.insertAdjacentHTML('afterbegin', feature_calendar);
		header_panel_right_links_mobile.insertAdjacentHTML(
			'beforeend',
			feature_calendar_mobile
		);
		clearInterval(feature_int);
	}
}, 10);

{
	/* <style>
.header-panel-right > .header.links li:nth-of-type(3){
  display:none;
}
.cal-link-li{
  display:flex!important;
  gap:4px;
}
.cal-ico-rel{
  position:relative;
  display:block;
  height:20px;
  width:20px;
}
.cal-ico{
  position:absolute;
  background:red;
  width:10px;
  height:10px;
  top:-2px;
  right:-2px;
  border-radius:50%;
}
</style> */
}
