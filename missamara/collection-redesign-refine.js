const filterSvg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99967 5.83317H16.6663M9.99967 5.83317C9.99967 6.2752 9.82408 6.69912 9.51152 7.01168C9.19896 7.32424 8.77503 7.49984 8.33301 7.49984C7.89098 7.49984 7.46706 7.32424 7.1545 7.01168C6.84194 6.69912 6.66634 6.2752 6.66634 5.83317M9.99967 5.83317C9.99967 5.39114 9.82408 4.96722 9.51152 4.65466C9.19896 4.3421 8.77503 4.1665 8.33301 4.1665C7.89098 4.1665 7.46706 4.3421 7.1545 4.65466C6.84194 4.96722 6.66634 5.39114 6.66634 5.83317M3.33301 5.83317H6.66634M14.1663 14.1665H16.6663M14.1663 14.1665C14.1663 14.6085 13.9907 15.0325 13.6782 15.345C13.3656 15.6576 12.9417 15.8332 12.4997 15.8332C12.0576 15.8332 11.6337 15.6576 11.3212 15.345C11.0086 15.0325 10.833 14.6085 10.833 14.1665C10.833 13.7245 11.0086 13.3006 11.3212 12.988C11.6337 12.6754 12.0576 12.4998 12.4997 12.4998C12.9417 12.4998 13.3656 12.6754 13.6782 12.988C13.9907 13.3006 14.1663 13.7245 14.1663 14.1665ZM3.33301 14.1665H9.99967" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const style = `
<style>
    .sticky-elm {
        position: fixed;
        bottom: 10px;
        z-index: 9999;
        width: 50%;
        overflow: hidden;
        left: 26px;
        padding-bottom: 16px;
    }
    .sticky-elm .ss__slideout__button {
        margin: 0!important;
        box-shadow: 0px 6px 8px 0px #46464678;
        padding: 8px 0!important;
        width: 85%!important;
        max-width: 85%!important;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
    .ss__toolbar__column.ss__toolbar__dropdown.ss__toolbar__sort-by{
        width: 100%!important;
    }
    .ss__toolbar__column.ss__toolbar__dropdown.ss__toolbar__sort-by .ss__dropdown__button>.ss__flex__nowrap--center{
        width: 100%!important;
        justify-content: center;
    }
    @media (max-width: 767px) {
        #searchspring-content .ss__toolbar.ss__toolbar--top {
            margin-top: 0!important;
        }      
    }
</style>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.ss__slideout__button');
		const area = document.querySelector('.ss__content#bc-sf-filter-products');
		const head = document.querySelector('head');
		if (
			exist_elm &&
			head &&
			!document.querySelector('.sticky-elm .ss__slideout__button')
		) {
			if (document.querySelector('.sticky-elm')) {
				document.querySelector('.sticky-elm').remove();
			} else {
				head.insertAdjacentHTML('beforeend', style);
			}
			exist_elm.insertAdjacentHTML('afterbegin', filterSvg);
			const div = document.createElement('div');
			div.classList.add('sticky-elm');
			div.insertAdjacentElement('beforeend', exist_elm);
			area.insertAdjacentElement('beforeend', div);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
