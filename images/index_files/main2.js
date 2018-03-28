$(function() {
  // jQuery goes here...

var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1/";

var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  // Uncomment this line to fade out the red box on page load
   //$(".red-box").fadeOut(2000);

   $.getJSON(pokeapiUrl).done(function(data){

   	console.log(data);
   	$.each(data.pokemon_species, function(index, pokemon){

   		var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

   		var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));

   		//var par = $("<p>").html("Pokemon species no." + (index+1) + " is "  + name);

   		var par = $("<p>").html("Pokemon species no." + (index+1) + " is ").append(link);

   		link.click(function(event){

   			$.getJSON(pokemonByName  +  pokemon.name).done(function(details){

   				console.log(details);

   				var pokemonDiv = $("#pokemon-details");
   				pokemonDiv.empty();

             //  var titleSpan = $("#pokemon-title")
              // titleSpan.empty();

   				pokemonDiv.append("<span class="`card-title activator grey-text text-darken-4`">" + name + "<i class="material-icons right"`>close</i></span>");

   				pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
   				pokemonDiv.append("<td><img src='" + details.sprites.back_default + "'></td>");
   				pokemonDiv.append("<td><img src='" + details.sprites.front_shiny + "'></td>");
   				pokemonDiv.append("<td><img src='" + details.sprites.back_shiny + "'></td>");
   			});

   			event.preventDefault();
   		});

   		par.appendTo("#pokemon");
   	});
   }).fail(function(){
   	console.log("Request to poke api failed");
   }).always(function(){

   	console.log("poke api was successful");
   });
});