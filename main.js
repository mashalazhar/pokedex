

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

// SQUIRTLE

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
	pokemonTrainer.addPokemon(squirtle);

	},
	error: function(err) {
		console.log('error:' + err)
	}
});

// WARTORTLE

let wartortleUrl = 'https://pokeapi.co/api/v2/pokemon/8';
$.ajax({
	url: wartortleUrl,
	type : 'GET',
	success: function(data) {
		console.log(data);
		console.log(wartortleUrl)
		let name = data.name
			hp = data.hp 
			attack = data.attack
			defense = data.defense
			abilities1 = data.abilities[0].ability.name
			abilities2 = data.abilities[1].ability.name
		
		$("div.wartortleName").append(`<h3><p>${name}</p></h3>`),
		$("div.wartortleHP").append(`<h5><p>HP: ${hp}</p></h5>`),
		$("div.wartortleInfo").append(`<p>Attack: ${attack}</p>`),
		$("div.wartortleInfo").append(`<p>Defense: ${defense}</p>`),
		$("div.wartortleInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}`)
	
	let wartortle = new Pokemon(hp,attack,defense, abilities1, abilities2)
	trainer.addPokemon(wartortle)

	},
	error: function(err) {
		console.log('error:' + err)
	}
});

// BLASTOISE

let blastoiseUrl = 'https://pokeapi.co/api/v2/pokemon/9';
$.ajax({
	url: blastoiseUrl,
	type : 'GET',
	success: function(data) {
		console.log(data);
		console.log(blastoiseUrl)
		let name = data.name
			hp = data.hp 
			attack = data.attack
			defense = data.defense
			abilities1 = data.abilities[0].ability.name
			abilities2 = data.abilities[1].ability.name
		
		$("div.blastoiseName").append(`<h3><p>${name}</h3></p>`),
		$("div.blastoiseHP").append(`<h3><p>HP: ${hp}</h3></p>`),
		$("div.blastoiseInfo").append(`<p>Attack: ${attack}</p>`),
		$("div.blastoiseInfo").append(`<p>Defense: ${defense}</p>`),
		$("div.blastoiseInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}`)

	let blastoise = new Pokemon(hp,attack,defense, abilities1, abilities2)
	trainer.addPokemon(blastoise)

	},
	error: function(err) {
		console.log('error:' + err)
	}
});


