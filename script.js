const progress = document.getElementById('progress'); 
const song = document.getElementById('song'); 
const playBtn = document.getElementById('play'); 
const musicPlayer = document.querySelector('.music-player');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const cover =document.querySelector('.cover');
const playIcon = document.querySelector('.play-icon');

const songs = ['your power','shape of you', 'despacito'];
let songIndex = 1;

loadSong(songs[songIndex]);

function loadSong(audio){
    title.innerText = audio ;
    cover.src = `/media/${audio}.jpg`;
    song.src = `/media/${audio}.mp3`;
}

function playSong(){
    musicPlayer.classList.add('play');
    playIcon.classList.add('fa-pause');
    playIcon.classList.remove('fa-play');
    song.play();
}
function pauseSong(){
    musicPlayer.classList.remove('play');
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    song.pause();
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

playBtn.addEventListener('click',()=>{
    const isPlaying = musicPlayer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
}

prevBtn.addEventListener('click',()=>{
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
})

nextBtn.addEventListener('click',()=>{
    songIndex++;
    if(songIndex > songs.length -1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
})