import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
});

const play_pause: HTMLElement = document.getElementById('playPause');
play_pause.onclick = () => player.togglePlay();

const mute_unmute: HTMLElement = document.getElementById("muteUnmute");
mute_unmute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.log(error.message);
    })
}