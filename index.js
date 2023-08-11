var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
var player;

window.onload = function() {
    player = new AAMPMediaPlayer();
}

function loadAAMPVideo() {
    var video = document.getElementById("video");
    video.src = url;
    video.play();
    video.style.display = "block";
}

var playButton = document.getElementById("playButton");

playButton.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Enter key
        loadAAMPVideo();
    }
});





















// Old Cooode

// var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// var player;

// window.onload = function() {
//     player = new AAMPMediaPlayer();
// }

// function loadAAMPVideo() {
//     var video = document.getElementById("video");
//     video.src = url;
//     video.play();
//     video.style.display = "block";
// }

// document.addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) { // Enter key
//         loadAAMPVideo();
//     }
// });

// var playButton = document.getElementById("playButton");
// playButton.addEventListener("click", loadAAMPVideo);
