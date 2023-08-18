 var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
        var player;

        window.onload = function() {
            player = new AAMPMediaPlayer();
        }

        function loadAAMPVideo() {
            var video = document.getElementById("video");
            var videoCardContainer = document.getElementById("videoCardContainer");
            video.src = url;
            //container.style.height = "100vh";

            // Play video and request fullscreen
            video.play();
            const videoElement = document.getElementById('video');

if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen().catch(function(error) {
        console.log("Fullscreen request failed:", error);
    });
} else if (videoElement.webkitRequestFullscreen) {
    videoElement.webkitRequestFullscreen().catch(function(error) {
        console.log("Fullscreen request failed:", error);
    });
} else if (videoElement.mozRequestFullScreen) {
    videoElement.mozRequestFullScreen().catch(function(error) {
        console.log("Fullscreen request failed:", error);
    });
} else if (videoElement.msRequestFullscreen) {
    videoElement.msRequestFullscreen().catch(function(error) {
        console.log("Fullscreen request failed:", error);
    });
} else {
    console.log("Fullscreen not supported");
}
        }

        var playButton = document.getElementById("playButton");

        // playButton.addEventListener("click", function(event) {
        //     loadAAMPVideo();
        // });

        playButton.addEventListener("keydown", function(event) {
            if (event.keyCode === 13) { // Enter key
                loadAAMPVideo();
            }
        });
// var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// var player;

// window.onload = function() {
//     player = new AAMPMediaPlayer();
// }

// function loadAAMPVideo() {
//     var video = document.getElementById("video");
//     video.src = url;
//     video.style.display = "block";
//     video.play();

//     // Hide the language container when video starts playing
//     var languageContainer = document.getElementById("languageContainer");
//     languageContainer.style.display = "none";
// }

// var playButton = document.getElementById("playButton");

// playButton.addEventListener("click", function(event) {
//     loadAAMPVideo();
// });

// playButton.addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) { // Enter key
//         loadAAMPVideo();
//     }
// });






// Single component

// var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// var player;

// window.onload = function() {
//     player = new AAMPMediaPlayer();
// }

// function loadAAMPVideo() {
//     var video = document.getElementById("videoPlayer");
//     video.src = url;
//     video.play();
//     video.style.display = "block";

//     // Hide the "Play" button and make the video to be in full screen
//     // var container = document.getElementById("container");
//     // container.style.display = "none";
//     // video.requestFullscreen().catch(error => {
//     //     console.error('Error attempting to enable full-screen mode:', error);
//     // });

    
// }

// var playButton = document.getElementById('playButton');

// playButton.addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) { // Enter key
//         loadAAMPVideo();
//     }
// });
























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




// Single component

// var url = "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// var player;

// window.onload = function() {
//     player = new AAMPMediaPlayer();
// }

// function loadAAMPVideo() {
//     var video = document.getElementById("videoPlayer");
//     video.src = url;
//     video.play();
//     video.style.display = "block";

//     // Hide the "Play" button and make the video to be in full screen
//     // var container = document.getElementById("container");
//     // container.style.display = "none";
//     // video.requestFullscreen().catch(error => {
//     //     console.error('Error attempting to enable full-screen mode:', error);
//     // });

    
// }

// var playButton = document.getElementById('playButton');

// playButton.addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) { // Enter key
//         loadAAMPVideo();
//     }
// });
























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
