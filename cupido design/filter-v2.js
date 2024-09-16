const style = `
<style>
    button.grid-view-btn[data-view="list"]{
        display:none;
    }
    .collection-filter__inner{
        padding: 8px 12px;
        border-radius: 6px;
    }
    .new-top-elm{
        display: flex;
        align-items: center;
        gap: 12px;
        border-radius: 8px;
        background: #EEEEEE;
        padding: 6px 12px;
    }
    .new-top-elm span{
        font-size: 12px;
        font-weight: 600;
    }
    .grid-item__content{
        box-shadow: 0px 4px 12px 0px #0000001F;
        border-radius: 4px;
    }
    .grid-item__content .grid-item__meta{
        margin: 12px 6px !important;
    }
    @media only screen and (max-width:767px){
        .collection-filter__inner{
            justify-content: space-between;
        }
        .collection-filter{
            margin: 0 0 12px 0;
        }
    }
</style>
`;

const new_elm_html = `
    <svg
    aria-hidden="true"
    focusable="false"
    role="presentation"
    class="new-filter-elm icon icon-filter"
    viewBox="0 0 64 64"
    >
        <path d="M48 42h10">.</path>
        <path d="M48 42a5 5 0 1 1-5-5 5 5 0 0 1 5 5Z"></path>
        <path d="M7 42h31">.</path>
        <path d="M16 22H6">.</path>
        <path d="M16 22a5 5 0 1 1 5 5 5 5 0 0 1-5-5Z"> </path>
        <path d="M57 22H26">.</path>
    </svg>
    Filter your search
`;

const new_top_elm_html = `
<div class="new-top-elm">
    <img src="https://i.ibb.co/7X6rNW7/FILTER.png">
    <span>You can easily find your desired art by filtering them </span>
</div>
`;

const interval = setInterval(() => {
	const exist_elm_count = document.querySelector(
		'.collection-filter__btn.text-link'
	);
	const filter = document.querySelector('.collection-filter');
	const head = document.querySelector('head');
	if (
		filter &&
		exist_elm_count &&
		head &&
		!document.querySelector('.new-filter-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		filter.insertAdjacentHTML('beforebegin', new_top_elm_html);
		exist_elm_count.innerHTML = new_elm_html;
		clearInterval(interval);
	}
}, 10);
