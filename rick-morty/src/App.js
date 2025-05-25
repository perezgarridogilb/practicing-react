import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Character from './components/Characters';

function App() {
  const [character, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    
    setCharacters(characterApi.results);
    
  }

 console.log(character);
 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {
          character ? (
            <Character character={character} setCharacters={setCharacters}/>
          ) : (
            <>
              <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
              <button onClick={reqApi} className="btn-search">Buscar personajes</button>
            </>
          )
        }
      </header>
    </div>
  );
}

export default App;
