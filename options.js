var styleSelect = document.getElementById("style-select")

styleSelect.addEventListener("change",function(event){
  var style = event.target.value;
  chrome.storage.sync.set({style: style})
})
