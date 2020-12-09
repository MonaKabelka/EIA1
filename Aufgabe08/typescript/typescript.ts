namespace Aufgabe08 {
//Sounds Array
const sound: HTMLAudioElement[] = [
new Audio("assets/kick.mp3"),
new Audio("assets/hihat.mp3"),
new Audio("assets/snare.mp3"),
new Audio("assets/A.mp3"),
new Audio("assets/C.mp3"),
new Audio("assets/F.mp3"),
new Audio("assets/G.mp3"),
new Audio("assets/laugh-1.mp3"),
new Audio("assets/laugh-2.mp3")];

//Funktion Abspielen der Sounds
function playSample(n: number): void {
    sound[n].play();
}

//Eventlistener Pads
document.querySelector("#pad1").addEventListener("click", function (): void {
    playSample(0);
});
document.querySelector("#pad2").addEventListener("click", function (): void {
    playSample(1);
});
document.querySelector("#pad3").addEventListener("click", function (): void {
    playSample(2);
});
document.querySelector("#pad4").addEventListener("click", function (): void {
    playSample(3);
});
document.querySelector("#pad5").addEventListener("click", function (): void {
    playSample(4);
});
document.querySelector("#pad6").addEventListener("click", function (): void {
    playSample(5);
});
document.querySelector("#pad7").addEventListener("click", function (): void {
    playSample(6);
});
document.querySelector("#pad8").addEventListener("click", function (): void {
    playSample(7);
});
document.querySelector("#pad9").addEventListener("click", function (): void {
    playSample(8);
});

//Play- und Stop-Button
const playbtn: HTMLElement = document.querySelector("#play");
const stopbtn: HTMLElement = document.querySelector("#stop");

function toggle(firstbtn: HTMLElement, secondbtn: HTMLElement): void {
    firstbtn.classList.add("hidden");
    secondbtn.classList.remove("hidden");
}

playbtn.addEventListener("click", function (): void {
    toggle(playbtn, stopbtn);
});

stopbtn.addEventListener("click", function (): void {
    toggle(stopbtn, playbtn);
});

//Beat als Loop
playbtn.addEventListener("click", function (): void {
    beat();
});

//Lösch-Button
// const trashbtn: HTMLElement = document.querySelector("#trash");

// trashbtn.addEventListener("click", function (): void {
//     .length = 0;
// })

function beat(): void {
    setInterval(function (): void {
        setTimeout(() => {
            playSample(0);
        },         200);
        setTimeout(() => {
            playSample(1);
        },         800);
        setTimeout(() => {
            playSample(2);
        },         800);

    },          300);
}



}