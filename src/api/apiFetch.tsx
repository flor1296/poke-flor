import { formatPokemonName } from "../utils/utils";
import { Ipokemon } from "../models/pokeInterface";

export async function FetchPokemons(): Promise<Ipokemon[]> {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    if(!response.ok){
        throw new Error("failed to ftch pokemons");
    }
    const results = await response.json();

    const pokemons = results.results.map((pokemon: any)=>({
        name: pokemon.name,
        id : pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(
            pokemon.name.toLowerCase()
        )}.gif`,
    }));

    const uniquePokemon = pokemons.filter(
        (pokemon:any, index: number)=>pokemons.findIndex((other:any)=> other.id === pokemon.id) === index
    );
    return uniquePokemon;

    }


