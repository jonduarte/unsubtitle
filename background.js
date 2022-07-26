
// When clicked call javascript inside the content of a tab
chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content_script.js']
  });
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // read `newIconPath` from request and read `tab.id` from sender
    chrome.action.setIcon({
      path: request.newIconPath,
      tabId: sender.tab.id
    });
  }
);
