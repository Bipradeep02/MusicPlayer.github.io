// import { songs } from './songData.js';

const songs = [
    {
        name : "Likhe Jo Khat Tujhe",
        title : "Likhe Jo Khat Tujhe",
        artist : "Anwesha Goswami",
        // id : 1
    },
    {
        name : "Aapki Nazro Ne Samjha",
        title : "Aapki Nazro Ne Samjha",
        artist : "Anwesha Goswami",
        // id : 2
    },
    {
        name : "Aaoge Jab Tum",
        title : "Aaoge Jab Tum",
        artist : "Anwesha Goswami",
        // id : 3
    },
    {
        name : "Acha Lagta Hai",
        title : "Acha Lagta Hai",
        artist : "Anwesha Goswami",
        // id : 4
    },
    {
        name : "Humnava Mere",
        title : "Humnava Mere",
        artist : "Anwesha Goswami",
        // id : 5
    },
    {
        name : "Kuch Toh Hai",
        title : "Kuch Toh Hai",
        artist : "Anwesha Goswami",
        // id : 6
    },
    {
        name : "Mere Yaara",
        title : "Mere Yaara",
        artist : "Anwesha Goswami",
        // id : 7
    },
    {
        name : "O Mere Dil Ke Chain",
        title : "O Mere Dil Ke Chain",
        artist : "Anwesha Goswami",
        // id : 8
    },
    {
        name : "Tu Hi Haqeeqat",
        title : "Tu Hi Haqeeqat",
        artist : "Anwesha Goswami",
        // id : 9
    },
    
];

// console.log(`${songs[1].name}`);

const progressContainer = document.getElementById("pgBox");
const progress = document.getElementById("pg")

const title = document.getElementById("title");
const artist = document.getElementById("artist");
// const audioSrc = document.getElementById("name");
const pic = document.getElementById("pic");

const next = document.getElementById("forward");
const prev = document.getElementById("prev");
const back = document.getElementById("back");
// const replay = document.getElementById("replay");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");

const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
let isPlaying = false;

// const playLists = document.querySelector("playlists");


// var Songs = songs;
const pback = document.getElementById("Pback");
let player = document.querySelector(".player");
let playlists = document.querySelector(".playlists");
const open_p = () => {
    playlists.classList.toggle('active');
    player.classList.add('active2');
}
const close_p = () => {
    playlists.classList.remove("active");
    player.classList.remove("active2");
}
menu1.addEventListener("click", open_p);
menu2.addEventListener("click", close_p);
pback.addEventListener("click", close_p);

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
    // console.log(songs);

}

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
}

const loadSong = (songs) => {
    title.textContent = songs.title;
    // console.log(songs.title);
    // console.log(songs.artist);
    artist.textContent = songs.artist;
    music.src = "../audio/" + songs.name + ".mp3";
    // console.log(music.src);
    // console.log("../audio/"+songs.name+".mp3");

}

let songPos = 0;

// loadSong(songs, songPos);

const nextSong = () => {
    songPos = (songPos + 1) % songs.length;
    console.log(songPos);
    loadSong(songs[songPos]);
    playMusic();
} 

const prevSong = () => {
    songPos = ((songPos - 1) + songs.length) % songs.length;
    console.log(songPos);
    loadSong(songs[songPos]);
    playMusic();
} 

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    progress.style.width = `${(currentTime / duration) * 100}%`;
    
    // console.log(duration + " " + currentTime);
    // console.log(music.currentTime);
}

const setProgress = (e) => {
    // console.log(e);
    // console.log(progressContainer.offsetWidth);
    // console.log(e.offsetX);
    // console.log((e.offsetX/progressContainer.offsetWidth) * music.duration);
    music.currentTime = ((e.offsetX/progressContainer.offsetWidth) * music.duration);
}

play.addEventListener("click", () => {
    // console.log("clicked");
    if(isPlaying){
        // loadSong(songs[songPos]);
        pauseMusic();
    } else {
        loadSong(songs[songPos]);
        playMusic();
    }
});

// menu.addEventListener("click", () => {
//     playLists.classList.add('active');
// });

music.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

next.addEventListener ("click", nextSong);

prev.addEventListener ("click", prevSong);

// replay.addEventListener("click", () => {
//     loadSong(songs[songPos]);
//     playMusic;
// });

music.addEventListener('ended', nextSong);


// ======== Playlist Controls ========



const plPlay1 = document.getElementById("plPlay1");
const plPlay2 = document.getElementById("plPlay2");
const plPlay3 = document.getElementById("plPlay3");
const plPlay4 = document.getElementById("plPlay4");
const plPlay5 = document.getElementById("plPlay5");
const plPlay6 = document.getElementById("plPlay6");
const plPlay7 = document.getElementById("plPlay7");
const plPlay8 = document.getElementById("plPlay8");
const plPlay9 = document.getElementById("plPlay9");

let currentPlaying;
let isPlay = false;

// let isPlayingPl1 = false;
const songName1 = document.getElementById("song1");
const song1Clicked1 = () => {
    // console.log("clicked1");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond1");
        pauseMusic();
        plPlay1.classList.replace("fa-pause", "fa-play");
        // isPlayingPl1 = false;
        isPlay = false
    }
    else{
        // console.log("true cond1");
        // console.log(currentPlaying);
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        } 
        currentPlaying = document.getElementById("plPlay1");
        loadSong(songs[0]);
        playMusic();
        plPlay1.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl1 = true;
        isPlay = true;
        
    }
    
}
songName1.addEventListener ("click", song1Clicked1);


// let isPlayingPl2 = false;
const songName2 = document.getElementById("song2");
const song1Clicked2 = () => {
    // console.log("clicked2");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond2");
        pauseMusic();
        plPlay2.classList.replace("fa-pause", "fa-play");
        // isPlayingPl2 = false;
        isPlay = false;

    }
    else{
        // console.log("true cond2");
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        }
        currentPlaying = document.getElementById("plPlay2");
        loadSong(songs[1]);
        playMusic();
        plPlay2.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl2 = true;
        isPlay = true ; 
    }
    
}
songName2.addEventListener ("click", song1Clicked2);

// let isPlayingPl3 = false;
const songName3 = document.getElementById("song3");
const song1Clicked3 = () => {
    // console.log("clicked3");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond3");
        pauseMusic();
        plPlay3.classList.replace("fa-pause", "fa-play");
        isPlay = false;
    }
    else{
        // console.log("true cond3");
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        }
        currentPlaying = plPlay3;
        loadSong(songs[2]);
        playMusic();
        plPlay3.classList.replace("fa-play", "fa-pause");
        close_p();
        isPlay = true;
    }
    
}
songName3.addEventListener ("click", song1Clicked3);

// let isPlayingPl4 = false;
const songName4 = document.getElementById("song4");
const song1Clicked4 = () => {
    // console.log("clicked4");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond4");
        pauseMusic();
        plPlay4.classList.replace("fa-pause", "fa-play");
        // isPlayingPl4 = false;
        isPlay = false;
    }
    else{
        // console.log("true cond4");
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        }
        currentPlaying = plPlay4;
        loadSong(songs[3]);
        playMusic();
        plPlay4.classList.replace("fa-play", "fa-pause");
        close_p();
        isPlay = true;
    }
    
}
songName4.addEventListener ("click", song1Clicked4);

const songName5 = document.getElementById("song5");
const song1Clicked5 = () => {
    // console.log("clicked1");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond1");
        pauseMusic();
        plPlay5.classList.replace("fa-pause", "fa-play");
        // isPlayingPl1 = false;
        isPlay = false;
    }
    else{
        // console.log("true cond1");
        // console.log(currentPlaying);
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        } 
        currentPlaying = document.getElementById("plPlay5");
        loadSong(songs[4]);
        playMusic();
        plPlay5.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl1 = true;
        isPlay = true;
        
    }
    
}
songName5.addEventListener ("click", song1Clicked5);

const songName6 = document.getElementById("song6");
const song1Clicked6 = () => {
    // console.log("clicked1");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond1");
        pauseMusic();
        plPlay6.classList.replace("fa-pause", "fa-play");
        // isPlayingPl1 = false;
        isPlay = false;
    }
    else{
        // console.log("true cond1");
        // console.log(currentPlaying);
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        } 
        currentPlaying = document.getElementById("plPlay6");
        loadSong(songs[5]);
        playMusic();
        plPlay6.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl1 = true;
        isPlay = true;
        
    }
    
}
songName6.addEventListener ("click", song1Clicked6);

const songName7 = document.getElementById("song7");
const song1Clicked7 = () => {
    // console.log("clicked1");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond1");
        pauseMusic();
        plPlay7.classList.replace("fa-pause", "fa-play");
        // isPlayingPl1 = false;
        isPlay = false
    }
    else{
        // console.log("true cond1");
        // console.log(currentPlaying);
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        } 
        currentPlaying = document.getElementById("plPlay7");
        loadSong(songs[6]);
        playMusic();
        plPlay7.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl1 = true;
        isPlay = true;
        
    }
    
}
songName7.addEventListener ("click", song1Clicked7);

const songName8 = document.getElementById("song8");
const song1Clicked8 = () => {
    // console.log("clicked1");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond1");
        pauseMusic();
        plPlay8.classList.replace("fa-pause", "fa-play");
        // isPlayingPl1 = false;
        isPlay = false
    }
    else{
        // console.log("true cond1");
        // console.log(currentPlaying);
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        } 
        currentPlaying = document.getElementById("plPlay8");
        loadSong(songs[7]);
        playMusic();
        plPlay8.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl1 = true;
        isPlay = true;
        
    }
    
}
songName8.addEventListener ("click", song1Clicked8);

const songName9 = document.getElementById("song9");
const song1Clicked9 = () => {
    // console.log("clicked1");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond1");
        pauseMusic();
        plPlay9.classList.replace("fa-pause", "fa-play");
        // isPlayingPl1 = false;
        isPlay = false
    }
    else{
        // console.log("true cond1");
        // console.log(currentPlaying);
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        } 
        currentPlaying = document.getElementById("plPlay9");
        loadSong(songs[8]);
        playMusic();
        plPlay9.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl1 = true;
        isPlay = true;
        
    }
    
}
songName9.addEventListener ("click", song1Clicked9);

const songName10 = document.getElementById("song10");
const song1Clicked10 = () => {
    // console.log("clicked1");
    if (isPlay && currentPlaying === "undefined")
    {
        // console.log("false cond1");
        pauseMusic();
        plPlay10.classList.replace("fa-pause", "fa-play");
        // isPlayingPl1 = false;
        isPlay = false
    }
    else{
        // console.log("true cond1");
        // console.log(currentPlaying);
        if(typeof(currentPlaying) != "undefined"){
            currentPlaying.classList.replace("fa-pause", "fa-play");
            pauseMusic();
            isPlay = false;
        } 
        currentPlaying = document.getElementById("plPlay10");
        loadSong(songs[9]);
        playMusic();
        plPlay10.classList.replace("fa-play", "fa-pause");
        close_p();
        // isPlayingPl1 = true;
        isPlay = true;
        
    }
    
}
songName10.addEventListener ("click", song1Clicked10);