const style = `
<style>
  .special-offers{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:20px;
    margin-bottom:40px;
  }
  .special-offer{
    border: 1px solid rgba(148, 148, 148, 0.75);
    background: #EDEDED;
    padding: 20px;
    display:flex;
    align-items:center;
    gap: 20px;
    text-decoration:none;
  }
  .special-offer:hover {
    text-decoration: none;
  }
  .special-offer img{
    width: 180px;
    height: 180px;
  }
  .special-offer h3{
    color: #000;
    font-family: Helvetica;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .special-offer button{
    background: #0997E7;
    border-radius: 4px;
    padding: 10px;
    color: #FCFCFC;
    text-align: center;
    font-family: Helvetica;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    height:auto;
  }
  @media only screen and (max-width:1200px) and (min-width:1025px){
    .special-offer img{
      width: 120px;
      height: 120px;
    }
  }
  @media only screen and (max-width:1024px){
   .special-offers{
      grid-template-columns:repeat(1,1fr);
    }
  }
  @media only screen and (max-width:450px){
   .special-offer img{
      width: 120px;
      height: 120px;
    }
      .special-offer h3{
    font-size: 18px;
  }
  .special-offer button{
    padding: 8px;
    font-size: 10px;
  }

  }
</style>
`;

const offer_html = `
<div class="page-title">
    <h2>Special Offers</h2>
</div>
<div class="special-offers">
    <a href="https://www.uaudio.com/uad-plugins/custom-bundles.html" class="special-offer">
      <img src="https://jafpodcasts.s3.us-east-2.amazonaws.com/custom-plus.jpg">
      <div class="">
        <h3>Get a Custom 2 Bundle for $299</h3>
        <button>Build Your Bundle</button>
      </div>
    </a>
    <a href="https://www.uaudio.com/uad-plugins.html?price=29%2C50" class="special-offer">
      <img src="https://jafpodcasts.s3.us-east-2.amazonaws.com/under-50.jpg">
      <div class="">
        <h3>50+ Plug-Ins Under $50</h3>
        <button>Shop $49 Deals</button>
      </div>
    </a>
    <a href="https://www.uaudio.com/uad-plugins/plug-in-bundles/uad-essentials-edition.html" class="special-offer">
      <img src="https://jafpodcasts.s3.us-east-2.amazonaws.com/Essentials-49.jpg">
      <div class="">
        <h3>UAD Essentials for Only $49</h3>
        <button>Add to Cart</button>
      </div>
    </a>
    <a href="https://www.uaudio.com/uad-plugins.html?price=29%2C100" class="special-offer">
      <img src="https://jafpodcasts.s3.us-east-2.amazonaws.com/under-100.jpg">
      <div class="">
        <h3>100+ Plug-Ins Under $100</h3>
        <button>Shop Now</button>
      </div>
    </a>
</div>
`;

setInterval(() => {
	const saved_products = document.querySelector('.saved-products');
	const head = document.querySelector('head');
	if (saved_products && head && !document.querySelector('.special-offers')) {
		head.insertAdjacentHTML('beforeend', style);
		saved_products.insertAdjacentHTML('beforebegin', offer_html);
	}
}, 10);
