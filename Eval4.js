let PU = Number(prompt("Saisissez le prix unitaire"));
let QTECOM = Number(parseInt(prompt("Saisissez la quantité commandé")));
let TOT = PU * QTECOM;
let pourcent;
let PAP;
let fraisdeport;
if (TOT < 100) {
    pourcent = 2;
    fraisdeport = TOT * pourcent /100;
    if(fraisdeport < 6)
    {
        fraisdeport = 6;        
    }
    PAP = TOT + fraisdeport;
    document.write("Le prix est" + PAP + "€");   
}
if (TOT >= 100 && TOT <= 200) {
    TOT = TOT * (95/100); 
    fraisdeport = TOT * (2/100);
    if(fraisdeport < 6)
    {
        fraisdeport = 6;
    }
    PAP = TOT += fraisdeport;
    document.write("Le montant total est de " + PAP +"€");
    
}
if (TOT > 500) {
    TOT = TOT * (90 / 100)
    if (TOT < 500) {
        fraisdeport = TOT * (2/100);;
        PAP = TOT += fraisdeport;
        document.write("Le montant total est de " + PAP + "€");       
    }
    else{
        document.write("Le montant total est de " + TOT + "€");
    }
}