/* CUSTOM CODE */
var myHtml = `
        <style>
        @media only screen and (min-width:1240px){
            .lg-none{
                display: none;
            }
        }
        </style>
		<div class="slick-slide slick-cloned  lg-none"></div>
        <div class="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false"
            style="width: 240px;">
            <div>
                <div class="shop-need-block" style="width: 100%; display: inline-block;">
                    <div class="shop-need-icon-wrapper">
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/12ec2b1d5a89b4924bd048bc04303cfc_group17.svg" alt="">
                    </div>
                    <h3 class="shop-need-title">
                        
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/3c5de21a69726a61c935413d3dbd4a40_naturalchewablepetsupplementsfordogsandcatspethonesty11.png" alt="">
                    </h3>
                    <div class="deep-cta-wrapper">
                        <a class="cta-link deep-cta deep-cta-black dau-bg" href="/collections/dog-digestion-and-urinary"
                            tabindex="0">SHOP DIGESTION</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 240px;">
            <div>
                <div class="shop-need-block" style="width: 100%; display: inline-block;">
                    <div class="shop-need-icon-wrapper">
                       <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/e977105844866bb1e5b19f1612224ff6_group18.svg" alt="">
                    </div>
                    <h3 class="shop-need-title">
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/2e337f24aae3ac85f6d65fb2fff70cb9_21.png" alt="">
                    </h3>
                  
                    <div class="deep-cta-wrapper">
                        <a class="cta-link deep-cta deep-cta-black haj-bg" href="/collections/dog-hip-and-joint-health"
                            tabindex="0">SHOP MOBILITY</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 240px;">
            <div>
                <div class="shop-need-block" style="width: 100%; display: inline-block;">
                    <div class="shop-need-icon-wrapper">
                      
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/6859ad01453eafc09659c2c09227f5e0_group19.svg" alt="">
                    </div>
                    <h3 class="shop-need-title">
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/58f64b62457e81ecab07498e4f326637_3.png" alt="">
                    </h3>
             
                    <div class="deep-cta-wrapper">
                        <a class="cta-link deep-cta deep-cta-black aas-bg" href="/collections/dog-allergy-and-skin"
                            tabindex="0">SHOP ALLERGY</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 240px;">
            <div>
                <div class="shop-need-block" style="width: 100%; display: inline-block;">
                    <div class="shop-need-icon-wrapper">
                       
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/e2675501bff8c4b3a0169df598420e2a_group20.svg" alt="">
                    </div>
                    <h3 class="shop-need-title">
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/ecd8b17fccf3a688ac294c16041e25e6_4.png" alt="">
                    </h3>
                  
                    <div class="deep-cta-wrapper">
                        <a class="cta-link deep-cta deep-cta-black mv-bg" href="/collections/dog-multivitamins"
                            tabindex="0">SHOP MULTIVITAMIN</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slick-slide slick-active" data-slick-index="5" aria-hidden="false" style="width: 240px;">
            <div>
                <div class="shop-need-block" style="width: 100%; display: inline-block;">
                    <div class="shop-need-icon-wrapper">
                      
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/ce66b01be7e59b4c5978a4571be02a47_group21.svg" alt="">
                    </div>
                    <h3 class="shop-need-title">
                        <img src="https://useruploads.visualwebsiteoptimizer.com/useruploads/541020/images/67969549402d5c948c7a6096281f7b14_5.png" alt="">
                    </h3>
                   
                    <div class="deep-cta-wrapper">
                        <a class="cta-link deep-cta deep-cta-black aac-bg" href="/collections/dog-calming"
                            tabindex="0">SHOP CALMING</a>
                    </div>
                </div>
            </div>
        </div>
`;
const interval = setInterval(() => {
	const existing_html = document.querySelector(
		'#shopify-section-f4e1370c-c2a7-40f0-9f85-78654b169044 > section > div.shop-need-inner.inner-restraints.slick-initialized.slick-slider > div > div'
	);
	if (existing_html) {
		existing_html.innerHTML = myHtml;
		clearInterval(interval);
	}
}, 10);
