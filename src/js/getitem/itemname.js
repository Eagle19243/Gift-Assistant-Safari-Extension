function getItemName(website) {
    var name;
    try {
        if (/amazon/.exec(website)) {
            name = document.getElementById("productTitle").textContent;

        } else if (/ebay/.exec(website)) {
            name = ogTitle("  | eBay");

        } else if (/walmart/.exec(website)) {
            try {
                name = ogTitle(" - Walmart.com");
            } catch(err) {
                name = document.getElementsByTagName("title")[0].textContent.replace(" - Walmart.com", "");
            }

        } 
        else if (/toysrus/.exec(website)) {
            name= $('.product-title').text();
        }
        else if (/anntaylor/.exec(website)) {
            name= $('.product-information h1').text();
        }
        else if (/adidas/.exec(website)) {
            name= $('#product-title').text();
        }
        else if (/aeropostale/.exec(website)) {
            name= $('#product-content .product-name').text();
        }
        else if (/ikea/.exec(website)) {
            name = ogTitle("  - IKEA");

        } else if (/homedepot/.exec(website)) {
            name = ogTitle(" - The Home Depot");

        } else if (/hm/.exec(website)) {
            naming = $('#product h1').text();
            name = naming.split(' $')[0];

        } else if (/target/.exec(website)) {
            var parent = getElementsByProperty(document, "h2", "class", "title-product")[0];
            name = getElementsByProperty(parent, "span", "itemprop", "name")[0].textContent;

        } else if (/newegg/.exec(website)) {
            name = ogTitle(" - Newegg.com");

        } else if (/overstock/.exec(website)) {
            name = $('.add-to-cart-container .product-title h1').text();

        } else if (/woot/.exec(website)) {
            name = document.getElementById("attribute-selector").firstElementChild.firstElementChild.textContent;

        } else if (/jet/.exec(website)) {
            name = document.getElementsByTagName("title")[0].textContent.replace(" | Jet.com", "");

        } else if (/staples/.exec(website)) {
            name = ogTitle(" | Staples®");

        } else if (/walgreens/.exec(website)) {
            name = document.getElementById("productName").firstElementChild.textContent;

        } else if (/lowes/.exec(website)) {
            name = getMetaContent("itemprop", "name");

        } else if (/bhphotovideo/.exec(website)) {
            name = getElementsByProperty(document, "span", "itemprop", "name")[0].textContent;

        } 
        else if (/nordstromrack/.exec(website)) {
            name = $('.product-details__title a').text() + " " + $('.product-details__title span').text();
        }  
        else if (/1800flowers/.exec(website) || /nordstrom/.exec(website) || /costco/.exec(website)) {
            name = getElementsByProperty(document, "h1", "itemprop", "name")[0].textContent;

        } else if (/macys/.exec(website)) {
            if (document.getElementById("productTitle")) {
                name = document.getElementById("productTitle").textContent;
            } else {
                name = getElementsByProperty(document, "div", "itemprop", "name")[0].textContent;
            }

        } else if (/qvc/.exec(website)) {
            name = document.getElementsByTagName("title")[0].textContent.replace(" — QVC.com", "");

        } else if (/gap/.exec(website)) {
            name = getElementsByProperty(document, "h1", "class", "product-title")[0].textContent;

        } else if (/bathandbodyworks/.exec(website)) {
            name = document.getElementById("pdpMain").getElementsByClassName("product-name")[0].textContent;

        } else if (/hsn/.exec(website)) {
            try {
                name = document.getElementById("product-name").textContent;
            } catch(e) {
                name = document.getElementsByClassName("title")[0].textContent;
            }

        } else if (/victoriassecret/.exec(website)) {
            name = $('#breadcrumbs li:last-of-type a').text();

        } else if (/nike/.exec(website)) {
            name = document.getElementsByClassName("exp-product-title")[0].textContent;

        } else if (/apple/.exec(website)) {
            try {
                name = getMetaContent("property", "og:title");
            } catch(e) {}
            if($('#title h1')[0]){
                name = $('#title h1').text();
            }
            else {
                name = document.getElementsByClassName("as-configuration-maintitle")[0].textContent;
            }

        } 
        else if (/menswearhouse/.exec(website)) {
            name = $('.prod-title').text();
        }
        else if (/freepeople/.exec(website)) {
            name = $('.c-product-container__inner h1').text();
        }
        else if (/crateandbarrel/.exec(website)) {
            name = $('.shoppingBar h1').text();
        }
        else if (/footlocker/.exec(website)) {
            name = $('#product_form #model_name').attr('value');
        }
        else if (/bloomingdales/.exec(website)) {
            name = $('#productTitle #brandNameLink').text();
        }
        else if (/cb2/.exec(website)) {
            if($('.productCarousel')[0]){
                name = $('.shop-bar-product-title').text();
            }
            else{
                name = $('.product-title').text();
            }
        }
        else if (/billabong/.exec(website)) {
            name = $('.product-info .product-name').text();
        }
        else if (/chanel/.exec(website)) {
            name = $('.currentPage .details-infos h2').text();
        }
        else if (/gucci/.exec(website)) {
            name = $('.product-name').text();
        }
        else if (/guess/.exec(website)) {
            name = $('h1.header-big').text();
        }
        else if (/hollister/.exec(website)) {
            name = $('.product-page-title').text();
        }
        else if (/loft/.exec(website)) {
            name = $('header.active h1').text();
        }
        else if (/lenscrafters/.exec(website)) {
            name = $('.brand-name').text();
        }
        else if (/microsoft/.exec(website)) {
            name = $('#page-title').text();
        }
        else if (/oakley/.exec(website)) {
            name = $('.pdhero-name').text();
        }
        else if (/sephora/.exec(website)) {
            name1 = $('.css-jw7eol .css-cjz2sh').text();
            name2 = $('.css-jw7eol .css-1g2jq23').text();
            name = name1 + " " + name2;
        }
        else if (/sunglasshut/.exec(website)) {
            name1 = $('h1[itemprop="name"]').text();
            name = name1 + " " + $('h2[itemprop="name"]').text();
        }
        else if (/tiffany/.exec(website)) {
            name1 = $('#itemHeader .l1.eyebrow').text();
            name = name1 + " " + $('h1.t1').text();
        }
        else if (/underarmour/.exec(website)) {
            name = $('h1[itemprop="name"] span').text();
        }
        else if (/vans/.exec(website)) {
            name = $('#product-info h1').text();
        }
        else if (/advanceautoparts/.exec(website)) {
            name = $('.aap-productdetails__title').text();
        }
        else if (/asus/.exec(website)) {
            name = $('#pro_title').text();
        }
        else if (/bedbathandbeyond/.exec(website)) {
            name = $('#productTitle').text();
        }
        else if (/biglots/.exec(website)) {
            name = $('.product-detail-wrapper .product-name').text();
        }
        else if (/dillards/.exec(website)) {
            name = $('#product-title').text();
        }
        else if (/tjmaxx/.exec(website)) {
            name1 = $('.section-header .product-brand').text();
            name= name1 + " " + $('.section-header .product-title').text();
        }
       else if (/tractorsupply/.exec(website)) {
            name = $('#itemName').text();
        }
       else if (/burlingtoncoatfactory/.exec(website)) {
            name = $('#LblProductTitle').text();
        }
       else if (/officedepot/.exec(website)) {
            naming = $('#skuHeading h1').text();
            name = naming.split('Item')[0];
        }
       else if (/acehardware/.exec(website)) {
            name = $('#prodRCol .prodC1').text();
        }
       else if (/autozone/.exec(website)) {
            name = $('.prodName').text();
        }
       else if (/cvs/.exec(website)) {
            name = $('.main-title').text();
        }
        else if (/spasydell/.exec(website)) {
            name = $('.product_title').text();
        }
       else if (/dell/.exec(website)) {
            name = $('#sharedPdPageProductTitle').text();
        }
       else if (/ethanallen/.exec(website)) {
            name = $('#product-content .product-name').text();
        }
       else if (/francescas/.exec(website)) {
            name = $('.ml-product-name h1').text();
        }
       else if (/glossier/.exec(website)) {
            name = $('.h-el-b .pro-title h1').text();
        }
       else if (/asos/.exec(website)) {
            name = $('.product-hero h1').text();
        }
       else if (/jcpenney/.exec(website)) {
            name = $('.PDP-productTitleContainer h1').text();
        }
        else if (/teeturtle/.exec(website)) {
            name = $('.page-title').text();
        }
        else if (/katespade/.exec(website)) {
            name = $('#product-content .product-name').text();
        }
        else if (/bonfire/.exec(website)) {
            name = $('.camp-Details .camp-CampaignTitle h1').text();
        }
        else if (/universalorlando/.exec(website)) {
            name = $('#ucProductDetail_lblDisplayName').text();
        }
        else if (/sharperimage/.exec(website)) {
            name = $('.product-info__action-items h1').text();
        }
        else if (/astrogaming/.exec(website)) {
            name = $('.desktop-only .product-name').text();
        }
        else if (/southernfriedchics/.exec(website)) {
            name = $('.productnamecolorLARGE.colors_productname').text();
        }
        else if (/araiamericas/.exec(website)) {
            name = $('.helmet-title').text();
        }
        else if (/urbanbodyjewelry/.exec(website)) {
            name = $('.product-name h1').text();
        }
        else if (/zgallerie/.exec(website)) {
            name = $('#ProductNameTitle').text();
        }
        else if (/swarovski/.exec(website)) {
            name = $('.product-info h1').text();
        }
        else if (/blanknyc/.exec(website)) {
            name = $('.product-name h1').text();
        }
        else {
            name = getMetaContent("property", "og:title");
        }
    } finally {
        if (name) {
            return name;
        } else {
            return "";
        }
    }
}
