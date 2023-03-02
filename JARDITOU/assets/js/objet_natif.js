







let myArray = []
let i = 0
myArray[i] = prompt("Entrez les donnée ");

while (myArray[i] !== 0) {
    console.log(myArray[i]);
    myArray[i] = prompt("Entrez les donnée ");
    i++
}

const ArrayLen = myArray.length;
const array1 = [1, 2, 3, 4];

const myArraySum = myArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

document.write(`Les données du tableaux sont: ${myArray} 
<br><br>
Le nombre de valeurs saisies est: ${ArrayLen}

la somme: ${myArraySum}

la moyenne: ${myArraySum/ArrayLen}


`);





