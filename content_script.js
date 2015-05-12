// Remove subtitles

var css   = '.player-timedtext { opacity: 0!important; }',
    head  = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
style.setAttribute('id', 'hide-subtitle')

if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

toggle = localStorage.toggleSubtitles
elem   = document.getElementById('hide-subtitle');

// Normalize toggle
if(toggle && !elem)
  toggle = null;

if (toggle) {
  elem.remove();
  localStorage.removeItem('toggleSubtitles');
  chrome.runtime.sendMessage({ "newIconPath" : "19.png" });
} else {
  head.appendChild(style);
  localStorage.toggleSubtitles = true;
  chrome.runtime.sendMessage({ "newIconPath" : "19-undo.png" });
}
