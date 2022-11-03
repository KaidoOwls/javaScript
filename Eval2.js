number=window.prompt("Quelle table souhaitez-vous ?:","Saisir un nombre ici :)");
table_multiplication(number);
function table_multiplication(number)
{

    var i;
    for (i=0; i<=100; i++) 
        {   
            resultat=number*i;
            document.write(number+" x "+i+"="+number*i+"<br>");
         }
}  