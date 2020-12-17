namespace Aufgabe09 {


const inputField: HTMLInputElement = (document.getElementById("userInput") as HTMLInputElement);
const addBtn: HTMLElement = document.getElementById("addBtn");
let amount: number = 0;

inputField.addEventListener("keypress", function (event: KeyboardEvent): void { 
    if (event.key == "Enter")  {
        addTask();
        inputField.value = "";
    }
});

addBtn.addEventListener("click", function (): void {
    addTask();
});

function addTask(): void { //Task hinzufügen
    console.log("funktioniert");

    let container: HTMLDivElement = document.createElement("div");
    container.className = "container";

    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";

    let label: HTMLLabelElement = document.createElement("label"); //Label ist der Text zur Checkbox => Eingabe soll als Label ausgegeben werden
    label.innerHTML = inputField.value; //Per InnerHTMl Value an Label übergeben

    let trash: HTMLElement = document.createElement("i"); 
    trash.className = "fas fa-trash-alt";

    document.getElementById("toDoList").appendChild(container); //wie kriege ich die elemente in das div?(zum löschen später?)
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(trash);

    trash.addEventListener("click", function(): void {
        console.log("löschen button geht");
        removeTask( container);
    });

    amount++;
    count ();
}

function removeTask(container: HTMLDivElement): void { //Ich brauche den trash und den container
    container.remove();

    amount--;
    count ();
}

function count (): void {
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
    }
