



function programme_saisie_valeurs_numerique() {
    let myArray = [];
    let myArraySum = 0;
    let i = 0;
    myArray[i] = prompt("Entrez les donnée ") * 1;

    if (myArray[i] !== 0 || myArray[i] !== null) {
      i++;
      myArray[i] = prompt("Entrez les donnée ") * 1;

      while (myArray[i] !== 0 || myArray[i] !== null) {
        i++;
        myArray[i] = prompt("Entrez les donnée ") * 1;

        if (myArray[i] === 0 || myArray[i] === null) {
          const ArrayLen = myArray.length;

          for (const num in myArray) {
            myArraySum += myArray[num];
          }

          console.log(myArraySum);
          console.log(myArraySum / ArrayLen);

          document.write(`Les données du tableaux sont: ${myArray} 
  <br><br>
  Le nombre de valeurs saisies est: ${ArrayLen}
  <br><br>
  la somme: ${myArraySum}
  <br><br>
  la moyenne: ${myArraySum / ArrayLen}`);
          break;
        }
      }
    } else {
      const ArrayLen = myArray.length;

      for (const num in myArray) {
        myArraySum += myArray[num];
      }

      console.log(myArraySum);
      console.log(myArraySum / ArrayLen);

      document.write(`Les données du tableaux sont: ${myArray} 
  <br><br>
  Le nombre de valeurs saisies est: ${ArrayLen}
  <br><br>
  la somme: ${myArraySum}
  <br><br>
  la moyenne: ${myArraySum / ArrayLen}`);
    }
  }

  programme_saisie_valeurs_numerique();