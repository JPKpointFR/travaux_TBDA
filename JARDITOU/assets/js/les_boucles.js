


/* Exercice 1 - Saisie
Créer une page HTML qui demande à l'utilisateur un prénom.
La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.

*/





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

