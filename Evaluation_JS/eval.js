/**
 * 
 * Evaluation Javascript pour les groupes TB
Vous devez réaliser cette évaluation seul, sans l'aide de vos collègues ni celle de vos formateurs. Vous pouvez vous aider d'internet et de vos cours.

Bien lire les énoncés et respecter les consignes.

Durée de l'évaluation : 2 jours.

Ne bloquez pas trop longuement sur un exercice, passez au suivant et revenez dessus plus tard.
 * 
 */


/**
 * Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

Le programme doit demander les âges successifs.

Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

Donnez le programme Javascript correspondant qui affiche les résultats.


let age = ''
let ageList = []
let i = 0

function deamdeAge() {


    age = prompt('Entrez des âges')*1

    while (age < 100) {
        ageList.push(age)
        i++
        age = prompt('Entrez des âges')*1
    }
    ageList.push(age)
    
    return ageList;
    
}
deamdeAge()

function trie (){
  
  const entre20et40 = []
  const moinsde20 = []
  const plusde40 = []
  
  for (age of ageList)

    
    if (age < 20) {
      moinsde20.push(age)
    } else if (age > 40) {
      plusde40.push(age)
    }else {
        entre20et40.push(age)
      }
  console.log(`age < 20: ${moinsde20}`)
  console.log(`age > 40: ${plusde40}`)
  console.log(`age entre 20 et 40: ${entre20et40}`)
}

trie()

*/


/**
 * Exercice 2 : Table de multiplication
Ecrivez une fonction qui affiche une table de multiplication.

Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.

Par exemple, TableMultiplication(7) doit afficher :

1 x 7 = 7

2 x 7 = 14

3 x 7 = 21 ...
 


function tableMultiplication(n) {
    

    for (let i = 0; i <= 10; i++) {
        
        console.log(`${n} x ${i} = ${n*i}`);
        
    }

    
}

tableMultiplication(5)


*/




/**
 * Exercice 3 : recherche d'un prénom
Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.



 var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )
 


const tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


function rechercheName(n) {
for (let name of tab) {
    if (n === name) {
        index = tab.indexOf(name);
        tab.splice(index, 1);
        tab.push("");
        console.log(tab);
        return
    } 
}
console.log("le prénom n'est pas trouvé");
}


rechercheName('Samuel')

*/


/**
 * Exercice 4 : total d'une commande
A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :

TOT = ( PU * QTECOM )
la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
la valeur minimale du port à payer est de 6 €
Testez tous les cas possibles afin de vous assurez que votre script fonctionne.

Ci-dessous, un jeu de tests :

Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €

 */
const PU = parseFloat(prompt("Saisissez le prix unitaire du produit"));
const QTECOM = parseFloat(prompt("Saisissez la quantité souhaitée"));
let TOT = PU * QTECOM;
let PORTINI = 0;

// CALCULE REMISE
let REM = 0;
let REMPOUR = "0%";

if (TOT > 0) {
  if (TOT <= 100) {
    REM = 0;
    REMPOUR = "0%";
  } else if (TOT <= 200) {
    REM = TOT * 0.05;
    REMPOUR = "5%";
  } else {
    REM = TOT * 0.1;
    REMPOUR = "10%";
  }

  TOT -= REM;
} else {
  alert("Une des données saisies n'était pas un nombre!");
}

// CALCUL PORT
let PORTPOUR = "0%";
let PORT = TOT * 0.02;

if (TOT >= 500) {
  PORT = 0;
  PORTPOUR = "0%";
}

if (PORT < 6) {
  PORTINI = PORT;
  PORT = 6;
}

TOT += PORT;

// OUTPUT REM
console.log(`Remise de ${REMPOUR} (-${REM.toFixed(2)}€)\nTotal sans frais de port : ${TOT.toFixed(2)}€`);

// OUTPUT PORT
if (PORT != 6) {
  console.log(`Avec frais de port de ${PORTPOUR} soit +${PORT.toFixed(2)}€ à payer\nPour un total de : ${TOT.toFixed(2)}€`);
} else {
  console.log(`Avec frais de port de ${PORTPOUR} soit +${PORTINI.toFixed(2)}, donc le minimum s'applique, soit +${PORT.toFixed(2)}€ à payer\nPour un total de : ${TOT.toFixed(2)}€`);
}
