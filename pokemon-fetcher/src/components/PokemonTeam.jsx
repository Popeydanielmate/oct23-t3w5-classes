

import React from "react";

export default class PokemonTeam extends React.Component{
    constructor(props){
		super(props);

        this.state = {
            PokemonTeam: []
        }
	}

    // Get random Pokemon number

    // Make requests to PokeAPI
    // on component load

    async componentDidMount() {

        function getRandomPokemonId(){
            return Math.floor(Math.random() * 1025) + 1;
    }

        let randomNumber = getRandomPokemonId();
        console.log(randomNumber);

        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber).catch(error => {
			console.log(error);
			return error;
		});
        let data = await response.json();
		console.log(data.name);

        // Invalid way to update state:
        // this.state.pokemonTeam.push(data)
        // Valid way to update state:
        this.setState({PokemonTeam: [...this.state.PokemonTeam, data]});
    }

    
    // Store data from each request

    // Pass each data to PokemanCard components

    render() {
        return (
            <div>
                <h1>Pokemon data here</h1>

                {this.state.pokemonTeam && this.state.pokemonTeam.map((pokemon, index) => {
					return <h1 key={index}>{pokemon.name}</h1>
				})}
            </div>
        )
    }
}