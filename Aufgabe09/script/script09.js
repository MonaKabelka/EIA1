var Aufgabe09;
(function (Aufgabe09) {
    var list = document.getElementById("dynamicList");
    var task = document.getElementById("task");
    var add = document.getElementById("add");
    var amount = 0;
    function addTask() {
        var li = document.createElement("li");
        list.appendChild(li);
        amount++;
        count();
    }
    add.addEventListener("click", function () {
        addTask();
    });
    function count() {
        document.getElementById("counter").innerText = amount + " open tasks";
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script09.js.map