   
// // CAROUSEL

// $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
//   });


// // MODAL

// $(document).ready(function(){
//     $(function () {         
//         $('.modal').modal();
//         $('#modal1').modal('open');
//         $('.trigger-modal').modal(3000);
//     });
// })(jQuery);


//



class Trainer{
	constructor(){
		this.pokemon = [];
		}

	addPokemon(newPokemon) {
			this.pokemon.push(newPokemon);
	}
}

let batman = new Trainer(); // class

class Pokemon{
	constructor(hp, attack, defense, abilities1, abilities2, frontImage, backImage){
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities1 = abilities1;
		this.abilities2 = abilities2;
		this.frontImage = frontImage;
		this.backImage = backImage;
	}
}

// SQUIRTLE

let squirtleUrl = 'https://pokeapi.co/api/v2/pokemon/7';
$.ajax({
	url: squirtleUrl,
	type : 'GET',
	success: function(data) {
		// console.log(data);
		// console.log(squirtleUrl)
		let name = data.species.name
			hp = data.stats[5].base_stat
			attack = data.stats[4].base_stat
			defense = data.stats[3].base_stat
			abilities1 = data.abilities[0].ability.name
			abilities2 = data.abilities[1].ability.name
			frontImage = data.sprites.front_default
			backImage = data.sprites.back_default

	let squirtle = new Pokemon(hp, attack ,defense, abilities1, abilities2)
	batman.addPokemon(squirtle);
	console.log(squirtle.hp, attack, defense, abilities1, abilities2)

	},
	error: function(err) {
		console.log('error:' + err)
	},
	complete: function() {
	// console.log(batman.pokemon[0].hp + attack + defense + abilities1 + abilities2)

		$("#squirtleName").append(`<h3><p>${name}</p></h3>`),
		$("#squirtleHP").append(`<h5><p>HP: ${hp}</p></h5>`),
		$("#squirtleInfo").append(`<p>Attack: ${attack}</p>`),
		$("#squirtleInfo").append(`<p>Defense: ${defense}</p>`),
		$("#squirtleInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}</p>`),
		$("#squirtlePhoto").append(`<img src = "${frontImage}">`),
		$("#squirtlePhoto").append(`<img src = "${backImage}">`)
	}
});

// console.log(batman)
// batman.pokemon[0]

// // WARTORTLE

let wartortleUrl = 'https://pokeapi.co/api/v2/pokemon/8';
$.ajax({
	url: wartortleUrl,
	type : 'GET',
	success: function(data) {
		console.log(data);
		console.log(wartortleUrl)
		let name = data.species.name
			hp = data.stats[5].base_stat
			attack = data.stats[4].base_stat
			defense = data.stats[3].base_stat
			abilities1 = data.abilities[0].ability.name
			abilities2 = data.abilities[1].ability.name
			frontImage = data.sprites.front_default
			backImage = data.sprites.back_default

		$("#wartortleName").append(`<h3><p>${name}</p></h3>`),
		$("#wartortleHP").append(`<h5><p>HP: ${hp}</p></h5>`),
		$("#wartortleInfo").append(`<p>Attack: ${attack}</p>`),
		$("#wartortleInfo").append(`<p>Defense: ${defense}</p>`),
		$("#wartortleInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}</p>`),
		$("#wartortlePhoto").append(`<img src = "${frontImage}">`),
		$("#wartortlePhoto").append(`<img src = "${backImage}">`)
	
	let wartortle = new Pokemon(hp, attack, defense, abilities1, abilities2)
	batman.addPokemon(wartortle)
	console.log(wartortle.hp, attack, defense, abilities1, abilities2)

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
		let name = data.species.name
			hp = data.stats[5].base_stat
			attack = data.stats[4].base_stat
			defense = data.stats[3].base_stat
			abilities1 = data.abilities[0].ability.name
			abilities2 = data.abilities[1].ability.name
			frontImage = data.sprites.front_default
			backImage = data.sprites.back_default
		
		$("#blastoiseName").append(`<h3><p>${name}</p></h3>`),
		$("#blastoiseHP").append(`<h5><p>HP: ${hp}</p></h5>`),
		$("#blastoiseInfo").append(`<p>Attack: ${attack}</p>`),
		$("#blastoiseInfo").append(`<p>Defense: ${defense}</p>`),
		$("#blastoiseInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}</p>`),
		$("#blastoisePhoto").append(`<img src = "${frontImage}">`),
		$("#blastoisePhoto").append(`<img src = "${backImage}">`)

	let blastoise = new Pokemon(hp, attack, defense, abilities1, abilities2)
	// console.log(blastoise)
	batman.addPokemon(blastoise)
	// console.log(batman)
	console.log(blastoise.hp, attack, defense, abilities1, abilities2)

	},
	error: function(err) {
		console.log('error:' + err)
	}
});



       

