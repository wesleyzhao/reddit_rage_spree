var links = Array();

chrome.extension.onConnect.addListener(function(port){
    console.log ('here inside the port connect');
    var tab = port.sender.tab;
    //console.log(tab.id);
    var popup_file = "f7u12.html";
    port.onMessage.addListener(function(info){
	//console.log('here inside the addlistener port.onMessage');
	links = info.anchors;
	if (links){
	    //console.log('here inside the if links True');
	    popup_file = "popup.html";
	}
	else{
	    //console.log('here inside the if links False');
	    popup_file = "f7u12.html";
	}
	
	chrome.tabs.getSelected(null, function(tab2){
	    //console.log('here inside the tabs.getSelected');
	    //console.log(popup_file);
	    //console.log(tab.id);
	    //console.log(tab2.id);
	    chrome.pageAction.setPopup({tabId: tab.id, "popup" : popup_file});
        });//end getSelected
    });//end addListener
});//end
     

chrome.tabs.onUpdated.addListener(checkForValidUrl);
// will check if page is reddit, if so, then will show the pageAction popup icon

function checkForValidUrl(tabId, changeInfo, tab){

    if (tab.url.indexOf('http://www.reddit.com') > -1){
	chrome.pageAction.show(tabId);
    }

}