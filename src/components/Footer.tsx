import { Link } from "react-router-dom";
import poke from "../assets/pikachu.png"
import  pup from "../assets/pointer.png"
import din from  "../assets/pokeball.png"


export default function Footer() {
  return (
    <footer className="footer"> 
      <Link className="footerLink" to="/pokemons">
        <img className="footerIcon" src={poke} alt="" />
        pokemon
      </Link>
      <Link className="footerLink" to="/pokemons">
        <img className="footerIcon" src={din} alt="" />
        Items
      </Link>
      <Link className="footerLink" to="/pokemons">
        <img className="footerIcon" src={pup} alt="" />
        Map
      </Link>
    </footer>
  )
}
