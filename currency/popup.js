$(document).ready(function(){
    updateRates(function(json){
        $('#usd').html("usd:"+getUsd(json));
        $('#eur').html("eur:"+getEur(json));
        chrome.browserAction.setBadgeText({text:getUsd(json)});
    });
 });

function updateRates(doit) {
    var url = "https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
    $.getJSON(url, doit);
}

function getUsd(json){
    return json.query.results.rate[0].Rate;
}

function getEur(json){
    return json.query.results.rate[1].Rate;
}

function roundRate(rate){
    return parseFloat(rate).toFixed(1).toString();
}