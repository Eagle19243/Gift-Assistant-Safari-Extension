function getItemSize(website) {
    var size;
    try {
        if (/amazon/.exec(website)) {
            size = getSelected("id", "native_dropdown_selected_size_name");
            if (!size) {
                var parent = document.getElementById("variation_size_name");
                size = getElementsByProperty(parent, "span", "class", "selection")[0].textContent;
            }

        } else if (/ebay/.exec(website)) {
            var elements = document.getElementsByClassName("msku-sel");
            for (var i = 0; i < elements.length; i++) {
                if (/SIZE/.exec(elements[i].getAttribute("name").toUpperCase())) {
                    size = elements[i].options[elements[i].selectedIndex].textContent;
                    i = elements.length;
                }
            }

        } else if (/walmart/.exec(website)) {
            var parent = getElementsByProperty(document, "div", "class", "chooser-option-current")[0];
            size = parent.firstElementChild.firstElementChild.textContent;

        } else if (/bestbuy/.exec(website)) {
            var fields = getElementsByProperty(document, "div", "class", "specification-name");
            var values = getElementsByProperty(document, "div", "class", "specification-value");
            for (var i = 0; i < fields.length; i++) {
                if (/SIZE/.exec(fields[i].firstElementChild.textContent.toUpperCase())) {
                    size = values[i].textContent;
                }
            }

        } 
        else if (/belk/.exec(website)) {
            size = $('#va-size').children("option").filter(":selected").text();

        }
        else if (/etsy/.exec(website)) {
            size = getSelected("id", "inventory-variation-select-0");

        } else if (/target/.exec(website)) {
            var divElements = getElementsByProperty(document, "div", "class", "title product-variation-color-title", true);
            for (var i = 0; i < divElements.length; i++) {
                if (/SIZE/.exec(divElements[i].firstElementChild.firstElementChild.textContent.toUpperCase())) {
                    size = divElements[i].firstElementChild.firstElementChild.nextElementSibling.textContent;
                    i = td.length;
                }
            }

        } else if (/groupon/.exec(website)) {
            size = getSelected("data-bhw", "VariationsTrait:size");

        } else if (/ikea/.exec(website)) {
            size = getElementsByProperty(document, "div", "class", "displayMeasurements")[0].textContent;

        } else if (/homedepot/.exec(website)) {
            var td = getElementsByProperty(document, "td", "class", "even");
            for (var i = 0; i < td.length; i++) {
                if (/SIZE/.exec(td[i].firstElementChild.textContent.toUpperCase())) {
                    size = td[i].nextElementSibling.firstElementChild.textContent;
                    i = td.length;
                }
            }

        } else if (/hm/.exec(website)) {
            size = document.getElementById("text-selected-variant").textContent;

        } else if (/newegg/.exec(website)) {
            var parents = document.getElementById("Specs").getElementsByTagName("dt");
            for (var i = 0; i < parents.length; i++) {
                if (/SIZE/.exec(parents[i].textContent.toUpperCase())) {
                    size = parents[i].nextElementSibling.textContent;
                    i = parents.length;
                }
            }

        } else if (/woot/.exec(website)) {
            size = getSelected("id", "attr-size");

        } else if (/jet/.exec(website)) {
            size = getSpec("pdv", "td", "size", "dimension");

        } else if (/zappos/.exec(website)) {
            size = getSelected("id", "d3");

        } else if (/toysrus/.exec(website)) {
            size = $('#size_text .inline').text();

        } else if (/lowes/.exec(website)) {
            size = getSpec("collapseSpecs", "th", "size", "dimension");

        } else if (/bhphotovideo/.exec(website)) {
            size = getSpec("Specification", "td", "size", "dimension");

        } else if (/barnesandnoble/.exec(website)) {
            size = getSpec("ProductDetailsTab", "dt", "size", "dimension");

        } else if (/1800flowers/.exec(website)) {
            var parents = document.getElementsByClassName("trsDeliveryCol1");
            for (var i = 0; i < parents.length; i++) {
                if (parents[i].getElementsByTagName("input")[0].checked) {
                    size = parents[i].nextElementSibling.textContent;
                }
            }

        } 
        else if (/kohls/.exec(website)) {
            size = $('.pdp-product-size .active').attr('title');
        }
        else if (/nordstromrack/.exec(website)) {
            size = $('.product-details__select-size .sku-option__selected-value').text();
        }
        else if (/nordstrom/.exec(website)) {
            var parent = document.getElementsByClassName("size-filter")[0];
            size = parent.getElementsByClassName("drop-down-select-main-text")[0].textContent;
            if (!size) {
                size = parent.getElementsByClassName("single-text-option")[0].textContent;
            }
            if (!size) {
                parent = document.getElementsByClassName("width-filter")[0];
                size = parent.getElementsByClassName("drop-down-select-main-text")[0].textContent;
                if (!size) {
                    size = parent.getElementsByClassName("single-text-option")[0].textContent;
                }
            }

        } else if (/macys/.exec(website)) {
            if (document.getElementsByClassName("sizesSection").length) {
                var parent = document.getElementsByClassName("sizesSection")[0];
                size = getElementsByProperty(parent, "li", "class", "selected")[0].getAttribute("data-title");

            } else {
                var parents = document.getElementById("pdpAttributes").getElementsByClassName("sizes")[0].getElementsByTagName("li");
                for (var i = 0; i < parents.length; i++) {
                    if (parents[i].classList.contains("selected")) {
                        size = parents[i].textContent;
                        i = parents.length;
                    }
                }
            }

        } else if (/staples/.exec(website)) {
            size = getSpec("specificationsContent", "td", "size", "dimension");

        } else if (/overstock/.exec(website)) {
            size = getSpec("more", "td", "size", "dimension");

        } else if (/petsmart/.exec(website)) {
            var element;
            try {
                element = document.getElementsByClassName("size")[0].getElementsByClassName("selected")[0].firstElementChild;
            } catch (e) {
                element = document.getElementsByClassName("customquantity")[0].getElementsByClassName("selected")[0].firstElementChild;
            }
            size = element.getAttribute("data-variant-value");

        } else if (/dickssportinggoods/.exec(website)) {
            try {
                size = document.getElementsByClassName("selectedSize")[0].textContent;
            } catch (e) {
                size = document.getElementById("Size").nextElementSibling.nextElementSibling.getElementsByClassName("selectboxit-text")[0].textContent;
            }

        } else if (/shoes/.exec(website)) {
            size = document.getElementById("size-selection").textContent;
            if (!size && document.getElementById("size_0_1").classList.contains("selected")) {
                size = document.getElementById("size_0_1").getAttribute("title");
            }

        } else if (/apple/.exec(website)) {
            try {
                size = document.getElementsByClassName("as-filter-buttons")[0].getElementsByClassName("as-filter-buttonactive")[0].textContent;
            } catch(e) {}
            if (!size) {
                try {
                    size = document.getElementsByClassName("as-dimension-screensize")[0].getElementsByClassName("as-dimension-summary-text")[0].firstElementChild.textContent;
                } catch(e) {}
            }
            if (!size) {
                try {
                    size = document.getElementsByClassName("as-dimension-capacity")[0].getElementsByClassName("as-dimension-summary-text")[0].textContent;
                } catch(e) {}
            }
            if (!size) {
                try {
                    size = document.getElementById("tabnav-dimensionCapacity").textContent;
                } catch(e) {}
            }
            if (!size) {
                try {
                    var parents = document.getElementsByClassName("as-title-count");
                    for (var i = 0; i < parents.length; i++) {
                        var s = parents[i].textContent.toUpperCase()
                        if (/MEMORY/.exec(s) || /STORAGE/.exec(s)) {
                            var elements = parents[i].nextElementSibling.nextElementSibling.getElementsByTagName("input");
                            i = parents.length;
                        }
                    }
                    for (var i = 0; i < elements.length; i++) {
                        if (elements[i].checked) {
                            size = elements[i].nextElementSibling.textContent;
                            i = elements.length;
                        }
                    }
                } catch(e) {}
            }

        } else if (/qvc/.exec(website)) {
            size = document.getElementsByClassName("selectedSize")[0].textContent;

        } else if (/costco/.exec(website)) {
            var parent = document.getElementsByClassName("product-info-specs")[0];
            var elements = parent.getElementsByTagName("li");

            for (var i = 0; i < elements.length; i++) {
                if (/SIZE/.exec(elements[i].firstElementChild.textContent.toUpperCase())) {
                    size = elements[i].firstElementChild.nextSibling.textContent;
                    i = elements.length;
                }
            }

        } else if (/gap/.exec(website)) {
            size = getElementsByProperty(document, "span", "data-bind", "text:k_selectedSize")[0].textContent;

        }
        else if (/sears/.exec(website)) {
            var parent = document.getElementsByClassName("productVariant-module")[0];
            try {
                var elements = parent.getElementsByClassName("variant-attr-group");
                for (var i = 0; i < elements.length; i++) {
                    if (/SIZE/.exec(elements[i].getAttribute("data-name").toUpperCase())) {
                        size = elements[i].getElementsByClassName("field-value")[0].textContent;
                        i = elements.length;
                    }
                }
            } catch(e) {}
            if (!size) {
                try {
                    var elements = parent.getElementsByClassName("variant-attr-group");
                    for (var i = 0; i < elements.length; i++) {
                        if (/SIZE/.exec(elements[i].getAttribute("data-name").toUpperCase())) {
                            size = elements[i].firstElementChild.firstChild.nextElementSibling.textContent;
                            i = elements.length;
                        }
                    }
                } catch(e) {}
            }
            if (!size) {
                try {
                    var elements = document.getElementById("specifications").getElementsByClassName("specificationName");
                    for (var i = 0; i < elements.length; i++) {
                        if (/SIZE/.exec(elements[i].firstElementChild.textContent.toUpperCase())) {
                            size = elements[i].nextElementSibling.firstElementChild.textContent;
                            i = elements.length;
                        }
                    }
                } catch(e) {}
            }
            if (!size) {
                var elements = document.getElementById("specifications").getElementsByClassName("specificationName");
                for (var i = 0; i < elements.length; i++) {
                    if (/DIMENSION/.exec(elements[i].firstElementChild.textContent.toUpperCase())) {
                        size = elements[i].nextElementSibling.firstElementChild.textContent;
                        i = elements.length;
                    }
                }
            }

        } else if (/wayfair/.exec(website)) {
            var elements = document.getElementsByClassName("CollapsePanel-wrapper")[0].getElementsByClassName("ProductDetailSpecifications");
            for (var i = 0; i < elements.length; i++) {
                if (/DIMENSION/.exec(elements[i].firstElementChild.firstElementChild.nextSibling.textContent.toUpperCase())) {
                    size = elements[i].getElementsByClassName("ProductDetailSpecifications-table-cell--right")[0].textContent;
                }
            }

        } else if (/hsn/.exec(website)) {
            var parent = document.getElementById("size-group-0").getElementsByClassName("checked-selected")[0];
            size = parent.getElementsByTagName("input")[0].getAttribute("data-label");

        } else if (/victoriassecret/.exec(website)) {
            size = document.getElementById("size30").firstElementChild.getElementsByTagName("span")[0].textContent;

        } else if (/nike/.exec(website)) {
            size = document.getElementById("exp-pdp-buying-tools-container").getElementsByClassName("js-selectBox-value")[0].textContent;

        } else if (/neimanmarcus/.exec(website)) {
            var elements = document.getElementsByClassName("product-options")[0].getElementsByClassName("mobile-grid-100");
            for (var i = 0; i < elements.length; i++) {
                var label = elements[i].getElementsByTagName("label")[0];
                if (/SIZE/.exec(label.firstChild.textContent.toUpperCase())) {
                    size = label.firstChild.nextElementSibling.textContent;
                }
            }

        } 
        else if (/menswearhouse/.exec(website)) {
            size = $('#ada-qv-curr-size').text();
        }
        else if (/forever21/.exec(website)) {
            size = $('#sizeButton li .selected').text();
        }
        else if (/freepeople/.exec(website)) {
            size = $('.c-product-sizes .is-selected').text();
        }
        else if (/crateandbarrel/.exec(website)) {
            size = $('.jsGrouperSelected span').text();
        }
        else if (/roomstogo/.exec(website)) {
            size = $('#uniform-sizeSelector span').text();
        }
        else if (/riflepaperco/.exec(website)) {
            size = $('li.priced.select .size-value').text();
        }
        else if (/hottopic/.exec(website)) {
            size = $('.size .selected a').attr('title');
        }
        else if (/aeropostale/.exec(website)) {
            size = $('#product-content #va-size').children("option").filter(":selected").text();
        }
        else if (/jcpenney/.exec(website)) {
            size = $('.SelectDropdown-selectOption[name="size"]').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/footlocker/.exec(website)) {
            size = $('#product_form #pdp_selectedSize').attr('value');
        }
        else if (/allmodern/.exec(website)) {
            if($('.ProductDetailAtc .PdpOptionSelect')[0]){
                size = $('.ProductDetailAtc .PdpOptionSelect select').children("option:not(:first-of-type)").filter(":selected").text().split(' (')[0];
            }
            else{
                size = $('.ProductDetail-select select[data-category*="Size"]').children("option:not(:first-of-type)").filter(":selected").text().split(' (')[0];
            }
        }
        else if (/anthropologie/.exec(website)) {
            size = $('#fit-sizes option[selected]').attr('value');
        }
        else if (/bloomingdales/.exec(website)) {
            sizing = $('.pdpMemberSizes .current').text();
            size = sizing.substr(sizing.indexOf(":") + 1);
        }
        else if (/brookstone/.exec(website)) {
            sizing = $('.size .selected a').attr('title');
            size = sizing.substr(sizing.indexOf(": ") + 1);
        }
        else if (/cb2/.exec(website)) {
            size = $('.jsGrouperSelected span').text();
        }
        else if (/shopdisney/.exec(website)) {
            size = $('.custom-skus .select-container select').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/dwellstudio/.exec(website)) {
            size = $('.ProductDetail-select select[data-category*="Size"]').children("option").filter(":selected").text();
        }
        else if (/kaufmann-mercantile/.exec(website)) {
            if(!$('#Color')[0]){
                sizing = $('.required-option-container .place-holder').text();
                size = sizing.split(' -')[0];
            }
        }
        else if (/pier1/.exec(website)) {
            size = $('.pdp-variations .selected button').text();
        }
        else if (/potterybarnkids/.exec(website)) {
              if(($('.pip-summary .subset-selection h4').text().split(':')[0]) == 'Select Size'){
                sizing = $('.pip-summary .subset-selection h4:first-of-type').text();
                size = sizing.substr(sizing.indexOf(": ") + 1);
              }
        }
        else if (/potterybarn/.exec(website)) {
            size = $('.textual-att li .active').text();
        }
        else if (/shopko/.exec(website)) {
            size = $('.js_variantSelectInput[name="SIZE_NAME"]').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/shopterrain/.exec(website)) {
            size = $('.size-options ul:last-of-type li.selected a span').text();
        }
        else if (/landofnod/.exec(website)) {
            size = $('.divGrouperCarousel .jsGrouperSelected span').text();
        }
        else if (/adidas/.exec(website)) {
            size = $('#size-selector .custom-input').text();
        }
        else if (/mindymaesmarket/.exec(website)) {
            size = $('.swatch_options input:checked').attr('value');
        }
        else if (/ae/.exec(website)) {
            size = $('#psp-dropdown-size').attr('data-value');
        }
        else if (/armaniexchange/.exec(website)) {
            size = $('.selectSize .b-custom-select__title__text').text();
        }
        else if (/anntaylor/.exec(website)) {
            size = $('.size-button.active').text();
        }
        else if (/billabong/.exec(website)) {
            size = $('.size .active a').text();
        }
        else if (/coach/.exec(website)) {
            size = $('.pdp-main__sizelist select').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/express/.exec(website)) {
            size = $('.aDR7z button:first-of-type').text();
        }
        else if (/gucci/.exec(website)) {
            size = $('.product-sizes-first-element .selectric .label').text();
        }
        else if (/guess/.exec(website)) {
            size = $('.sizes li .active').text();
        }
        else if (/hollister/.exec(website)) {
            size = $('.product-sizes .selected input').attr('value');
        }
        else if (/loft/.exec(website)) {
            size = $('.sizes .active').text();
        }
        else if (/oakley/.exec(website)) {
            size = $('.select-size .selected-checkbox').text();
        }
        else if (/tiffany/.exec(website)) {
            size = $('#sizeDropdown select').children("option").filter(":selected").text();
        }
        else if (/underarmour/.exec(website)) {
            size = $('#sizeChipList li.selected').attr('title');
        }
        else if (/urbanoutfitters/.exec(website)) {
            size = $('#fit-sizes option[selected]').attr('value');
        }
        else if (/vans/.exec(website)) {
            size = $('#attr-size').children("option").filter(":selected").text();
        }
        else if (/bedbathandbeyond/.exec(website)) {
            size = $('#selectProductSize').children("option").filter(":selected").text();
        }
        else if (/daintyhooligan/.exec(website)) {
            size = $('.product_form .single-option-selector').children("option").filter(":selected").attr('value');
        }
        else if (/dillards/.exec(website)) {
            size = $('#sizeInput_id0-flat .size-selected').text();
        }
        else if (/dollargeneral/.exec(website)) {
            size = $('.size .selected').text();
        }
        else if (/girlfriend/.exec(website)) {
            size = $('.option-group ul li[data-selected="true"]').text();
        }
        else if (/lulus/.exec(website)) {
            size = $('#size-options input.opt-btn-radio:checked').attr('data-size');
        }
        else if (/modcloth/.exec(website)) {
            size = $('.size .selected a').text();
        }
        else if (/rue21/.exec(website)) {
            size = $('.product-sku-size .selected').text();
        }
        else if (/tjmaxx/.exec(website)) {
            size = $('.size-options-list .is-active ').attr('data-displayname');
        }
        else if (/tractorsupply/.exec(website)) {
            size = $('.sizeChart_div select').children("option").filter(":selected").attr('value');
        }
        else if (/hellomerch/.exec(website)) {
            size = $('.shappify_add_to_cart_form select').children("option").filter(":selected").attr('value');
        }
        else if (/burlingtoncoatfactory/.exec(website)) {
            size = $('#MainContentArea li.active a span[size]').text();
        }
        else if (/ethanallen/.exec(website)) {
            if($('.seatingsize')[0]){
                size = $('.seatingsize .selected a span').text();
            }
            else{
                size = $('.size .selected a span').text();
            }
        }
        else if (/francescas/.exec(website)) {
            size = $('.ml-product-item .ml-product-optionShownIn[data-initmessage="Size"] .ml-product-optionName').text();
        }
        else if (/asos/.exec(website)) {
            size = $('.size-section .product-size').text();
        }
        else if (/teeturtle/.exec(website)) {
            size = $('.grid .swatch:last-of-type .swatch-element input:checked').attr('value');
        }
        else if (/katespade/.exec(website)) {
            size = $('.swatches.size .selected a').attr('title');
        }
        else if (/heruniverse/.exec(website)) {
            size = $('.swatches.size .selected a').attr('title');
        }
        else if (/bonfire/.exec(website)) {
            size = $('.sw-SizePicker .sw-SizePicker_Item-active').text();
        }
        else if (/universalorlando/.exec(website)) {
            size = $('#ucProductDetail_dvSizeSection select').children("option").filter(":selected").text();
        }
        else if (/sandcloudtowels/.exec(website)) {
            size = $('.swatch input:checked').attr('value');
        }
        else if (/sharperimage/.exec(website)) {
            size = $('#sizePicker #product-size-picker').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/astrogaming/.exec(website)) {
            size = $('.size .selected a').attr('title');
        }
        else if (/redbubble/.exec(website)) {
            if($('.work-config-size')[0]){
                size = $('.work-config-size .selected .label-wrap').text();
            }
            else if($('.work-config-select-container')[0]){
                size = $('.work-config-select-container select').children("option").filter(":selected").text();
            }
            else{
                size = $('.ew2K3cmt3okJd82D57G23._31Zz45pdAPIevcMIe7aizd').text();
            }
        }
        else if (/southernfriedchics/.exec(website)) {
            size = $('#options_table select').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/payless/.exec(website)) {
            size = $('#valuesize .selected a').attr('title');
        }
        else if (/urbanbodyjewelry/.exec(website)) {
            size = $('.product-options select').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/zgallerie/.exec(website)) {
            size = $('#mainsizecombo .title-right').text();
        }
        else if (/teefury/.exec(website)) {
            size = $('#configurable_swatch_size .selected span').text();
        }
        else if (/journeys/.exec(website)) {
            size = $('#selDetailSize').children("option:not(:first-of-type)").filter(":selected").text();
        }
        else if (/swarovski/.exec(website)) {
            size = $('#variation-mirror > a').attr('title');
        }
        else if (/saksoff5th/.exec(website)) {
            size = $('.product-size-options .product-variant-attribute-label__selected-value').text();
        }
        else if (/blanknyc/.exec(website)) {
            size = $('.size-swatches .active').attr('data-display-name');
        }
        else {
            size = getMetaContent("itemprop", "size");
        }
    } finally {
        if (size) {
            return size;
        } else {
            return "";
        }
    }
}
