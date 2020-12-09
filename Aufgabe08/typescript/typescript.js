var Aufgabe08;
(function (Aufgabe08) {
    //Sounds Array
    var sound = [
        new Audio("assets/kick.mp3"),
        new Audio("assets/hihat.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/A.mp3"),
        new Audio("assets/C.mp3"),
        new Audio("assets/F.mp3"),
        new Audio("assets/G.mp3"),
        new Audio("assets/laugh-1.mp3"),
        new Audio("assets/laugh-2.mp3")
    ];
    //Funktion Abspielen der Sounds
    function playSample(n) {
        sound[n].play();
    }
    //Eventlistener Pads
    document.querySelector("#pad1").addEventListener("click", function () {
        playSample(0);
    });
    document.querySelector("#pad2").addEventListener("click", function () {
        playSample(1);
    });
    document.querySelector("#pad3").addEventListener("click", function () {
        playSample(2);
    });
    document.querySelector("#pad4").addEventListener("click", function () {
        playSample(3);
    });
    document.querySelector("#pad5").addEventListener("click", function () {
        playSample(4);
    });
    document.querySelector("#pad6").addEventListener("click", function () {
        playSample(5);
    });
    document.querySelector("#pad7").addEventListener("click", function () {
        playSample(6);
    });
    document.querySelector("#pad8").addEventListener("click", function () {
        playSample(7);
    });
    document.querySelector("#pad9").addEventListener("click", function () {
        playSample(8);
    });
    //Play- und Stop-Button
    var playbtn = document.querySelector("#play");
    var stopbtn = document.querySelector("#stop");
    function toggle(firstbtn, secondbtn) {
        firstbtn.classList.add("hidden");
        secondbtn.classList.remove("hidden");
    }
    playbtn.addEventListener("click", function () {
        toggle(playbtn, stopbtn);
    });
    stopbtn.addEventListener("click", function () {
        toggle(stopbtn, playbtn);
    });
    //Beat als Loop
    playbtn.addEventListener("click", function () {
        beat();
    });
    //Lösch-Button
    // const trashbtn: HTMLElement = document.querySelector("#trash");
    // trashbtn.addEventListener("click", function (): void {
    //     .length = 0;
    // })
    function beat() {
        setInterval(function () {
            setTimeout(function () {
                playSample(0);
            }, 200);
            setTimeout(function () {
                playSample(1);
            }, 800);
            setTimeout(function () {
                playSample(2);
            }, 800);
        }, 300);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=typescript.js.map