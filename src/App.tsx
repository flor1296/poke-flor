import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Pokemons from './pages/Pokemons';
import PokemonDetail from './pages/PokemonDetail';
import Items from './pages/Items';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Pokemons />}></Route>
        <Route path="/pokemons" element={<Pokemons />}></Route>
        <Route path="/pokemons/:name" element={<PokemonDetail />}></Route>
        <Route path="/pokemons/items" element={<Items />}></Route>
        </Routes>
      </div>
   </Router>
  );
}

export default App;