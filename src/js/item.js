function getWebsiteList(website) {
    return [
        "amazon", "ebay", "walmart", "ikea", "homedepot", "hm", "target", "bestbuy", "etsy", "groupon",
        "newegg", "overstock", "woot", "jet", "zappos", "staples", "dickssportinggoods", "toysrus", "walgreens", "lowes",
        "gamestop", "bhphotovideo", "barnesandnoble", "petsmart", "1800flowers", "kohls", "nordstrom", "shoes", "macys",
        "apple", "qvc", "costco", "gap", "williams-sonoma", "sears", "wayfair", "bathandbodyworks", "hsn",
        "victoriassecret", "nike", "neimanmarcus", "coolstuffinc", "zulily", "bedbathandbeyond", "belk", "wish",
        "rei", "officedepot", "cdw", "menswearhouse", "forever21", "freepeople", "crateandbarrel", "roomstogo", "hottopic", 
        "riflepaperco", "aeropostale", "jcpenney", "footlocker", "allmodern", "anthropologie", "bloomingdales", "brookstone", "cb2", 
        "containerstore", "disneystore", "dwellstudios", "food52", "kaufmannmercantile", "nordstrom", "pier1", "potterybarn", "potterybarnkids", 
        "shopko", "shopterrain", "landofnod", "adidas", "americaneagle", "armaniexchange", "anntaylor", "bananarepublic", "billabong", "coach", 
        "chanel", "express", "gucci", "guess", "hollister", "loft", "lenscrafters", "microsoft", "oakley", "pink", "sephora", "sunglasshut", "tiffany", 
        "underarmour", "urbanoutfitters", "vans", "verabradley", "advancedautoparts", "asus", "bedbathandbeyond", "biglots", "daintyhooligan", 
        "dillards", "dollargeneral", "girlfriend", "lulus", "modcloth", "rue21", "tjmaxx", "tractorsupply", "hellomerch", "burlingtoncoatfactory", 
        "acehardware", "autozone", "cvs", "dell", "ethanallen", "francescas", "glossier", "asos", "teeturtle", "katespade", "heruniverse", "bonfire", "universalorlando", "cultivatewhatmatters", "sandcloudtowels", "shopetee", "sharperimage", "astrogaming", "redbubble", "southernfriedchics", "payless", "araiamericas", "vat19", "urbanbodyjewelry", "zgallerie", "teefury", "journeys", "mindymaesmarket", "swarovski", "saksoff5th", "nordstromrack", "spasydell", "blanknyc"
    ];
}

/* Get the item from the content of the page */
function getItem(website) {
    return {
        "merchant_name": getItemMerchantName(website),
        "apiID": getItemApiID(website),
        "description": getItemDescription(website),
        "name": getItemName(website),
        "price": getItemPrice(website),
        "image": getItemImage(website),
        "size": getItemSize(website),
        "color": getItemColor(website)
    };
}
function getElementsByProperty(parent, tagName, property, value, matchAll) {
    var result = [];
    var elements = parent.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        var test = new RegExp("^" + value + "$"); // Perfect match
        if (test.exec(elements[i].getAttribute(property))) {
            result.push(elements[i]);
        }
    }
    if (!result[0] || matchAll) {
        for (var i = 0; i < elements.length; i++) {
            var test = new RegExp(value); // Normal match
            if (test.exec(elements[i].getAttribute(property))) {
                result.push(elements[i]);
            }
        }
    }
    return result;
}

function getMetaContent(attribute, value) {
    return getElementsByProperty(document, "meta", attribute, value)[0].getAttribute("content");
}

function ogTitle(suffix) {
    return getMetaContent("property", "og:title").replace(suffix, "")
}

function getSelected(property, value) {
    var element = getElementsByProperty(document, "select", property, value)[0];
    if (element) {
        return element.options[element.selectedIndex].textContent;
    } else {
        return null;
    }
}

function getSpec(id, tagname, value, value2) {
    var parents = document.getElementById(id).getElementsByTagName(tagname);
    var result;

    var match = new RegExp(value.toUpperCase());
    var match2 = null;
    if (value2) {
        match2 = new RegExp(value2.toUpperCase());
    }
    for (var i = 0; i < parents.length; i++) {
        if (match.exec(parents[i].textContent.toUpperCase()) ||
            (match2 && match2.exec(parents[i].textContent.toUpperCase()))) {
            if (parents[i].nextElementSibling) {
                result = parents[i].nextElementSibling.textContent;
            } else {
                result = parents[i].nextSibling.textContent;
            }
            i = parents.length;
        }
    }

    return result;
}
