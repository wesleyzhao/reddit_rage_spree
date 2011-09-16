var bg = chrome.extension.getBackgroundPage();
var links = bg.links;
function open_links(){
    chrome.tabs.create({url: links[0], selected: false}, function(){
	links.splice(0,1);
	if (links.length > 0){
	    open_links();
	}//end if
    });
}
open_links();