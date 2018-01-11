safari.self.addEventListener("message", handleMessage, false);

function isWebsiteUnknown(website) {
    websiteList = getWebsiteList();
    var result = true;
    var regexp;
    for (var i = 0; i < websiteList.length; i++) {
        test = new RegExp(websiteList[i]);
        if (test.exec(website)) result = false;
    }
    return result;
}

function postMessage(messageName, messageData) {
    safari.self.tab.dispatchMessage(messageName, messageData);
}

function handleMessage(msgEvt){
    if (window.top !== window) return;

    if (msgEvt.name == "from_global") {
        if (msgEvt.message["type"] == "loggin_status") {
            if (msgEvt.message["logged_in"]) {
                localStorage.setItem("giftibly_token", "added");
            } else {
                localStorage.setItem("giftibly_token", "not added");
            }
        } else if (msgEvt.message["type"] == "got_item") {
            if (msgEvt.message["action"] == "getItem") {
                var website = location.hostname.toLowerCase();
                var websiteData = getItem(website);
                
                postMessage("from_injected", {
                    "type": "got_item", 
                    "itemData": websiteData, 
                    "unknownWebsiteData": isWebsiteUnknown(website)
                });
                isGotItem = true;
            }
        }
    }
}

(function(){
    if ($('#ga_logged_in')[0]) {
        var token_string = $('#ga_logged_in').data('token');
        postMessage("from_injected", {"type": "loggin_status", logged_in: true,  token: token_string});
    } else if ($('#ga_logged_out')[0]) {
        postMessage("from_injected", {"type": "loggin_status", logged_in: false});
    }

    $(document).ready(function() {
        $('#gift_assistant_link').remove();
        $('.ga_button').remove();
    });

    $(document).on('turbolinks:load', function() {
        $('#gift_assistant_link').remove();
        $('.ga_button').remove();
    });
})();
