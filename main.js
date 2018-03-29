// Created a class of Trainer
class Trainer {
    constructor() {
        this.pokemon = [];
    }
//Gets pokemon based on its name along with stats
    getPokemon(name) {
        // console.log(this.pokemon)
        let found = this.pokemon.find(function(element) {
            if (element.name == name) {
                return true;
            }
        });
        // console.log(found)
        return found;
    }
//Returns pokemon with its abilities and stats
    allPokemon() {
        return this.pokemon
    }

    addPokemon(newPokemon) {
        this.pokemon.push(newPokemon);
    }
}

// My Trainer name is Batman
let batman = new Trainer(); // class

// Class Pokemon holds information
class Pokemon {
    constructor(name, hp, attack, defense, abilities1, abilities2, frontImage, backImage) {
        this.name = name;
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

let squirtleUrl = 'http://pokeapi.salestock.net/api/v2/pokemon/7/';
$.ajax({
    url: squirtleUrl,
    type: 'GET',
    success: function(data) {
        // console.log(data);
        // console.log(squirtleUrl)
        let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        hp = data.stats[5].base_stat
        attack = data.stats[4].base_stat
        defense = data.stats[3].base_stat
        abilities1 = data.abilities[0].ability.name
        abilities2 = data.abilities[1].ability.name
        frontImage = data.sprites.front_default
        backImage = data.sprites.back_default

        // Take the first letter of the name to capitalize it
        let Name = name.charAt(0).toUpperCase() + name.slice(1);

        $("#squirtleName").append(`<p>${name}</p>`),
        $("#squirtleInnerName").append(`<p>${name}</p>`),
        $("#squirtleInfo").append(`<p><p>HP: ${hp}</p><p>`),
        $("#squirtleInfo").append(`<p>Attack: ${attack}</p>`),
        $("#squirtleInfo").append(`<p>Defense: ${defense}</p>`),
        $("#squirtleInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}</p>`),
        $("#squirtleFrontPhoto").append(`<img src = "${frontImage}">`),
        $("#squirtleBackPhoto").append(`<img src = "${backImage}">`)

        let squirtle = new Pokemon(name, hp, attack, defense, abilities1, abilities2)

        batman.addPokemon(squirtle);
        console.log(name, squirtle.hp, attack, defense, abilities1, abilities2)
    },
    error: function(err) {
        console.log('error:' + err)
    },
    complete: function() {
        // console.log(batman.pokemon[0].hp + attack + defense + abilities1 + abilities2)
    }
});

console.log(batman)
batman.pokemon[0]

// WARTORTLE

let wartortleUrl = 'http://pokeapi.salestock.net/api/v2/pokemon/8/';
$.ajax({
    url: wartortleUrl,
    type: 'GET',
    success: function(data) {
        console.log(data);
        console.log(wartortleUrl)
        let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        hp = data.stats[5].base_stat
        attack = data.stats[4].base_stat
        defense = data.stats[3].base_stat
        abilities1 = data.abilities[0].ability.name
        // data.abilities.forEach(function(item){})
        abilities2 = data.abilities[1].ability.name
        frontImage = data.sprites.front_default
        backImage = data.sprites.back_default

        $("#wartortleName").append(`<p>${name}</p>`),
            $("#wartortleInnerName").append(`<p>${name}</p>`),
            $("#wartortleInfo").append(`<p><p>HP: ${hp}</p></p>`),
            $("#wartortleInfo").append(`<p>Attack: ${attack}</p>`),
            $("#wartortleInfo").append(`<p>Defense: ${defense}</p>`),
            $("#wartortleInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}</p>`),
            $("#wartortleFrontPhoto").append(`<img src = "${frontImage}">`),
            $("#wartortleBackPhoto").append(`<img src = "${backImage}">`)

        let wartortle = new Pokemon(name, hp, attack, defense, abilities1, abilities2)
        
        batman.addPokemon(wartortle)
        console.log(wartortle.hp, attack, defense, abilities1, abilities2)

    },
    error: function(err) {
        console.log('error:' + err)
    }
});

// BLASTOISE

let blastoiseUrl = 'http://pokeapi.salestock.net/api/v2/pokemon/9/';
$.ajax({
    url: blastoiseUrl,
    type: 'GET',
    success: function(data) {
        console.log(data);
        console.log(blastoiseUrl)
        let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        hp = data.stats[5].base_stat
        attack = data.stats[4].base_stat
        defense = data.stats[3].base_stat
        abilities1 = data.abilities[0].ability.name
        abilities2 = data.abilities[1].ability.name
        frontImage = data.sprites.front_default
        backImage = data.sprites.back_default

        $("#blastoiseName").append(`<p>${name}</p>`),
        $("#blastoiseInnerName").append(`<p>${name}</p>`),
        $("#blastoiseInfo").append(`<p><p>HP: ${hp}</p></p>`),
        $("#blastoiseInfo").append(`<p>Attack: ${attack}</p>`),
        $("#blastoiseInfo").append(`<p>Defense: ${defense}</p>`),
        $("#blastoiseInfo").append(`<p>Abilities: ${abilities1}, ${abilities2}</p>`),
        $("#blastoiseFrontPhoto").append(`<img src = "${frontImage}">`),
        $("#blastoiseBackPhoto").append(`<img src = "${backImage}">`)

        let blastoise = new Pokemon(name, hp, attack, defense, abilities1, abilities2)
        //console.log(blastoise)
        
        batman.addPokemon(blastoise)
        //console.log(batman)
        //console.log(blastoise.hp, attack, defense, abilities1, abilities2)
    },
    error: function(err) {
        console.log('error:' + err)
    }
});

// PARALLEX

$(document).ready(function() {
    $('.parallax').parallax();
});

// MODAL

$(document).ready(function(){
    {         
    $('.modal').modal();
    $('#modal1').modal('open');
    };
 })
