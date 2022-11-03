let nom =  window.prompt("Entrez votre nom");
let prenom = window.prompt("Entrez votre prénom");
let gender = window.confirm("Êtes-vous un homme")
if ((gender)=true)
     { gender = "Homme";
     alert( "Bonjour "+nom+" "+prenom+" vous êtes un "+ gender + "\nBienvenue sur notre site web");

    } 

else ((gender)=false)
    { gender = "femme";
    alert("Bonjour "+nom+" "+prenom+" vous êtes une "+ gender + "\nBienvenue sur notre site web!");

    }
