var Aufgabe09;
(function (Aufgabe09) {
    var inputField = document.getElementById("userInput");
    var addBtn = document.getElementById("addBtn");
    var amount = 0;
    inputField.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            inputField.value = ""; //Value leeren
        }
    });
    addBtn.addEventListener("click", function () {
        addTask();
        inputField.value = ""; //Value leeren
    });
    function addTask() {
        console.log("task added");
        var container = document.createElement("div");
        container.className = "container";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkOff";
        var label = document.createElement("label"); //Label ist der Text zur Checkbox => Eingabe soll als Label ausgegeben werden
        label.innerHTML = inputField.value; //Per InnerHTMl Value an Label übergeben
        label.className = "taskText";
        var trash = document.createElement("i");
        trash.className = "fas fa-trash-alt";
        document.getElementById("toDoList").appendChild(container);
        container.appendChild(checkbox); //Elemente an div übergeben
        container.appendChild(label);
        container.appendChild(trash);
        trash.addEventListener("click", function () {
            console.log("task deleted");
            removeTask(container);
        });
        checkbox.addEventListener("click", function () {
            if (checkbox.classList.contains("done")) {
                checkbox.classList.remove("done");
                label.classList.remove("crossedout");
                console.log("undone");
            }
            else {
                checkbox.classList.add("done");
                label.classList.add("crossedout");
                console.log("done");
            }
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
    function deleteAllTasks() {
        var list = document.getElementById("toDoList");
        list.remove();
        amount = 0;
        count();
    }
    document.getElementById("deleteall").addEventListener("click", function () {
        deleteAllTasks();
    });
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script09.js.map