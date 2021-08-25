window.onload = function() {
    // Get a handle to the player
    player       = document.getElementById('video-element');
    btnPlayPause = document.getElementById('btnPlayPause');

    // Add a listener for the play and pause events so the buttons state can be updated
    player.addEventListener('play', function() {
        // Change the button to be a pause button
        //changeButtonType(btnPlayPause, 'pause');
        document.getElementById("btnPlayPause").src="img/pause.png";
    }, false);

    player.addEventListener('pause', function() {
        // Change the button to be a play button
        //changeButtonType(btnPlayPause, 'play');
        document.getElementById("btnPlayPause").src="img/play.png";
    }, false);

    player.addEventListener('ended', function() { this.pause(); }, false);	
}

function playPauseVideo() {
  if (player.paused || player.ended) {
      // Change the button to a pause button
      //changeButtonType(btnPlayPause, 'pause');
      document.getElementById("btnPlayPause").src="img/pause.png";
      player.play();
  }
  else {
      // Change the button to a play button
      //changeButtonType(btnPlayPause, 'play');
      document.getElementById("btnPlayPause").src="img/play.png";
      player.pause();
  }
}

// Updates a button's title, innerHTML and CSS class
function changeButtonType(btn, value) {
  btn.title     = value;
  btn.innerHTML = value;
  btn.className = value;
}
