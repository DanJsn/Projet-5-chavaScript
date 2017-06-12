//exercice addition
var nombre = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var add = 0;

for (var i = 0; i < nombre.length; i++) {
  add = add + nombre[i];
}
console.log(add);


//exercice vos meilleurs choix

/*var acteur ["Stalone", "Cruiz", "Willis"];
for (var i=0;i<acteur.length;i++){
  array[i] ="le premier est " +array[i];
  array[i] = "le deuxieme est " +array[i];
}
*/



//deuxieme exercice
var nom_acteurs = ["Pitt", "Depp", "Douglas"];
var ordre = ["premier", "deuxieme", "troisieme"];
for (var i = 0; i < nom_acteurs.length; i++) {

  console.log("le" + ordre[i]+ "est" + nom_acteurs[i]);
}

var my_hero =["Mario", "Luigi", "Peach"];
var my_hero2 = my_hero.slice();

my_hero2.push=("Bowser");
console.log(my_hero);
console.log(my_hero2);
