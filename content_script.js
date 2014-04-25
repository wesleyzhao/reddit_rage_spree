var anchors = $("#siteTable a.title");
var links = Array();
anchors.each(function(){
    links.push(this.href);
});
var port = chrome.extension.connect()
var additionalInfo = {
    "anchors" : links
};
port.postMessage(additionalInfo);