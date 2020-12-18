namespace Aufgabe09 {

    const inputField: HTMLInputElement = (document.getElementById("userInput") as HTMLInputElement);
    const addBtn: HTMLElement = document.getElementById("addBtn");
    let amount: number = 0;

    inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            addTask();
            inputField.value = ""; //Value leeren
        }
    });

    addBtn.addEventListener("click", function (): void {
        addTask();
        inputField.value = ""; //Value leeren
    });

    function addTask(): void { //Task hinzufügen
        console.log("task added");

        let container: HTMLDivElement = document.createElement("div");
        container.className = "container";

        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkOff";

        let label: HTMLLabelElement = document.createElement("label"); //Label ist der Text zur Checkbox => Eingabe soll als Label ausgegeben werden
        label.innerHTML = inputField.value; //Per InnerHTMl Value an Label übergeben
        label.className = "taskText";

        let trash: HTMLElement = document.createElement("i");
        trash.className = "fas fa-trash-alt";

        document.getElementById("toDoList").appendChild(container);
        container.appendChild(checkbox); //Elemente an div übergeben
        container.appendChild(label);
        container.appendChild(trash);

        trash.addEventListener("click", function (): void {
            console.log("task deleted");
            removeTask(container);
        });

        checkbox.addEventListener("click", function (): void {
            if (checkbox.classList.contains("done")) {
                checkbox.classList.remove("done");
                label.classList.remove("crossedout");
                console.log("undone");
            } else {
                checkbox.classList.add("done");
                label.classList.add("crossedout");
                console.log("done");
            }
        });

        amount++;
        count();
    }

    function removeTask(container: HTMLDivElement): void {
        container.remove();

        amount--;
        count();
    }

    function count(): void {
        document.getElementById("counter").innerText = amount + " open tasks";
    }

    function deleteAllTasks(): void {
        const list: HTMLElement = document.getElementById("toDoList");
        list.remove();
        amount = 0;
        count();
    }

    document.getElementById("deleteall").addEventListener("click", function (): void {
        deleteAllTasks();
    });

}