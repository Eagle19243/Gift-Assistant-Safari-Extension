function showNavbar(back) {
    htmlCode =
        '<a href="' + site_name + '">' +
            '<img id="logo" src="../img/white-logo.png">' +
        '</a>' +
        '<p id="title"><span>Giftibly</span> | Gift Assistant</p>' +
        '<i class="fa fa-question-circle" id="settings-button" aria-hidden="true"></i>';
    if (back) {
        htmlCode += '<div id="back-button-div">' +
            '<a id="back-button" href="#"><i class="fa fa-chevron-left"></i>Back</a></div>';
    }
    return htmlCode;
}
