var links = Array();

chrome.extension.onConnect.addListener(function(port){
    var tab = port.sender.tab;
    
    port.onMessage.addListener(function(info){
	links = info.anchors;
	if (links){
	    var popup_file = "popup.html";
	}
	else{
	    var popup_file = "f7u12.html";
	}
	
	chrome.tabs.getSelected(null, function(tab){
	    chrome.browserAction.setPopup({tabId: tab.id, "popup" : popup_file});
        });//end getSelected
    });//end addListener
});//end
     