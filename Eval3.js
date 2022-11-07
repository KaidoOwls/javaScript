


let prenom = prompt("Prenom");
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

let i = tab.indexOf(prenom);
if (i > -1) {
    tab.splice(i ,1);
    tab.push(' ');
}
else {
    alert("Le prenom saisit n'est pas dans le tableau,allez bisous Clément")
}
console.log(tab)

	
