//Pnj

let character = {
  name : "teddy",
  age : 67,
  items_to_give : ["Botte du grand marcheur", "cape de la saucisse", "Potion d'invinciblité de Leroy Jenkins"]

  };

for(let key in character){ // boucle
  console.log(key)
  var random = Math.random()*character.items_to_give.length;
  var rand = character.items_to_give[Math.floor(random)];
  }

  console.log(rand) //affiche un objet aléatoire.


//Shop
let shop ={
  armes: ["épée", "hache", "sceptre", "marteau"]
let array =[1];
  array.push("title : épée"),
  array.push("physic : 20dps "),
  array.push("magic : 2dps"),
  array.push("minLevel: 20")

}
