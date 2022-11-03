let B=0;
let teen=0;
let middle=0;
let agees=0;
let cent=0;

while (B < 100)
{
    B=parseInt(prompt("Insérez l'âge de la personne"));
    if (B<20)
    {
        teen++;
    }
    else if (B>=20 && B<=40)
    {
        middle++;
    }
    else if (B>40)
    {
        agees++;
    }

    if (B>=100)
    {
        cent++;
    }

}

console.log("Le nombre de de personnes ayant moins de 20 ans est : "+teen);
console.log("Le nombre de personnes ayant entre 20 et 40 ans est : "+middle);
console.log("Le nombre de personnes ayant plus de 40 ans est : "+agees);

document.write("Il y a "+teen+" adolescents de moins de 20 ans.");
document.write(" Il y a "+middle+" adultes ayant entre 20 et 40 ans.");
document.write(" Il y a "+agees+" darons ayant plus de 40 ans.");
document.write(" Il y a également un centenaire.");