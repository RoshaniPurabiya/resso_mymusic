console.log("Welcome to Resso");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "02 - Ek Villain - Banjaara [DJMaza.Info]", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "02 - Paniyon Sa - DownloadMing.SE", filePath: "songs/1.mp3", coverPath: "covers/12735.jpg"},
    {songName: "02 Gazab Ka Hai Din - Dil Juunglee 190Kbps", filePath: "songs/3.mp3", coverPath: "covers/12743.jpg"},
    {songName: "02 Kaun Tujhe (MS Dhoni) Palak 190Kbps", filePath: "songs/10.mp3", coverPath: "covers/12772.jpg"},
    {songName: "02 Toota Jo Kabhi Tara - Flying Jatt (Atif Aslam) 190Kbps", filePath: "songs/4.mp3", coverPath: "covers/12773.jpg"},
    {songName: "03_-_Bariyan(wapking.cc) copy", filePath: "songs/5.mp3", coverPath: "covers/12798.jpg"},
    {songName: "04 Judaai - Badlapur [Arijit Singh] 190Kbps", filePath: "songs/6.mp3", coverPath: "covers/2.webp"},
    {songName: "07 - EK Mulaqat Ho - DownloadMing.SE", filePath: "songs/7.mp3", coverPath: "covers/12735.jpg"},
    {songName: "Aashiqui 2 Mashup Love", filePath: "songs/8.mp3", coverPath: "covers/12812.jpg"},
    {songName:" Chal Wahan Jaate Hain (Arijit Singh) 320Kbps", filePath: "songs/9.mp3", coverPath: "covers/12827.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


