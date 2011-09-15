//<script src="jquery-1.6.4.min.js"></script>
var anchors = $("#siteTable .even a.title");
var links = Array();
anchors.each(function(){
    links.push(this.href);
});
var port = chrome.extension.connect()
var additionalInfo = {
    "anchors" : links,
    "test_url" : "http://facebook.com"
};
port.postMessage(additionalInfo);

  
            
//chrome.tabs.create({url: "http://google.com"});