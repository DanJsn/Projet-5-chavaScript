//voir l'exercice sur le github de jimmy


//variable
var message = "bienvenue";
var valeur_min = 20;
var valeur_max = 80;
var num = 50;
var nombre_essais = 0;

//Random pour trouver un chiffre
var aleatoire = function() {
  var random = Math.random() * (80 - 20) + 20;
  var random = Math.floor(random)
  return random;
}

//fonction pour deviner
function devine() {
  var choisis
  nombre_essais++;
}

//condition
if (aleatoire === num) {
  console.log("c'est juste tu as trouvé en" + nombre_essais + "coups")
}
if (aleatoire > num) {
  console.log("c'est plus")
}
if (aleatoire < num) {
  console.log("c'est moins")
}

//affichage des resultats
console.log(Math.min(valeur_min));
console.log(Math.max(valeur_max));
console.log(aleatoire());
