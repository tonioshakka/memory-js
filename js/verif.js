//nom
const $champUser = document.getElementById("nom");
const $champMail = document.getElementById("mail");
const $password = document.getElementById("mDp");
const $erreurNom = document.getElementById("erreur-nom")
const $erreurMail = document.getElementById("erreur-mail");
const $erreurPassword = document.getElementById("erreur-motdepasse");
const $confirmMDP = document.getElementById("confirmMDP")
const $erreurMDP =document.getElementById("erreur-motdepasse")
const $buttonS  = document.getElementById("buttonS")


//userName
$champUser.addEventListener("blur", function() {
  const nomSaisi = $champUser.value;  
  if (validerNom(nomSaisi) && nomSaisi.trim() !== '') { //verif contenu et présence de contenu
    $erreurNom.textContent =  ''; //efface message d'erreur qd champs valide
    $champMail.focus();    //focus à l'input suivant
  } else {
    $champUser.value = '';  //vide le champ de saisie
    $erreurNom.textContent = "Choisir un pseudo de 3 caractères minimum";  //affichage message erreur qd non valide
    $champUser.focus();                      //reviens dans le champs pour correction
  }
});

function validerNom(nom) {
  const regexNom = /^[a-zA-ZÀ-ÿ\s]{3,}$/;    //regex pour définir les caractères autorisés et 3 min
  return regexNom.test(nom);                  //renvoi de true qd ok
}
//mail
$champMail.addEventListener("blur", function() {
  const mailSaisi = $champMail.value;  
  if (validerMail(mailSaisi) && mailSaisi.trim() !== '') { //verif contenu et présence de contenu
    $erreurMail.textContent =  ''; //efface message d'erreur qd champs valide
    $password.focus();    //focus à l'input suivant
  } else {
    $champMail.value = '';  //vide le champ de saisie
    $erreurMail.textContent = "Merci de rentrer une adresse mail valide";  //affichage message erreur qd non valide
    $champMail.focus();                      //reviens dans le champs pour correction
  }
});

function validerMail(mail) {
  const regexMail = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,4}$/;    //regex pour définir mail conforme
  return regexMail.test(mail);                  //renvoi de true qd ok
}

//password
$password.addEventListener("blur", function() {
  const passwordSaisi = $password.value;  
  if (validerPassword(passwordSaisi) && passwordSaisi.trim() !== '') { //verif contenu et présence de contenu
    $erreurPassword.textContent =  ''; //efface message d'erreur qd champs valide
    console.log(passwordSaisi);
    $confirmMDP.focus();    //focus à l'input suivant
  } else {
    $password.value = '';  //vide le champ de saisie
    $erreurPassword.textContent = "8 caractères min, au moins une majuscule, un chiffre et un caractère spécial";  //affichage message erreur qd non valide
    $password.focus();                      //reviens dans le champs pour correction
  }
});

function validerPassword(password) {
  const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!*])[A-Za-z\d@#$%^&!*]{8,}$/;    //regex pour définir mail conforme
  return regexPassword.test(password);                  //renvoi de true qd ok
}

//Verif concordance des mdp
$confirmMDP.addEventListener("blur" , (event) => {
  
    event.preventDefault();
    const confirmMDP = $confirmMDP.value;
    const mDpValue = $password.value;
console.log(mDpValue);
    if (confirmMDP === mDpValue) {
        $erreurMDP.textContent = '';
        $buttonS.focus();
        
    }
    else {
        $erreurMDP.textContent = "Le mot de passe ne passe ne correspond pas"
        $confirmMDP.focus();
        
    }
});
