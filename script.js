
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("play");
let bar = document.getElementById("bar");
let songItems = Array.from(document.getElementsByClassName('item'));
let mainsong = document.getElementById('mainsongname');


let songs = [
    { songname: "Hanuman Chalisa", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Ram Siya Ram - Sachet Tandon", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "Shiv Tandav Stotram - Sachet Tandon", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Baazigar - DIVINE", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Chal Ghar Chalen - Malang", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "Jug Jug Jeeve - Shiddat", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Tum Saath Rehnaa - King", filepath: "7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Humsafar - Badrinath Ki Dulhania", filepath: "8.mp3", coverpath: "covers/8.jpg" },
    { songname: "Atma-Rama-Ananda-Ramana", filepath: "9.mp3", coverpath: "covers/10.jpg" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;



}
)

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        mainsong.innerText = songs[songIndex].songname;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    bar.value = progress;

})

bar.addEventListener('change', () => {
    audioElement.currentTime = (bar.value * audioElement.duration / 100);
}

)
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-pause-circle")
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mainsong.innerText = songs[songIndex].songname;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-pause-circle");

    })

})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mainsong.innerText = songs[songIndex].songname;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-pause-circle");
})

document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mainsong.innerText = songs[songIndex].songname;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-pause-circle");
})
