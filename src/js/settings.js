function showSettings() {
    safari.extension.popovers[0].height = 304;

    var username = customer_name.split(" ")[0];
    
    var settings =
        '<div id="navbar">' + showNavbar(1) + '</div>' +
        '<div id="content"><hr>' +
            '<ul id="settings-list">' +
                '<a class="settings_link" href="' + site_name + '/logout"><li id="not-user-button">Hello ' + username + ', <span>Not ' + username + '?</span>' +
                    '<i class="fa fa-chevron-right"></i></li></a><hr>' +
                '<a class="settings_link" href="' + site_name + '/what_is_giftibly"><li>What is Giftibly?</span>' +
                    '<i class="fa fa-chevron-right"></i></li></a><hr>' +
                '<li id="incorrect-info-button">My Gift Is Not Showing Correctly' +
                    '<i class="fa fa-chevron-right"></i></li><hr>' +
                '<li id="compare-product-button">Compare This To Similar Products' +
                    '<i class="fa fa-chevron-right"></i></li><hr>' +
            '</ul><hr>' +
            '<a id="privacy-policy" href="' + site_name + '/privacy_policy">Privacy Policy</a>' +
        '</div>';
    $('body').html(settings);
    $('#back-button').hide();
    $('#content').hide().fadeIn();

    setTimeout(function() {
        $('#back-button').fadeIn();
    },400);

    //When user clicks on the back button
    document.getElementById("back-button").onclick = function(evt) {
        startPopup(item);
        $('#content').css('height', content_height + "px");
        $('#back-button').hide();
        evt.preventDefault();
    }

    // When user clicks on settings
    $("#incorrect-info-button").click(function() {
        showItemForm();
    });
    $("#compare-product-button").click(function() {
        settingsCompareProduct(item);
    });
}

function showItemForm(){
    safari.extension.popovers[0].height = 392;
    document.body.innerHTML =
        '<div id="navbar">' + showNavbar(1) + '</div>' +
        '<div id="content">' +
            '<div class="report_problem">' +
                '<p class="problem_title">What seems to be the problem?</p>' +
                '<p class="check_all">Check all that apply.</p>'+
                '<div class="checkbox">' +
                    '<input type="checkbox" name="report" value="Name error">' +
                    '<label>Name of the Gift is wrong.</label>' +
                '</div>' + 
                '<br>'+
                '<div class="checkbox">' +
                    '<input type="checkbox" name="report" value="Price error">' +
                    '<label>Price of Gift is wrong.</label>' +
                '</div>' + 
                '<br>'+
                '<div class="checkbox">' +
                    '<input type="checkbox" name="report" value="Image error">' +
                    '<label>Gift Image is wrong.</label>' +
                '</div>' + 
                '<br>'+
                '<div class="checkbox">' +
                    '<input type="checkbox" name="report" value="Size error">' +
                    '<label>Gift Size is wrong.</label>' +
                '</div>' + 
                '<br>'+
                '<div class="checkbox">' +
                    '<input type="checkbox" name="report" value="Color error">' +
                    '<label>Color of Gift is wrong.</label>' +
                '</div>' + 
                '<br>'+
                '<button class="report_button" type="button">Report Issue</button>';
            '</div>'+
        '</div>';
    $('#content').hide().fadeIn();

    //When user clicks on the back button
    document.getElementById("back-button").onclick = function(evt) {
        showSettings();
        $('#content').css('height', content_height + "px");
        $('#back-button').hide();
        evt.preventDefault();
    }
    
    document.getElementById("back-button").onclick = function(evt) {
        showSettings();
        evt.preventDefault();
    }

    $(".report_button").click(function() {
        if ($('input[name="report"]').is(':checked')) {
            var report_array = [];
            $("input:checkbox[name=report]:checked").each(function(){
                report_array.push($(this).val());
            });
            var report_string = report_array.toString();
            $.ajax({
                url: site_name + "/api/v1/errors",
                type: 'POST',
                headers: { 'Authorization' : giftibly_token_string },
                 data: {
                    url: getOriginURL(),
                    error_type: 'reported_issue',
                    note: report_string
                },
                success: function (data) {
                    thankyou();
                },
                error: function(){
                    console.log("Cannot send data");
                }
            });
        }
        else{
            $('.check_all').text('Please check a box');
            $('.check_all').css('color','#D0443F');
        }
    });
    $(".checkbox input").click(function() {
        $('.check_all').text('Check all that apply.');
        $('.check_all').css('color','#aeaeae');
    });
}

function settingsCompareProduct() {
    safari.extension.popovers[0].height = 428;
    document.body.innerHTML =
        '<div id="navbar">' + showNavbar(1) + '</div>' +
        '<p class="assistant-title">See Similar Items</p>' +
        '<div id="content">' +
            '<p class="assistant-title">See Similar Items</p>' +
        '</div>';
    $('#content').hide().fadeIn();

    //When user clicks on the back button
    document.getElementById("back-button").onclick = function(evt) {
        showSettings();
        evt.preventDefault();
    }

    $('#content').addClass('loading_content');
    $('#content').html('<div class="loading_item" id="loading-icon"><i class="fa fa-refresh fa-spin fa-fw"></i></div>');

    compareProduct();
}

function compareProduct() { // Called by Assistant tab or Settings menu

    var htmlDiv;
    var query = "%00";
    if (item.name) {
        query = item.name.replace(/ /g,"+");
    }

    // Google shopping search results with gift name as query
    var url = "https://www.bing.com/shop?q=" + query + "&originIGUID";
    
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) { 
            var searchResult = (new DOMParser()).parseFromString(data, "text/html");
            var nodes;

            // If there aren't search results, create array of length 0
            try {
                nodes = searchResult.getElementsByClassName("br-items")[0].childNodes;
            } catch (err) {
                nodes = {};
            }

            htmlDiv = '<div id="compare-item-div">';
            // Get result products and store only name, link, image url and price
            for (var i = 0; i < nodes.length; i++) {
                var new_url = "https://www.bing.com" + $(nodes[i]).attr('data-url');
                
                if (i > 0) htmlDiv += '<hr class="hr-comparison">';

                var productName = $(nodes[i]).find('.br-pdItemName').text();
                var productPrice = $(nodes[i]).find('.pd-price').text();
                var productSrc = 'https://www.bing.com' + $(nodes[i]).find('.br-pdMainImg img').attr('src');
                var productLink = 'placeholder';
                
                $.ajax({
                    url: new_url,
                    type: 'GET',
                    async: false,
                    success: function (data2) {
                        data2 = $(data2).find('.br-pdImg a').attr('href');
                        productLink = data2;
                        $('.compare-image-div').attr('href', productLink);
                        $('.compare-name a').attr('href', productLink);
                    },
                    error: function(){
                      console.log("Error");
                    }
                });
                
                // Create the layout for the product data
                htmlDiv = htmlDiv + 
                    '<a class="compare-image-div" href="' + productLink + '" >' +
                    '<div class="compare-item">' +
                        '<img class="compare-image" alt="' + productName + '" src="'+ productSrc +'">' +
                    '<p class="compare-name">' + productName + '</p>' +
                    '<p class="compare-price">' + productPrice + '</div></a>';
                if (i >= 4) i = nodes.length;
                
                       
                                
            }
            if (!nodes.length) {
                htmlDiv += '<p style="margin:10px">No similar item found<br>Try to change the item name...</p>';
            } else {
                var google_url = "https://www.google.com/search?q=" + query + "&tbm=shop&tbs=vw:g";
                htmlDiv += '<a href="' + google_url + '" id="compare-link"><div id="compare-more">See More</div></a>';
            }
            htmlDiv += '</div>';

            $('#loading-icon').remove();
            $('#content').removeClass('loading_content');
            document.getElementById("content").innerHTML += htmlDiv;
            $('#compare-item-div').hide().fadeIn();

        },
        error: function(){
          console.log("Error");
        }
    });
}

function thankyou(){
    safari.extension.popovers[0].height = 295;
    document.body.innerHTML =
        '<div id="navbar">' + showNavbar() + '</div>' +
        '<div id="content">' +
            '<div class="thank_you">' +
                '<img src="../img/happy_box.png" class="box_image">' +
                '<p class="big-title">Thank you!</p>' +
                '<p class="description">We will work on this right away!</p>' +
                '<button class="exit_button" type="button">Exit</button>' +
            '</div>' +
        '</div>';
    $('#content').hide().fadeIn();
    $(".exit_button").click(function() {
        safari.self.hide();
    });
}
