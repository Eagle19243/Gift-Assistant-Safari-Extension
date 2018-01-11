function getItemImage(website) {
    var image;
    try {
        if (/amazon/.exec(website)) {
            if($('#imgTagWrapperId')[0]){
                image1 = $('#imgTagWrapperId img').attr('src');
                image = image1.split('215')[0] + '600_.jpg';
            }
            else if($('#superleafHeroImage')[0]){
                image = $('#superleafHeroImage img').attr('src');
            }
            else if($('#main-image-container #img-canvas')[0]){
                image = $('#main-image-container #img-canvas img').attr('src');
            }
            else if($('#minimalImageBlock #mainImageContainer')[0]){
                image = $('#mainImageContainer img').attr('src');
            }
            else{
                var parent = document.getElementById("main-image-container").getElementsByTagName("ul")[0];
                image = parent.getElementsByClassName("image")[0].getElementsByClassName("imgTagWrapper")[0].lastElementChild.src;
            }
        } else if (/target/.exec(website)) {
            image = $('.lenszoom.slick-active img').attr('src');

        } else if (/homedepot/.exec(website)) {
            image = document.getElementById("mainImage").src;

        } else if (/ikea/.exec(website)) {
            image = document.getElementById("productImg").src;

        } else if (/hm/.exec(website)) {
            image = document.getElementById("product-image").src;

        } else if (/bestbuy/.exec(website)) {
            if($('#media-gallery-container')[0]){
                image = $('#media-gallery-container div.active img').attr('src');
            }
            else{
                image = $('#carousel-main div.active img').attr('src');
            }

        }
        else if (/belk/.exec(website)) {
            image = 'http:' + $('.product-primary-image picture source:first-of-type').attr('srcset');

        }
        else if (/etsy/.exec(website)) {
            image = $('#image-0 img').attr('src');

        } else if (/groupon/.exec(website)) {
            image = $('.media-container.loaded img').attr('src');

        } else if (/ebay/.exec(website)) {
            image = document.getElementById("icImg").src;

        } else if (/walmart/.exec(website)) {
            var parent = document.getElementsByClassName("prod-HeroImage")[0];
            image = getElementsByProperty(parent, "img", "tabindex", "0")[0].src;
            if (!image) {
                image = getMetaContent("property", "og:image").split(";")[0];
            }

        } else if (/newegg/.exec(website)) {
            image = document.getElementById("A2").firstElementChild.firstElementChild.src;

        }
        else if (/overstock/.exec(website)) {
            image = $('.image-gallery .hero img:first-of-type').attr('src');

        }
        else if (/woot/.exec(website)) {
            var parents = document.getElementById("gallery").children;
            for (var i = 0; i < parents.length; i++) {
                if (parents[i].classList.contains("current")) {
                    image = parents[i].firstElementChild.src;
                    i = parents.length;
                }
            }

        } else if (/jet/.exec(website)) {
            image = getElementsByProperty(document, "div", "class", "img-holder active")[0].firstElementChild.src;

        } else if (/zappos/.exec(website)) {
            image = document.getElementById("actors").firstElementChild.firstElementChild.src;

        } else if (/staples/.exec(website)) {
            image = document.getElementById("STP--Product-Image").lastElementChild.src;

        }  else if (/toysrus/.exec(website)) {
            image = $('.zoomContainer .largeImage').attr('src');

        } else if (/lowes/.exec(website)) {
            image = getElementsByProperty(document, "img", "itemprop", "image")[0].src;

        } else if (/bhphotovideo/.exec(website)) {
            image = document.getElementById("mainImage").src;

        } else if (/barnesandnoble/.exec(website)) {
            image = document.getElementById("pdpMainImage").src;

        } else if (/1800flowers/.exec(website)) {
            image = document.getElementById("prodimglarge").src;

        } else if (/kohls/.exec(website)) {
            var parent = document.getElementById("easyzoom-wrap");
            image = parent.getElementsByTagName("img")[0].src;

        } 
        else if (/nordstromrack/.exec(website)) {
            image = $('.image-zoom > div:first-of-type img').attr('src');
        }
        else if (/nordstrom/.exec(website)) {
            var parent = document.getElementsByClassName("main-content-image-wrapper")[0];
            image = parent.firstElementChild.src;

        } else if (/macys/.exec(website)) {
            if (document.getElementById("mainView_1")) {
                image = document.getElementById("mainView_1").src;
            } else {
                try {
                    image = document.getElementsByClassName("productImageSection")[0].firstElementChild.src;
                } catch (e) {
                    var parent = document.getElementsByClassName("mainImages")[0];
                    image = getElementsByProperty(parent, "li", "class", "selected")[0].firstElementChild.src;
                }
            }

        } else if (/petsmart/.exec(website)) {
            var parent = document.getElementById("s7swatches");
            var element;
            try {
                element = getElementsByProperty(parent, "div", "state", "selected")[0];
            } catch (e) {
                element = getElementsByProperty(parent, "div", "state", "default")[0];
            }
            image = element.style.backgroundImage.slice(4, -1).replace(/"/g, "").split("?")[0];

        } else if (/dickssportinggoods/.exec(website)) {
            var parent = document.getElementById("flyout_swatches");
            var element = getElementsByProperty(parent, "div", "state", "selected")[0];
            image = element.style.backgroundImage.slice(4, -1).replace(/"/g, "").split("?")[0];

        } else if (/walgreens/.exec(website)) {
            image = document.getElementById("proImg").src;

        } else if (/shoes/.exec(website)) {
            image = document.getElementById("primary-image").src;

        } else if (/apple/.exec(website)) {
            try {
                image = document.getElementsByClassName("main-image")[0].firstElementChild.nextElementSibling.getElementsByTagName("img")[0].src;
            } catch(e) {}
            if (!image) {
                try {
                    image = getElementsByProperty(document, "img", "itemprop", "image")[0].src;
                } catch(e) {}
            }
            if (!image) {
                var element = document.getElementsByClassName("as-dimension-fanimage")[0];
                if (element) {
                    if (element.firstElementChild) {
                        image = element.firstElementChild.src;
                    }
                }
            }
            if (!image) {
                image = getMetaContent("property", "og:image").split(";")[0];
            }

        } else if (/qvc/.exec(website)) {
            image = document.getElementsByClassName("s7flyoutzoom")[0].firstElementChild.firstElementChild.src;
            if (!image) {
                image = "http:" + getMetaContent("property", "og:image").split(";")[0];
            }

        } else if (/costco/.exec(website)) {
            image = document.getElementById("RICHFXViewerContainer___richfx_id_0_initialImage").src;

        } else if (/gap/.exec(website)) {
            var short_link = $('.product-photo--item .product-photo--image').attr('src');
            image = "http://gap.com" + short_link;

        } else if (/williams-sonoma/.exec(website)) {
            image = document.getElementById("hero").src;

        } else if (/sears/.exec(website)) {
            image = document.getElementById("overview").getElementsByTagName("img")[0].src;

        } else if (/wayfair/.exec(website)) {
            if($('.ProductDetail .ImageComponent')[0]){
                image = $('.ProductDetail .ImageComponent img').attr('src');
            }
            else{
                image = $('.ProductDetailMainImage-mainImageResponsive').attr('src');
            }
        } 
        else if (/bathandbodyworks/.exec(website)) {
            try {
                image = document.getElementById("slider").firstElementChild.getElementsByClassName("active")[0].getElementsByTagName("img")[0].src;
            } catch(e) {}
            if (!image) {
                image = getElementsByProperty(document, "img", "itemprop", "image")[0].src;
            }

        } else if (/hsn/.exec(website)) {
            try {
                image = document.getElementById("template-product-detail-product").getElementsByClassName("image-zoomer-trigger")[0].firstElementChild.src;
            } catch(e) {}
            if (!image) {
                image = document.getElementsByClassName("image-zoomer-trigger")[0].getElementsByTagName("img")[0].src;
            }

        } else if (/victoriassecret/.exec(website)) {
            image = document.getElementById("vsImage").src;

        } else if (/nike/.exec(website)) {
            image = document.getElementsByClassName("exp-pdp-hero-image")[0].src;

        } else if (/neimanmarcus/.exec(website)) {
            image = $('.slick-slide img').attr('src');
        } 
        else if (/menswearhouse/.exec(website)) {
            image = $('.pdp-main-image-container img').attr('data-zoom-src');
        }
        else if (/forever21/.exec(website)) {
            image = $('#modelImage_1_front_750 .product_image').attr('src');
        }
        else if (/freepeople/.exec(website)) {
            image_text = $('.o-carousel .swiper-slide-active img').attr('src');
            image = 'http:/' + image_text.substring(image_text.indexOf("//") + 1);
        }
        else if (/crateandbarrel/.exec(website)) {
            if($('.productCarousel')[0]){
                image = $('.productCarousel li:first-of-type img').attr('src');
            }
            else{
                image = $('.hwProductImage').attr('src');
            }
        }
        else if (/aeropostale/.exec(website)) {
            image = $('.product-primary-image .primary-image').attr('src');
        }
        else if (/jcpenney/.exec(website)) {
            image = 'http:' + $('.slick-list .slick-active img').attr('src');
        }
        else if (/footlocker/.exec(website)) {
            if($('#alternate_colors')[0]){
                image_text = $('.slide_content a.selected img').attr('src');
                image_text2 = 'http:/' + image_text.substring(image_text.indexOf("//") + 1);
                image = image_text2.substring(0, image_text2.indexOf('large'))+ 'zoom/';
            }
            else{
                image = $('link[rel="image_src"]').attr('href');
            }
        }
        else if (/anthropologie/.exec(website)) {
            image_text = $('.o-carousel--product-image .o-carousel__slide:nth-child(2) img').attr('src');
            image = 'http://i' + image_text.substring(image_text.indexOf("images") + 1);
        }
        else if (/bloomingdales/.exec(website)) {
            image = $('.product-main-image').attr('src');
        }
        else if (/brookstone/.exec(website)) {
            image = $('.owl-item.active .primary-image').attr('src');
        }
        else if (/cb2/.exec(website)) {
            if($('.productCarousel')[0]){
                if($('.productCarousel .jsActivePinItItem')[0]){
                    image = $('.productCarousel .jsActivePinItItem img').attr('src');
                }
                else{
                    image = $('.productCarousel .jsOutwardImage img').attr('src');
                }
            }
            else{
                image = $('.hwProductImage').attr('src');
            }
        }
        else if (/dwellstudio/.exec(website)) {
            image = $('.ProductDetailMainImage-mainImageResponsive-wrap ul li:first-of-type img').attr('src');
        }
        else if (/food52/.exec(website)) {
            image = $('.product-main-photo-frame img').attr('src');
        }
        else if (/kaufmann-mercantile/.exec(website)) {
            image = "http://" + $('#smallProductImages .selected img').attr('src');
        }
        else if (/potterybarn/.exec(website)) {
            image = $('.hero-image img').attr('src');
        }
        else if (/shopko/.exec(website)) {
            image = $('.productImage img').attr('src');
        }
        else if (/shopterrain/.exec(website)) {
            image = $('.product-images .zoomPad img').attr('src');
        }
        else if (/landofnod/.exec(website)) {
            image = $('.hwProductImage').attr('src');
        }
        else if (/adidas/.exec(website)) {
            image = "http://" + $('#images_container___2mwAa img').attr('src');
        }
        else if (/mindymaesmarket/.exec(website)) {
            image = 'http:' + $('.slides li:last-of-type a').attr('href');
        }
        else if (/ae/.exec(website)) {
            image = "http://" + $('.item-img.active img').attr('src');
        }
        else if (/armaniexchange/.exec(website)) {
            image_set =  $('.mainImage .slick-track .selected img').attr('srcset');
            image = image_set.split(' 1504')[0];
        }
        else if (/anntaylor/.exec(website)) {
            image = "http://" + $('.main-image img').attr('data-large');
        }
        else if (/billabong/.exec(website)) {
            image = "https://us.billabong.com" + $('.details-gallery .zoomImg').attr('src');
        }
        else if (/coach/.exec(website)) {
            image = $('#current-image').attr('src');
        }
        else if (/chanel/.exec(website)) {
            image = "http://chanel.com" + $('.currentPage .product-image-foreground img').attr('src');
        }
        else if (/express/.exec(website)) {
            image1 = $('.carousel__zoom-image').attr('style').split('")')[0];
            image = image1.substr(image1.indexOf('"') + 1);
        }
        else if (/guess/.exec(website)) {
            image = $('#myZoomView .s7flyoutzoom div img:first-of-type').attr('src');
        }
        else if (/hollister/.exec(website)) {
            image = "http://" + $('.product-main-images__default-image img').attr('src');
        }
        else if (/loft/.exec(website)) {
            image = "http://" + $('.main-image img').attr('src');
        }
        else if (/microsoft/.exec(website)) {
            image = $('#hero-slide-0 img').attr('src');
        }
        else if (/oakley/.exec(website)) {
            image = "http://oakley.com" + $('.hero-slider .slide.active img').attr('srcset');
        }
        else if (/sephora/.exec(website)) {
            image = "https://sephora.com" + $('.css-1l9a57c image').attr('xlink:href');
        }
        else if (/underarmour/.exec(website)) {
            image = "http:" + $('.pdp_main_image').attr('src');
        }
        else if (/urbanoutfitters/.exec(website)) {
            image = "http:" + $('.swiper-slide-active .c-product-image').attr('src');
        }
        else if (/vans/.exec(website)) {
            image1 = "http:" + $('#owl-desktop-carousel figure.selected img').attr('src');
            image2 = image1.split('$')[0];
            image = image2 + "$583x583$"
        }
        else if (/verabradley/.exec(website)) {
            image = "http:" + $('.owl-stage-outer .active img').attr('src');
        }
        else if (/asus/.exec(website)) {
            image = "http:" + $('.swiper-slide-active img').attr('src');
        }
        else if (/bedbathandbeyond/.exec(website)) {
            image = "http:" + $('#mainProductImgZoom').attr('href');
        }
        else if (/dillards/.exec(website)) {
            image = "http:" + $('.mainProductImage img').attr('src');
        }
        else if (/girlfriend/.exec(website)) {
            image = $('.gallery .image img').attr('src');
        }
        else if (/modcloth/.exec(website)) {
            image = $('.product-primary-image a').attr('href');
        }
        else if (/rue21/.exec(website)) {
            image1 = $('#product-image_swatches div[state="selected"]').css('background-image');
            image2 = image1.replace('url(','').replace(')','').replace(/\"/gi, "");
            image = image2.split('?')[0];
        }
        else if (/tjmaxx/.exec(website)) {
            image = "http:" + $('.zoom-main img').attr('src');
        }
        else if (/tractorsupply/.exec(website)) {
            image1 = "http:" + $('meta[property="og:image"]').attr('content');
            image = image1.split('%')[0];
            //console.log(image);
        }
        else if (/burlingtoncoatfactory/.exec(website)) {
            image = $('#productMainImage').attr('src');
        }
        else if (/cvs/.exec(website)) {
            image = "http:" + $('#product-carousel .slides[data-slide="0"] img').attr('src');
        }
        else if (/spasydell/.exec(website)) {
            image = $('.woocommerce-product-gallery__wrapper img').attr('src');
        }
        else if (/dell/.exec(website)) {
            image = $('#product-detail-hero-media img').attr('src');
        }
        else if (/ethanallen/.exec(website)) {
            if($('#cylindo-container')[0]){
                image = "http:" + $('#cylindo-container ol li:first-of-type img').attr('src');
            }
            else{
                image = "http://ethanallen.com" + $('.product-primary-image a').attr('href');
            }
        }
        else if (/francescas/.exec(website)) {
            image = $('#mainimage').attr('src');
        }
        else if (/glossier/.exec(website)) {
            image = $('.slick-slider img:first-of-type').attr('src');
        } 
        else if (/teeturtle/.exec(website)) {
            image = "http:" + $('.slick-slider img:first-of-type').attr('src');
        }
        else if (/katespade/.exec(website)) {
            image = $('.main-image img').attr('src');
        }
        else if (/bonfire/.exec(website)) {
            image = $('.camp-DesktopPreview img').attr('src');
        }
        else if (/universalorlando/.exec(website)) {
            image = 'http://shop.universalorlando.com' + $('#ucProductDetail_imgProductImageLarge').attr('src');
        }
        else if (/sharperimage/.exec(website)) {
            image = 'http:' + $('#product_image_carousel .item:nth-child(2) img').attr('src');
        }
        else if (/astrogaming/.exec(website)) {
            image = $('.main-image img').attr('src');
        }
        else if (/payless/.exec(website)) {
            image = $('.main-image').attr('href');
        }
        else if (/araiamericas/.exec(website)) {
            image = 'http:' +  $('#main-image img').attr('src');
        }
        else if (/urbanbodyjewelry/.exec(website)) {
            image = $('#zoom').attr('href');
        }
        else if (/zgallerie/.exec(website)) {
            image = $('#pnlProductImage div:first-of-type img').attr('src');
        }
        else if (/teefury/.exec(website)) {
            image = $('.slide-2 img').attr('src');
        }
        else if (/swarovski/.exec(website)) {
            image = $('#prod-img img').attr('src');
        }
        else if (/saksoff5th/.exec(website)) {
            image1 = $('#s7SwatchContainer .s7thumb[state="selected"]').css('background-image');
            image2 = image1.replace('url(','').replace(')','').replace(/\"/gi, "");
            image = image2.split('?')[0] + '?fit=constrain,1&wid=800&hei=600';
        }
        else if (/blanknyc/.exec(website)) {
            image = $('.product-image-zoom a img').attr('src');
        }
        else {
            image = getMetaContent("property", "og:image").split(";")[0];
        }
    } finally {
        if (image) {
            return image;
        } else {
            return "";
        }
    }
}
