chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Menu",
    id: "contextMenu1",
    contexts: ["page","selection"]
  })
  chrome.contextMenus.onClicked.addListener((event)=>{
    console.log(event)
    chrome.search.query({
      disposition: "NEW_TAB",
      text: event.selectionText,
    })
  })
})

console.log("running")