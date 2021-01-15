namespace Aufgabe11 {

    // Interface für die Arrays
    interface TodoInterface {
        text: string;
        checked: boolean;
    }

    // Variable: alle Objekte werden hier erstellt (Interface)
    let todosArray: TodoInterface[] = [
        {
            text: "Prokrastination",
            checked: true
        },
        {
            text: "Prokrastination 1",
            checked: false
        },
        {
            text: "Prokrastination!!!!!",
            checked: false
        }

    ];

    // Variablen für HTMLElemente
    let inputDOMElement: HTMLInputElement;
    let addButtonDOMElement: HTMLElement;
    let todosDOMElement: HTMLElement;
    let counterDOMElement: HTMLElement;
    // Aufgabe 11 Variablen
    let doneDOMElement: HTMLElement;
    let openDOMElement: HTMLElement;

    //Spracheingabe Artyom
    declare var Artyom: any;

    window.addEventListener("load", function (): void {
        const artyom: any = new Artyom();

        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function (): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function (): void {
                        console.log("Ready!");
                    });
                },
                250);
        }

        startContinuousArtyom();

        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void { //wildcard: Spracheingabe als Todo-Aufgabe
                todosArray.unshift({
                    text: wildcard,
                    checked: false
                });

                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Deine Aufgabe" + wildcard + " wurde ergänzt");
            }
        });
        // Button Event-Listener (In HTML)
        document.querySelector("#record").addEventListener("click", function (): void {
            console.log("EventListener geht"); //Konsole gibt nichts aus!!!
            artyom.say("Spracheingabe aktiviert");
            startContinuousArtyom();
        });
        });

    window.addEventListener("load", function (): void {

        /**
         * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
         * in ihre Variablen gespeichert werden, um später auf sie 
         * zugreifen zu können
         */
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        // Aufgabe 11: neue HTMLElemente für done/open Event-Listener
        doneDOMElement = document.querySelector("#done");
        openDOMElement = document.querySelector("#open");
        /**
         * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
         * auf den AddToDo Button gesetzt werden.
         */
        addButtonDOMElement.addEventListener("click", addTodo);

        /**
         * Initial soll einmal die Liste an bereit definierten ToDos
         * aus den Arrays in den DOM gezeichnet werden.
         */
        drawListToDOM();
    });

    function drawListToDOM(): void {
        // alle todos erst einmal aus dem DOM löschen
        todosDOMElement.innerHTML = "";

        // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
        for (let index: number = 0; index < todosArray.length; index++) {

            /**
             * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen, 
             * die Objekt-Instansierung ist aber übersichtlicher)
             */
            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            /**
             * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
             * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
             * 
             * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
             * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
             * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
             * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
             * hier muss die Zeichenkette unterbrochen werden.
             */
            todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                + todosArray[index].text +
                "<span class='trash fas fa-trash-alt'></span>";

            // Zuweisen der Event-Listener für den Check- und den Trash-Button
            todo.querySelector(".check").addEventListener("click", function (): void {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
                deleteTodo(index);
            });

            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        }

        updateCounter();
    }

    function updateCounter(): void {
        // Aufgabe 11 If-Else-Bedingung als Zähler
        let openNumber: number = 0;
        let doneNumber: number = 0;

        for (let index: number = 0; index < todosArray.length; index++) {
            if (todosArray[index].checked == false) {
                openNumber++;
            }
            else {
                doneNumber++;
            }
        }

        openDOMElement.innerHTML = openNumber + " open";
        doneDOMElement.innerHTML = doneNumber + " done";

        counterDOMElement.innerHTML = todosArray.length + " in total";
    }

    /**
     * Ein neues ToDo wird folgendermaßen erstellt:
     */
    function addTodo(): void {
        /**
         * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
         * (ansonsten würde ein leerer ToDo-Text erstellt werden,
         * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
         */
        if (inputDOMElement.value != "") {
            /**
            Text + checked/unchecked status wird in das todosArray als Objekt geschoben
             */
            todosArray.unshift({
                text: inputDOMElement.value,
                checked: false
            });

            // Jetzt wird der Text aus dem Eingabefeld gelöscht
            inputDOMElement.value = "";

            /**
             * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
             * wird wieder getriggert
             */
            drawListToDOM();
        }
    }

    /**
     * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
     */
    function toggleCheckState(index: number): void {

        /**
         * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
         * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
         * an der übergebenen Index-Stelle) geändert werden.
         * Von checked zu unchecked bzw. von unchecked zu checked
         * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
         * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
         * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
         * kurz schreiben: wert = !wert
         * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
         * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
         * Kurs behandelt wurden) nutzen.
         */
        todosArray[index].checked = !todosArray[index].checked;

        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }

    /**
     * Diese Funktion löscht ein ToDo
     */
    function deleteTodo(index: number): void {
        /**
         * Durch "index" ist die entsprechende Stelle im Array
         * bekannt, an der das ToDo steht.
         * Jetzt muss diese Stelle beider Arrays gelöscht werden,
         * das ToDo-Text-Array und das Checked/Unchecked-Array
         */
        todosArray.splice(index, 1);

        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
}