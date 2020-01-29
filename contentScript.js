var style;

chrome.storage.sync.get('style', function(data) {
  style = data.style
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (!changes['style']) { return; }

  style = changes['style'].newValue
});

function getACage () {
  var img = document.createElement("img");
  var imgWidth = Math.floor(Math.random() * 300) + 50;
  var imgHeight = Math.floor(Math.random() * 300) + 50;
  img.src = "https://place" + style + ".com/" + imgWidth + "/" + imgHeight;
  img.style.position = "fixed";
  img.style.left = Math.floor(Math.random() * 80) + 5 + "%"
  img.style.top = Math.floor(Math.random() * 80) + 5 + "%"

  img.addEventListener("click",function(){
    img.parentNode.removeChild(img);
  })

  return img
}

function injectACage(cage) {
  var body = document.getElementsByTagName("body")[0]
  body.appendChild(cage);
}

setInterval(function(){
  var cage =  getACage();
  injectACage(cage)
}, 3000);
