chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Menu",
    id: "contextMenu1",
    contexts: ["page","selection"]
  })
  chrome.contextMenus.onClicked.addListener((event)=>{
    console.log(event)
    chrome.tabs.query({
      currentWindow: true,
    },(tabs) => {
      console.log(tabs)
    })
  })
})

console.log("running")