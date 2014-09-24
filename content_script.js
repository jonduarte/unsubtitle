// Remove subtitles
var subtitles = document.getElementsByClassName('player-timedtext')
for(index in subtitles) {
  console.log(subtitles[index]);
  subtitles[index].remove();
}
