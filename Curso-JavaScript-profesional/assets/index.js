import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
});

const play_pause = document.getElementById('playPause');
play_pause.onclick = () => player.togglePlay();

const mute_unmute = document.getElementById("muteUnmute");
mute_unmute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.log(error.message);
    })
}