const audioPlayer = document.getElementById('player');
const songTitle = document.getElementById('song-title');

const songs = [
    "song/Colorful cat tinsel garlands.mp3",
    "song/Snowflake.mp3",
    "song/Carol of the bells.mp3",
    "song/Deck the halls(instrumental).mp3",
    "song/We wish you a marry christmas.mp3",
    "song/Winter time.mp3",
    "song/Home for the holidays.mp3",
    "song/Hip hop christmas.mp3"
];

let currentSongIndex = 0;

function getCleanName(fileName) {
    let cleanName = fileName.split('/').pop(); 
    return cleanName.replace(".mp3", "").replace(/-/g, " ");
}

function updateSong() {
    audioPlayer.src = songs[currentSongIndex];
    songTitle.innerText = "Поточний трек: " + getCleanName(songs[currentSongIndex]);
    
    audioPlayer.play().catch(error => {
        console.log("Відтворення почнеться після взаємодії з сайтом");
    });
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSong();
}

audioPlayer.onended = nextSong;

window.addEventListener('load', () => {
    audioPlayer.src = songs[currentSongIndex];
    songTitle.innerText = "Поточний трек: " + getCleanName(songs[currentSongIndex]);
});