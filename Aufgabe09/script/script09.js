var Aufgabe09;
(function (Aufgabe09) {
    var inputField = document.getElementById("userInput");
    var addBtn = document.getElementById("addBtn");
    var amount = 0;
    inputField.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            inputField.value = "";
        }
    });
    addBtn.addEventListener("click", function () {
        addTask();
    });
    function addTask() {
        console.log("funktioniert");
        var container = document.createElement("div");
        container.className = "container";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var label = document.createElement("label"); //Label ist der Text zur Checkbox => Eingabe soll als Label ausgegeben werden
        label.innerHTML = inputField.value; //Per InnerHTMl Value an Label übergeben
        var trash = document.createElement("i");
        trash.className = "fas fa-trash-alt";
        document.getElementById("toDoList").appendChild(container); //wie kriege ich die elemente in das div?(zum löschen später?)
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(trash);
        trash.addEventListener("click", function () {
            console.log("löschen button geht");
            removeTask(container);
        });
        amount++;
        count();
    }
    function removeTask(container) {
        container.remove();
        amount--;
        count();
    }
    function count() {
        document.getElementById("counter").innerText = amount + " open tasks";
    }
    //label.remove() => Löschen
    //_____________________________________________________________________________________________________________________________________
    // const list: HTMLElement = document.getElementById("dynamicList");
    // const taskInput: HTMLElement = document.getElementById("taskInput");
    // const addBtn: HTMLElement = document.getElementById("addBtn");
    // let amount: number = 0;
    // function addTask(): void {
    //     const li: HTMLElement = document.createElement("li");
    //     list.appendChild(li); //Nur Listenelement wird kreiert ohne Text?
    //     amount++;
    //     count ();
    // }
    // function deleteTask(): void {
    //     list.removeChild(); //Wie entfent man das Objekt?
    //     amount--;
    //     count();
    // }
    // function count (): void {
    //     document.getElementById("counter").innerText = amount + " open tasks";
    // }
    // addBtn.addEventListener("click", function(): void {
    //     addTask();
    // });
    // // .addEventListener("click", function(): void {
    // // });
    //     // ToDo App - Grundgerüst
    //     const list: HTMLElement = document.getElementById("dynamicList");
    //     const taskInput: HTMLElement = document.getElementById("taskInput");
    //     const addBtn: HTMLElement = document.getElementById("addBtn");
    //     let amount: number = 0;
    //     let test: number = 0;
    //     interface todo {
    //         title: string;
    //         done: boolean;
    //     }
    //     let todos: todo[] = [
    //     {
    //         title: "Geschenke kaufen",
    //         done: true
    //     }, 
    //     {
    //         title: "Glühwein warm machen",
    //         done: true
    //     }, 
    //     {
    //         title: "Mit Putin sprechen",
    //         done: false
    //     }
    //     ];
    //     for (let i: number = 0; i < todos.length; i++) {
    //     list.innerHTML += "<li>" + todos[i].title + " [ " + todos[i].done + " ] </li>";
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script09.js.map