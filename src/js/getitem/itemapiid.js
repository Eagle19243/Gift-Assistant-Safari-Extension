function getItemApiID(website) {
    var apiid;
    try {
        if (/amazon/.exec(website)) {
            apiid= $('#ASIN').attr('value');
        } 
    } finally {
        if (apiid) {
            return apiid;
        } else {
            return "";
        }
    }
}