//Sounds zuweisen
const sound: HTMLAudioElement [] = []; //Kann man hier auch const nutzen?
sound[0] = new Audio(".assets/kick.mp3");
sound[1] = new Audio(".assets/hihat.mp3");
sound[2] = new Audio(".assets/snare.mp3");
sound[3] = new Audio(".assets/A.mp3");
sound[4] = new Audio(".assets/C.mp3");
sound[5] = new Audio(".assets/F.mp3");
sound[6] = new Audio(".assets/G.mp3");
sound[7] = new Audio(".assets/laugh-1.mp3");
sound[8] = new Audio(".assets/laugh-2.mp3");

//Eventlistener
document.querySelector("#pad1").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad2").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad3").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad4").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad5").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad6").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad7").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad8").addEventListener("click", function () {
    playSample();
});
document.querySelector("#pad9").addEventListener("click", function () {
    playSample();
});

//Abspiel Funktion
function playSample () {

}