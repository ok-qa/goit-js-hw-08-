import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const timeKey = 'videoplayer-current-time';


    player.on('timeupdate',throttle(saveThrottledTime) );


function saveThrottledTime() { 
    player.currentTime().then(function (seconds){ 
        localStorage.setItem(timeKey, seconds);
    })
}


  const savedTime = localStorage.getItem(timeKey);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }

