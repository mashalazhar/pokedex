

class Trainer{
	constructor(pokemon){
		this.pokemon = [];
		
		};
	getPokemon() {
			this.pokemon.push();
	}
}

let pokemonTrainer = new Trainer(); // class

class Pokemon{
	constructor(hp, attack, defense, abilities){
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this. abilities = abilities;
	}
}

// pokemon
$(function() {
	$("button").click(function(){
$("#poke1st").fadeIn(3000);
$("#poke1st").hide();



//$(".imag3").fadeIn("slow");


let squirtleUrl = 'https://pokeapi.co/api/v2/pokemon/7';
$.ajax({
	url: squirtleUrl,
	type : 'GET',
	success: function(data) {

		
		console.log(data);
		console.log(squirtleUrl)

		let name = data.name
			hp = data.hp 
			attack = data.attack
			defense = data.defense
			abilities1 = data.abilities[0].ability.name
			abilities2 = data.abilities[1].ability.name
		
		$("div.squirtleName").append(`<h3><p>${name}</p></h3>`),
		$("div.squirtleHP").append(`<h5><p>HP: ${hp}</p></h5>`),
		$("div.squirtleInfo").append(`<p>Attack: ${attack}</p>`),
		$("div.squirtleInfo").append(`<p>Defense: ${defense}</p>`),
		$("div.squirtleInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}`)

	let squirtle = new Pokemon(hp,attack,defense, abilities1, abilities2)
	//pokemonTrainer.addPokemon(squirtle);

	},
	error: function(err) {
		console.log('error:' + err)
	}
});
});
});



