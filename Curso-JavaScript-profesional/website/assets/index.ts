import MediaPlayer from "@davidesj97/platzi-mediaplayer";
import AutoPlay from "@davidesj97/platzi-mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@davidesj97/platzi-mediaplayer/lib/plugins/AutoPause";
import Ads from "@davidesj97/platzi-mediaplayer/lib/plugins/Ads";

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
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