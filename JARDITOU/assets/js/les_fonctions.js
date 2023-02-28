/*
Exercice 1
Créer les 2 fonctions suivantes :

produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
afficheImg(image) qui affiche l'image passée en paramètre. ( Le paramètre image correspond au chemin de votre image )



const x = parseFloat(prompt("Ecrivez un nombre"));
const y = parseFloat(prompt("Ecrivez un multiplicateur"));

function image(src) {
    let img = document.createElement("img");
    img.setAttribute ("src", src);
    document.body.appendChild(img);
}

function cube (number) 
{
 return number*number*number;
}

function produit(number1,number2) 
{
return number1*number2;
}

const papillon = image("https://ncode.amorce.org/ressources/Pool/TB_DEV/WEB_Javascript_BASES/images/papillon.jpg");
var r_cube = cube(x);
var r_prod = produit(x,y);


document.write(` <br> Le cube de ${x} est égal à  ${r_cube} <br> Le produit de ${x} x ${y} est égal à ${r_prod}`);


 */

/*
Exercice 2 - String Token
Concevez la fonction strtok() qui prend 3 paramètres str1, str2, n en entrée et renvoie une chaîne de caractères : str1 est composée d'une liste de mots séparés par le caractère str2. strtok() sert à extraire le nième mot de str1.

Exemple :

Pour str1 = « robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner amiens.

Indice : utilisez la méthode split().
*/


const str1 = prompt("Ecrivez plusieurs mots, \n séparés par un séparateur");
const str2 = prompt("Ecrivez le séparateur utilisé \n (par exemple ; , / )");
const n = parseFloat(prompt("Ecrivez un nombre"))-1;



const strtok = (str1, str2, n) => {
    str1 = str1
    str2 = str2
    n = n
    const phrase = str1.split(str2);
    let rN = n + 1
    
document.write(`le mot en place ${rN} est ${phrase[n]}`);
}

strtok(str1, str2, n)

















