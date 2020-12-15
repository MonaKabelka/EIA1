namespace Aufgabe09 {

    const list: HTMLElement = document.getElementById("dynamicList");
    const task: HTMLElement = document.getElementById("task");
    const add: HTMLElement = document.getElementById("add");
    let amount: number = 0;

    function addTask(): void {
        const li: HTMLElement = document.createElement("li");
        list.appendChild(li);
        amount++;
        count ();
    }

    add.addEventListener("click", function(): void {
        addTask();
    });

    function count (): void {
        document.getElementById("counter").innerText = amount + " open tasks";
    }
    
}