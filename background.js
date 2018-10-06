chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({style: 'cage'})
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'contentScript.js'
  });
})
