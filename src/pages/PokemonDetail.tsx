import { useNavigate, useParams } from "react-router-dom";
import pokeball from '../assets/pokeball.png'
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { IpokeDetails } from "../models/pokeInterface";
import { fetchPokemon } from "../api/fetchPokemon";
import { Loading } from "../comons/loading";
import { waitFor } from "../utils/utils";


export default function PokemonDetail() {
const [loadin, setLoadin] = useState(false);
const [pokemon , setPokemon] = useState<IpokeDetails>();
const navigate = useNavigate();
const {name} = useParams()

useEffect(() => {
  async function getPokemon(){
    setLoadin(true);
    await waitFor(1000);
    const fetchedPokemon = await fetchPokemon(name as string);
    setPokemon(fetchedPokemon);
    setLoadin(false)
  }
    getPokemon();
} ,[name])

if(loadin || !pokemon){
  return  <Loading/> 
}

  return (
    <div className="contain">
      <button className="botton" onClick={() => navigate(-1)}>
        <img className="pokeImg" src={pokeball} alt="" /> Regresar
      </button>
      <div className="pokemond">
      <main className="pokemonInfo">
        <div><h2>{pokemon?.name}</h2></div>
        <div><img className="pokeInfoImg" src={pokemon?.imgSrc}alt="" /> </div>
        <div>Nro {pokemon?.id} </div>
        <div>HP: {pokemon?.hp} </div>
        <div>ATTACK: {pokemon?.attack} </div>
        <div>DEFENSE:{pokemon?.defense} </div>
      </main>
      </div>
      <Footer />
    </div>
  )
}
