chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Menu",
    id: "contextMenu1",
    contexts: ["page","selection"]
  })
  chrome.contextMenus.onClicked.addListener((event)=>{
    console.log(event)
  })
  chrome.contextMenus.create({
    title: "Test Menu2",
    id: "contextMenu2",
    contexts: ["page","selection"]
  })
  chrome.contextMenus.create({
    title: "Test Menu3",
    id: "contextMenu3",
    contexts: ["page","selection"]
  })  
})

console.log("running")