function getItemMerchantName(website) {
    var merchant_name;
    try {
        if (/amazon/.exec(website)) {
            merchant_name= "Amazon";

        } else if (/ebay/.exec(website)) {
            merchant_name= "Ebay";

        } else if (/walmart/.exec(website)) {
            merchant_name= "Walmart";

        }
        else if (/bestbuy/.exec(website)) {
            merchant_name= "Best Buy";
        }
        else if (/belk/.exec(website)) {
            merchant_name= "Belk";
        }
        else if (/etsy/.exec(website)) {
            merchant_name= "Etsy";
        }
        else if (/groupon/.exec(website)) {
            merchant_name= "Groupon";
        }
        else if (/zappos/.exec(website)) {
            merchant_name= "Zappos";
        }
        else if (/toysrus/.exec(website)) {
            merchant_name= "Toys R Us";
        }
        else if (/kohls/.exec(website)) {
            merchant_name= "Kohl's";
        }
        else if (/nordstromrack/.exec(website)) {
            merchant_name= "Nordstrom Rack";
        }
        else if (/nordstrom/.exec(website)) {
            merchant_name= "Nordstrom";
        }
        else if (/barnesandnoble/.exec(website)) {
            merchant_name = "Barnes & Noble"
        }
        else if (/petsmart/.exec(website)) {
            merchant_name= "PetSmart";

        }
        else if  (/dickssportinggoods/.exec(website)) {
            merchant_name= "Dick's Sporting Goods";

        }
        else if (/shoes/.exec(website)) {
            merchant_name= "shoes.com";

        }
        else if (/gamestop/.exec(website)) {
            merchant_name= "GameStop";

        }
        else if (/costco/.exec(website)) {
            merchant_name= "Costco";

        }
        else if (/williams-sonoma/.exec(website)) {
            merchant_name= "Williams-Sonoma";

        }
        else if (/sears/.exec(website)) {
            merchant_name= "Sears";

        }
        else if (/wayfair/.exec(website)) {
            merchant_name= "Wayfair";

        }
        else if (/neimanmarcus/.exec(website)) {
            merchant_name= "Neiman Marcus";

        }
        else if (/coolstuffinc/.exec(website)) {
            merchant_name= "CoolStuffInc";

        }
        else if (/roomstogo/.exec(website)) {
            merchant_name= "Rooms to Go";

        }
        else if (/riflepaperco/.exec(website)) {
            merchant_name= "Rifle Paper Co.";

        }
        else if (/hottopic/.exec(website)) {
            merchant_name= "Hot Topic";

        }
        else if (/aeropostale/.exec(website)) {
            merchant_name= "Aéropostale";

        }
        else if (/jcpenney/.exec(website)) {
            merchant_name= "J.C. Penney";

        }
        else if (/allmodern/.exec(website)) {
            merchant_name= "All Modern";

        }
        else if (/anthropologie/.exec(website)) {
            merchant_name= "Anthropologie";

        }
        else if (/brookstone/.exec(website)) {
            merchant_name= "Brookstone";

        }
        else if (/containerstore/.exec(website)) {
            merchant_name= "The Container Store";

        }
        else if (/shopdisney/.exec(website)) {
            merchant_name= "Shop Disney";

        }
        else if (/dwellstudio/.exec(website)) {
            merchant_name= "Dwell Studio";

        }
        else if (/food52/.exec(website)) {
            merchant_name= "Food 52";

        }
        else if (/kaufmann-mercantile/.exec(website)) {
            merchant_name= "Kaufmann Mercantile";

        }
        else if (/pier1/.exec(website)) {
            merchant_name= "Pier 1 Imports";

        }
        else if (/potterybarnkids/.exec(website)) {
            merchant_name= "Pottery Barn Kids";

        }
        else if (/potterybarn/.exec(website)) {
            merchant_name= "Pottery Barn";

        }
        else if (/shopko/.exec(website)) {
            merchant_name= "Shopko";

        }
        else if (/shopterrain/.exec(website)) {
            merchant_name= "Shop Terrain";
        }
        else if (/landofnod/.exec(website)) {
            merchant_name= "The Land of Nod";

        }
        else if (/adidas/.exec(website)) {
            merchant_name= "Adidas";

        }
        else if (/mindymaesmarket/.exec(website)) {
            merchant_name= "Mindy Mae's Market";
        }
        else if (/ae/.exec(website)) {
            merchant_name= "American Eagle Outfitters";

        }
        else if (/armaniexchange/.exec(website)) {
            merchant_name= "Armani Exchange";

        }
        else if (/anntaylor/.exec(website)) {
            merchant_name= "Ann Taylor";

        }
        else if (/bananarepublic/.exec(website)) {
            merchant_name= "Banana Republic";

        }
        else if (/coach/.exec(website)) {
            merchant_name= "Coach";

        }
        else if (/express/.exec(website)) {
            merchant_name= "Express";

        }
        else if (/urbanoutfitters/.exec(website)) {
            merchant_name= "Urban Outfitters";

        }
        else if (/verabradley/.exec(website)) {
            merchant_name= "Vera Bradley";

        }
        else if (/daintyhooligan/.exec(website)) {
            merchant_name= "Dainty Hooligan";

        }
        else if (/dollargeneral/.exec(website)) {
            merchant_name= "Dollar General";

        }
        else if (/girlfriend/.exec(website)) {
            merchant_name= "Girlfriend Collective";

        }
        else if (/lulus/.exec(website)) {
            merchant_name= "Lulus";

        }
        else if (/modcloth/.exec(website)) {
            merchant_name= "ModCloth";

        }
        else if (/rue21/.exec(website)) {
            merchant_name= "rue21";

        }
        else if (/hellomerch/.exec(website)) {
            merchant_name= "Hello Merch";

        }
        else if (/ikea/.exec(website)) {
            merchant_name= "IKEA";

        } else if (/homedepot/.exec(website)) {
            merchant_name= "The Home Depot";

        } else if (/hm/.exec(website)) {
            merchant_name= "H&M";

        } else if (/target/.exec(website)) {
           merchant_name= "Target";

        } else if (/newegg/.exec(website)) {
            merchant_name= "Newegg";

        } else if (/overstock/.exec(website)) {
            merchant_name= "Overstock";

        } else if (/woot/.exec(website)) {
            merchant_name= "Woot";

        } else if (/jet/.exec(website)) {
           merchant_name= "Jet";

        } else if (/staples/.exec(website)) {
            merchant_name= "Staples";

        } else if (/walgreens/.exec(website)) {
            merchant_name= "Walgreens";

        } else if (/lowes/.exec(website)) {
            merchant_name= "Lowe's";

        } else if (/bhphotovideo/.exec(website)) {
            merchant_name= "B&H Photo Video";

        } else if (/1800flowers/.exec(website)) {
            merchant_name= "1-800-Flowers";

        } else if (/macys/.exec(website)) {
            merchant_name= "macy's";

        } else if (/qvc/.exec(website)) {
            merchant_name= "QVC";

        } else if (/gap/.exec(website)) {
            merchant_name= "GAP";

        } else if (/bathandbodyworks/.exec(website)) {
            merchant_name= "Bath & Body Works";

        } else if (/hsn/.exec(website)) {
            merchant_name= "HSN";

        } else if (/victoriassecret/.exec(website)) {
            merchant_name= "Victoria's Secret";

        } else if (/nike/.exec(website)) {
            merchant_name= "Nike";

        } else if (/apple/.exec(website)) {
            merchant_name= "Apple";

        } 
        else if (/menswearhouse/.exec(website)) {
            merchant_name= "Men's Wearhouse";
        }
        else if (/freepeople/.exec(website)) {
            merchant_name= "Free People";
        }
        else if (/crateandbarrel/.exec(website)) {
            merchant_name= "Crate&Barrel";
        }
        else if (/footlocker/.exec(website)) {
            merchant_name= "Foot Locker";
        }
        else if (/forever21/.exec(website)) {
            merchant_name= "Forever 21";
        }
        else if (/bloomingdales/.exec(website)) {
            merchant_name= "bloomingdale's";
        }
        else if (/cb2/.exec(website)) {
            merchant_name= "CB2";
        }
        else if (/billabong/.exec(website)) {
            merchant_name= "Billabong";
        }
        else if (/chanel/.exec(website)) {
            merchant_name= "Chanel";
        }
        else if (/gucci/.exec(website)) {
            merchant_name= "Gucci";
        }
        else if (/guess/.exec(website)) {
            merchant_name= "Guess";
        }
        else if (/hollister/.exec(website)) {
            merchant_name= "Hollister";
        }
        else if (/loft/.exec(website)) {
            merchant_name= "LOFT";
        }
        else if (/lenscrafters/.exec(website)) {
            merchant_name= "LensCrafters";
        }
        else if (/microsoft/.exec(website)) {
            merchant_name= "Microsoft";
        }
        else if (/oakley/.exec(website)) {
            merchant_name= "Oakley";
        }
        else if (/sephora/.exec(website)) {
            merchant_name= "Sephora";
        }
        else if (/sunglasshut/.exec(website)) {
            merchant_name= "sunglass hut";
        }
        else if (/tiffany/.exec(website)) {
            merchant_name= "Tiffany & Co.";
        }
        else if (/underarmour/.exec(website)) {
            merchant_name= "Under Armour";
        }
        else if (/vans/.exec(website)) {
            merchant_name= "Vans";
        }
        else if (/advanceautoparts/.exec(website)) {
            merchant_name= "Advanced Auto Parts";
        }
        else if (/asus/.exec(website)) {
            merchant_name= "Asus";
        }
        else if (/bedbathandbeyond/.exec(website)) {
            merchant_name= "Bed Bath & Beyond";
        }
        else if (/biglots/.exec(website)) {
            merchant_name= "Big Lots";
        }
        else if (/dillards/.exec(website)) {
            merchant_name= "Dillard's";
        }
        else if (/tjmaxx/.exec(website)) {
            merchant_name= "T.J. Maxx";
        }
       else if (/tractorsupply/.exec(website)) {
            merchant_name= "Tractor Supply Company";
        }
       else if (/burlingtoncoatfactory/.exec(website)) {
            merchant_name= "Burlington";
        }
       else if (/officedepot/.exec(website)) {
            merchant_name= "Office Depot";
        }
       else if (/acehardware/.exec(website)) {
            merchant_name= "Ace Hardware";
        }
       else if (/autozone/.exec(website)) {
            merchant_name= "AutoZone";
        }
       else if (/cvs/.exec(website)) {
            merchant_name= "CVS Pharmacy";
        }
       else if (/spasydell/.exec(website)) {
            merchant_name= "Spa Sydell";
        }
       else if (/dell/.exec(website)) {
            merchant_name= "Dell";
        }
       else if (/ethanallen/.exec(website)) {
            merchant_name= "Ethan Allen";
        }
       else if (/francescas/.exec(website)) {
            merchant_name= "Francesca's";
        }
       else if (/glossier/.exec(website)) {
            merchant_name= "Glossier";
        }
       else if (/asos/.exec(website)) {
            merchant_name= "ASOS";
        }
       else if (/teeturtle/.exec(website)) {
            merchant_name= "ASOS";
        }
       else if (/katespade/.exec(website)) {
            merchant_name= "Kate Spade";
        }
       else if (/heruniverse/.exec(website)) {
            merchant_name= "Her Universe";
        }
       else if (/bonfire/.exec(website)) {
            merchant_name= "Bonfire";
        }
       else if (/universalorlando/.exec(website)) {
            merchant_name= "Universal Orlando";
        }
       else if (/cultivatewhatmatters/.exec(website)) {
            merchant_name= "Cultivate What Matters";
        }
       else if (/sandcloudtowels/.exec(website)) {
            merchant_name= "Sand Cloud Towels";
        }
       else if (/shopetee/.exec(website)) {
            merchant_name= "Etee";
        }
       else if (/sharperimage/.exec(website)) {
            merchant_name= "Sharper Image";
        }
       else if (/astrogaming/.exec(website)) {
            merchant_name= "Astro";
        }
       else if (/redbubble/.exec(website)) {
            merchant_name= "Redbubble";
        }
       else if (/southernfriedchics/.exec(website)) {
            merchant_name= "Southern Fried Chics";
        }
       else if (/payless/.exec(website)) {
            merchant_name= "Payless";
        }
       else if (/araiamericas/.exec(website)) {
            merchant_name= "Arai Helmet";
        }
       else if (/vat19/.exec(website)) {
            merchant_name= "Vat19";
        }
       else if (/urbanbodyjewelry/.exec(website)) {
            merchant_name= "Urban Body Jewelry";
        }
       else if (/zgallerie/.exec(website)) {
            merchant_name= "Z Gallerie";
        }
       else if (/teefury/.exec(website)) {
            merchant_name= "TeeFury";
        }
       else if (/journeys/.exec(website)) {
            merchant_name= "Journeys";
        }
       else if (/swarovski/.exec(website)) {
            merchant_name= "Swarovski";
        }
       else if (/saksoff5th/.exec(website)) {
            merchant_name= "Saks Off Fifth";
        }
       else if (/blanknyc/.exec(website)) {
            merchant_name= "[BLANKNYC]";
        }
        else {
            merchant_name= '';
        }
    } finally {
        if (merchant_name) {
            return merchant_name;
        } else {
            return "";
        }
    }
}