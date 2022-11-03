N=parseInt(prompt("Entrez le numéro de la table de multiplication que vous souhaitez voir"))
table(N);

function table(n)
{
    for (i=0;i<11;i++)
    {
        T=n*i;
        console.log(n+" x "+i+" = "+T);
        document.write(n+"x"+i+" = "+T+"  /  ")
    }
    return T;
}

