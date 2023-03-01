

// Exercice


const ArrayNumber = prompt("Entrez le nombre de données à entrer");
let myArray = []
y = 0;
n = 1;


while (y < ArrayNumber) {
    myArray[y] = prompt("Entrez la donnée numéro " + n);
    y++;
    n++;
}

const ArrayLen = myArray.length;

document.write(`Les données du tableaux sont: ${myArray} 
<br><br>
La longueur du tableau est: ${ArrayLen}`);







