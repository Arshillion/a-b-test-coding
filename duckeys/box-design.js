const style = `
<style>
    .product__title + h2 {
        color: #FF437A!important;
        font-size: 18px;
        border-radius: 4px;
        background: #ececec;
        padding: 10px;
    }
    .kaching-bundles__bar-variants {
        flex-direction: row!important;
        flex-wrap: wrap;
        gap: 0 10px;
    }
    .kaching-bundles__bar-variant-names{
        width: 100%;
    }
    .kaching-bundles__bar-label{
        background-color: #FF437A!important;
        border-radius: 4px!important;
    }
    .kaching-bundles__bar:nth-of-type(2) .kaching-bundles__bar-most-popular__content{
        background-color: #3E72F5;
        --bar-most-popular-background-color:#1B4BC5;
    }
    .kaching-bundles__bar:nth-of-type(3) .kaching-bundles__bar-most-popular__content{
        background-color: #202487;
        --bar-most-popular-background-color:#0C0F63;
    }
    .new-dis-elm{
        display: flex;
        gap: 6px;
        align-items:center;
        margin-top: 10px;
    }
    .new-dis-elm svg{
        flex-shrink: 0;
    }
    .new-dis-elm span{
        color: #FF437A;
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
    }
    .new-dis-elm span strong{
        font-weight: 800;
    }
    .kaching-bundles .kaching-bundles__bar-variant-number{
        display: none!important;
    }
    .kaching-bundles__bar-variant-selects select{
        border-radius:4px!important;
        border: 1px solid #BCBCBC!important;
        box-shadow: none!important;
    }
</style>
`;

const new_elm_html = `
<div class="new-dis-elm">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0003 18.3334C5.39783 18.3334 1.66699 14.6025 1.66699 10C1.66699 5.39752 5.39783 1.66669 10.0003 1.66669C14.6028 1.66669 18.3337 5.39752 18.3337 10C18.3337 14.6025 14.6028 18.3334 10.0003 18.3334ZM10.0003 16.6667C11.7684 16.6667 13.4641 15.9643 14.7144 14.7141C15.9646 13.4638 16.667 11.7681 16.667 10C16.667 8.23191 15.9646 6.53622 14.7144 5.28597C13.4641 4.03573 11.7684 3.33335 10.0003 3.33335C8.23221 3.33335 6.53652 4.03573 5.28628 5.28597C4.03604 6.53622 3.33366 8.23191 3.33366 10C3.33366 11.7681 4.03604 13.4638 5.28628 14.7141C6.53652 15.9643 8.23221 16.6667 10.0003 16.6667ZM5.83366 10.8334H7.50032C7.50032 11.4964 7.76372 12.1323 8.23256 12.6011C8.7014 13.07 9.33728 13.3334 10.0003 13.3334C10.6634 13.3334 11.2993 13.07 11.7681 12.6011C12.2369 12.1323 12.5003 11.4964 12.5003 10.8334H14.167C14.167 11.9384 13.728 12.9982 12.9466 13.7796C12.1652 14.561 11.1054 15 10.0003 15C8.89526 15 7.83545 14.561 7.05405 13.7796C6.27264 12.9982 5.83366 11.9384 5.83366 10.8334ZM6.66699 9.16669C6.33547 9.16669 6.01753 9.03499 5.78311 8.80057C5.54869 8.56615 5.41699 8.24821 5.41699 7.91669C5.41699 7.58517 5.54869 7.26722 5.78311 7.0328C6.01753 6.79838 6.33547 6.66669 6.66699 6.66669C6.99851 6.66669 7.31645 6.79838 7.55087 7.0328C7.7853 7.26722 7.91699 7.58517 7.91699 7.91669C7.91699 8.24821 7.7853 8.56615 7.55087 8.80057C7.31645 9.03499 6.99851 9.16669 6.66699 9.16669ZM13.3337 9.16669C13.0021 9.16669 12.6842 9.03499 12.4498 8.80057C12.2154 8.56615 12.0837 8.24821 12.0837 7.91669C12.0837 7.58517 12.2154 7.26722 12.4498 7.0328C12.6842 6.79838 13.0021 6.66669 13.3337 6.66669C13.6652 6.66669 13.9831 6.79838 14.2175 7.0328C14.452 7.26722 14.5837 7.58517 14.5837 7.91669C14.5837 8.24821 14.452 8.56615 14.2175 8.80057C13.9831 9.03499 13.6652 9.16669 13.3337 9.16669Z" fill="#FF437A"/>
    </svg>
    <span>More then <strong>80% Customers</strong> choose this package</span>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'.kaching-bundles__bar:nth-of-type(3)  label'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-dis-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforeend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
