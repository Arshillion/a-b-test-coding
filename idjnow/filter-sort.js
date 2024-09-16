const style = `
<style>
.inside-sort{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 15px 0;
    gap:6px;
}
.inside-sort label{
    display: block!important;
    color: #000!important;
}
.inside-sort .ss-dropdown-menu{
    color: #000!important;
}
.ss-toolbar-col.ss-sort-by.toolbar-sorter.sorter{
    margin: 0!important;
    gap: 10px!important;
}
.catalog-category-view .top-toolbar,.amtheme-filter-wrap.ng-scope,.column.main .top-toolbar .toolbar .modes{
    margin-top: 0!important;
}
.sort-title{
    border: none;
    cursor: pointer;
    font-size: 28px;
    font-weight: 400;
    // padding: 0 0 0 25px;
    position: relative;
    background: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0;
}

@media only screen and (max-width:450px){
    .inside-sort .ss-dropdown-menu.ss-sort-by-menu .ss-menu-label {
        max-width:100px;
    }
}
@media only screen and (max-width:400px){
    .inside-sort .ss-dropdown-menu.ss-sort-by-menu .ss-menu-label {
        max-width:80px;
    }
}
</style>
`;

const sort_title_elm = `<h4 class="sort-title">Sort</h4>`;

const interval = setInterval(() => {
	const filter = document.querySelector(
		'.amtheme-filter-button.ss-pointer.ng-scope.ng-isolate-scope strong'
	);
	const sort_elm = document.querySelector('#narrow-by-list');
	const show = document.querySelector(
		'.ss-toolbar-col.ss-per-page.field.limiter'
	);
	const sorter = document.querySelector(
		'.ss-toolbar-col.ss-sort-by.toolbar-sorter.sorter'
	);
	const head = document.querySelector('head');
	if (filter && head && !document.querySelector('.inside-sort')) {
		head.insertAdjacentHTML('beforeend', style);
		filter.innerHTML = 'Filter & Sort';
		const newDiv = document.createElement('div');
		newDiv.classList.add('inside-sort');
		newDiv.insertAdjacentElement('afterbegin', sorter);
		newDiv.insertAdjacentElement('afterbegin', show);
		sort_elm.insertAdjacentElement('afterbegin', newDiv);
		sort_elm.insertAdjacentHTML('afterbegin', sort_title_elm);
		clearInterval(interval);
	}
}, 10);
