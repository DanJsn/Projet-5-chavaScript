//Exemple Teddy
var age = 29;
var birthyear = 1988;

if (age < birthyear) {
  console.log("Age plus petit");
} else {
  console.log("birthyear est plus grand")
}

//Exercice: logique
var langue = "francais";
var message = "Bonjour tout le monde";

if (langue === "francais") {
  console.log(message);
} else {
  console.log("hello world")
}

//Exercice : Affichage des scores

var score = 100;
var resulat = score;

if (score >= 90) {
  console.log("Rang A")
}
if (score < 90) {
  console.log("Rang B")
}
if (score <= 50) {
  console.log("Rang C")
}

//Mettre au pluriel


var singulier = "banane";
var nombre = 4;
var resultat_pluriel = "bananes";

if (nombre > 1) {
  console.log("j'ai 4 " + resultat_pluriel)
} else {
  console.log("j'ai une " + singulier)
}
