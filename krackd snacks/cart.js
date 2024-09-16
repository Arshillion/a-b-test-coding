const style = `
<style>
    .cart__ctas{
        flex-direction: column-reverse;
    }
    .cart__ctas a{
        background: none!important;
        text-decoration: underline;
        height:20px;
        margin-top:0;
    }
    .cart__ctas a::after{
        box-shadow: none;
    }
    .cart-drawer__footer{
        padding: 12px!important;
        border-radius:4px;
        background: #F6F6F6;
        display: flex;
        flex-direction: column;
    }
    .cart-drawer__footer * {
        margin: 0;
    }
    #ap-widget-drawer,#Details-CartDrawer {
        display: none!important;
    }
    .drawer__footer{
        border-top: none!important;
    }
    #CartDrawer .drawer__inner{
        background: #fff!important;
    }
    .cart-item__details .product-option {
        display: none!important;
    }
    .cart-item__details .cart-item__name {
        margin-bottom: 6px;
    }
    .cart-item__details > s {
        font-size: 12px!important;
    }
    .cart-item__details > div:not(.product-option) {
        font-size: 10px!important;
        line-height: 10px!important;
        font-weight: 700!important;
        color: #FF4387!important;
        border: 1px solid #FF3981!important;
    }
    .cart-drawer .tax-note{
        font-size: 12px!important;
        text-align: left!important;
        margin: 10px 0!important;
    }
</style>
`;

const interval = setInterval(() => {
	const head = document.querySelector('head');
	if (head) {
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(interval);
	}
}, 10);
