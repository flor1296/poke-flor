import {useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FetchPokemons } from "../api/apiFetch";
import { Ipokemon } from "../models/pokeInterface";
import { Loading } from "../comons/loading";
import { waitFor } from "../utils/utils";


export default function Pokemons() {
  const [loadin, setLoadin]  = useState(false);
  const [data, setData] = useState("");
  const [pokemons, setPokemon] = useState<Ipokemon[]>([]);

  useEffect(() =>{
    const fetchAllPokemons = async () => {
      setLoadin(true);
      await waitFor(1000); //Espera de 1 segundo para que se vea el loading
      const allPokemon = await FetchPokemons();
      setPokemon(allPokemon);
      setLoadin(false);
    };
    fetchAllPokemons();   
  },[]);
 
  const filterPokemons = pokemons?.slice(0,151).filter((pokemons) => {
    return pokemons.name.toLowerCase().match(data.toLowerCase());
  })

  if(loadin || !pokemons){
    return  <Loading/> 
  }

  return (
    <>
      <div className="container">
        <Header data={data} setData={setData} />
        <main className="main">
          <nav>
            {filterPokemons?.slice(0,151).map((pokemons: any) => (
              <Link 
               className="listItem"
               key={pokemons.id}
               to={`/Pokemons/${pokemons.name.toLowerCase()}`} >
              <img className="listItemIcon"
               src={pokemons.imgSrc} 
               alt={pokemons.name} />
              <div className="listItemText">
                <span>{pokemons.name}</span>
                <span>{pokemons.id}</span>
              </div>
            </Link>
            ))}
          </nav>
        </main>
        <Footer />
      </div>
    </>
  );
}
