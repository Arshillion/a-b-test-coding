const style = `
<style>
.nav-sections .nav-sections-items .header.links>.parent{
    background: #fff;
}
.nav-sections .nav-sections-items .header.links>.parent .submenu{
    padding: 0 40px;
}
.nav-sections .nav-sections-items .header.links>.parent .submenu li a{
    padding: 12px 6px;
}
.nav-sections .nav-sections-items .header.links>.parent .submenu li:not(:last-child) a{
    border-bottom: 1px solid #d5d5d5;
}
.nav-sections .nav-sections-items .header.links>.parent>a::after{
    right: 16px;
}
.nav-sections .nav-sections-items .header.links>.parent.open>a::before{
    margin-left: -15px;
    margin-right: 5px;
}
.nav-sections .nav-sections-items .header.links>.parent>a::after,.nav-sections .nav-sections-items .navigation>ul>li>.subcat-toggle::before{
    content:'>';
    background: none!important;
    border: none!important;
    color: #000!important;
    font-size: 20px!important;
    line-height: 20px!important;
    font-weight: 700!important;
    height: auto!important;
    width: auto!important;
}
.nav-sections .nav-sections-items .header.links>.parent.open>a::after{
    content:'';
}
.nav-sections .nav-sections-items .header.links>.parent.open>a::before{
    content:'<';
    background: none!important;
    border: none!important;
    color: #000!important;
    font-size: 20px!important;
    line-height: 20px!important;
    font-weight: 700!important;
    height: auto!important;
    width: auto!important;
}
.nav-sections .nav-sections-items .navigation>ul>li.open>.subcat-toggle{
    left: 0;
    right: unset;
}
.nav-sections .nav-sections-items .navigation>ul>li.open>.subcat-toggle::before{
    content:'<';
}
.nav-sections .nav-sections-items .header.links>.parent.open>a,.nav-sections .nav-sections-items .navigation>ul>li.open>a{
    padding: 10px 35px;
}
.nav-sections .nav-sections-items .navigation>ul>li>.submenu>li>a{
    padding: 12px 6px;
}
.nav-sections .nav-sections-items .navigation>ul>li>.submenu>li:not(:last-child)>a{
    border-bottom: 1px solid #d5d5d5;
}
.nav-sections .nav-sections-items .navigation>ul>li.open>.submenu{
    padding: 0 40px;
}
.nav-sections .nav-sections-items .navigation>ul>li>.subcat-toggle{
    height: 42px;
}
</style>
`;

const interval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		const nav = document.querySelector('.sections.nav-sections');
		if (nav && head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
