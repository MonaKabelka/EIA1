// Funktion mit Argumenten
function todaysDinner(food, time) {
    console.log(food);
    console.log(time);
}
todaysDinner("Rice", 4.50);
todaysDinner("Sandwich", 6.00);
document.getElementById("wednesday").addEventListener("click", function () {
    todaysDinner("Pizza", 8.45);
});
/*let inputFieldName: HTMLInputElement;
let inputFieldEmail: HTMLInputElement;
let inputFieldPhone: HTMLInputElement;
let outputList: HTMLLIElement;

window.addEventListener("load", function(): void {
    document.querySelector("#addToContacts").addEventListener("click", function(): void {
        addToContacts();
    });
    createContactsList();
});

inputFieldName = document.querySelector("#inputName");
inputFieldEmail = document.querySelector("#inputEmail");
inputFieldPhone = document.querySelector("#inputPhone");
outputList = document.querySelector("#outputList");

interface Contact {
    name: string;
    email: string;
    phone: string;
}

var contactsList: Contact[] = [
    {
        name: "Martin Lotz",
        email: "martin@lotz.io",
        phone: "+49 (0) 17613138882"
    },
    
    {
        name: "Mathias Müller",
        email: "mathias@mueller.com",
        phone: "+49 (0) 160935798735"
    }
];

function addToContacts(): void {
    var newContact: Contact = {
        name: inputFieldName.value,
        email: inputFieldEmail.value,
        phone: inputFieldPhone.value
    };
    contactsList.push(newContact);
}

function createContactsList(): void {
    for (let index: number = 1; index < contactsList.length; index++) {
        outputList.innerHTML += "<li>" + contactsList[index].name +
                                 + contactsList[index].email +
                                 + contactsList[index].phone + "</li>";
    }
}*/ 
//# sourceMappingURL=Pr%C3%A4sentation.js.map