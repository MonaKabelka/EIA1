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
    function playSample(soundIndex) {
        sound[soundIndex].play();
    }
    //Eventlistener Pads
    document.querySelector("#pad1").addEventListener("click", function () {
        playSample(0);
        recordBeat(0);
    });
    document.querySelector("#pad2").addEventListener("click", function () {
        playSample(1);
        recordBeat(1);
    });
    document.querySelector("#pad3").addEventListener("click", function () {
        playSample(2);
        recordBeat(2);
    });
    document.querySelector("#pad4").addEventListener("click", function () {
        playSample(3);
        recordBeat(3);
    });
    document.querySelector("#pad5").addEventListener("click", function () {
        playSample(4);
        recordBeat(4);
    });
    document.querySelector("#pad6").addEventListener("click", function () {
        playSample(5);
        recordBeat(5);
    });
    document.querySelector("#pad7").addEventListener("click", function () {
        playSample(6);
        recordBeat(6);
    });
    document.querySelector("#pad8").addEventListener("click", function () {
        playSample(7);
        recordBeat(7);
    });
    document.querySelector("#pad9").addEventListener("click", function () {
        playSample(8);
        recordBeat(8);
    });
    //Play- und Stop-Button______________________________________________________________________________________________________________
    var playbtn = document.querySelector("#play");
    var stopbtn = document.querySelector("#stop");
    //Class toggle
    function toggle(firstbtn, secondbtn) {
        firstbtn.classList.add("hidden");
        secondbtn.classList.remove("hidden");
    }
    playbtn.addEventListener("click", function () {
        toggle(playbtn, stopbtn);
        loop(true);
    });
    stopbtn.addEventListener("click", function () {
        toggle(stopbtn, playbtn);
        loop(false);
    });
    //Record-Button_______________________________________________________________________________________________________________________
    var recordbtn = document.querySelector("#record");
    var dynArray = [0, 1, 2];
    var recording;
    var dynArrayIndex;
    function recordBeat(dynArrayIndex) {
        console.log("Sound aufgenommen");
        if (recording == true) {
            dynArray.push(dynArrayIndex);
        }
    }
    //Eventlistener Record-Button
    recordbtn.addEventListener("click", function () {
        if (recordbtn.classList.contains("active")) {
            recordbtn.classList.remove("active");
            console.log("inaktiv");
            recording = false;
        }
        else {
            recordbtn.classList.add("active");
            recording = true;
            console.log("aktiv");
        }
    });
    // Lösch-Button______________________________________________________________________________________________________________________
    var trashbtn = document.querySelector("#trash");
    trashbtn.addEventListener("click", function () {
        dynArray = [];
        console.log("gelöscht");
    });
    //Funktion Play- und Pause-Button____________________________________________________________________________________________________
    var interval;
    var index = 0;
    function loop(playpauseB) {
        if (playpauseB == true) {
            interval = setInterval(function () {
                playSample(dynArray[index]);
                index++;
                console.log(index);
                if (index >= dynArray.length) {
                    index = 0;
                }
            }, 500);
        }
        else {
            clearInterval(interval);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=typescript.js.map