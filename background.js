chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete') {

        // do your things
        console.log("aasdasdasdas")

      }
    })
});