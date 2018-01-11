// Global.js
const popover = safari.extension.popovers[0].contentWindow;

window.onload = function() {
    safari.application.addEventListener("message", handleMessage, false);
    safari.application.addEventListener("popover", popoverHandler, true);
}

function postMessage(messageName, messageData) {
    if (!safari.application.activeBrowserWindow.activeTab) return;
    if (!safari.application.activeBrowserWindow.activeTab.page) return;

    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage(messageName, messageData);
}

function handleMessage(msgEvt) {
    if (msgEvt.name != "from_injected") return;
    
    if (msgEvt.message["type"] == "loggin_status") {
        if (msgEvt.message["logged_in"]) {
            localStorage.setItem("giftibly_token", msgEvt.message["token"]);
            postMessage("from_global", {"type": "loggin_status", "logged_in": true});
        } else {
            localStorage.setItem("giftibly_token", "");
            postMessage("from_global", {"type": "loggin_status", "logged_in": false});
        }
    } else if (msgEvt.message["type"] == "got_item") {
        if (msgEvt.message["itemData"]) {
            item = msgEvt.message["itemData"];
            unknownWebsite = msgEvt.message["unknownWebsiteData"];
            popover.startPopup(item, unknownWebsite);
        } else {
            
        }
    }
}

function popoverHandler(event) {
    if (event.target.identifier === "popover") {
        postMessage("from_global", {"type": "got_item", action: "getItem"});
    }
}