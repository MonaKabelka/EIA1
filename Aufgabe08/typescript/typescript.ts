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
    function playSample(i: number): void {
        sound[i].play();
    }

    //Eventlistener Pads
    document.querySelector("#pad1").addEventListener("click", function (): void {
        playSample(0);
        recordBeat(0);
    });
    document.querySelector("#pad2").addEventListener("click", function (): void {
        playSample(1);
        recordBeat(1);
    });
    document.querySelector("#pad3").addEventListener("click", function (): void {
        playSample(2);
        recordBeat(2);
    });
    document.querySelector("#pad4").addEventListener("click", function (): void {
        playSample(3);
        recordBeat(3);
    });
    document.querySelector("#pad5").addEventListener("click", function (): void {
        playSample(4);
        recordBeat(4);
    });
    document.querySelector("#pad6").addEventListener("click", function (): void {
        playSample(5);
        recordBeat(5);
    });
    document.querySelector("#pad7").addEventListener("click", function (): void {
        playSample(6);
        recordBeat(6);
    });
    document.querySelector("#pad8").addEventListener("click", function (): void {
        playSample(7);
        recordBeat(7);
    });
    document.querySelector("#pad9").addEventListener("click", function (): void {
        playSample(8);
        recordBeat(8);
    });

    //Play- und Stop-Button______________________________________________________________________________________________________________
    const playbtn: HTMLElement = document.querySelector("#play");
    const stopbtn: HTMLElement = document.querySelector("#stop");

    //Class toggle
    function toggle(firstbtn: HTMLElement, secondbtn: HTMLElement): void {
        firstbtn.classList.add("hidden");
        secondbtn.classList.remove("hidden");
    }

    playbtn.addEventListener("click", function (): void {
        toggle(playbtn, stopbtn);
        loop(true);
    });

    stopbtn.addEventListener("click", function (): void {
        toggle(stopbtn, playbtn);
        loop(false);
    });

    //Record-Button_______________________________________________________________________________________________________________________
    const recordbtn: HTMLElement = document.querySelector("#record");

    let dynArray: number[] = [0, 1, 2];  //Werden mit Trash Button auch gelöscht!
    let recording: boolean;
    let i: number;
   
    function recordBeat(i: number): void {
        console.log("Mikrofon nimmt auf");
        if (recording == true) {
            dynArray.push(i);
        } 
    }

    //Eventlistener Record-Button
    recordbtn.addEventListener("click", function (): void {
        if (recordbtn.classList.contains("active")) {
            recordbtn.classList.remove("active");
            console.log("inaktiv");
            recording = false;
        } else {
            recordbtn.classList.add("active");
            recording = true;
            console.log("aktiv");
        }
    });

    // Lösch-Button______________________________________________________________________________________________________________________
    const trashbtn: HTMLElement = document.querySelector("#trash");

    trashbtn.addEventListener("click", function (): void {
        dynArray = [];
        console.log("gelöscht");
    });

    //Funktion Play- und Pause-Button____________________________________________________________________________________________________
    let interval: number;
    let x: number = 0;

    function loop (b: boolean): void {
            if (b == true) {
                interval = setInterval(function(): void {
                   playSample(dynArray[x]);
                   x++;
                   console.log(x);
                   if (x >= dynArray.length) {
                    x = 0;
                }
                },                     500);
            } else {
                clearInterval(interval);
            }
        }

}