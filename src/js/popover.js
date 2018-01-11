var site_name = "https://www.giftibly.com";
var global = safari.extension.globalPage.contentWindow;
var item;
var unknownWebsite;


function getOriginURL() {
    var url = new URL(safari.application.activeBrowserWindow.activeTab.url);
    window.product_url = url.origin;
    return url.origin;
}

function startPopup(itemData, unknownWebsiteData) {
    item = itemData;
    unknownWebsite = unknownWebsiteData;
    
    $('body').html('<div id="navbar">' + showNavbar() + '</div>' + '<div id="content"></div>');

    item.name = item.name.replace(/"/g, "\'\'");
    item.image = item.image.replace(/"/g, "\'\'");
    item.size = item.size.replace(/"/g, "\'\'");
    item.color = item.color.replace(/"/g, "\'\'");

    item.name = item.name.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    item.image = item.image.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    item.size = item.size.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    item.color = item.color.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    window.giftibly_token_string = "Token " + localStorage.getItem("giftibly_token");
    
    if (item.merchant_name && localStorage.getItem('giftibly_token') != "") {
        $('#back-button').hide();

        safari.extension.popovers[0].height = 496;

        $.ajax({
            dataType: 'json',
            url: site_name + "/api/v1/baskets/",
            type: 'GET',
            headers: { 'Authorization' : giftibly_token_string },
            success: function (newdata) {     
                window.basket_list = newdata.data;
                window.customer_name = newdata.header.customer_name;
                showItemFound();
                $('.item_description video, .item_description script, .item_description style, .item_description button, .item_description img').remove(); //remove not needed tags
                $('.item_description').find('*').removeAttr('class').removeAttr('id'); //remove all classes and ids that made it through
                $(".item_description p").each(function() { //remove empty p tags
                    if ($(this).height() == 0) {
                        $(this).remove();
                    }
                    $('.item_description p:empty').remove();
                });
            },
            error: function(){
              console.log("Cannot get basket data");
            }
        });
    }
    else if(localStorage.getItem('giftibly_token') == "" || localStorage.getItem('giftibly_token') == 'null') { //checks to see if user is authenticated

        safari.extension.popovers[0].height = 150;

        document.getElementById("content").innerHTML =
         '<div id="item-upper-div">' +
            '<div class="please_login">' +
                '<p>We\'re sorry but you don\'t seem to be logged in.</p>' +
                '<p>Please <a href="' + site_name + '">login</a> to Giftibly to use the Gift Assistant</p>' +
            '</div>' +
         '</div>';
         $('#settings-button').hide();
    }
    else {
        // Show the not found page
        showItemNotFound();
        $('#settings-button').hide();
        if(getOriginURL() == 'https://www.giftibly.com'){

            safari.extension.popovers[0].height = 246;
        }
        else if (unknownWebsite) {

            safari.extension.popovers[0].height = 324;
        }
    }
}

function showItemFound() {
    $('#content').css({'opacity': 0})
        .slideDown(1000)
        .animate(
            { opacity: 1 },
            { queue: false, duration: 500 }
        );

    setTimeout(function() {
        window.content_height = $('#content').height();
    }, 600);

    currentView = "item-found";

    $('#content').html(
        '<div id="item-upper-div">' +
            '<div class="loading" id="loading-icon"><i class="fa fa-refresh fa-spin fa-fw"></i></div>' +
            '<div id="img_container">' +
                '<img id="item-image" title="' + item.name + '" src="' + item.image + '">' +
                '<div id="img_mask"></div>' +
            '</div>' +
        '</div>' +
        getItemBottomDiv());

    // Image not loaded
    var imageElement = document.getElementById("item-image");
    imageElement.onload = function() {
        $('#loading-icon').remove();
    }

    addBasketListeners();
}

function showItemNotFound() {
    currentView = "item-not-found";
    
    var htmlDiv =
        '<div id="navbar">' + showNavbar() + '</div>' +
        '<div id="content">' +
        '<div id="not-found-div">';
        
    if(getOriginURL() == 'https://www.giftibly.com'){
        htmlDiv +=
            '<img src="../img/orange-logo.png" style="width:48px;" class="box_image">' +
            '<p class="big-title">You\'re on Giftibly</p>' +
            '<p class="description">Checkout some other websites!</p>' +
            '<button class="exit_button" type="button">Exit</button>';
    }
    else if (unknownWebsite) {
        htmlDiv +=
            '<img src="../img/sad_box.png" class="box_image">' +
            '<p class="big-title">We\'re Sorry</p>' +
            '<p class="description">We don\'t know this site yet...<br>Please click below and we will<br>add it to our system.</p>' +
            '<button class="report_button" type="button">Suggest Site</button>';
            var error_type = 'unknown_merchant';
    }
    else {
        htmlDiv +=
            '<img src="../img/sad_box.png" class="box_image">' +
            '<p class="big-title">OOPS!</p>' +
            '<p class="description">Are you on a specific product page?</p>' +
            '<p>If so:</p>' +
            '<button class="report_button" type="button">Report Issue</button>';
            var error_type = 'not_product_page';
    }

    document.body.innerHTML = htmlDiv;

    $(".exit_button").click(function() {
        safari.self.hide();
    });

    $(".report_button").click(function() {
        $.ajax({
            url: site_name + "/api/v1/errors",
            type: 'POST',
            headers: { 'Authorization' : giftibly_token_string },
             data: {
                url: getOriginURL(),
                error_type: error_type
            },
            success: function (data) {
                thankyou();
            },
            error: function(){
                console.log("Cannot send data");
            }
        });
    });
    
    $('#content').hide().fadeIn();
}

function getItemBottomDiv() {
    htmlCode =
        '<div id="item-bottom-div">' +
            '<p id="item-name" title="' + item.name + '">' + item.name + '</p>';
            if(item.size == "" || item.color == ""){
                htmlCode +=    
                    '<div id="size_color_container">' +
                        '<span>' + item.size + '</span>' +
                        '<span>' + item.color + '</span>' +
                    '</div>';
            } else {
                htmlCode +=    
                    '<div id="size_color_container">' +
                        '<span class="size_color_padding">' + item.size + '</span>' +
                        '<span class="size_color_padding">' + item.color + '</span>' +
                    '</div>';
            }
            htmlCode += 
                '<p id="item-price">' + item.price + '</p>' +
                '<div class="item_description">' + item.description + "</div> " + 
                '</div>' +      
                '<p id="basket-label">Choose Gift Basket</p>' +
                '<i class="fa fa-search" aria-hidden="true"></i>' +
                '<input id="input-search" placeholder="Search">' +
                '<div id="basket-div">' +
                    getBasketDiv(getBasketList()) +
                '</div>' +
                '<div id="new-basket-button">' +
                    '<span class="fa-stack fa-lg">' +
                        '<i class="fa fa-circle fa-stack-2x"></i>' +
                        '<i class="fa fa-stack-1x fa-shopping-basket"></i>' +
                    '</span>Create New Basket' +
                '</div>';
            
    return htmlCode;
}

// Iterate basket list
function getBasketDiv(basketList) {
    var htmlCode = '';
    if (basketList.length > 0) {
        htmlCode = '<ul>';
        for (var i = 0; i < basketList.length; i++) {
            htmlCode +=
                '<li><span>' + basketList[i].name +
                    '</span><input class="save-button" data-basket="' + basketList[i].id + '" type="button" value="Add &#xF06B">' +
                '</li>';
        }
        htmlCode += '</ul>';
    } else {
        htmlCode += '<p>No Basket Found</p>';
    }
    return htmlCode;
}

//Gets basket list
function getBasketList() {
    return basket_list;
};

// Add search bar listener
function addBasketListeners(skipSearchListener) {
    // Iterate save buttons and add listeners
    var saveButton = document.getElementsByClassName('save-button');
    for (var i = 0; i < saveButton.length; i++) {
        saveButton[i].addEventListener('click', function(i) {
            return function () {
                save(saveButton[i].parentNode.textContent, saveButton[i].getAttribute("data-basket"));
            }
        }(i));
    }
    
    $('#new-basket-button').on('click', function() { //show main tab
        createBasket();
        $('#back-button').hide();
        $('#content').hide();
        setTimeout(function() {
            $('#back-button').fadeIn();
        },400)
        $('#content').fadeIn();
    });
}

// Called when Save button is pressed
function save(basketName, basketId) {
    var final_description = $(".item_description").html(); //get contents of variable before HTML changes. 
    $('#content').addClass('loading_content');
    $('#content').html('<div class="loading_item" id="loading-icon"><i class="fa fa-refresh fa-spin fa-fw"></i></div>');
    item.price = Number(item.price.replace(/[^0-9\.-]+/g,"")*100);
    item.price = Math.round(item.price);

     $.ajax({
        url: site_name + "/api/v1/baskets/add",
        type: 'POST',
        headers: { 'Authorization' : giftibly_token_string },
        data: {
            product_api_id: item.apiID,
            basket_id: basketId,
            price: item.price,
            title: item.name,
            merchant_url: getOriginURL(),
            product_url: getOriginURL(),
            merchant_name: item.merchant_name,
            color: item.color,
            size: item.size,
            description: final_description, 
            product_image_url: item.image
        },
        success: function (data) {
          window.response = JSON.stringify(data);
          
          var product_gift_id = data.gift_id;
          $('#content').removeClass('loading_content');
          if(response.indexOf("Successfully") > -1){
              document.body.innerHTML =
                    '<div id="navbar">' + showNavbar(1) + '</div>' +
                    '<div id="content">' +
                        '<div style="margin:10px;">' +
                            '<div id="img_container">' +
                                '<img id="success-item-image" title="' + item.name + '" src="' + item.image + '">' +
                                '<div id="success_img_mask"></div>' +
                            '</div>' +
                            '<p class="success-title">' + item.name + '</p>' +
                            '<p class="big-description">Has been added to<br><b>' + basketName + '</b></p>' +
                            '<div class="form_thank_you">' +
                                '<p class="tag-description">Add tags so your gift stands out.</p>' +
                                '<input placeholder="tag1, tag 2, etc..." class="item-input" id="add-tag-form">' +
                                '<p class="thank_you_text">Thank you!</p>' +
                                '<p class="more_items_text">Would you like to see more items like this?</p>' +
                            '</div>' +
                            '<div class="button_container">' +
                                '<button class="add_tags" type="button">Add Tags</button>' +
                                '<button class="see_similar_button" type="button">See Similar Items</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
              $('#add-tag-form').keypress(function(e){
                      if(e.which == 13){//Enter key pressed
                          $('.add_tags').click();//Trigger search button click event
                      }
              });
              $(".add_tags").click(function() {
                    if ($('#add-tag-form').val() != ''){
                        var tag_form = $('#add-tag-form').val();
                        $.ajax({
                            url: site_name + "/api/v1/gifts/add-tags",
                            type: 'POST',
                            headers: { 'Authorization' : giftibly_token_string },
                             data: {
                                gift_id: product_gift_id,
                                tags: tag_form
                            },
                            success: function (data) {
                            },
                            error: function(){
                                console.log("Cannot get data");
                            }
                        });

                      $(this).fadeOut(300);
                      $('#add-tag-form, .tag-description').fadeOut(300);
                      setTimeout(function() {
                          $('.see_similar_button, .thank_you_text, .more_items_text').fadeIn(600);
                      }, 350);
                   }
              });
              $(".see_similar_button").click(function() {
                  settingsCompareProduct(item);
              });

              document.getElementById("back-button").onclick = function(evt) {
                startPopup(item);
                item.price = "$" + ((item.price/100).toFixed(2)); //change item.price to reflect price with $ and decimals if user presses back.
                $('#content').css('height', content_height + "px");
                evt.preventDefault();
              }

          }
            else{
                safari.extension.popovers[0].height = 292;
                document.body.innerHTML =
                    '<div id="navbar">' + showNavbar() + '</div>' +
                    '<div id="content">' +
                        '<div id="not-found-div">' +
                            '<img src="../img/sad_box.png" class="box_image">' +
                            '<p class="big-title">OOPS!</p>' +
                            '<p class="description">Something went wrong.</p>' +
                            '<button class="report_button" type="button">Report Issue</button>' +
                        '</div>' +
                    '</div>';
                $('#settings-button').hide();
                $(".report_button").click(function() {
                    $.ajax({
                        url: site_name + "/api/v1/errors",
                        type: 'POST',
                        headers: { 'Authorization' : giftibly_token_string },
                         data: {
                            url: getOriginURL(),
                            error_type: 'validation'
                        },
                        success: function (data) {
                            thankyou();
                        },
                        error: function(){
                            console.log("Cannot send data");
                        }
                    });
                });
            }
            $('#content').hide().fadeIn();
        },
        error: function(){
         console.log("Cannot get data");
        }
    });
}

function createBasket() {
    safari.extension.popovers[0].height = 316;
    document.body.innerHTML =
        '<div id="navbar">' + showNavbar(1) + '</div>' +
        '<div id="content">' +
            '<div style="margin:35px 10px 0 10px">' +
                '<img src="../img/basket.jpg" class="basket_image">' +
                '<input placeholder="Enter New Basket Name" class="item-input" maxlength="40" id="basket-name">' +
                '<input id="create-basket-button" type="button" value="Create New">' +
            '</div>' +
        '</div>';
    $( "#create-basket-button" ).click(function() {
        var basket_name = $('#basket-name').val();
        $.ajax({
           url: site_name + "/api/v1/baskets/create?name=" + (basket_name),
           type: 'GET',
           processData: false,
           headers: { 'Authorization' : giftibly_token_string },
           success: function (data) {
               startPopup(item);
           },
           error: function(){
             console.log("Cannot get data");
           }
       });
    });

    //When user clicks on the back button
    document.getElementById("back-button").onclick = function(evt) {
        startPopup(item);
        $('#content').css('height', content_height + "px");
        evt.preventDefault();
    }
}

// Key up filter
function onSearch() {
    // Retrieve the input field text and reset the count to zero
    var filter = "(?:^|\\s)" + $(this).val(), itemsFound = 0;

    // Loop through each basket
    $("#basket-div li").each(function(){
        // If the list item does not contain the text phrase fade it out
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();

        // Show the list item if the phrase matches and increase the count by 1
        } else {                
            $(this).show();
            itemsFound++;
        }
    });
}

(function(){
    $(document).on('click', '#settings-button', function() { //show settings tab
        showSettings();
    });
    
    // Key up filter
    $(document).on('keyup', '#input-search', onSearch);
})();
