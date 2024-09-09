let currentSongIndex = 0;
const songs = [
    { src: 'home.mp3', title: 'Resonance - Home', image: 'homepic.png' },
    { src: 'seeyou.mp3', title: 'I see you in my dreams - Blut Own', image: 'seeyoupic.png' },
    { src: 'comfort.mp3', title: 'Comfort Chain - Istupendo', image: 'comfortpic.png' },
    { src: 'beach.mp3', title: 'The Beach(slowed)', image: 'beachpic.jpg' },
    { src: 'milk.mp3', title: 'Milk Casette', image: 'milkpic.png' },
];
const audioElement = document.getElementById('audioPlayer');
const playPauseIcon = document.getElementById('playPauseIcon');
const songDescription = document.getElementById('songDescription');
const songImage = document.getElementById('songImage');

function loadSong(index) {
    audioElement.src = songs[index].src;
    songDescription.textContent = `Now playing: ${songs[index].title}`;
    songImage.src = songs[index].image;
    songImage.alt = songs[index].title;
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
}

function togglePlayPause() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audioElement.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
}

function toggleNextAudio() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioElement.play();
}

function togglePrevAudio() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioElement.play();
}

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSongIndex);
});

