



/* 
Créer un script qui demande successivement à l'utilisateur son nom puis son prénom. La page affichera les informations sur l'utilisateur via une "alert()".
*/

const nom = window.prompt("Saisissez votre nom");
const prenom = window.prompt("Saisissez votre prénom");
console.log(nom);
console.log(prenom);

if (nom && prenom) {
  window.alert("Bonjour " + nom + " " + prenom);
  document.write("Bonjour " + nom + " " + prenom);
}

/*
Ecrire un programme qui calcule le produit de deux nombres entrés par l'utilisateur et affiche le résultat.
*/


const nombre1 = window.prompt("Saisissez votre le nombre1");
const nombre2 = window.prompt("Saisissez votre le nombre2");
console.log(nombre1);
console.log(nombre2);

if (nombre1 && nombre2) {
  a = 0
  produit = a + nombre1 * nombre2
  window.alert("   Le produit est " + produit);
  document.write("   Le produit est " + produit);

}



/*
Ecrire un programme qui convertit des degrés Celsius en degrés Fahrenheit en utilisant la formule suivante : F = (C*9/5) + 32. Le programme demandera la température en degrés Celsius à l'utilisateur et affichera la température convertie en degrés Fahrenheit.
*/


const temperatureC = window.prompt("Saisissez la température en degrés Celsius");

console.log(temperatureC);

if (temperatureC) {
  a = 0
  temperatureF = a + (temperatureC*9/5) + 32
  window.alert("  Le temperature est " + temperatureF);
  document.write("  Le temperature est " + temperatureF);
}

