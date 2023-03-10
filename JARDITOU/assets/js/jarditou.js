/**
 * Fonction de validation du formulaire
 * @returns Formulaire validé !
 */


const validation = document.querySelector('#btn_validate');
validation.addEventListener('click', validateForm);

function validateForm() {
  const nom = document.getElementById('nom');
  const prenom = document.getElementById('prenom');
  const date = document.getElementById('date');
  const cp = document.getElementById('codepostale');
  const adresse = document.getElementById('adresse');
  const ville = document.getElementById('ville');
  const email = document.getElementById('email');
  const sujet = document.getElementById('couleur');
  const filtreEmail = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]+.[\w-]{2,}$/);
  const filtreCP = new RegExp(/^[0-9]{5}$/);




  if (!nom.value) {
    alert('Veuillez entrer votre nom.');
    return false;
  }

  if (!prenom.value) {
    alert('Veuillez entrer votre prénom.');
    return false;
  }

  if (!date.value) {
    alert('Veuillez entrer votre date de naissance.');
    return false;
  }

  if (!filtreCP.test(cp.value)) {
    alert('Veuillez entrer votre code postal.');
    return false;
  }

  if (!adresse.value) {
    alert('Veuillez entrer votre adresse.');
    return false;
  }

  if (!ville.value) {
    alert('Veuillez entrer votre ville.');
    return false;
  }

  if (!email.value) {
    alert('Veuillez entrer votre adresse email.');
    return false;
  } else if (!filtreEmail.test(email.value)) {
    alert('Veuillez entrer une adresse email valide.');
    return false;
  }

  if (!sujet.value) {
    alert('Veuillez sélectionner un sujet.');
    return false;
  }

  return true;
}
