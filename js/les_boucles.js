
/* Exercice 1 - Saisie
    Créer une page HTML qui demande à l'utilisateur un prénom.
    La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
    Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.



prenom = window.prompt(`
    Invite de script: 

    Saisissez le prénom N°1
    ou Clic sur Annuler pour arrêter le saisie.`);

let i = 1
while (prenom !== null) {
    console.log(prenom);
    i++
    prenom = window.prompt(`
    Invite de script: 

    Saisissez le prénom N°${i}
    ou Clic sur Annuler pour arrêter le saisie.`);
}

i--
console.log(`Nombre de prénom: ${i}`);
*/

/* Exercice 2 - Entiers inférieurs à N
    Ecrire un programme qui affiche les nombres inférieurs à N.



let N = window.prompt(`Saisissez N: `);

console.log(`Les nombres inférieur à ${N} sont: `);
for (let i = N; i > 0; i--){
    if (i!=N) {
        console.log(i);
    } 
    
}
*/

/*
Exercice 3 - Moyenne
Ecrire un programme qui demande à l'utilisateur de saisir des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).




let n = 1;
let nmbr = prompt("Saisissez le 1er nombre \n ou saisissez la valeur 0 pour arrêter la saisie");
let sum = 0;

while (nmbr != null||nmbr == 0)
{
    if (nmbr == null ||nmbr == 0)
    {
        break;
    }
    sum = sum + parseFloat(nmbr);
    n++;
    nmbr = prompt("Saisissez le " + n + "ème nombre" + "\n ou saisissez la valeur 0 pour arrêter la saisie");
    
}


n= n - 1;
const moy = sum / n;
document.write ("Somme: " + sum + "<br>" + "Moyenne: " + moy );

*/




/*
Exercice 4 - Multiples
Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

Exemple pour N=5 et X=7 :

1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
5 x 7 = 35
Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème.


const x = prompt("Saisissez le nombre à multiplier");
const n = prompt("Saisissez le nombre de multiples")
let y = 0

while (y <= n)
{
    const multiple = parseFloat(x) * y;
    document.write (y + " x " + x + " = " + multiple + "<br>");
    y++;
}

*/







/*
Exercice 5 - Nombre de voyelles.
Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :

myVar.length : retourne le nombre de lettres de la chaîne myVar.
myVar.substring(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)
myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).

*/

var phrase = prompt ("Entrez une phrase");
var v = 'aeiouyAEIOUY';
var nmbr = 0;

for (var x = 0 ; x < phrase.length ; x++)
{
    if (v.indexOf(phrase[x]) !== -1)
    {
        nmbr++;
    }
}

document.write ("Le nombre de voyelle est: " + nmbr);









