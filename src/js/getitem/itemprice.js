function getItemPrice(website) {
    var price;
    try {
        if (/amazon/.exec(website)) {
            if($('.selected .offer-price')[0]){
                if($('.selected #buyNewSection')){
                    price = $('#buyNewSection .offer-price').text();
                }
                else{
                    price = $('.selected .offer-price').text();
                }
            }
            else if($('#price .buyingPrice')[0]){
                if($('#price #newPrice .buyingPrice:not(:empty)')[0]){
                    price1 = $('#price #newPrice .buyingPrice').text();
                    price2 = $('#price #newPrice .buyingPrice').next().text();
                    price = '$' + price1 + '.' + price2;
                }
                else{
                    price1 = $('#price #usedPrice .buyingPrice').text();
                    price2 = $('#price #usedPrice .buyingPrice').next().text();
                    price = '$' + price1 + '.' + price2;
                }
            }
            else if($('#priceblock_ourprice')[0]){
                if($('#priceblock_ourprice .buyingPrice')[0] && $('#priceblock_ourprice .priceToPayPadding')[0]){
                    price1 = $('#priceblock_ourprice .buyingPrice').text();
                    price2 = $('#priceblock_ourprice .priceToPayPadding').text();
                    price = "$" + price1 + "." + price2;
                }
                else{
                    price = $('#priceblock_ourprice').text();
                }
            }
            else if($('#buyNewSection')[0]){
                price = $('#buyNewSection .offer-price').text();
            }
            else if($('#unifiedPrice_feature_div .a-text-strike')[0]){
                if($('#priceblock_dealprice')[0]){
                    price = $('#price #priceblock_dealprice').text();
                }
                else{
                    price = $('#price #priceblock_saleprice').text();
                }
            }
            else if($('#mediaTab_content_landing')[0]){
                price = $('#mediaTab_content_landing .header-price:not(#rentPrice)').text();
            }
            else{
                price = $('#usedBuySection .offer-price').text();
            }
        }
        else if (/ebay/.exec(website)) {
            if ($('#prcIsum')[0]) {
                price = "$" + $('#prcIsum').attr('content');
            } 
            else if ($('#prcIsum_bidPrice')[0]) {
                price = "$" + $('#prcIsum_bidPrice').attr('content');
            }
            else {
                price = document.getElementById("mm-saleDscPrc").textContent;
            }

        }
        else if (/walmart/.exec(website)) {
            price = $('.Price-group').attr('title');

        } 
        else if (/bestbuy/.exec(website)) {
            price = "$" + $('.price-block').attr('data-customer-price');

        }
        else if (/belk/.exec(website)) {
            price = '$' + $('#product-content span[itemprop="price"]').text();
        } 
        else if (/etsy/.exec(website)) {
            price = $('meta[property="etsymarketplace:price"]').attr('content');

        } 
        else if (/target/.exec(website)) {
            price = $('#stickySidebar .price .h-text-lowercase').text();

        } 
        else if (/ikea/.exec(website)) {
            price = $('#price1').text();
            if (!price) {
                price = getMetaContent("name", "price");
            }

        } 
        else if (/homedepot/.exec(website)) {
            price = "$" + $('#ajaxPrice').attr('content');
        } 
        else if (/groupon/.exec(website)) {
            var parent = document.getElementById("purchase-cluster");
            var inputs = parent.getElementsByTagName("input");
            var tmp = 0;
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].checked) {
                    tmp = inputs[i].getAttribute("data-formatted-price");
                }
            }
            if (!tmp) {
                price = getMetaContent("itemprop", "priceCurrency") + " " + getMetaContent("itemprop", "lowprice");
            } else {
                price = tmp;
            }

        }
        else if (/hm/.exec(website)) {
            price = $('#text-price span:first-of-type').text();
        } 
        else if (/newegg/.exec(website)) {
            price = "$" + $('.price-main-product .price-current strong').text() + $('.price-main-product .price-current sup').text();

        } 
        else if (/overstock/.exec(website)) {
            price = "$" + $('.monetary-price-value').attr('content');

        } 
        else if (/woot/.exec(website)) {
            price = $('.price-exact .price').text();
        } 
        else if (/jet/.exec(website)) {
            var parents = getElementsByProperty(document, "div", "class", "prices")[0].children;
            for (var i = 0; i < parents.length; i++) {
                if (parents[i].classList.contains("active")) {
                    price = getElementsByProperty(parents[i], "div", "class", "price")[0].firstChild.textContent;
                }
            }
            if (!price) {
                price = getElementsByProperty(parents[0], "div", "class", "price")[0].firstChild.textContent;
            }

        } 
        else if (/zappos/.exec(website)) {
            price = $('#priceSlot .price').text();
        } 
        else if (/toysrus/.exec(website)) {
            if($('.sticky-price-contents .sale-price')[0]){
                 price = $('.sticky-price-contents .sale-price').text();
            }
            else{
                price = $('.sticky-price-contents .price').text();
            }
        } 
        else if (/lowes/.exec(website)) {
            price = "$" + $('.pd-price span[itemprop="price"]').attr('content');

        } 
        else if (/bhphotovideo/.exec(website)) {
            price = "$" + $('.youPay .ypYouPay meta').attr('content');

        } 
        else if (/barnesandnoble/.exec(website)) {
            price = $('span.price').text();

        } 
        else if (/1800flowers/.exec(website)) {
            var elements = getElementsByProperty(document, "input", "type", "radio");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].checked) {
                    price = elements[i].getAttribute("skuactualprice");
                    i = elements.length;
                }
            }

        } 
        else if (/kohls/.exec(website)) {
            price = $('.main-price').text();

        }
        else if (/nordstromrack/.exec(website)) {
            price = $('.product-details__sale-price').text();
        }
        else if (/nordstrom/.exec(website)) {
            price = $('.current-price').text();

        } 
        else if (/macys/.exec(website)) {
            if (document.getElementsByClassName("priceSale").length) {
                price = document.getElementsByClassName("priceSale")[0].textContent;
            } else if (document.getElementsByClassName("singlePrice").length) {
                price = document.getElementsByClassName("singlePrice")[0].textContent;
            } else {
                price = getMetaContent("itemprop", "priceCurrency") + " " + getMetaContent("itemprop", "price");
            }

        } 
        else if (/staples/.exec(website)) {
            price = document.getElementsByClassName("preferred-price-discounted")[0].textContent;
        } 
        else if (/petsmart/.exec(website)) {
            var parent = $('#product-content')[0];
            try {
                price = parent.getElementsByClassName("price-regular")[0].textContent;
            } catch (e) {
                price = parent.getElementsByClassName("price-sales")[0].textContent;
            }

        } 
        else if (/walgreens/.exec(website)) {
            price = $('.wag-price-info:first-child sup:first-child').text() +
                    $('.wag-price-info:first-child span').text() + "." +
                    $('.wag-price-info:first-child sup:last-child').text();
        } 
        else if (/dickssportinggoods/.exec(website)) {
            if($('.fl-right .was-item-price')[0]){
                price = '$' + $('.fl-right .pdp-hdr-price input').attr('value');
            }
            else{
                price = $('.fl-right .final-price').text();
            }

        } 
        else if (/shoes/.exec(website)) {
            price = "$" + $('.price span[itemprop="price"]').text();
        }
        else if (/gamestop/.exec(website)) {
            if($('.buy1.ats-prodBuy-buyBoxSec')){
                price = $('.ats-prodBuy-buyBoxGrid .buy1.ats-prodBuy-buyBoxSec .ats-prodBuy-price').text();
            }
            else{
                price = $('.ats-prodBuy-buyBoxGrid .ats-prodBuy-price').text();
            }

        } 
        else if (/apple/.exec(website)) {
            try {
                price = document.getElementsByClassName("as-price-currentprice")[0].textContent;
            } catch(e) {}
            if (!price) {
                try {
                    price = getElementsByProperty(document, "span", "data-autom", "price")[0].textContent;
                } catch(e) {}
            }
            if (!price) {
                try {
                    price = document.getElementsByClassName("current_price")[0].textContent;
                } catch(e) {}
            }
            if (!price) {
                price = document.getElementsByClassName("as-summaryheader-productprice")[0].textContent;
            }

        } 
        else if (/qvc/.exec(website)) {
            pricing = getMetaContent("property", "og:price:currency") + " " + getMetaContent("property", "og:price:amount");
            price = '$' + pricing.substr(pricing.indexOf("$") + 1);
        } 
        else if (/costco/.exec(website)) {
            price = "$" + $('.your-price .value').text();
        } 
        else if (/williams-sonoma/.exec(website)) {
            price = "";
            try {
                var parent = document.getElementById("pip").getElementsByClassName("pip-summary")[0].getElementsByClassName("price-special")[0];
                elements = parent.getElementsByClassName("currency");
                for (var i = 0; i < elements.length; i++) {
                    price += elements[i].textContent;
                }
            } catch(e) {}
            if (!price) {
                try {
                    price = document.getElementById("pip").getElementsByClassName("pip-summary")[0].getElementsByClassName("price-standard")[0].textContent;
                } catch(e) {}
            }
            if (!price) {
                var parent = document.getElementById("pip").getElementsByClassName("pip-summary")[0].getElementsByClassName("price-sale")[0];
                elements = parent.getElementsByClassName("currency");
                for (var i = 0; i < elements.length; i++) {
                    price += elements[i].textContent;
                }
            }

        } 
        else if (/sears/.exec(website)) {
            price = $('.redSalePrice .price-wrapper').text();

        } 
        else if (/wayfair/.exec(website)) {
            price = $('h3.ProductPricing-amount').text();

        } 
        else if (/bathandbodyworks/.exec(website)) {
            price = $('#product-content .product-price .price-sales').text();

        } 
        else if (/hsn/.exec(website)) {
            price = "$" + $('.product-price span[itemprop="price"]').attr('content');

        } 
        else if (/victoriassecret/.exec(website)) {
            pricing = $('.description .price-as-shown:first-child').text();
            price = pricing.split(' or')[0];
        } 
        else if (/nike/.exec(website)) {
            price = $('.exp-product-header .exp-pdp-local-price').text();
        }
        else if (/neimanmarcus/.exec(website)) {
            price = "$" + $('.product-details-mobile input:first-child').attr('value');
        }
        else if (/coolstuffinc/.exec(website)){
            if($('.actualPrice')[0]){
                price = "$" + $('.actualPrice span[itemprop="price"]').attr('content');
            }
            else if($('.cardDetails')[0] && $('.darkred')[0]){
                price = "$" + $('.darkred b[itemprop="price"]').attr('content');
            }
            else{
                price = $('.addButton').text();
            }
        }
        else if (/menswearhouse/.exec(website)) {
            var pricing = $('.reg-price .final-price').text();
            price = "$" + pricing.substr(pricing.indexOf("$") + 1);
        }
        else if (/forever21/.exec(website)) {
            if($('.p_sale')[0]){
                price = $('#ItemPrice .p_sale').text();
            }
            else{
                price = $('#ItemPrice .p_price').text();
            }
        }
        else if (/freepeople/.exec(website)) {
            price = "$" + $('meta[property="product:price:amount"]').attr('content');
        }
        else if (/crateandbarrel/.exec(website)) {
            if($('.shoppingBar .salePriceDetail')[0]){
                price= $('.shoppingBar .salePriceDetail').text();
            }
            else if($('.shoppingBar .sale')[0]){
                pricing = $('.shoppingBar .salePrice').text();
                price = "$" + pricing.substr(pricing.indexOf("$") + 1);
            }
            else{
                price = $('.shoppingBar .regPrice').text();
            }
        }
        else if (/roomstogo/.exec(website)) {
            price = $('.productInfo .price span').text();
        }
        else if (/riflepaperco/.exec(website)) {
            if($('.special-price')[0]){
                price = $('.special-price .price').text();
            }
            else{
                price = $('.info .price').text();
            }
        }
        else if (/hottopic/.exec(website)) {
            price = $('.desktop-pricing .product-price span[title="Sale Price"]').text();
        }
        else if (/aeropostale/.exec(website)) {
            if($('#product-content .price-sale')[0]){
                price = $('#product-content .price-sale').text();
            }
            else{
                price = $('#product-content .price-msrp').text();
            }
        }
        else if (/jcpenney/.exec(website)) {
            price = $('.PDP-pdp-container .PDP-productOptionBlock .Pricing-price').text();
        }
        else if (/footlocker/.exec(website)) {
            price = $('#product_form input[name="selectedPrice"]').attr('value');
        }
        else if (/allmodern/.exec(website)) {
            price = $('.ProductPricing h3.ProductPricing-amount').text();
        }
        else if (/anthropologie/.exec(website)) {
            price = $('.c-product-container__inner .js-product-meta .c-product-meta__current-price').text();
        }
        else if (/bloomingdales/.exec(website)) {
            price = $('.priceSale div:first-child .cw_price_holder').text();
        }
        else if (/brookstone/.exec(website)) {
            price = "$" + $('.product-footer .shipping-info-item.index-0 .right span[itemprop="price"]').text();
        }
        else if (/cb2/.exec(website)) {
            price = $('meta[property="og:price:amount"]').attr('content');
        }
        else if (/containerstore/.exec(website)) {
            price = "$" + $('meta[property="product:price:amount"]').attr('content');
        }
        else if (/shopdisney/.exec(website)) {
            price = $('.product-details .product-price-container .price:first-of-type').text();
        }
        else if (/dwellstudio/.exec(website)) {
            price = $('.ProductDetailInfoBlock .ProductPricing-amount').text();
        }        
        else if (/food52/.exec(website)) {
            price = $('.product-info-block .product-price-range').text();
        }
        else if (/kaufmann-mercantile/.exec(website)) {
            price = $('#item-price').text();
        }
        else if (/pier1/.exec(website)) {
            price = "$" + $('meta[property="og:price:amount"]').attr('content');
        }
        else if (/potterybarnkids/.exec(website)) {
            if($('.pip-summary .price-strike-special')[0]){
               price = '$' + $('.pip-summary .product-price .price-special span:nth-child(2) span:last-child').text();  
            }
            else{
                price = '$' + $('.pip-summary .product-price .price-state:first-child .currencyUSD:first-of-type span:last-child').text();  
            }
        }
        else if (/potterybarn/.exec(website)) {
            if($('.pip-summary .price-strike-sale')[0]){
               price = '$' + $('.pip-summary .product-price .price-sale span:nth-child(2) span:last-child').text();  
            }
            else if($('.pip-summary .price-strike-special')[0]){
                price = $('.pip-summary .product-price .price-special span:nth-child(2) span').text(); 
            }
            else{
                price = '$' + $('.pip-summary .product-price .price-state:first-child .currencyUSD:first-of-type span:last-child').text();  
            }
        }
        else if (/shopko/.exec(website)) {
            price = '$' + $('.product-price .product-price-inner:first-child .product-price-value').text();
        }
        else if (/shopterrain/.exec(website)) {
            if($('.prices')[0]){
                price = '$' + $('.prices span[itemprop="price"]').text();
            }
            else{
                price = '$' + $('.productDetailSizeList li.selected .price').text();
            }
        }
        else if (/landofnod/.exec(website)) {
            if($('.product-price .salePrice')[0]){
                price = $('.product-price .salePrice').text();
            }
            else{
                price = $('.product-price .regPrice').text();
            }
        }
        else if (/adidas/.exec(website)) {
            if($('#product-information .price-sale-big')[0]){
                price = $('#product-information .price-sale-big').text();
            }
            else{
                price = $('#product-information .price-big').text();
            }
        }
        else if (/mindymaesmarket/.exec(website)) {
            price = $('.product_section .current_price').text().replace(/ /g,'');;
        }
        else if (/ae/.exec(website)) {
            if($('#psp-sale-price')[0]){
                price = "$" + $('#psp-sale-price').text();
            }
            else{
                price = "$" + $('#psp-regular-price').text();
            }
        }
        else if (/armaniexchange/.exec(website)) {
            if($('.productInfoWrapper .discounted.price .value')[0]){
                price = '$' + $('.productInfoWrapper .discounted.price .value').text(); 
            }
            else{
                price = '$' + $('.productInfoWrapper .itemPrice .price .value').text();
            }
        }
        else if (/anntaylor/.exec(website)) {
            if($('.price.sale')[0]){
                price = '$' + $('.productInfoWrapper .discounted.price .value').text(); 
            }
            else{
                price = $('.product-information .price span').text();
            }
        }
        else if (/bananarepublic/.exec(website)) {
            if($('.swatch-price--strike-out')[0]){
                price = $('.swatches--underlined').closest('.swatches--list').prev().find('.swatch-price--position div[data-bind="text: currentPrice"]').text();
            }
            else{
                price = $('.js-product-info .product-price').clone().children().remove().end().text();

            }
        }
        else if (/gap/.exec(website)) {
            if($('.swatches_color .price--new')[0]){
                price = $('.swatches--underlined').closest('.swatches--list').prev().find('.swatch-price--position .price--new').text();
            }
            else{
                pricing = $('.product-price').text();
                price = '$' + pricing.substr(pricing.indexOf("$") + 1);
            }
        }
        else if (/billabong/.exec(website)) {
            price = $('.product-info .product-price[itemprop="lowPrice"]').text();
        }
        else if (/coach/.exec(website)) {
            var pricing = $('.product-info-master .sales').text();
            price = '$' + pricing.substr(pricing.indexOf("$") + 1);
        }       
        else if (/chanel/.exec(website)) {
            var pricing = '$' + $('.currentPage .product-details .price').text();
            price = pricing.split(' USD')[0];
        }
        else if (/express/.exec(website)) {
            price = $('.price .header2.price__price span:last-of-type').text();
        }
        else if (/gucci/.exec(website)) {
            price = $('#markedDown_full_Price').text();
        }
        else if (/guess/.exec(website)) {
            price = $('.priceVal.actual').text();
        }
        else if (/hollister/.exec(website)) {
            if($('.product-price-v2__price--offer:empty')[0]){
                price = $('.product-price-v2__price').text();
            }
            else{
                price = $('.product-price-v2__price--offer').text();
            }
        }
        else if (/loft/.exec(website)) {
            price = $('header.active .price span').text();
        }
        else if (/lenscrafters/.exec(website)) {
            price = $('.price-holder .product-price').text();
        }
        else if (/microsoft/.exec(website)) {
            price = $('.m-product-detail-hero-product-placement .price-info .srv_price span').text();
        }
        else if (/oakley/.exec(website)) {
            price = $('#salePrice').text();
        }
        else if (/sephora/.exec(website)) {
            
            if($('.css-tkt10g')[0]){
                price = $('.css-3hcxag').text();
            }
            else{
                price = $('.css-1m150hz').clone().children().remove().end().text();
            }
        }
        else if (/sunglasshut/.exec(website)) {
            price = $('#price').text();
        }
        else if (/tiffany/.exec(website)) {
            price = $('#itemPrice div:first-of-type').text();
        }
        else if (/underarmour/.exec(website)) {
            price = "$" + $('meta[itemprop="price"]').attr('content');
        }
        else if (/urbanoutfitters/.exec(website)) {
            pricing = $('.dom-main-product .c-product-meta__current-price').text();
            price = '$' + pricing.substr(pricing.indexOf("$") + 1);
        }
        else if (/vans/.exec(website)) {
            price = $('.offer-price').text();
        }
        else if (/verabradley/.exec(website)) {
            if($('.product-price.strike-through')[0]){
                price = $('.registryDataItemsWrap .sale-price').text();
            }
            else{
                price = $('.registryDataItemsWrap .product-price').text();
            }
        }
        else if (/advanceautoparts/.exec(website)) {
            price = $('.aap-productdetails__rightsection .aap-productdetails-delivery__price').text();
        }
        else if (/asus/.exec(website)) {
            price = "$" + $('.buy .price').text();
        }
        else if (/bedbathandbeyond/.exec(website)) {
            price = "$" + $('.isPrice span[itemprop="price"]').attr('content');
        }
        else if (/biglots/.exec(website)) {
            price = $('.product-detail-wrapper .regular-price').text();
        }
        else if (/daintyhooligan/.exec(website)) {
            price = "$" + $('meta[property="og:price:amount"]').attr('content');
        }
        else if (/dillards/.exec(website)) {
            if($('#mainPrice .now-price')){
                price = $('#mainPrice .now-price .price-number').text();
            }
            else{
                price = $('#mainPrice .price-number').text();
            }
        }
        else if (/dollargeneral/.exec(website)) {
            price = $('.product-info-price .price-wrapper[data-price-type="finalPrice"] .price').text();
        }
        else if (/girlfriend/.exec(website)) {
            pricing = $('.introduction .price').text();
            pricing2 = '$' + pricing.substr(pricing.indexOf("$") + 1);
            price =  pricing2.split(' USD')[0];
        }
        else if (/lulus/.exec(website)) {
            price = $('meta[name="wanelo:product:price"]').attr('content');
        }
        else if (/modcloth/.exec(website)) {
            if($('.price-promo')[0]){
                price = $('.price-promo').text();
            }
            else{
                price = $('.product-price .price-sales').text();
            }
        }
        else if (/rue21/.exec(website)) {
            if($('#addToCartForm .product-sku-color').css('display') != 'none'){
                price = $('#addToCartForm .product-sku-color a.selected').closest('.product-sku-color').prev().prev().find('li:first-of-type').clone().children().remove().end().text();
            }
            else{
                price = $('.pdpPrice span:last-of-type').text();
            }
        }
        else if (/tjmaxx/.exec(website)) {
            if($('.product-details .discounted-price')[0]){
                pricing = $('.section-header .discounted-price').text();
                price = $('.section-header .discounted-price')[0].childNodes[2].nodeValue.trim()
            }
            else{
                price = $('.section-header .product-price').text();
            }
        }
        else if (/tractorsupply/.exec(website)) {
            price = $('.prod_name_size2 .dollar_price').text();
        }
        else if (/hellomerch/.exec(website)) {
            price = $('.info #productPrice').text();
        }
        else if (/burlingtoncoatfactory/.exec(website)) {
            if($('.clearance')[0]){
                price = $('#ctl03_MainContentArea_ctl00_ctl00_ctl00_ProductDisplay_ProductPricesModule_LblClearance').text();
            }
            else{
                price = $('#ctl03_MainContentArea_ctl00_ctl00_ctl00_ProductDisplay_ProductPricesModule_LblOurPriceSimple').text();
            }
        }
        else if (/acehardware/.exec(website)) {
            pricing = $('.productPrice span').text();
            price = '$' + pricing.substr(pricing.indexOf("$") + 1);
        }
        else if (/autozone/.exec(website)) {
            price = '$' + $('#prices_wrapper .price span:last-of-type').text();
        }
        else if (/cvs/.exec(website)) {
            price = $('.col-right .price-price').text();
        }
        else if (/spasydell/.exec(website)) {
            price = $('.summary .woocommerce-Price-amount').text();
        }
        else if (/dell/.exec(website)) {
            price = $('#starting-price').text();
        }
        else if (/ethanallen/.exec(website)) {
            if($('.price-sales')[0]){
                pricing = $('#product-content .product-price-non-mobile .price-sales').text();
                price = '$' + pricing.substr(pricing.indexOf("$") + 1);
            }
            else{
                price = $('#product-content .product-price-non-mobile .product-price').text();
            }
        }
        else if (/francescas/.exec(website)) {
            price = $('.ml-product-item-detail .productPricing .ml-item-price').text();
        }
        else if (/glossier/.exec(website)) {
            price = $('.h-el-b .b-wrp--add .js-price').text();
        }
        else if (/asos/.exec(website)) {
            price = $('.product-hero span[data-id="current-price"]').text();
        }
        else if (/teeturtle/.exec(website)) {
            price = $('.product .product-price').text();
        }
        else if (/katespade/.exec(website)) {
            price = $('#product-content .price-sales').text();
        }
        else if (/heruniverse/.exec(website)) {
            price = $('#product-content .product-price span:last-of-type').text();
        }
        else if (/bonfire/.exec(website)) {
            price = $('.camp-Details .camp-ActiveProductPrice span').text();
        }
        else if (/universalorlando/.exec(website)) {
            price = $('#ucProductDetail_lblPrice').text().replace(/ /g,'');
        }
        else if (/cultivatewhatmatters/.exec(website)) {
            price = $('#ButtonPrice-product').text();
        }
        else if (/sandcloudtowels/.exec(website)) {
            price = $('#ProductPrice-product').text().replace(/ /g,'');
        }
        else if (/etee/.exec(website)) {
            price = $('#ProductPrice-product').text().split(' USD')[0];
        }
        else if (/sharperimage/.exec(website)) {
            if($('.pdp-cart-price .sale')[0]){
                pricing = $('.pdp-cart-price .sale').text();
                price = '$' + pricing.substr(pricing.indexOf("$") + 1);
            }
            else{
                price = $('#catalog_price').text();
            }
        }
        else if (/astrogaming/.exec(website)) {
            price = $('.single-product-price .price-sales').text();
        }
        else if (/redbubble/.exec(website)) {
            if($('.price.usd')[0]){
                price = $('.price.usd').text();
            }
            else{
                price = $('.shared-components-ProductConfiguration-ProductConfiguration__price--31GDW').text();
            }
        }
        else if (/southernfriedchics/.exec(website)) {
            if($('.product_saleprice')[0]){
                price = '$' + $('.product_saleprice span').text();
            }
            else{
                price = '$' + $('.product_productprice span').text();
            }
        }
        else if (/payless/.exec(website)) {
            if($('.NONRangePriceStandard .price-sales')[0]){
                price = $('.NONRangePriceStandard .price-sales').text();
            }
            else{
                price = $('.NONRangePriceSale').text();
            }
        }
        else if (/araiamericas/.exec(website)) {
            price = $('.product-detail .row:last-of-type .text-right').text();
        }
        else if (/vat19/.exec(website)) {
            if($('.subProductRow')[0]){
                price = $('.subProductRow:first-of-type .regularPrice').text();
            }
            else{
                price = $('#product-box-price').text();
            }
        }
        else if (/urbanbodyjewelry/.exec(website)) {
            if($('.product-options-bottom .price')[0]){
                if($('.product-options-bottom .special-price')[0]){
                    price = $('.product-options-bottom .special-price .price').text();
                }
                else{
                    price = $('.product-options-bottom .price').text();
                }
            }
            else{
                if($('.special-price')[0]){
                    price = $('.special-price .price').text();
                }
                else{
                    price = $('.price').text();
                }
            }
        }
        else if (/zgallerie/.exec(website)) {
            if($('#variant_price .SalePrice')[0]){
                price = $('#variant_price .SalePrice').text();
            }
            else{
                price = $('#variant_price span').text();
            }
        }
        else if (/teefury/.exec(website)) {
            if($('.special-price')[0]){
                price = $('.special-price .price').text();
            }
            else{
                price = $('.price').text();
            }
        }
        else if (/journeys/.exec(website)) {
            price = '$' + $('meta[itemprop="lowPrice"]').attr('content');
        }
        else if (/swarovski/.exec(website)) {
            if($('.shopping-box .new')[0]){
                price = $('.shopping-box .new').text().replace(/ /g,'');
            }
            else{
                price = $('.shopping-box .price').text().replace(/ /g,'');
            }
        }
        else if (/saksoff5th/.exec(website)) {
            price = '$' + $('.product-pricing .product-pricing__container:last-of-type .product-pricing__price span:last-of-type').text();
        }
        else if (/blanknyc/.exec(website)) {
            if($('.special-price')[0]){
                price = $('.product-shop .special-price .price').text();
            }
            else{
                price = $('.product-shop .price').text();
            }
        }
        else {
            price = getMetaContent("itemprop", "price");
        }
    } finally {
        if (price) {
            return price;
        } else {
            return "";
        }
    }
}
