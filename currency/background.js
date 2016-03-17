window.onload = function() {
		chrome.browserAction.setBadgeBackgroundColor({color:"#FF0000"});
		updateRates(function(json){
			chrome.browserAction.setBadgeText({text:roundRate(getUsd(json))});
    	});
		window.setInterval( function() {
			updateRates(function(json){
				console.log(roundRate(getUsd(json)));
		        chrome.browserAction.setBadgeText({text:roundRate(getUsd(json))});
    		});
		}, 10000);
}