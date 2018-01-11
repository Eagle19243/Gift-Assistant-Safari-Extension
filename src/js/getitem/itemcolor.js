
function getItemColor(website) {
    var color;
    try {
        if (/amazon/.exec(website)) {
            color = getSelected("id", "native_dropdown_selected_color_name");
            if (!color) {
                var parent = document.getElementById("variation_color_name");
                color = getElementsByProperty(parent, "span", "class", "selection")[0].textContent;
            }

        } else if (/ebay/.exec(website)) {
            var elements = document.getElementsByClassName("msku-sel");
            for (var i = 0; i < elements.length; i++) {
                if (/COLOR/.exec(elements[i].getAttribute("name").toUpperCase())) {
                    color = elements[i].options[elements[i].selectedIndex].textContent;
                    i = elements.length;
                }
            }
            if (!color) {
                color = getElementsByProperty(document, "h2", "itemprop", "color")[0].textContent;
            }

        } else if (/walmart/.exec(website)) {
            color = $('.chooser .chooser-option-current div').text();

        } else if (/bestbuy/.exec(website)) {
            var fields = getElementsByProperty(document, "div", "class", "specification-name");
            var values = getElementsByProperty(document, "div", "class", "specification-value");
            for (var i = 0; i < fields.length; i++) {
                if (/COLOR/.exec(fields[i].firstElementChild.textContent.toUpperCase())) {
                    color = values[i].textContent;
                    i = td.length;
                }
            }

        } 
        else if (/belk/.exec(website)) {
            color = $('#product-content .color .label .attribute-value').text();
        }
        else if (/etsy/.exec(website)) {
            color = getSelected("id", "inventory-variation-select-1");

        } else if (/ikea/.exec(website)) {
            color = getSelected("title", "color");

        } else if (/homedepot/.exec(website)) {
            var td = getElementsByProperty(document, "td", "class", "even");
            for (var i = 0; i < td.length; i++) {
                if (/COLOR/.exec(td[i].firstElementChild.textContent.toUpperCase())) {
                    color = td[i].nextElementSibling.firstElementChild.textContent;
                    i = td.length;
                }
            }
            if (!color) {
                color = getElementsByProperty(document, "span", "itemprop", "color")[0].textContent;
            }

        } else if (/groupon/.exec(website)) {
            color = getSelected("data-bhw", "VariationsTrait:color");
            if (!color) {
                color = getSelected("data-bhw", "VariationsTrait:option");
            }

        } else if (/target/.exec(website)) {
            var divElements = getElementsByProperty(document, "div", "class", "title product-variation-color-title", true);
            var tmp;

            for (var i = 0; i < divElements.length; i++) {
                if (/COLOR/.exec(divElements[i].firstElementChild.firstElementChild.textContent.toUpperCase())) {
                    tmp = divElements[i].firstElementChild.firstElementChild.nextElementSibling.textContent;
                }
            }
            if (tmp) {
                color = tmp;
            } else {
                var parent = document.getElementById("atcMainWrap");
                color = getElementsByProperty(parent, "span", "class", "selImgCol")[0].textContent;
            }

        } else if (/hm/.exec(website)) {
            color = document.getElementById("text-selected-article").textContent;

        } else if (/newegg/.exec(website)) {
            var parents = document.getElementById("Specs").getElementsByTagName("dt");
            for (var i = 0; i < parents.length; i++) {
                if (/COLOR/.exec(parents[i].textContent.toUpperCase())) {
                    color = parents[i].nextElementSibling.textContent;
                    i = parents.length;
                }
            }

        } else if (/woot/.exec(website)) {
            color = getSelected("id", "attr-color");

        } else if (/jet/.exec(website)) {
            color = getSpec("pdv", "td", "color");

        } else if (/zappos/.exec(website)) {
            color = getSelected("id", "color");

        } else if (/toysrus/.exec(website)) {
            color = $('.sticky-price-contents .color-text.color_text .inline').text();

        } else if (/lowes/.exec(website)) {
            color = getSpec("collapseSpecs", "th", "color");

        } else if (/bhphotovideo/.exec(website)) {
            color = getSpec("Specification", "td", "color");

        } else if (/barnesandnoble/.exec(website)) {
            color = getSpec("ProductDetailsTab", "dt", "color");

        } else if (/kohls/.exec(website)) {
            var parents = document.getElementsByClassName("pdp-addToBagContr")[0].getElementsByTagName("p");
            for (var i = 0; i < parents.length; i++) {
                if (/COLOR/.exec(parents[i].textContent.toUpperCase())) {
                    color = parents[i].firstElementChild.textContent;
                }
            }

        } 
        else if (/nordstromrack/.exec(website)) {
            color = $('.product-details__select-color .sku-option__selected-value').text();
        }
        else if (/nordstrom/.exec(website)) {
            var parent = document.getElementsByClassName("color-filter")[0];
            try {
                color = parent.getElementsByClassName("drop-down-select-main-text")[0].textContent;
            } catch (e) {
                color = parent.getElementsByClassName("option-main-text")[0].textContent;
            }

        } else if (/macys/.exec(website)) {
            try {
                color = document.getElementsByClassName("productColor")[0].textContent;
            } catch (e) {
                color = document.getElementsByClassName("swatchName")[0].textContent;
            }

        } else if (/staples/.exec(website)) {
            try {
                color = document.getElementsByClassName("color-swatch")[0].getElementsByTagName("span")[0].textContent;
            } catch (e) {
                color = getSpec("specificationsContent", "td", "color");
            }

        } else if (/overstock/.exec(website)) {
            color = getSpec("more", "td", "color");

        } else if (/petsmart/.exec(website)) {
            var element = document.getElementsByClassName("color")[0].getElementsByClassName("selected")[0].firstElementChild;
            color = element.getAttribute("data-variant-value");

        } else if (/walgreens/.exec(website)) {
            color = document.getElementsByClassName("wag-color-selected-text")[0].getElementsByTagName("span")[0].textContent;

        } else if (/dickssportinggoods/.exec(website)) {
            color = document.getElementsByClassName("color_swatch_label")[0].getElementsByTagName("span")[1].textContent;

        } else if (/shoes/.exec(website)) {
            color = document.getElementsByClassName("selected_color_name")[0].textContent;

        } else if (/apple/.exec(website)) {
            try {
                color = document.getElementById("tabnav-dimensionColor").textContent;
            } catch(e) {}
            if (!color) {
                try {
                    color = document.getElementsByClassName("as-dimension-color")[0].getElementsByClassName("as-dimension-summary-text")[0].textContent;
                } catch(e) {}
            }
            if (!color) {
                try {
                    var elements = document.getElementsByClassName("as-configuration-maintitle")[0].textContent.split("-");
                    if (elements.length > 1) {
                        color = elements[elements.length - 1];
                    }
                } catch(e) {}
            }
            if (!color) {
                color = document.getElementsByClassName("dimensionColor")[0].getElementsByClassName("selected-text")[0].textContent.split("-")[1];
            }

        } else if (/qvc/.exec(website)) {
            color = document.getElementsByClassName("selectedColor")[0].textContent;

        } else if (/costco/.exec(website)) {
            var parent = document.getElementsByClassName("product-info-specs")[0];
            var elements = parent.getElementsByTagName("li");

            for (var i = 0; i < elements.length; i++) {
                if (/COLOR/.exec(elements[i].firstElementChild.textContent.toUpperCase())) {
                    color = elements[i].firstElementChild.nextSibling.textContent;
                    i = elements.length;
                }
            }

        } else if (/gap/.exec(website)) {
            color = getElementsByProperty(document, "span", "data-bind", "html: k_selectedColorName")[0].textContent;

        } else if (/williams-sonoma/.exec(website)) {
            var elements = document.getElementsByClassName("subset-attributes")[0].getElementsByTagName("h4");
            for (var i = 0; i < elements.length; i++) {
                if (/COLOR/.exec(elements[i].firstChild.textContent.toUpperCase())) {
                    color = elements[i].getElementsByClassName("selectedValue")[0].textContent;
                    i = elements.length;
                }
            }
            if (!color) {
                for (var i = 0; i < elements.length; i++) {
                    if (/SELECT:/.exec(elements[i].firstChild.textContent.toUpperCase())) {
                        color = elements[i].getElementsByClassName("selectedValue")[0].textContent;
                        i = elements.length;
                    }
                }
            }

        } else if (/sears/.exec(website)) {
            var parent = document.getElementsByClassName("productVariant-module")[0];
            try {
                var elements = parent.getElementsByClassName("variant-attr-group");
                for (var i = 0; i < elements.length; i++) {
                    if (/COLOR/.exec(elements[i].getAttribute("data-name").toUpperCase())) {
                        color = elements[i].getElementsByClassName("field-value")[0].textContent;
                        i = elements.length;
                    }
                }
            } catch(e) {}
            if (!color) {
                try {
                    var elements = parent.getElementsByClassName("variant-attr-group");
                    for (var i = 0; i < elements.length; i++) {
                        if (/COLOR/.exec(elements[i].getAttribute("data-name").toUpperCase())) {
                            color = elements[i].firstElementChild.firstChild.nextElementSibling.textContent;
                            i = elements.length;
                        }
                    }
                } catch(e) {}
            }
            if (!color) {
                var elements = document.getElementById("specifications").getElementsByClassName("specificationName");
                for (var i = 0; i < elements.length; i++) {
                        if (/COLOR/.exec(elements[i].firstElementChild.textContent.toUpperCase())) {
                        color = elements[i].nextElementSibling.firstElementChild.textContent;
                        i = elements.length;
                    }
                }
            }

        } else if (/wayfair/.exec(website)) {
            var element = document.getElementById("form-add-to-cart").getElementsByClassName("js-select-category")[0];
            var options = element.getElementsByTagName("option");
            try {
                var value = document.getElementById("form-add-to-cart").getElementsByClassName("js-option-list")[0].value;

                for (var i = 0; i < options.length; i++) {
                    if (options[i].value === value) {
                        color = options[i].textContent;
                    }
                }
            } catch(e) {}
            if (!color) {
                color = options[1].textContent;
            }

        } 
        else if (/hsn/.exec(website)) {
            color = $('.product-option-selector .tabs dt span').text();
        } 
        else if (/victoriassecret/.exec(website)) {
            color = document.getElementById("color28").firstElementChild.getElementsByTagName("span")[0].textContent;

        } else if (/nike/.exec(website)) {
            color = document.getElementsByClassName("colorText")[0].textContent;

        } else if (/neimanmarcus/.exec(website)) {
            var elements = document.getElementsByClassName("product-options")[0].getElementsByClassName("mobile-grid-100");
            for (var i = 0; i < elements.length; i++) {
                var label = elements[i].getElementsByTagName("label")[0];
                if (/COLOR/.exec(label.firstChild.textContent.toUpperCase())) {
                    color = label.firstChild.nextElementSibling.textContent;
                }
            }

        }
        else if (/menswearhouse/.exec(website)) {
            var color_before = $('.curr-color').text();
            color = color_before.substr(color_before.indexOf(":") + 1);
        }
        else if (/forever21/.exec(website)) {
            color = $('#ColorDropdownTitle').text();
        }
        else if (/freepeople/.exec(website)) {
            color = $('.c-product-colors .c-product-colors__name').text();
        }
        else if (/crateandbarrel/.exec(website)) {
            color = $('.jsGrouperSelected img').attr('title');
        }
        else if (/roomstogo/.exec(website)) {
            color = $('.moreOptions .active span').text();
        }
        else if (/aeropostale/.exec(website)) {
            color = $('.swatches .selected .swatch-image').attr('alt');
        }
        else if (/jcpenney/.exec(website)) {
            color = $('.ProductOptions-wrapper div[aria-label="color"] span').text();
        }
        else if (/footlocker/.exec(website)) {
            color = $('.attType_color').text();
        }
        else if (/allmodern/.exec(website)) {
            color = $('.ProductDetail-select select[data-category="Color"]').children("option").filter(":selected").text();
        }
        else if (/anthropologie/.exec(website)) {
            color = $('.c-product-colors__name').text();
        }
        else if (/bloomingdales/.exec(website)) {
            color = $('.selectedColorNameID').text();
        }
        else if (/brookstone/.exec(website)) {
            color = $('.Color .labelcontainer #label').text();
        }
        else if (/cb2/.exec(website)) {
            if($('.productCarousel')[0]){
                color = $('.shop-bar-carousel a.selected').attr('data-choice-desc');
            }
            else{
                color = $('.jsGrouperSelected img').attr('title');
            }
        }
        else if (/dwellstudio/.exec(website)) {
            color = $('.SwatchOptions-carousel .is-selected img').attr('alt');
        }
        else if (/food52/.exec(website)) {
            if($('.product-variant-group label').text() == 'Color:'){
                color = $('.js-product-variants .selected').attr('title');
            }
        }
        else if (/kaufmann-mercantile/.exec(website)) {
            color = $('#Color').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/potterybarnkids/.exec(website)) {
              if(($('.pip-summary .subset-selection h4:first-of-type').text().split(':')[0]) == 'Select Size' && ($('.pip-summary .subset-selection h4:last-of-type').text().split(':')[0]) == 'Select Color'){
                coloring = $('.pip-summary .subset-selection h4:last-of-type').text();
                color = coloring.substr(coloring.indexOf(": ") + 1);
              }
              else if(($('.pip-summary .subset-selection h4').text().split(':')[0]) == 'Select Color'){
                  coloring = $('.pip-summary .subset-selection h4').text();
                  color = coloring.substr(coloring.indexOf(": ") + 1);
              }
        }
        else if (/potterybarn/.exec(website)) {
            color = $('.graphical-att li .active').attr('title');
        }
        else if (/shopko/.exec(website)) {
            color = $('.COLOR_NAME li.selected').attr('title');
        }
        else if (/shopterrain/.exec(website)) {
            color = $('.productDetailColorList li.selected img').attr('alt');
        }
        else if (/landofnod/.exec(website)) {
            color = $('.divGrouperCarousel .jsGrouperSelected img').attr('alt');
        }
        else if (/adidas/.exec(website)) {
            color = $('.product-color .product-color-clear').text();
        }
        else if (/ae/.exec(website)) {
            color = $('.psp-swatches-color .psp-swatch-active img').attr('alt');
        }
        else if (/armaniexchange/.exec(website)) {
            color = $('.selectColor li.selected').text();
        }
        else if (/anntaylor/.exec(website)) {
            color = $('.color-button.active').attr('title');
        }
        else if (/billabong/.exec(website)) {
            color = $('.color .product-color-name').text();
        }
        else if (/coach/.exec(website)) {
            color = $('div[data-attr="color"] ul li.active img').attr('title');
        }
        else if (/chanel/.exec(website)) {
            color = $('.currentPage .description.matCol span:last-of-type').text();
        }
        else if (/express/.exec(website)) {
            color = $('.colorSwatchGroup__Swatches ._2WAiR .colorSwatchNameName').text();
        }
        else if (/gucci/.exec(website)) {
            color = $('.color-material-name').text();
        }
        else if (/guess/.exec(website)) {
            color = $('.colors .active img').attr('alt');
        }
        else if (/hollister/.exec(website)) {
            color = $('.product-swatches li.selected').attr('aria-label');
        }
        else if (/loft/.exec(website)) {
            color = $('.colors .active input').attr('data-name');
        }
        else if (/lenscrafters/.exec(website)) {
            color = $('.glasses-color').text();
        }
        else if (/oakley/.exec(website)) {
            color = $('.select-color .selected-checkbox').text().trim();
        }
        else if (/sunglasshut/.exec(website)) {
            color = $('.frame-color').text();
        }
        else if (/sephora/.exec(website)) {
            color = $('.css-2u92fi').text();
        }
        else if (/underarmour/.exec(website)) {
            color = $('.current-color-selection span:last-of-type').text();
        }
        else if (/urbanoutfitters/.exec(website)) {
            color = $('.dom-main-product .c-product-colors__name').text();
        }
        else if (/vans/.exec(website)) {
            color = $('.color-swatches-js label.selected img').attr('title');
        }
        else if (/verabradley/.exec(website)) {
            coloring = $('.color-label').text();
            color = coloring.split(' sold')[0];
        }
        else if (/bedbathandbeyond/.exec(website)) {
            color = $('.colorPicker li.selected').attr('title');
        }
        else if (/dillards/.exec(website)) {
            color = $('#colorInput_id0').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/girlfriend/.exec(website)) {
            color = $('.colours h3 span').text();
        }
        else if (/lulus/.exec(website)) {
            color = $('.color-name').text();
        }
        else if (/modcloth/.exec(website)) {
            color = $('.color .selected img').attr('alt');
        }
        else if (/rue21/.exec(website)) {
            color = $('.product-sku-color .selected').attr('data-color-group');
        }
        else if (/tjmaxx/.exec(website)) {
            color = $('.color-options-list .is-active').attr('data-displayname');
        }
        else if (/tractorsupply/.exec(website)) {
            color = $('.swatchContainer.selected img').attr('alt');
        }
        else if (/burlingtoncoatfactory/.exec(website)) {
            color = $('#spanColor').closest('div').find('span:last-of-type').text();
        }
        else if (/ethanallen/.exec(website)) {
            color = $('.fabric-filters-wrapper .selected a').attr('title');
        }
        else if (/francescas/.exec(website)) {
            color = $('.ml-product-item .ml-product-optionShownIn[data-initmessage="Color"] .ml-product-optionName').text();
        }
        else if (/glossier/.exec(website)) {
            color = $('.pro-var .js-prompt-selection').text();
        }
        else if (/asos/.exec(website)) {
            color = $('#core-product .colour-size .product-colour').text();
        }
        else if (/katespade/.exec(website)) {
            color = $('.Color .selected .title').text();
        }
        else if (/bonfire/.exec(website)) {
            color = $('.sw-ColorPicker .sw-ImgPicker_ActiveItem').attr('uib-tooltip');
        }
        else if (/universalorlando/.exec(website)) {
            color = $('#ucProductDetail_dvColorSection select').children("option").filter(":selected").text();
        }
        else if (/etee/.exec(website)) {
            color = $('#SingleOptionSelector-0').children("option").filter(":selected").text();
        }
        else if (/sharperimage/.exec(website)) {
            color = $('#colorPicker #product-size-picker').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/astrogaming/.exec(website)) {
            color = $('.colors .selected a').attr('title');
        }
        else if (/payless/.exec(website)) {
            color = $('#selectedcolor div').attr('title');
        }
        else if (/zgallerie/.exec(website)) {
            color = $('.Zpdttooltipp .ztooltipmenu .cf_active').attr('alt');
        }
        else if (/teefury/.exec(website)) {
            color = $('#configurable_swatch_color .selected span').text();
        }
        else if (/journeys/.exec(website)) {
            color = $('#headerInfo .detail-color').clone().children().remove().end().text();
        }
        else if (/saksoff5th/.exec(website)) {
            color = $('.product-color-options .product-variant-attribute-label__selected-value').text();
        }
        else if (/blanknyc/.exec(website)) {
            color = $('.color-swatches .active').attr('data-display-name');
        }
        else {
            color = getMetaContent("itemprop", "color");
        }
    } finally {
        if (color) {
            return color;
        } else {
            return "";
        }
    }
}
