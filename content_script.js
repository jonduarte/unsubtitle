// Remove subtitles
var subtitles = document.getElementsByClassName('player-timedtext')
for(index in subtitles) {
  subtitles[index].remove();
}
