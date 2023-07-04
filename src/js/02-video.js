import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const timeKey = 'player-current-time';

const savedTime = localStorage.getItem(timeKey);
  

player.on('timeupdate', throttle(saveThrottledTime));
function saveThrottledTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(timeKey, seconds);
  });
}


window.addEventListener('DOMContentLoaded', function () {
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});


