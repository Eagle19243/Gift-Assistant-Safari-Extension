function getItemDescription(website) {
    var description;
    try {
        if (/amazon/.exec(website)) {
            if ($('#productDescription')[0]){
                description= $('#productDescription').html();
            }
            else if($('#aplus')[0]){
                description= $('#aplus .aplus-v2').html();
            }
            else{
                description= $('#feature-bullets').html();
            }
        } 
        else if (/ebay/.exec(website)) {
            description1= $('meta[name="description"]').attr('content');
            description= description1.split(' |')[0];

        } 
        else if (/walmart/.exec(website)) {
            description= $('.about-desc').html();

        }
        else if (/bestbuy/.exec(website)) {
            description1= $('.overview-features').html();
            description1 = jQuery("<p>").append(description1);
            description1.find('h3').remove();
            description = description1.html();
        }
        else if (/belk/.exec(website)) {
            description= $('.product-info .copyline-tab').html();
        }
        else if (/etsy/.exec(website)) {
            description= $('#description-text').html();

        }
        else if (/groupon/.exec(website)) {
            description= $('div[itemprop="description"]').html();

        }
        else if (/zappos/.exec(website)) {
            description= $('div[itemprop="description"]').html();

        }
        else if (/toysrus/.exec(website)) {
            description= $('.content-productdesc-about-history ').html();

        }
        else if (/kohls/.exec(website)) {
            description= $('#accordion1000 .accordion-segment-content div').html();

        }
        else if (/nordstromrack/.exec(website)) {
            description= $('.product-details-section__definition-list').html();
        }
        else if (/nordstrom/.exec(website)) {
            description= $('div[itemprop="description"]').html();
        }
        else if (/barnesandnoble/.exec(website)) {
            description1 = $('#productInfoOverview').text();
            description1 = jQuery("<p>").append(description1);
            description1.find('.text--center').remove();
            description = description1.html();

        }
        else if (/petsmart/.exec(website)) {
            description= $('.product-description div[itemprop="description"]').html();

        }
        else if (/dickssportinggoods/.exec(website)) {
            description= $('.productDescription').html();

        }
        else if (/shoes/.exec(website)) {
            description= $('.product_description span[itemprop="description"]').html();

        }
        else if (/gamestop/.exec(website)) {
            description= $('.productdetails').html();

        }
        else if (/costco/.exec(website)) {
            if($('.wc-video-gallery-container')[0]){
                description1 = $('#product-info .wc-fragment[data-section-tag="overview"]').html();
                description2 = $('#product-info .wc-fragment[data-section-tag="features"]').html();
                description = description1 + description2;
            }
            else{
                description1= $('#product-info .product-info-description').html();
                description2 = jQuery("<p>").append(description1);
                description2.find('.wchs[data-resources-base], div[data-section-caption="Image Gallery"], .wc-ppp-caption').remove();
                description = description2.html();
            }

        }
        else if (/williams-sonoma/.exec(website)) {
            description= $('#tab0').html();
        }
        else if (/sears/.exec(website)) {
            description= $('#productShortDescription').html();
        }
        else if (/wayfair/.exec(website)) {
            if($('#panelDescription .ProductOverviewInformation')[0]){
                description= $('#panelDescription .ProductOverviewInformation-content').html();
            }
            else{
                description= $('.ProductDetailSpecifications-content').html();
            }
        }
        else if (/neimanmarcus/.exec(website)) {
            description1= $('.product-details-info').html();
            description1= jQuery("<p>").append(description1);
            description1.find('.prodOptionButtons, .productSizeGuide, .cutlineOverviewTitle, .cutlineDetailsTitle').remove();
            description = description1.html();
        }
        else if (/coolstuffinc/.exec(website)) {
            description= $('.descriptionBlock').html();
        }
        else if (/roomstogo/.exec(website)) {
            description= $('.itemDetails .overview, .roomDetails .overview').html();
        }
        else if (/riflepaperco/.exec(website)) {
            description= $('p[itemprop="description"]').text();
        }
        else if (/hottopic/.exec(website)) {
            description= $('#tab1').html();
        }
        else if (/aeropostale/.exec(website)) {
            description= $('#product-content div[itemprop="description"]').html();

        }
        else if (/jcpenney/.exec(website)) {
            description= $('.ProductDescription-productDescription > div:first-of-type').html();

        }
        else if (/allmodern/.exec(website)) {
            if($('.ProductOverviewInformation')[0]){
                description= $('.ProductOverviewInformation-content').html();
            }
            else{
                description= $('.ProductDetailSpecifications-content').html();
            }

        }
        else if (/anthropologie/.exec(website)) {
            description= $('#product_description__panel').html();

        }
        else if (/brookstone/.exec(website)) {
            description= $('.shortDescription').html();

        }
        else if (/containerstore/.exec(website)) {
            description1= $('p[itemprop="description"]').html();
            description2= $('#productBullets').html();
            description = description1 + description2;

        }
        else if (/shopdisney/.exec(website)) {
            description= $('.toggle-container .toggled-content').html();

        }
        else if (/dwellstudio/.exec(website)) {
            description= $('.ProductDetailSpecifications-content').html();

        }
        else if (/food52/.exec(website)) {
            description= $('#description').html();

        }
        else if (/kaufmann-mercantile/.exec(website)) {
            description= $('#details div[itemprop="description"]').html();

        }
        else if (/pier1/.exec(website)) {
            description= $('.tab-description-item').html();

        }
        else if (/potterybarnkids/.exec(website)) {
            description= $('#tab0 .accordion-tab-copy').html();

        }
        else if (/potterybarn/.exec(website)) {
            description= $('#tab0 .accordion-tab-copy').html();

        }
        else if (/shopko/.exec(website)) {
            description1= $('.product-description').html();
            description1= jQuery("<p>").append(description1);
            description1.find('.section-hed').remove();
            description = description1.html();

        }
        else if (/shopterrain/.exec(website)) {
            description= $('.v-product-detailinfo div[itemprop="description"]').html();
        }
        else if (/landofnod/.exec(website)) {
            description= $('.overview .tab-content').html();
        }
        else if (/adidas/.exec(website)) {
            description= $('.ultimate-pdp-test-hide').html();
        }
        else if (/mindymaesmarket/.exec(website)) {
            description= $('.description').html();
        }
        else if (/ae/.exec(website)) {
            description1= $('.pdp-about-details').html();
            description1= jQuery("<p>").append(description1);
            description1.find('.pdp-about-title').remove();
            description = description1.html();
        }
        else if (/armaniexchange/.exec(website)) {
            description= $('li[data-ytos-tab="Description"] .content').html();
        }
        else if (/anntaylor/.exec(website)) {
            description= $('.description').html();
        }
        else if (/bananarepublic/.exec(website)) {
            description= $('.product-information--details').html();
        }
        else if (/coach/.exec(website)) {
            description1 = $('.pdp-info__details-content').html();
            description2 = $('.pdp-info__description-content').html();
            description = description1 + description2;
        }
        else if (/express/.exec(website)) {
            description= $('.bodySecondary').html();

        }
        else if (/urbanoutfitters/.exec(website)) {
            description= $('#product_description__panel .c-text-truncate p:first-of-type').html();

        }
        else if (/verabradley/.exec(website)) {
            description= $('#details').html();

        }
        else if (/daintyhooligan/.exec(website)) {
            description= $('#tabify-1').html();

        }
        else if (/dollargeneral/.exec(website)) {
            description= $('.description').html();

        }
        else if (/girlfriend/.exec(website)) {
            description= $('.information .excerpt').html();

        }
        else if (/lulus/.exec(website)) {
            description1= $('.description-text').html();
            description2 = $('.description-list').html();
            description = description1 + description2;

        }
        else if (/modcloth/.exec(website)) {
            description= $('meta[property="og:description"]').attr('content');

        }
        else if (/rue21/.exec(website)) {
            description= $('#productDescription').html();

        }
        else if (/hellomerch/.exec(website)) {
            description= $('.description').html();

        }
        else if (/ikea/.exec(website)) {
            description= $('#careInst').html();

        } else if (/homedepot/.exec(website)) {
            description= $('.main_description').html();

        } else if (/hm/.exec(website)) {
            description= $('.description').html();

        } else if (/target/.exec(website)) {
           description1= $('#tab-content-details').html();
           description1= jQuery("<p>").append(description1);
           description1.find('#reportInCorrectProduct, .js-productwronginfo').remove();
           description = description1.html();

        } else if (/newegg/.exec(website)) {
            description= $('#Overview_Content').html();

        } else if (/overstock/.exec(website)) {
            description= $('.description').html();

        } else if (/woot/.exec(website)) {
            description= $('#tab-features .primary-content').html();

        } else if (/jet/.exec(website)) {
           description= $('.mr2 .h5 p').html();

        } else if (/staples/.exec(website)) {
            description1= $('#productInfo').html();
            description1= jQuery("<p>").append(description1);
            description1.find('h2').remove();
            description = description1.html();

        } else if (/walgreens/.exec(website)) {
            description= $('#descriptionContentPlaceHolder').html();

        } else if (/lowes/.exec(website)) {
            description= $('#collapseDesc').html();

        } else if (/bhphotovideo/.exec(website)) {
            if($('#ov')[0]){
                description= $('#Overview .leftPanel').html();
            }
            else{
                description= $('.product-highlights').html();
            }

        } else if (/1800flowers/.exec(website)) {
            description= $('.MOPtab1content .TabbedPanelsContent').html();

        } else if (/macys/.exec(website)) {
            description= $('.product-details-content').html();

        } else if (/qvc/.exec(website)) {
            description= $('.accLongDesc .accordionText').html();

        } else if (/gap/.exec(website)) {
            description= $('.product-information--details').html();

        } else if (/bathandbodyworks/.exec(website)) {
            description= $('div[itemprop="description"]').html();

        } else if (/hsn/.exec(website)) {
            description= $('#overview div[itemprop="description"]').html();

        } else if (/victoriassecret/.exec(website)) {
            description= $('.long-description').html();

        } else if (/nike/.exec(website)) {
            description= $('.exp-pdp-benefits-container .pi-tier3').html();

        } else if (/apple/.exec(website)) {
            description= "Apple";

        } 
        else if (/menswearhouse/.exec(website)) {
            description= $('#mydetail').html();
        }
        else if (/freepeople/.exec(website)) {
            description= $('#product_description__panel .c-text-truncate').html();
        }
        else if (/crateandbarrel/.exec(website)) {
            if($('.sectionDescription')[0]){
                description = $('.sectionDescription').html();
            }
            else{
                description= $('.hwDetails .hwDetailsP').html();
            }
        }
        else if (/footlocker/.exec(website)) {
            description= $('#pdp_description').html();
        }
        else if (/forever21/.exec(website)) {
            description= $('#divDescription').html();
        }
        else if (/bloomingdales/.exec(website)) {
            description= $('#pdp_details_tab .product-details-accordion-content').html();
        }
        else if (/cb2/.exec(website)) {
            if($('.productCarousel')[0]){
                description1= $('.productDescription').html();
                description2 = jQuery("<p>").append(description1);
                description2.find('.copyHeader').remove();
                description1 = description2.html();
                description2= $('.productDescriptionList').html();
                description= description1 + description2;
            }
            else{
                description= $('.overview .tab-content').html();
                description1 = jQuery("<p>").append(description);
                description1.find('.copyHeader').remove();
                description = description1.html();
            }
        }
        else if (/billabong/.exec(website)) {
            description= $('.product-description').html();
        }
        else if (/chanel/.exec(website)) {
            description= $('.currentPage .product-details .description').html();
        }
        else if (/gucci/.exec(website)) {
            description= $('.product-detail').html();
        }
        else if (/guess/.exec(website)) {
            description= $('.prodDescSpacer').html();
        }
        else if (/hollister/.exec(website)) {
            description1= $('.details__description').html();
            description2= $('.fabric-care__container').html();
            description= description1 + description2;
        }
        else if (/loft/.exec(website)) {
            description= $('#details-panel').html();
        }
        else if (/lenscrafters/.exec(website)) {
            description= $('#pdp-description').html();
        }
        else if (/microsoft/.exec(website)) {
            if($('#OverviewTab')[0]){
                description= $('#OverviewTab').html();
            }
            else{
                description= $('.cli_short-description').html();
            }
        }
        else if (/oakley/.exec(website)) {
            description= $('.product-description').html();
        }
        else if (/sephora/.exec(website)) {
            description= $('.css-qpwegv .css-1e532l3').html();
        }
        else if (/sunglasshut/.exec(website)) {
            description= $('.description').html();
        }
        else if (/tiffany/.exec(website)) {
            description= $('#drawerDescription div').html();
        }
        else if (/underarmour/.exec(website)) {
            description2= $('.product-dna .buypanel_productdescription').html();
            description2 = jQuery("<p>").append(description2);
            description2.find('a, .feedback_link_container').remove();
            description2 = description2.html();
            if($('.science-paragraph')[0]){
                description1= $('.science-paragraph').html();
                description= description1 + description2;
            }
            else{
                description= description2;
            }
        }
        else if (/vans/.exec(website)) {
            description= $('#product-detail-1').html();
        }
        else if (/advanceautoparts/.exec(website)) {
            description= $('.pd-ec-desc').html();
        }
        else if (/asus/.exec(website)) {
            description= $('.item-detail').html();
        }
        else if (/bedbathandbeyond/.exec(website)) {
            description1= $('div[itemprop="description"], .productDesc').html();
            description2= $('#prodExplore-tabs1').html();
            description= description1 + description2;
        }
        else if (/biglots/.exec(website)) {
            description= $('.product-short-description').html();
        }
        else if (/dillards/.exec(website)) {
            description1= $('#description-panel').html();
            description1 = jQuery("<p>").append(description1);
            description1.find('.dept-mic-style').remove();
            description = description1.html();
        }
        else if (/tjmaxx/.exec(website)) {
            description1= $('.product-description').html();
            description1 = jQuery("<p>").append(description1);
            description1.find('a').remove();
            description = description1.html();
        }
       else if (/tractorsupply/.exec(website)) {
            description= $('#desc1').html();
        }
       else if (/burlingtoncoatfactory/.exec(website)) {
            description1= $('#ctl03_MainContentArea_ctl00_ctl00_ctl00_ProductDisplay_ProductDescriptionModule_pnlDescriptionFull').html();
            description1 = jQuery("<p>").append(description1);
            description1.find('h2, a').remove();
            description = description1.html();
        }
       else if (/officedepot/.exec(website)) {
            description= $('.sku_desc').html();
        }
       else if (/acehardware/.exec(website)) {
            description= $('.descriptionContent div:first-of-type').html();
        }
       else if (/autozone/.exec(website)) {
            description= $('#features').html();
        }
       else if (/cvs/.exec(website)) {
            description= $('.product-info-typography cvs-content').html();
        }
       else if (/spasydell/.exec(website)) {
            description= $('.woocommerce-Tabs-panel--description').html();
        }
       else if (/dell/.exec(website)) {
            description= $('#product-detail-feature-container').html();
        }
       else if (/ethanallen/.exec(website)) {
            description= $('.product-info .toggle-content:first-of-type').html();
        }
       else if (/francescas/.exec(website)) {
            description= $('#accordionTarget01').html();
        }
       else if (/glossier/.exec(website)) {
            description= $('.pro-info-wrp .pro-title').html();
        }
       else if (/asos/.exec(website)) {
            description= $('.product-description span ul').html();
        }
       else if (/teeturtle/.exec(website)) {
           description= $('.grid .product-desc-column:nth-of-type(2)').html();
       }
       else if (/katespade/.exec(website)) {
           description1= $('#small-details').html();
           description= description1 + $('.right-column').html();
       }
       else if (/heruniverse/.exec(website)) {
           description= $('#tab1').html();
       }
       else if (/bonfire/.exec(website)) {
           description1= $('.camp-CampaignSubtitle').html();
           description = description1 + $('.camp-CampaignDesc_Content').html();
       }
       else if (/universalorlando/.exec(website)) {
           description1 = $('#ucProductDetail_lblProductDescriptionValue').html();
           description2 = $('#ucProductDetail_dvWashingInstruction').html();
           description = description1 + description2 + $('#ucProductDetail_dvUserRequirement').html();
       }
       else if (/cultivatewhatmatters/.exec(website)) {
           description= $('.product-description').html();
       }
       else if (/etee/.exec(website)) {
           description= $('.product-description--below').html();
       }
       else if (/sharperimage/.exec(website)) {
           description= $('#collapseOne .panel-body').children('p').html();
       }
       else if (/astrogaming/.exec(website)) {
           description= $('.details-long-description').html();
       }
       else if (/redbubble/.exec(website)) {
           if($('.product-information')[0]){
               description= $('.product-information').html();
           }
           else{
               description= $('.shared-components-ProductInfo-ProductInfo__wrapper--1RGZq').html();
           }
       }
       else if (/southernfriedchics/.exec(website)) {
           description= $('#product_description').html();
       }
       else if (/payless/.exec(website)) {
           description= $('.product-description').clone().children().remove().end().text();
       }
       else if (/araiamericas/.exec(website)) {
           description= $('.helmet_fit').html();
       }
       else if (/vat19/.exec(website)) {
           description= $('#overview').html();
       }
       else if (/urbanbodyjewelry/.exec(website)) {
           description= $('#product_tabs_description_contents').html();
       }
       else if (/zgallerie/.exec(website)) {
           description= $('#tabContent1').html();
       }
       else if (/journeys/.exec(website)) {
           description= $('.detail-long-description h2').html();
       }
       else if (/swarovski/.exec(website)) {
           description= $('span[itemprop="description"] .belowlist').html();
       }
       else if (/saksoff5th/.exec(website)) {
           description= $('.product-description').html();
       }
       else if (/blanknyc/.exec(website)) {
           description= $('.product-shop .description').html();
       }
    
        else {
            description= getMetaContent("property", "og:description");
        }
    } finally {
        if (description) {
            
            description = description.replace(/<!--[\s\S]*?-->/g, "");
            
            // Convert all tag beginnings (e.g. <div) except ul, li to p
            description = description.replace(/<(?!ul|li|h1|h2|h3|h4|b|i|br|span|style|strong|script|video\b)\b\w+/g  , '<p');

            // convert all tag endings (e.g. /div>) except ul, li to p
            description = description.replace(/\/((?!ul|li|h1|h2|h3|h4|b|i|br|span|style|strong|script|video)\w+)>/g , '/p>');

            // Remove all classes, ids etc from resulting p, ul, or li tags
            description = description.replace(/<p\s[^>]+>/g , '<p>');
            description = description.replace(/<li\s[^>]+>/g , '<li>');
            description = description.replace(/<ul\s[^>]+>/g , '<ul>');
            return description;
        } else {
            return "";
        }
    }
}