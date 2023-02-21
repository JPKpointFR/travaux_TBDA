





/*
Exercice 1 - Parité
Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. Le programme doit afficher le résultat nombre pair ou nombre impair. Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, si ce reste est égal à zéro, a est divisible par 2.
*/


const nombre = window.prompt("Saisissez un nombre: ") * 1;
let reste = nombre % 2

if (reste === 0) {
    console.log("nombre pair");
} else {
    console.log("nombre impair");
}




/*
Exercice 2 - Age
Ecrivez un programme qui demande l'année de naissance à l'utilisateur. En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.
*/


const birthday = window.prompt("Saisissez votre année de naissance: ") * 1;

let age = ""
if (birthday) {
    age = 2023 - birthday
    if (age >= 18) {
        console.log(`Vous avez ${age}ans et vous êtes majeur`);
    } else {
        console.log(`Vous avez ${age}ans et vous êtes mineur`);
    }
}else{
    console.log("Vous n'avez pas saisis votre année de naissance");
}




/*
Exercice 3 - Calculette
Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.

Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.

Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.
*/

const nombre_1 = window.prompt("Saisissez un premier nombre entier: ") * 1;
const nombre_2 = window.prompt("Saisissez un deuxième nombre entier: ") * 1;
const operateur = window.prompt("Saisissez un opérateur(+ - * /): ");
let resultat = 0


if (operateur === '+') {
    resultat = nombre_1 + nombre_2
    console.log(`Le résultat est ${resultat}`);
} else if (operateur === '-') {
    resultat = nombre_1 - nombre_2
    console.log(`Le résultat est ${resultat}`);
} else if (operateur === '*') {
    resultat = nombre_1 * nombre_2
    console.log(`Le résultat est ${resultat}`);
} else if (operateur === '/') {
    if (nombre_2 != 0) {
        resultat = nombre_1 / nombre_2
        reste = nombre_1 % nombre_2
        console.log(`Le résultat est ${resultat}`);
    } else {
        console.log("erreur division par 0");
    }

} else {
    console.log(`ERREUR: OPERATEUR ${operateur}`);
}












