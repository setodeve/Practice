chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Menu",
    id: "contextMenu1",
    contexts: ["page","selection"]
  })
  chrome.contextMenus.onClicked.addListener((event)=>{
    console.log(event)
    chrome.tabs.create({
      url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`
    })
  })
})

chrome.storage.local.get(["text"], (res) => {
  console.log(res)
})

chrome.runtime.onMessage.addListener((msg,sender,sendResponse) =>{
  console.log(msg)
  console.log(sender)
  sendResponse("testres")
  chrome.tabs.sendMessage(sender.tab.id,"Gpt message from background")
})
