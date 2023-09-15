chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Menu",
    id: "contextMenu1",
    contexts: ["page","selection"]
  })
})

console.log("running")