var style;

chrome.storage.sync.get('style', function(data) {
  style = data.style
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (!changes['style']) { return; }

  style = changes['style'].newValue
});

function imgSrc(sourceStyle, imgWidth, imgHeight) {
  var sourceStyles = {
    'cage': "https://www.placecage.com/" + imgWidth + "/" + imgHeight,
    'kitten': "https://placekitten.com/" + imgWidth + "/" + imgHeight,
    'bear': "https://placebear.com/" + imgWidth + "/" + imgHeight,
    'murry': "https://www.fillmurray.com/" + imgWidth + "/" + imgHeight,
    'beard': "https://placebeard.it/" + imgWidth + "/" + imgHeight,
    'segal': "https://www.stevensegallery.com/" + imgWidth + "/" + imgHeight,
  }

  if (sourceStyle === 'random') {
    var keys = Object.keys(sourceStyles)
    var idx = Math.floor(Math.random() * Math.floor(keys.length))

    return sourceStyles[keys[idx]]
  } else {
    return sourceStyles[sourceStyle]
  }
}

function getACage () {
  var img = document.createElement("img");
  var imgWidth = Math.floor(Math.random() * 300) + 50;
  var imgHeight = Math.floor(Math.random() * 300) + 50;
  img.src = imgSrc(style, imgWidth, imgHeight)
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
}, 1000);
