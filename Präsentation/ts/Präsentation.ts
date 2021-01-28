let inputFieldName: HTMLFormElement; 
let inputFieldEmail: HTMLFormElement; 
let inputFieldPhone: HTMLFormElement; 
let outputList: HTMLElement;
window.addEventListener("load", function(): void { 
document.querySelector("#addToContacts").addEventListener("click", function():
void {
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
phone: number, 
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
" | " + contactsList[index].email +
" | " + contactsList[index].phone + "</li>";
}
}
/*-> erstmal würde gar nichts angezeigt werden, nach Änderungen würde dann alles
angezeigt werden. Vorausgesetzt, die Javascript ist verlinkt und die HTML Datei
ist korrekt. Und der Linter muss an sein, Die Überwachung(Terminal) muss an sein
und die tsconfig.json überwacht die Ts-Datei und wandelt sie permanent in der JSDatei
um.*/

// Funktion mit Argumenten
function todaysDinner(food: string, time: number): void {
    console.log(food);
    console.log(time);
}

todaysDinner("Rice", 4.50);
todaysDinner("Sandwich", 6.00);

document.getElementById("wednesday").addEventListener("click", function (): void {
    todaysDinner("Pizza", 8.45);
});