function Não() { //mostra div easter egg e toca vídeo de fundo
    let Display_Easter_show = document.querySelector("div#Easter_Egg");
    let StartVideo = document.querySelector("video#Video");

    StartVideo.play();
    StartVideo.volume = (0.04);
    Display_Easter_show.style.display = "initial";
};

function Easter_Off() { //desativa a div easter egg se clicar nela
    let Display_Off = document.querySelector("div#Easter_Egg");
    Display_Off.style.display = "None";
};

function Sim() { //desativar parte 1 e iniciar parte 2

    //desativação da parte 1
    let video_Off = document.getElementById("Video");
    let Initial_Div_Off = document.getElementById("Initial_Text");
    let Easter_Egg_Off = document.getElementById("Easter_Egg");

    video_Off.style.display = "none";
    Initial_Div_Off.style.display = "none";
    Easter_Egg_Off.style.display = "none";

    //Início da parte 2

    let Background_change = document.getElementById("Background");
    let Music_Play = document.querySelector("audio#Music");
    let Show_FinalText = document.querySelector("div#Final_Text");
    let show_img1 = document.querySelector("div#img1");
    let show_img2 = document.querySelector("div#img2");
    
    Background_change.style = "background-image: url(./src/background2.png); background-size: 100% 100%; background-repeat: no-repeat;";
    Music_Play.play();
    Music_Play.volume = (0.02);
    Show_FinalText.style.display = "initial";
    show_img1.style.display = "initial";
    show_img2.style.display = "initial";

};