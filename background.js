// When clicked call javascript inside the content of a tab
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // read `newIconPath` from request and read `tab.id` from sender
      chrome.browserAction.setIcon({
        path: request.newIconPath,
        tabId: sender.tab.id
      });
});
